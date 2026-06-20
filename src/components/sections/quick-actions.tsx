import Link from 'next/link'

const actions = [
  {
    title: 'NEED TO TALK?',
    label: 'Ask Us',
    desc: 'Got questions or feedback? Find out the many ways to reach us.',
    href: '/contact',
  },
  {
    title: 'WHOLESALE',
    label: 'Become a Partner',
    desc: 'Join our network of distributors and shop owners across Lahore.',
    href: '/contact',
  },
  {
    title: 'TRACK ORDER',
    label: 'Check Status',
    desc: 'Already ordered? Track your delivery in real time.',
    href: '/track',
  },
]

export default function QuickActions() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {actions.map((a) => (
          <Link
            key={a.title}
            href={a.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary-600">
              {a.title}
            </p>
            <h3 className="mt-2 font-display text-lg font-extrabold text-dark">
              {a.label}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{a.desc}</p>
            <p className="mt-4 text-sm font-semibold text-primary-600">Read More →</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
