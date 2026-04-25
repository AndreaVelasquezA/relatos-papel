const descriptions = [
  "Una novela envolvente llena de misterio, emociones profundas y giros inesperados. A medida que la historia avanza, los protagonistas deberán enfrentar secretos ocultos que cambiarán para siempre su destino. Con una narrativa intensa y personajes memorables, este libro logra atrapar al lector desde las primeras páginas.",

  "Una historia intensa que explora el pasado y sus consecuencias en el presente. Entre recuerdos olvidados y decisiones difíciles, los personajes se ven obligados a confrontar verdades que creían enterradas. Una obra emocional y profunda que mezcla drama, suspenso y reflexión.",

  "Un viaje fascinante donde nada es lo que parece. Cada capítulo revela nuevas pistas y situaciones inesperadas que mantienen la tensión constante. La historia combina aventura, misterio y emociones humanas de una manera cautivadora.",

  "Una trama cautivadora que mezcla drama, amor y secretos ocultos. Los protagonistas se enfrentarán a desafíos que pondrán a prueba su confianza y su capacidad para seguir adelante. Una lectura absorbente y llena de emociones.",

  "Una aventura literaria que te atrapará desde la primera página. El relato se desarrolla en un universo lleno de detalles, personajes complejos y decisiones que cambian el rumbo de la historia. Perfecta para quienes disfrutan de narrativas intensas.",

  "Relatos entrelazados que construyen una historia inolvidable. Cada personaje aporta una pieza clave a una trama llena de emociones, tensión y descubrimientos sorprendentes. Una novela cuidadosamente construida y difícil de olvidar.",

  "Un thriller emocional que mantiene la tensión hasta el final. Con una atmósfera oscura y personajes llenos de matices, esta obra logra transmitir misterio y emoción en cada capítulo.",

  "Una obra que combina imaginación, suspenso y personajes memorables. La narrativa logra equilibrar momentos emotivos con escenas llenas de acción y tensión psicológica.",

  "Una narrativa profunda sobre decisiones y destino. El autor explora las consecuencias de cada elección mientras desarrolla una historia cargada de emoción y giros inesperados.",

  "Un libro que te hará cuestionar la realidad y el tiempo. A través de una historia intrigante y llena de simbolismo, el lector descubrirá secretos que cambian completamente la percepción de los acontecimientos.",
];

const reviewPool = [
  {
    user: "María González",
    rating: 5,
    comment:
      "Una lectura absolutamente atrapante. Los personajes tienen mucha profundidad y la historia mantiene el interés hasta el final.",
  },

  {
    user: "Carlos Ramírez",
    rating: 4,
    comment:
      "Me sorprendió la forma en que el autor desarrolla la trama. Tiene momentos muy emocionantes y reflexivos.",
  },

  {
    user: "Laura Méndez",
    rating: 5,
    comment:
      "Excelente narrativa y ritmo. Ideal para quienes disfrutan de novelas llenas de misterio y tensión.",
  },

  {
    user: "Andrés Torres",
    rating: 4,
    comment:
      "Los giros argumentales son muy buenos y hacen que quieras seguir leyendo sin parar.",
  },

  {
    user: "Sofía Herrera",
    rating: 5,
    comment:
      "Una historia emotiva y muy bien escrita. El final fue inesperado y memorable.",
  },

  {
    user: "Miguel Castro",
    rating: 4,
    comment:
      "Gran construcción de personajes y escenarios. Se siente muy cinematográfica.",
  },

  {
    user: "Valentina Ruiz",
    rating: 5,
    comment:
      "Me encantó la ambientación del libro. Tiene una mezcla perfecta entre drama y suspenso.",
  },

  {
    user: "Juan Esteban",
    rating: 4,
    comment:
      "Una novela muy entretenida que logra conectar emocionalmente con el lector.",
  },

  {
    user: "Natalia Gómez",
    rating: 5,
    comment:
      "El desarrollo de la historia es sólido y mantiene una excelente calidad durante todo el libro.",
  },

  {
    user: "Felipe Martínez",
    rating: 4,
    comment:
      "Definitivamente uno de los libros más interesantes que he leído recientemente.",
  },
];

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

