import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold">Nombre de la marca</h1>
      <p className="text-lg">Ropa disponible y un archivo de lo que ya salió.</p>
      <nav className="flex gap-4">
        <Link href="/tienda" className="rounded border px-4 py-2">Tienda</Link>
        <Link href="/archivo" className="rounded border px-4 py-2">Archivo</Link>
      </nav>
    </main>
  );
}