import type { NextConfig } from 'next'
import child from 'child_process'
import createMDX from '@next/mdx'

const commitHash = child.execSync('git rev-parse HEAD').toString().slice(0, 7)

const nextConfig: NextConfig = {
  env: {
    POSTHOG_KEY: 'phc_ud04WaFNuxOtejrk46l7krHw1phHkZxSPTa4nPRvPki',
    POSTHOG_HOST: 'https://us.i.posthog.com',
    APP_NAME: 'fly-clean',
    APP_VERSION: commitHash,
  },
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX()

export default withMDX(nextConfig)
