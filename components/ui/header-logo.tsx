import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'

export default function HeaderLogo() {
  return (
    <Link className="block group" href="/" aria-label="SRMLabs">
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-indigo-500" d="M13.853 18.14 1 10.643 31 1l-.019.058z" />
        <path className="fill-indigo-300" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z" />
      </svg>
    </Link>
  )
}
