export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {year} Family Pest Control. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#why-us" className="hover:text-white">Why Us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
