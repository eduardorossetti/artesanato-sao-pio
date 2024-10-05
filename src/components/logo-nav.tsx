import Image from 'next/image'
import image from '../assets/img/logo.ico'

export function LogoNav() {
  return (
    <Image
      priority
      className="inline"
      src={image.src}
      width={image.width}
      height={image.height}
      style={{ width: 'auto', height: '4rem' }}
      alt="Logo"
    />
  )
}
