import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  href: string
  name: string
  description: string
  price: string
  imageUrl: string
}

export default function ServiceCard({
  href,
  name,
  description,
  price,
  imageUrl,
}: ServiceCardProps) {
  return (
    <Link
      className="transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
      href={href}
    >
      <div className="relative h-48">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <p className="text-primary">{price}</p>
      </div>
    </Link>
  )
}
