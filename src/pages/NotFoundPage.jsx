import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="text-center">
        <p className="text-7xl font-bold">404</p>
        <h1>Halaman tidak ditemukan</h1>
        <Link to="/">Kembali ke dashboard</Link>
      </div>
    </main>
  );
}
