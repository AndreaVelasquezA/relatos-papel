const titles = [
  "El susurro del viento",
  "Sombras del pasado",
  "El eco de la noche",
  "Caminos olvidados",
  "La última página",
  "El guardián del tiempo",
  "Secretos en la niebla",
  "Voces del silencio",
  "La biblioteca infinita",
  "El código perdido",
];

const authors = [
  "Ana Torres",
  "Carlos Ruiz",
  "Laura Méndez",
  "Javier Castillo",
  "Sofía Ramírez",
  "Daniel Ortega",
  "Lucía Gómez",
  "Miguel Ángel",
];

const descriptions = [
  "Una novela envolvente llena de misterio, emociones profundas y giros inesperados.",
  "Una historia intensa que explora el pasado y sus consecuencias en el presente.",
  "Un viaje fascinante donde nada es lo que parece.",
  "Una trama cautivadora que mezcla drama, amor y secretos ocultos.",
  "Una aventura literaria que te atrapará desde la primera página.",
  "Relatos entrelazados que construyen una historia inolvidable.",
  "Un thriller emocional que mantiene la tensión hasta el final.",
  "Una obra que combina imaginación, suspenso y personajes memorables.",
  "Una narrativa profunda sobre decisiones y destino.",
  "Un libro que te hará cuestionar la realidad y el tiempo.",
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateBooks(count = 100) {
  return Array.from({ length: count }, (_, i) => {
    return {
      id: i + 1,
      title: `${getRandom(titles)} ${i + 1}`,
      author: getRandom(authors),
      description: getRandom(descriptions),
      price: Math.floor(Math.random() * 80000) + 20000,
      image: `https://picsum.photos/200/300?random=${i + 1}`,
      rating: (Math.random() * 2 + 3).toFixed(1), // ⭐ entre 3.0 y 5.0
    };
  });
}

const books = generateBooks(100);

export default books;