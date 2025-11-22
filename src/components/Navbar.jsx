import { useState } from 'react'
import { Menu, Phone, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <ShieldCheck className="w-7 h-7 text-emerald-600" />
          <span className="font-bold text-slate-800 text-lg">Family Pest Control</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-700 hover:text-emerald-600 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors">
          <Phone className="w-4 h-4" />
          Get a Quote
        </a>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu className="w-6 h-6 text-slate-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700 hover:text-emerald-600">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md">
              <Phone className="w-4 h-4" />
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
