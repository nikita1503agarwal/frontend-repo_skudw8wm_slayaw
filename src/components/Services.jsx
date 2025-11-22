import { Bug, Shield, SprayCan, Spider, Squirrel, Tent } from 'lucide-react'

const services = [
  {
    id: 'ants',
    name: 'Ant Control',
    description: 'Targeted treatments to eliminate colonies and prevent future infestations.',
    icon: Bug,
  },
  {
    id: 'rodents',
    name: 'Rodent Control',
    description: 'Exclusion, trapping, and prevention plans for mice and rats.',
    icon: Squirrel,
  },
  {
    id: 'spiders',
    name: 'Spider Treatment',
    description: 'Reduce spider populations and remove webs inside and outside.',
    icon: Spider,
  },
  {
    id: 'wasps',
    name: 'Wasp & Hornet Removal',
    description: 'Safe nest removal and perimeter protection to keep stinging insects away.',
    icon: SprayCan,
  },
  {
    id: 'termites',
    name: 'Termite Protection',
    description: 'Inspections and long-lasting protection for your home’s structure.',
    icon: Tent,
  },
  {
    id: 'general',
    name: 'Quarterly Home Protection',
    description: 'Seasonal exterior treatments with free re-service between visits.',
    icon: Shield,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Pest Control Services</h2>
          <p className="text-slate-600">Fast, safe, and effective solutions tailored to your home or business.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className="p-6 rounded-xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{s.name}</h3>
              <p className="text-slate-600 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
