import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    service: 'General Pest Control',
    message: '',
    zip_code: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ type: 'success', message: 'Thanks! We\'ll reach out shortly.' })
      setForm({ first_name: '', last_name: '', email: '', phone: '', service: 'General Pest Control', message: '', zip_code: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Get a Free Quote</h2>
            <p className="text-slate-700 mb-6">Tell us about your pest issue and we\'ll call you with pricing and availability.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First name</label>
                  <input value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} required className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last name</label>
                  <input value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} required className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    {['General Pest Control','Ant Control','Rodent Control','Spider Treatment','Wasp & Hornet Removal','Termite Protection'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">ZIP code</label>
                  <input value={form.zip_code} onChange={(e) => setForm({ ...form, zip_code: e.target.value })} className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Details</label>
                <textarea rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>

              <button disabled={loading} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md font-medium">
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                Request Quote
              </button>

              {status && (
                <p className={`text-sm ${status.type === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>{status.message}</p>
              )}
            </form>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-emerald-600"/> <div><div className="font-semibold">Call us</div><a href="tel:+15551234567" className="text-emerald-700">(555) 123-4567</a></div></div>
              <div className="flex items-start gap-3"><Mail className="w-5 h-5 text-emerald-600"/> <div><div className="font-semibold">Email</div><a href="mailto:info@familypestcontrol.com" className="text-emerald-700">info@familypestcontrol.com</a></div></div>
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-emerald-600"/> <div><div className="font-semibold">Service Area</div><div>Serving your local neighborhoods</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
