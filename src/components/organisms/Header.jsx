import Button from '../atoms/Button'

export default function Header({ title }) {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4">
      <h1 className="text-2xl font-bold text-blue-950">{title}</h1>
      <Button variant="secondary">Keluar</Button>
    </header>
  )
}
