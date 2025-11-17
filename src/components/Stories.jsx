export default function Stories() {
  const stories = [
    {
      name: 'Ava — Class of 2019',
      role: 'Product Manager at FinTechCo',
      quote: 'I found an alum mentor who guided my switch from data science to product. Three months later, I landed the role of my dreams.'
    },
    {
      name: 'Noah — Class of 2016',
      role: 'Software Engineer at CloudHub',
      quote: 'The alumni group introduced me to a founder I now work with. The connections here are real and generous.'
    },
    {
      name: 'Maya — Class of 2021',
      role: 'Founder, EcoStart',
      quote: 'Met my cofounder at a regional alumni event. We raised our seed round through alumni angels on the platform.'
    }
  ]

  return (
    <section id="stories" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Real outcomes from real connections</h2>
          <p className="mt-3 text-gray-600">A community that opens doors, shares wisdom, and pays it forward.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="p-6 rounded-2xl bg-white ring-1 ring-black/10">
              <p className="text-gray-700">“{s.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">{s.name}</p>
                <p className="text-sm text-gray-600">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
