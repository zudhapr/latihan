export default function Button({
  children,
  variant = 'primary',
  ...props
}) {
  const variants = {
    primary: 'bg-blue-700 text-white',
    secondary: 'bg-white text-blue-800 border',
  }

  return (
    <button
      className={`rounded-lg px-4 py-2 font-semibold ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}
