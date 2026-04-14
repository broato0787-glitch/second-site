import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">SWESCO MACHINE BOYS</h3>
            <p className="text-gray-300 text-sm">
              Supporting youth talent through instrumental performance and cultural celebration.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-300 hover:text-white transition">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Club Info</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Location: Swedru Secondary Campus</li>
              <li>Email: broato0787@gmail.com</li>
              <li>Phone: +233 20 572 8268</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          &copy; 2026 SWESCO MACHINE BOYS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
