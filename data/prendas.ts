export type Estado = "disponible" | "agotado" | "archivado";

export type Prenda = {
  slug: string;
  nombre: string;
  precio: number;
  estado: Estado;
  };

export const prendas: Prenda[] = [
  { slug: "playera-oversize-negra", nombre: "Playera oversize negra", precio: 450, estado: "disponible"},
  { slug: "chamarra-denim", nombre: "Chamarra denim", precio: 950, estado: "archivado"},
  { slug: "gorra-bordada", nombre: "Gorra bordada", precio: 300, estado: "agotado" },
];