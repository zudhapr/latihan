export default function StatCard({ label, value }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <strong className="mt-2 block text-3xl text-blue-900">
        {value}
      </strong>
    </article>
  )
}
