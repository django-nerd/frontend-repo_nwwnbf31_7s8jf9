import { Handshake, GraduationCap, Briefcase, MessageSquareHeart } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Mentor matching',
    desc: 'Pair with alumni mentors based on goals, interests, and skills.'
  },
  {
    icon: Briefcase,
    title: 'Career opportunities',
    desc: 'Discover internships, referrals, and job postings shared by alumni.'
  },
  {
    icon: Handshake,
    title: 'Groups & chapters',
    desc: 'Join regional and interest-based groups across your alumni community.'
  },
  {
    icon: MessageSquareHeart,
    title: 'Messaging & events',
    desc: 'Connect 1:1, join events, and grow relationships with real impact.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Built for students and alumni</h2>
          <p className="mt-3 text-gray-600">Everything you need to build a strong, helpful community around your alma mater.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl ring-1 ring-black/10 hover:shadow-lg transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
