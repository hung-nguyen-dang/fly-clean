'use client'

export interface YouTubeProps {
  title: string
  uid: string
  height?: number
  width?: number
}

export default function YouTube(props: YouTubeProps) {
  const { title, uid, height = 315, width = 560 } = props

  return (
    <div className="">
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${uid}`}
        title={title}
        allowFullScreen
      />
    </div>
  )
}