const books = [
  {
    id: 1,
    title: "El susurro del viento 1",
    author: "Ana Torres",
    description: descriptions[0],

    reviews: [
      reviewPool[0],
      reviewPool[3],
      reviewPool[6],
    ],

    price: 45000,
    stock: 8,
    image:
      "https://picsum.photos/seed/library1/300/450",
    rating: "4.5",
  },

  {
    id: 2,
    title: "Sombras del pasado 2",
    author: "Carlos Ruiz",
    description: descriptions[1],

    reviews: [
      reviewPool[1],
      reviewPool[4],
    ],

    price: 52000,
    stock: 5,
    image:
      "https://picsum.photos/seed/books2/300/450",
    rating: "4.1",
  },

  {
    id: 3,
    title: "El eco de la noche 3",
    author: "Laura Méndez",
    description: descriptions[2],

    reviews: [
      reviewPool[2],
      reviewPool[5],
      reviewPool[8],
    ],

    price: 39000,
    stock: 12,
    image:
      "https://picsum.photos/seed/novel3/300/450",
    rating: "4.8",
  },

  {
    id: 4,
    title: "Caminos olvidados 4",
    author: "Javier Castillo",
    description: descriptions[3],

    reviews: [
      reviewPool[3],
      reviewPool[7],
    ],

    price: 61000,
    stock: 4,
    image:
      "https://picsum.photos/seed/literature4/300/450",
    rating: "4.3",
  },

  {
    id: 5,
    title: "La última página 5",
    author: "Sofía Ramírez",
    description: descriptions[4],

    reviews: [
      reviewPool[4],
      reviewPool[9],
    ],

    price: 47000,
    stock: 9,
    image:
      "https://picsum.photos/seed/fantasy5/300/450",
    rating: "4.6",
  },

  {
    id: 6,
    title: "El guardián del tiempo 6",
    author: "Daniel Ortega",
    description: descriptions[5],

    reviews: [
      reviewPool[5],
      reviewPool[2],
      reviewPool[0],
    ],

    price: 55000,
    stock: 7,
    image:
      "https://picsum.photos/seed/mystery6/300/450",
    rating: "4.7",
  },

  {
    id: 7,
    title: "Secretos en la niebla 7",
    author: "Lucía Gómez",
    description: descriptions[6],

    reviews: [
      reviewPool[6],
      reviewPool[1],
    ],

    price: 49000,
    stock: 3,
    image:
      "https://picsum.photos/seed/reading7/300/450",
    rating: "4.0",
  },

  {
    id: 8,
    title: "Voces del silencio 8",
    author: "Miguel Ángel",
    description: descriptions[7],

    reviews: [
      reviewPool[7],
      reviewPool[4],
      reviewPool[8],
    ],

    price: 58000,
    stock: 11,
    image:
      "https://picsum.photos/seed/bookshelf8/300/450",
    rating: "4.9",
  },

  {
    id: 9,
    title: "La biblioteca infinita 9",
    author: "Ana Torres",
    description: descriptions[8],

    reviews: [
      reviewPool[8],
      reviewPool[2],
    ],

    price: 42000,
    stock: 6,
    image:
      "https://picsum.photos/seed/oldbook9/300/450",
    rating: "4.2",
  },

  {
    id: 10,
    title: "El código perdido 10",
    author: "Carlos Ruiz",
    description: descriptions[9],

    reviews: [
      reviewPool[9],
      reviewPool[5],
      reviewPool[1],
    ],

    price: 70000,
    stock: 10,
    image:
      "https://picsum.photos/seed/bookstore10/300/450",
    rating: "4.4",
  },

  // GENERADOS
  ...Array.from({ length: 90 }, (_, i) => ({
    id: i + 11,

    title:
      titles[i % titles.length] +
      ` ${i + 11}`,

    author:
      authors[i % authors.length],

    description:
      descriptions[i % descriptions.length],

    reviews: [
      reviewPool[
        i % reviewPool.length
      ],

      reviewPool[
        (i + 3) % reviewPool.length
      ],

      ...(i % 2 === 0
        ? [
            reviewPool[
              (i + 6) %
                reviewPool.length
            ],
          ]
        : []),
    ],

    price:
      25000 + ((i * 3791) % 60000),

    stock: (i % 15) + 1,

    image: `https://picsum.photos/seed/book${
      i + 11
    }/300/450`,

    rating: (
      4 +
      ((i % 10) * 0.1)
    ).toFixed(1),
  })),
];

export default books;