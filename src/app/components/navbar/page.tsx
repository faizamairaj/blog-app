
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-4xl text-blue-900 font-bold font-serif cursor-pointer">
              BLOG
            </h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLinks />
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks() {
  const linkClass = 'text-blue-900 font-serif font-bold hover:text-blue-500 block px-3 py-2 rounded-md text-base md:text-2xl text-xl font-semibold'

  return (
    <>
      <Link href="/" className={linkClass}>
        Home
      </Link>
      <Link href="/blog" className={linkClass}>
        Blog
      </Link>
    </>
  )
}