import AdminLayout from '../layouts/AdminLayout'
export default function CoursesPage() {
  return (
    <AdminLayout title="Mata Kuliah">
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">
        Mata Kuliah
      </h1>
      <p>Pilih mata kuliah untuk melihat detail.</p>
    </section>
    </AdminLayout>
  );
}
