import AdminLayout from '../layouts/AdminLayout'
import StatCard from '../components/molecules/Statcard'
const stats = [
  { label: 'Kursus', value: 12 },
  { label: 'Mahasiswa', value: 248 },
  { label: 'Tugas', value: 36 },
]

export default function DashboardPage() {
  return (
    
<AdminLayout title="Dashboard">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => <StatCard key={item.label} {...item} />)}
      </section>
      </AdminLayout>
  )
}
