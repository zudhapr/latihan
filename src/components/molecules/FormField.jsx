import Input from '../atoms/Input'

export default function FormField({ label, error, ...props }) {
  return (
    <label className="grid gap-2">
      <span className="font-medium text-slate-700">{label}</span>
      <Input {...props} />
      {error && <small className="text-red-600">{error}</small>}
    </label>
  )
}
