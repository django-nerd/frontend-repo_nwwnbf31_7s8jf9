export default function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold">Bring AlumniConnect to your campus</h2>
          <p className="mt-3 text-blue-100">Be the catalyst for mentorship and opportunity. Start a chapter or request a demo for your alumni office.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid sm:grid-cols-3 gap-3">
            <input required type="text" placeholder="Your name" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none" />
            <input required type="email" placeholder="Email" className="col-span-1 sm:col-span-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none" />
            <button className="col-span-1 sm:col-span-1 bg-white text-blue-700 font-semibold px-4 py-3 rounded-lg hover:bg-blue-50 transition">Request demo</button>
          </form>
          <p className="mt-3 text-sm text-blue-100">No spam. We’ll get back within 2 business days.</p>
        </div>
      </div>
    </section>
  )
}
