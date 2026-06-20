const steps = [
  { num: 1, title: 'Place Order', desc: 'Online, WhatsApp, or call us' },
  { num: 2, title: 'Confirmed', desc: 'Instant SMS & call confirmation' },
  { num: 3, title: 'Dispatched', desc: 'Driver assigned and en route' },
  { num: 4, title: 'Delivered', desc: 'Fresh water at your doorstep' },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-600">
          Delivery process
        </p>
        <h2 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">
          How it works
        </h2>

        <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.num}
              className="rounded-2xl border border-slate-200 bg-brand-bg p-5 text-center"
            >
              <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 font-display text-sm font-extrabold text-white">
                {step.num}
              </div>
              <h3 className="mb-1 text-sm font-bold text-dark">{step.title}</h3>
              <p className="text-xs leading-relaxed text-slate-500">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
