import { render, screen, fireEvent } from '@testing-library/react'
import Footer from './footer'
import { describe, it, expect, vi } from 'vitest'

import posthog from 'posthog-js'

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />)

    expect(screen.getByText('Fly Clean')).toBeInTheDocument()
    expect(
      screen.getByText('Dịch vụ vệ sinh chuyên nghiệp, nhanh chóng, đáng tin cậy và phù hợp với nhu cầu của bạn.')
    ).toBeInTheDocument()
    expect(screen.getByText('Thông tin liên hệ')).toBeInTheDocument()
    expect(screen.getByText('TP.Hồ Chí Minh, Việt Nam')).toBeInTheDocument()
    expect(screen.getByText('0906.865.780')).toBeInTheDocument()
    expect(screen.getByText(`© ${new Date().getFullYear()} Fly Clean`)).toBeInTheDocument()
  })

  it('handles click events correctly', () => {
    const handleTrackCta = vi.fn()
    vi.spyOn(posthog, 'capture').mockImplementation(handleTrackCta)

    render(<Footer />)

    fireEvent.click(screen.getByText('0906.865.780'))
    expect(handleTrackCta).toHaveBeenCalledWith('contact_us_clicked', { ctaType: 'footer' })
  })
})
