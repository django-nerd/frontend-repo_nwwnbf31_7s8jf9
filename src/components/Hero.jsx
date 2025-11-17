import { ArrowRight, Users2, Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">
              <Rocket className="h-3.5 w-3.5" />
              New: Mentorship matches open for Fall cohort
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Reconnect. Mentor. Grow your alumni network.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              AlumniConnect helps students and alumni find mentors, discover opportunities, and build meaningful professional relationships.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition">
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-gray-900 font-medium ring-1 ring-black/10 hover:bg-gray-50 transition">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
              <Users2 className="h-4 w-4 text-blue-600" />
              <span>Trusted by 12,000+ alumni across 120 universities</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop"
              alt="Networking"
              className="rounded-2xl shadow-2xl ring-1 ring-black/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
