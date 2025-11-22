import { ShieldCheck, Leaf, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-emerald-200 text-emerald-700 text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              Family-owned • Eco-friendly • Guaranteed
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Keep pests out. Keep family safe.
            </h1>
            <p className="text-lg text-slate-700 mb-6">
              Trusted local pest control with safe, effective treatments for homes and small businesses. Fast response, honest pricing, and friendly service—just like family.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md font-medium shadow-sm transition-colors">
                Get a Free Quote
              </a>
              <a href="#services" className="inline-flex justify-center items-center bg-white hover:bg-slate-50 text-slate-700 px-5 py-3 rounded-md font-medium shadow-sm ring-1 ring-slate-200">
                View Services
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600"/> 100% Satisfaction</div>
              <div className="flex items-center gap-2"><Leaf className="w-4 h-4 text-emerald-600"/> Pet & kid safe</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1674485135526-b5a686b33dfe?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWNobmljaWFuJTIwc3ByYXlpbmclMjBleHRlcmlvciUyMG9mfGVufDB8MHx8fDE3NjM3OTExNjN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Technician spraying exterior of a home" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
