import { CheckCircle2, Leaf, Handshake, Clock } from 'lucide-react'

const points = [
  { icon: CheckCircle2, title: 'Proven Results', desc: 'Thorough inspections and solutions that last.' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'Pet and kid-safe products with targeted application.' },
  { icon: Handshake, title: 'Family-Owned', desc: 'Honest pricing and service you can trust.' },
  { icon: Clock, title: 'Fast Response', desc: 'Same-day and next-day appointments available.' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Families Choose Us</h2>
            <p className="text-slate-700 mb-6">We treat your home like our own. Every service is backed by our satisfaction guarantee and performed by friendly, trained technicians.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-emerald-100">
                  <p.icon className="w-5 h-5 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{p.title}</h3>
                    <p className="text-slate-600 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-emerald-100 shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1599463698367-11cb72775b67?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWNobmljaWFuJTIwcHJvdmlkaW5nJTIwZnJpZW5kbHklMjBzZXJ2aWNlfGVufDB8MHx8fDE3NjM3OTExNjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Technician providing friendly service" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
