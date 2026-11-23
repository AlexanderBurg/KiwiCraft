import { prendas } from "@/data/prendas";

export default function Tienda() {
  const disponibles = prendas.filter((p) => p.estado === "disponible");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Tienda</h1>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {disponibles.map((p) => (
          <li key={p.slug} className="rounded border p-4">
            <h2 className="font-semibold">{p.nombre}</h2>
            <p>${p.precio} MXN</p>
          </li>
        ))}
      </ul>
    </main>
  );
}