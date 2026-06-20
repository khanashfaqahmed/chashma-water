const reviews = [
  {
    text: 'Best water delivery in Lahore. Always on time, very professional. My whole office switched to Chashma Water.',
    name: 'Ahmad Malik',
    location: 'DHA Phase 5, Lahore',
    initials: 'AM',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    text: 'Monthly subscription is amazing value. They never miss a delivery. Highly recommend for families!',
    name: 'Sana Riaz',
    location: 'Gulberg III, Lahore',
    initials: 'SR',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    text: 'Quick delivery, great quality water. The WhatsApp ordering is super convenient. Will keep ordering.',
    name: 'Kamran Aslam',
    location: 'Johar Town, Lahore',
    initials: 'KA',
    color: 'bg-rose-100 text-rose-700',
  },
]

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-widest text-primary-600">
        Reviews
      </p>
      <h2 className="font-display text-2xl font-extrabold text-dark sm:text-3xl">
        What our customers say
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="mb-2 text-amber-400" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <p className="mb-4 text-sm italic leading-relaxed text-dark">
              &quot;{review.text}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${review.color}`}
                aria-hidden="true"
              >
                {review.initials}
              </div>
              <div>
                <p className="text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-slate-500">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
