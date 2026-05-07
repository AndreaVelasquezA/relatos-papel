const books = [
  {
    id: 1,
    title: "El jardín de las mariposas negras",
    author: "Valentina Serrano",
    description: "En un pequeño pueblo olvidado, una joven descubre un jardín prohibido donde las mariposas guardan los secretos de los muertos. Una historia de amor, pérdida y redención que cambiará su vida para siempre.",
    reviews: [
      { user: "María González", rating: 5, comment: "Una lectura absolutamente atrapante. Los personajes tienen mucha profundidad y la historia mantiene el interés hasta el final." },
      { user: "Andrés Torres", rating: 4, comment: "Los giros argumentales son muy buenos y hacen que quieras seguir leyendo sin parar." }
    ],
    price: 48900,
    stock: 12,
    image: "https://picsum.photos/seed/jardinmariposas/300/450",
    rating: "4.7"
  },
  {
    id: 2,
    title: "El último faro del sur",
    author: "Sebastián Mendoza",
    description: "Un farero solitario, una tormenta eterna y un secreto hundido en el océano. Esta novela explora los límites de la soledad y la esperanza en un mundo donde la luz siempre lucha contra la oscuridad.",
    reviews: [
      { user: "Carlos Ramírez", rating: 4, comment: "Me sorprendió la forma en que el autor desarrolla la trama. Tiene momentos muy emocionantes y reflexivos." },
      { user: "Sofía Herrera", rating: 5, comment: "Una historia emotiva y muy bien escrita. El final fue inesperado y memorable." }
    ],
    price: 52300,
    stock: 7,
    image: "https://picsum.photos/seed/ultimofaro/300/450",
    rating: "4.5"
  },
  {
    id: 3,
    title: "Los días que no existimos",
    author: "Camila Fuentes",
    description: "Dos hermanos separados por una guerra encuentran un diario mágico que les permite hablar a través del tiempo. Una conmovedora historia sobre la memoria, el perdón y las segundas oportunidades.",
    reviews: [
      { user: "Laura Méndez", rating: 5, comment: "Excelente narrativa y ritmo. Ideal para quienes disfrutan de novelas llenas de misterio y tensión." },
      { user: "Miguel Castro", rating: 4, comment: "Gran construcción de personajes y escenarios. Se siente muy cinematográfica." }
    ],
    price: 45700,
    stock: 15,
    image: "https://picsum.photos/seed/diasnoexistentes/300/450",
    rating: "4.8"
  },
  {
    id: 4,
    title: "La sombra del arquitecto",
    author: "Javier Beltrán",
    description: "Un arquitecto obsesionado con la perfección construye una ciudad subterránea. Pero algo habita en sus túneles. Thriller psicológico que combina arquitectura, locura y horror cósmico.",
    reviews: [
      { user: "Andrés Torres", rating: 4, comment: "Los giros argumentales son muy buenos y hacen que quieras seguir leyendo sin parar." },
      { user: "Juan Esteban", rating: 4, comment: "Una novela muy entretenida que logra conectar emocionalmente con el lector." },
      { user: "Valentina Ruiz", rating: 5, comment: "Me encantó la ambientación del libro." }
    ],
    price: 61200,
    stock: 4,
    image: "https://picsum.photos/seed/sombraarquitecto/300/450",
    rating: "4.6"
  },
  {
    id: 5,
    title: "Las cartas que nunca quemé",
    author: "Isabel Paredes",
    description: "Una mujer encuentra en el desván de su abuela fallecida cien cartas de amor nunca enviadas. Decide entregarlas una por una, desatando una cadena de emociones y reencuentros inesperados.",
    reviews: [
      { user: "Sofía Herrera", rating: 5, comment: "Una historia emotiva y muy bien escrita. El final fue inesperado y memorable." },
      { user: "Felipe Martínez", rating: 4, comment: "Definitivamente uno de los libros más interesantes que he leído recientemente." }
    ],
    price: 39800,
    stock: 9,
    image: "https://picsum.photos/seed/cartasnoquemadas/300/450",
    rating: "4.9"
  },
  {
    id: 6,
    title: "El relojero de las almas",
    author: "Daniel Ortega",
    description: "En un taller escondido en Praga, un relojero fabrica relojes que miden el tiempo que le queda a cada persona. Cuando alguien intenta robarle la fórmula, se desata una persecución mágica.",
    reviews: [
      { user: "Miguel Castro", rating: 4, comment: "Gran construcción de personajes y escenarios." },
      { user: "Laura Méndez", rating: 5, comment: "Excelente narrativa y ritmo." },
      { user: "María González", rating: 5, comment: "Una lectura absolutamente atrapante." }
    ],
    price: 54900,
    stock: 6,
    image: "https://picsum.photos/seed/relojeroalmas/300/450",
    rating: "4.7"
  },
  {
    id: 7,
    title: "Huesos bajo el cemento",
    author: "Lucía Gómez",
    description: "Una periodista investiga la desaparición de tres obreros durante la construcción de un estadio. Descubre una red de corrupción, silencios cómplices y verdades que llevaban décadas enterradas.",
    reviews: [
      { user: "Valentina Ruiz", rating: 5, comment: "Me encantó la ambientación del libro." },
      { user: "Carlos Ramírez", rating: 4, comment: "Me sorprendió la forma en que el autor desarrolla la trama." }
    ],
    price: 47800,
    stock: 11,
    image: "https://picsum.photos/seed/huesoscemento/300/450",
    rating: "4.4"
  },
  {
    id: 8,
    title: "La bailarina de fuego",
    author: "Miguel Ángel",
    description: "En la Barcelona de la posguerra, una bailarina de flamenco se convierte en espía para los aliados. Novela histórica llena de pasión, peligro y música que late en cada página.",
    reviews: [
      { user: "Juan Esteban", rating: 4, comment: "Una novela muy entretenida." },
      { user: "Sofía Herrera", rating: 5, comment: "El final fue inesperado y memorable." },
      { user: "Natalia Gómez", rating: 5, comment: "Excelente calidad durante todo el libro." }
    ],
    price: 59600,
    stock: 5,
    image: "https://picsum.photos/seed/bailarinafuego/300/450",
    rating: "4.8"
  },
  {
    id: 9,
    title: "El mapa de las estrellas rotas",
    author: "Ana Torres",
    description: "Un astrónomo retirado y su nieta descubren un mapa estelar que no coincide con ningún cielo conocido. Juntos emprenderán un viaje hacia lo desconocido, enfrentando sus propios miedos.",
    reviews: [
      { user: "Natalia Gómez", rating: 5, comment: "Excelente calidad durante todo el libro." },
      { user: "Laura Méndez", rating: 5, comment: "Excelente narrativa y ritmo." }
    ],
    price: 43500,
    stock: 13,
    image: "https://picsum.photos/seed/mapaestrellasrotas/300/450",
    rating: "4.6"
  },
  {
    id: 10,
    title: "La mujer que hablaba con los trenes",
    author: "Carlos Ruiz",
    description: "Una estación abandonada, una mujer que asegura oír las voces de los pasajeros del pasado, y un cargamento perdido que podría cambiar la historia. Misterio, realismo mágico y segundas oportunidades.",
    reviews: [
      { user: "Felipe Martínez", rating: 4, comment: "Uno de los libros más interesantes." },
      { user: "Miguel Castro", rating: 4, comment: "Se siente muy cinematográfica." }
    ],
    price: 67100,
    stock: 3,
    image: "https://picsum.photos/seed/mujertrenes/300/450",
    rating: "4.5"
  },
  // ==============================================
  // Libros 11 al 100 (total 90 adicionales)
  // ==============================================
  {
    id: 11,
    title: "El susurro de los espejos",
    author: "Valentina Serrano",
    description: "Una casa antigua, siete espejos y una niña que desapareció hace treinta años. Novela gótica que explora los límites entre la realidad y el reflejo.",
    reviews: [{ user: "María González", rating: 5, comment: "Atrapante desde la primera página." }, { user: "Andrés Torres", rating: 4, comment: "Giros muy bien logrados." }],
    price: 41200,
    stock: 8,
    image: "https://picsum.photos/seed/susurroespejos/300/450",
    rating: "4.3"
  },
  {
    id: 12,
    title: "El invierno en que desapareciste",
    author: "Sebastián Mendoza",
    description: "Un pueblo nevado, una desaparición y un secreto que todos guardan. Thriller psicológico que mantiene la tensión hasta la última página.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Muy emotivo." }, { user: "Sofía Herrera", rating: 5, comment: "Memorable." }],
    price: 53400,
    stock: 10,
    image: "https://picsum.photos/seed/inviernodesapareciste/300/450",
    rating: "4.6"
  },
  {
    id: 13,
    title: "Las horas robadas",
    author: "Camila Fuentes",
    description: "Un ladrón que no roba objetos, sino minutos de vida. Hasta que conoce a alguien que no tiene tiempo que perder. Filosófico y conmovedor.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Original y profundo." }, { user: "Miguel Castro", rating: 4, comment: "Muy cinematográfico." }],
    price: 38900,
    stock: 14,
    image: "https://picsum.photos/seed/horasrobadas/300/450",
    rating: "4.7"
  },
  {
    id: 14,
    title: "El puente de los sueños olvidados",
    author: "Javier Beltrán",
    description: "Un puente abandonado donde la gente va a soñar. Pero algunos nunca despiertan. Una joven psicóloga intentará descifrar el misterio.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Absorbente." }, { user: "Juan Esteban", rating: 4, comment: "Entretenida." }],
    price: 45600,
    stock: 6,
    image: "https://picsum.photos/seed/puentesuenos/300/450",
    rating: "4.4"
  },
  {
    id: 15,
    title: "La canción del mimbre",
    author: "Isabel Paredes",
    description: "Un cestero ciego escucha en el mimbre las historias de quienes lo tocan. Cuando un asesino lo visita, deberá usar su don para atraparlo.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Inesperado." }, { user: "Felipe Martínez", rating: 4, comment: "Muy interesante." }],
    price: 50300,
    stock: 9,
    image: "https://picsum.photos/seed/cancionmimbre/300/450",
    rating: "4.8"
  },
  {
    id: 16,
    title: "El libro que no quería ser leído",
    author: "Daniel Ortega",
    description: "Un libro maldito que se reescribe solo y borra a quienes lo leen. Una bibliotecaria se enfrenta a la literatura más peligrosa jamás escrita.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Muy creativo." }, { user: "Laura Méndez", rating: 5, comment: "Atrapante." }],
    price: 57800,
    stock: 5,
    image: "https://picsum.photos/seed/libronoquerido/300/450",
    rating: "4.9"
  },
  {
    id: 17,
    title: "La huerta de las almas perdidas",
    author: "Lucía Gómez",
    description: "Una huerta donde crecen plantas que florecen solo cuando alguien muere. La dueña sabe exactamente cuándo llegará la próxima muerte.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Ambientación increíble." }, { user: "Carlos Ramírez", rating: 4, comment: "Misteriosa." }],
    price: 44700,
    stock: 12,
    image: "https://picsum.photos/seed/huertaalmas/300/450",
    rating: "4.5"
  },
  {
    id: 18,
    title: "El tren de medianoche sin destino",
    author: "Miguel Ángel",
    description: "Un tren que sale a medianoche y nunca llega. Los pasajeros no recuerdan cómo subieron. Pronto descubren que tampoco pueden bajar.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Muy original." }, { user: "Sofía Herrera", rating: 5, comment: "Adictiva." }],
    price: 62400,
    stock: 4,
    image: "https://picsum.photos/seed/trenmedianoche/300/450",
    rating: "4.7"
  },
  {
    id: 19,
    title: "El color del silencio",
    author: "Ana Torres",
    description: "Un pintor que perdió la vista pinta con los sonidos. Su obra maestra podría revelar un asesinato que nadie quiere recordar.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Excelente calidad." }, { user: "Laura Méndez", rating: 5, comment: "Narrativa perfecta." }],
    price: 39100,
    stock: 15,
    image: "https://picsum.photos/seed/colorsilencio/300/450",
    rating: "4.6"
  },
  {
    id: 20,
    title: "Las lágrimas de tinta",
    author: "Carlos Ruiz",
    description: "Una escritora descubre que sus personajes cobran vida y la demandan por el maltrato literario. Comedia negra y meta-ficción.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Divertida y original." }, { user: "Miguel Castro", rating: 4, comment: "Muy creativa." }],
    price: 46800,
    stock: 7,
    image: "https://picsum.photos/seed/lagrimastinta/300/450",
    rating: "4.4"
  },
  {
    id: 21,
    title: "El faro de los náufragos del tiempo",
    author: "Valentina Serrano",
    description: "Náufragos de diferentes épocas aparecen en una isla donde el tiempo no avanza. Juntos buscarán la forma de regresar a sus eras.",
    reviews: [{ user: "María González", rating: 5, comment: "Fascinante." }],
    price: 51200,
    stock: 3,
    image: "https://picsum.photos/seed/faronaufragos/300/450",
    rating: "4.8"
  },
  {
    id: 22,
    title: "La casa de las mil puertas",
    author: "Sebastián Mendoza",
    description: "Una casa donde cada puerta lleva a un momento crucial de tu vida. Elegir mal puede borrarte de la existencia.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Muy original." }],
    price: 55900,
    stock: 8,
    image: "https://picsum.photos/seed/casamilpuertas/300/450",
    rating: "4.6"
  },
  {
    id: 23,
    title: "El vendedor de recuerdos usados",
    author: "Camila Fuentes",
    description: "Un mercado negro de recuerdos. Compras la memoria de otro, pero también heredas sus culpas y sus deudas.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Concepto brillante." }],
    price: 48700,
    stock: 11,
    image: "https://picsum.photos/seed/vendedorrecuerdos/300/450",
    rating: "4.7"
  },
  {
    id: 24,
    title: "El niño que dibujaba monstruos reales",
    author: "Javier Beltrán",
    description: "Todo lo que dibuja un niño aparece en su habitación. Primero fueron insectos. Luego algo más grande. Ahora los monstruos son reales.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Terror psicológico puro." }],
    price: 43500,
    stock: 9,
    image: "https://picsum.photos/seed/niñomonstruos/300/450",
    rating: "4.9"
  },
  {
    id: 25,
    title: "La biblioteca de los finales felices",
    author: "Isabel Paredes",
    description: "Una biblioteca donde cada libro tiene exactamente el final que necesitas leer en ese momento. Pero alguien está cambiando los finales.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Mágica." }],
    price: 37600,
    stock: 14,
    image: "https://picsum.photos/seed/bibliofinales/300/450",
    rating: "4.5"
  },
  {
    id: 26,
    title: "El acordeonista del infierno",
    author: "Daniel Ortega",
    description: "Un músico vende su alma al diablo, pero el diablo resulta ser un mánager incompetente y el contrato tiene cláusulas absurdas.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Hilarante." }],
    price: 52300,
    stock: 5,
    image: "https://picsum.photos/seed/acordeonistainfierno/300/450",
    rating: "4.4"
  },
  {
    id: 27,
    title: "Las mujeres que sabían demasiado",
    author: "Lucía Gómez",
    description: "Un club de lectura donde las mujeres resuelven crímenes reales. Ahora una de ellas ha desaparecido y las pistas están en el libro que leían.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Adictivo." }],
    price: 49800,
    stock: 10,
    image: "https://picsum.photos/seed/mujeressabian/300/450",
    rating: "4.7"
  },
  {
    id: 28,
    title: "El último mensaje en una botella",
    author: "Miguel Ángel",
    description: "Una botella con un mensaje de 1945 llega a la playa. La respuesta desata una búsqueda de un amor que creían perdido para siempre.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Romántica y triste." }],
    price: 36400,
    stock: 12,
    image: "https://picsum.photos/seed/ultimomensaje/300/450",
    rating: "4.6"
  },
  {
    id: 29,
    title: "El restaurador de sombras",
    author: "Ana Torres",
    description: "Un restaurador de arte descubre que puede devolver la vida a las sombras de los retratos. Pero las sombras tienen sed de venganza.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Inquietante." }],
    price: 60100,
    stock: 4,
    image: "https://picsum.photos/seed/restauradorsombras/300/450",
    rating: "4.8"
  },
  {
    id: 30,
    title: "Los días que fuimos felices sin saberlo",
    author: "Carlos Ruiz",
    description: "Un hombre viaja al pasado para evitar un error, pero cada cambio empeora su presente. A veces la felicidad está en lo que no cambias.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Reflexiva." }],
    price: 44200,
    stock: 8,
    image: "https://picsum.photos/seed/diasfelices/300/450",
    rating: "4.5"
  },
  {
    id: 31,
    title: "La niña que plantaba lágrimas",
    author: "Valentina Serrano",
    description: "Una niña huérfana planta lágrimas en la tierra. Al amanecer, crecen flores que contienen los mensajes de los muertos.",
    reviews: [{ user: "María González", rating: 5, comment: "Precioso y triste." }],
    price: 41500,
    stock: 13,
    image: "https://picsum.photos/seed/plantalagrimas/300/450",
    rating: "4.9"
  },
  {
    id: 32,
    title: "El psicoanalista de los sueños ajenos",
    author: "Sebastián Mendoza",
    description: "Un psicoanalista puede entrar en los sueños de sus pacientes. Pero uno de ellos lo está esperando dentro de una pesadilla.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Thriller onírico." }],
    price: 56700,
    stock: 6,
    image: "https://picsum.photos/seed/psicoanalistasuenos/300/450",
    rating: "4.7"
  },
  {
    id: 33,
    title: "La tienda de los finales alternativos",
    author: "Camila Fuentes",
    description: "Una tienda donde puedes comprar finales alternativos para tu vida. Pero ningún final es gratis y el precio siempre duele.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Original." }],
    price: 47900,
    stock: 7,
    image: "https://picsum.photos/seed/tiendafinales/300/450",
    rating: "4.6"
  },
  {
    id: 34,
    title: "El puente del olvido",
    author: "Javier Beltrán",
    description: "Un puente donde la gente va a olvidar recuerdos dolorosos. Pero lo que olvidas no desaparece: alguien lo recoge y lo vive por ti.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Concepto fascinante." }],
    price: 53400,
    stock: 9,
    image: "https://picsum.photos/seed/puenteolvido/300/450",
    rating: "4.8"
  },
  {
    id: 35,
    title: "Los hijos de la lluvia eterna",
    author: "Isabel Paredes",
    description: "En un pueblo donde llueve sin parar desde hace cien años, dos jóvenes descubren que la lluvia guarda la memoria de los ahogados.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Poética y oscura." }],
    price: 45600,
    stock: 11,
    image: "https://picsum.photos/seed/hijoslluvia/300/450",
    rating: "4.7"
  },
  {
    id: 36,
    title: "El fotógrafo de instantes eternos",
    author: "Daniel Ortega",
    description: "Un fotógrafo que captura momentos que nunca deberían terminar. Pero detener el tiempo tiene un costo: pierdes algo más valioso.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Emotivo." }],
    price: 50800,
    stock: 5,
    image: "https://picsum.photos/seed/fotografoinstantes/300/450",
    rating: "4.5"
  },
  {
    id: 37,
    title: "El cartero que nunca entregaba malas noticias",
    author: "Lucía Gómez",
    description: "Un cartero que intercepta cartas tristes y las reescribe. Su mentira piadosa desata una revolución de esperanza y caos.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Conmovedor." }],
    price: 39200,
    stock: 14,
    image: "https://picsum.photos/seed/carteronoticias/300/450",
    rating: "4.6"
  },
  {
    id: 38,
    title: "Los músicos del silencio",
    author: "Miguel Ángel",
    description: "Una orquesta de sordos que compone la música más hermosa del mundo. Un crítico musical los descubre y su vida cambia para siempre.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Inspirador." }],
    price: 44100,
    stock: 8,
    image: "https://picsum.photos/seed/musicosilencio/300/450",
    rating: "4.7"
  },
  {
    id: 39,
    title: "El último día que fui feliz",
    author: "Ana Torres",
    description: "Un hombre que perdió la capacidad de sentir alegría emprende un viaje para recordar su último día feliz. Pero la memoria es traicionera.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Dolorosamente bello." }],
    price: 52800,
    stock: 4,
    image: "https://picsum.photos/seed/ultimodiafeliz/300/450",
    rating: "4.9"
  },
  {
    id: 40,
    title: "La fábrica de arcoíris",
    author: "Carlos Ruiz",
    description: "Una fábrica donde fabrican arcoíris a medida. Pero alguien está robando los colores y el mundo se vuelve gris.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Creativa." }],
    price: 37500,
    stock: 12,
    image: "https://picsum.photos/seed/fabricaarcoiris/300/450",
    rating: "4.4"
  },
  {
    id: 41,
    title: "El niño que leía las nubes",
    author: "Valentina Serrano",
    description: "Un niño autista lee predicciones en las formas de las nubes. Nadie le cree hasta que predice una catástrofe que nadie puede ignorar.",
    reviews: [{ user: "María González", rating: 5, comment: "Maravilloso." }],
    price: 46300,
    stock: 10,
    image: "https://picsum.photos/seed/ninonubes/300/450",
    rating: "4.8"
  },
  {
    id: 42,
    title: "La última función del teatro incendiado",
    author: "Sebastián Mendoza",
    description: "Un teatro que se quemó hace 50 años sigue dando funciones fantasma. Una actriz decide actuar para ellos una última vez.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Melancólico." }],
    price: 49700,
    stock: 6,
    image: "https://picsum.photos/seed/teatroincendiado/300/450",
    rating: "4.6"
  },
  {
    id: 43,
    title: "El último año de soledad",
    author: "Camila Fuentes",
    description: "Una mujer decide estar sola un año entero sin hablar con nadie. En ese silencio descubre voces que no sabía que llevaba dentro.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Íntimo y poderoso." }],
    price: 41900,
    stock: 15,
    image: "https://picsum.photos/seed/ultimosoledad/300/450",
    rating: "4.7"
  },
  {
    id: 44,
    title: "El puente de las mentiras piadosas",
    author: "Javier Beltrán",
    description: "Un puente donde solo puedes cruzar si dices una mentira piadosa. El problema es que las mentiras empiezan a volverse realidad.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Original e ingenioso." }],
    price: 55200,
    stock: 5,
    image: "https://picsum.photos/seed/puentementiras/300/450",
    rating: "4.5"
  },
  {
    id: 45,
    title: "La cocinera de los deseos prohibidos",
    author: "Isabel Paredes",
    description: "Una cocinera cuyos platos hacen realidad los deseos de quien los come. Pero cada deseo tiene un sabor amargo al final.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Sabroso y oscuro." }],
    price: 58600,
    stock: 3,
    image: "https://picsum.photos/seed/cocinera deseos/300/450",
    rating: "4.9"
  },
  {
    id: 46,
    title: "El reloj que se detuvo dos veces",
    author: "Daniel Ortega",
    description: "Un reloj que se detuvo el día que sus dueños murieron. Pero se volvió a detener hoy. Algo está repitiéndose.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Tenso." }],
    price: 51400,
    stock: 8,
    image: "https://picsum.photos/seed/relojdetenido/300/450",
    rating: "4.6"
  },
  {
    id: 47,
    title: "Los trenes que nunca llegaron",
    author: "Lucía Gómez",
    description: "Una estación de trenes abandonada. Cada noche, un tren fantasma lleva a los pasajeros a la estación equivocada de sus vidas.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Poético." }],
    price: 43800,
    stock: 11,
    image: "https://picsum.photos/seed/trenesnunca/300/450",
    rating: "4.7"
  },
  {
    id: 48,
    title: "El hombre que guardaba atardeceres en frascos",
    author: "Miguel Ángel",
    description: "Un anciano colecciona atardeceres en frascos. Cuando una tormenta amenaza con borrar la luz del mundo, sabe que ha llegado su momento.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Hermoso." }],
    price: 36700,
    stock: 14,
    image: "https://picsum.photos/seed/hombre atardeceres/300/450",
    rating: "4.8"
  },
  {
    id: 49,
    title: "La librera que vendía futuros",
    author: "Ana Torres",
    description: "Una librera puede ver el futuro de quien compra un libro. Pero leer tu propio futuro es la única regla prohibida.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Mágica." }],
    price: 47900,
    stock: 6,
    image: "https://picsum.photos/seed/librerafuturos/300/450",
    rating: "4.6"
  },
  {
    id: 50,
    title: "El día que los nombres volaron",
    author: "Carlos Ruiz",
    description: "Un día, todos los nombres se olvidaron. La gente tuvo que renombrarse. Algunos eligieron mal y perdieron su identidad para siempre.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Fascinante." }],
    price: 50600,
    stock: 7,
    image: "https://picsum.photos/seed/nombresvolador/300/450",
    rating: "4.7"
  },
  {
    id: 51,
    title: "Las escaleras que no llevaban a ningún lado",
    author: "Valentina Serrano",
    description: "Unas escaleras que aparecen en distintos lugares. Solo suben quienes necesitan perderse para encontrarse.",
    reviews: [{ user: "María González", rating: 5, comment: "Simbólico." }],
    price: 42100,
    stock: 10,
    image: "https://picsum.photos/seed/escalerasningunlado/300/450",
    rating: "4.5"
  },
  {
    id: 52,
    title: "El último beso antes del fin del mundo",
    author: "Sebastián Mendoza",
    description: "El mundo terminará en 24 horas. Dos desconocidos se encuentran y deciden vivir 24 vidas en un solo día.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Apretada de emociones." }],
    price: 44900,
    stock: 9,
    image: "https://picsum.photos/seed/ultimobeso/300/450",
    rating: "4.8"
  },
  {
    id: 53,
    title: "El fabricante de lluvia",
    author: "Camila Fuentes",
    description: "Un hombre puede hacer llover con su tristeza. En un pueblo en sequía, lo contratan para llorar. Pero la tristeza es más cara que el agua.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Triste y bello." }],
    price: 49300,
    stock: 5,
    image: "https://picsum.photos/seed/fabricantelluvia/300/450",
    rating: "4.7"
  },
  {
    id: 54,
    title: "El coleccionista de silencios ajenos",
    author: "Javier Beltrán",
    description: "Un hombre graba silencios. El silencio después de una discusión, el silencio de un adiós. Pero un día graba un silencio que no debería existir.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Inquietante." }],
    price: 56100,
    stock: 4,
    image: "https://picsum.photos/seed/coleccionistasilencio/300/450",
    rating: "4.6"
  },
  {
    id: 55,
    title: "La hilandera de destinos",
    author: "Isabel Paredes",
    description: "Una mujer hila los destinos de quienes aún no nacen. Pero un día se enreda en su propio hilo y descubre su propio futuro.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Fascinante." }],
    price: 52700,
    stock: 8,
    image: "https://picsum.photos/seed/hilandera destinos/300/450",
    rating: "4.9"
  },
  {
    id: 56,
    title: "Los niños que apagaban las estrellas",
    author: "Daniel Ortega",
    description: "Unos niños descubren que pueden apagar estrellas soplando. Pero cada estrella apagada borra un recuerdo de la humanidad.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Poético y triste." }],
    price: 38600,
    stock: 12,
    image: "https://picsum.photos/seed/niñosestrellas/300/450",
    rating: "4.5"
  },
  {
    id: 57,
    title: "El cementerio de las cartas no enviadas",
    author: "Lucía Gómez",
    description: "Un cementerio donde entierran cartas que nunca fueron enviadas. Un cartero fantasma las lee y trata de entregarlas después de muerto.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Conmovedor." }],
    price: 47200,
    stock: 7,
    image: "https://picsum.photos/seed/cementeriocartas/300/450",
    rating: "4.8"
  },
  {
    id: 58,
    title: "La puerta que solo se abría de noche",
    author: "Miguel Ángel",
    description: "Una puerta en mitad del bosque que solo se abre de noche. Del otro lado hay un mundo que solo existe cuando duermes.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Misteriosa." }],
    price: 54300,
    stock: 3,
    image: "https://picsum.photos/seed/puertanoche/300/450",
    rating: "4.7"
  },
  {
    id: 59,
    title: "El pintor de cielos prestados",
    author: "Ana Torres",
    description: "Un pintor que pinta cielos. Pero solo pinta cielos que ya existieron. La gente lo contrata para recordar el cielo de sus mejores días.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Nostálgico." }],
    price: 40800,
    stock: 11,
    image: "https://picsum.photos/seed/pintorcielos/300/450",
    rating: "4.6"
  },
  {
    id: 60,
    title: "El último que ríe",
    author: "Carlos Ruiz",
    description: "Un comediante que hace reír a los muertos. Su público son fantasmas que olvidaron cómo ser felices. Pero un día un fantasma le devuelve la broma.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Original." }],
    price: 51500,
    stock: 6,
    image: "https://picsum.photos/seed/ultimorie/300/450",
    rating: "4.5"
  },
  {
    id: 61,
    title: "Las sillas vacías de los que se fueron",
    author: "Valentina Serrano",
    description: "Una familia mantiene las sillas vacías de los que murieron. Un día, alguien se sienta en una de ellas y empieza a hablar.",
    reviews: [{ user: "María González", rating: 5, comment: "Emotivo." }],
    price: 46400,
    stock: 9,
    image: "https://picsum.photos/seed/sillasvacias/300/450",
    rating: "4.8"
  },
  {
    id: 62,
    title: "El río que devolvía lo robado",
    author: "Sebastián Mendoza",
    description: "Un río tiene la propiedad de devolver lo que has robado, pero cobrando un precio más alto: te quita algo que amas.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Moral y fantástico." }],
    price: 49800,
    stock: 5,
    image: "https://picsum.photos/seed/riodevuelve/300/450",
    rating: "4.6"
  },
  {
    id: 63,
    title: "La costurera de memorias rotas",
    author: "Camila Fuentes",
    description: "Una costurera cose recuerdos rotos. Une fragmentos de vidas diferentes para crear nuevas identidades. Pero algunos recuerdos no quieren ser cosidos.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Creativa." }],
    price: 53100,
    stock: 10,
    image: "https://picsum.photos/seed/costureramemorias/300/450",
    rating: "4.9"
  },
  {
    id: 64,
    title: "El hombre que plantó un bosque de espejos",
    author: "Javier Beltrán",
    description: "Un hombre planta espejos en el bosque. Quien se mira en ellos ve su peor versión. Un día, esa versión sale del espejo.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Terror psicológico." }],
    price: 57400,
    stock: 4,
    image: "https://picsum.photos/seed/bosqueespejos/300/450",
    rating: "4.7"
  },
  {
    id: 65,
    title: "Los zapateros de los pies cansados",
    author: "Isabel Paredes",
    description: "Zapateros que fabrican zapatos que caminan por ti cuando estás agotado. Pero los zapatos empiezan a decidir a dónde ir.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Metafórico." }],
    price: 44700,
    stock: 8,
    image: "https://picsum.photos/seed/zapaterospies/300/450",
    rating: "4.5"
  },
  {
    id: 66,
    title: "El día que las mentiras se volvieron flores",
    author: "Daniel Ortega",
    description: "De repente, cada mentira dicha en voz alta se convierte en una flor venenosa. La verdad duele, pero las mentiras matan.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Alegórico." }],
    price: 38900,
    stock: 13,
    image: "https://picsum.photos/seed/mentirasflores/300/450",
    rating: "4.6"
  },
  {
    id: 67,
    title: "La mujer que escribía finales felices en servilletas",
    author: "Lucía Gómez",
    description: "Una camarera escribe finales felices en servilletas y las deja en las mesas. Sin saberlo, esos finales se cumplen.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Encantador." }],
    price: 42600,
    stock: 14,
    image: "https://picsum.photos/seed/mujerservilletas/300/450",
    rating: "4.8"
  },
  {
    id: 68,
    title: "El relojero que regalaba tiempo",
    author: "Miguel Ángel",
    description: "Un relojero regala minutos extra a quienes están a punto de morir. Pero el tiempo regalado debe venir de alguna parte.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Triste y bello." }],
    price: 55600,
    stock: 5,
    image: "https://picsum.photos/seed/relojerotiempo/300/450",
    rating: "4.7"
  },
  {
    id: 69,
    title: "El negro sobre blanco",
    author: "Ana Torres",
    description: "Un escritor escribe solo verdades. No puede mentir. Su editor lo odia. El público lo ama. Pero la verdad más peligrosa aún no la ha escrito.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Cruda." }],
    price: 48200,
    stock: 7,
    image: "https://picsum.photos/seed/negroblanco/300/450",
    rating: "4.6"
  },
  {
    id: 70,
    title: "Los cazadores de mareas",
    author: "Carlos Ruiz",
    description: "Un grupo de personas que pueden cazar mareas y guardarlas en frascos. Con ellas controlan el clima. Pero una marea rebelde se niega a ser atrapada.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Aventura marina." }],
    price: 59300,
    stock: 3,
    image: "https://picsum.photos/seed/cazadoresmareas/300/450",
    rating: "4.5"
  },
  {
    id: 71,
    title: "El faro del último día",
    author: "Valentina Serrano",
    description: "Un faro que solo se enciende el último día del año. Quien ve su luz puede pedir un deseo, pero el faro elige qué deseo conceder.",
    reviews: [{ user: "María González", rating: 5, comment: "Mágico." }],
    price: 45900,
    stock: 10,
    image: "https://picsum.photos/seed/faroultimodia/300/450",
    rating: "4.9"
  },
  {
    id: 72,
    title: "El sombrero que contenía el mar",
    author: "Sebastián Mendoza",
    description: "Un sombrero de copa que contiene un océano entero. Quien se lo pone puede oír las voces de los ahogados.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Perturbador." }],
    price: 51700,
    stock: 6,
    image: "https://picsum.photos/seed/sombreromar/300/450",
    rating: "4.7"
  },
  {
    id: 73,
    title: "La fontanera del tiempo",
    author: "Camila Fuentes",
    description: "Una fontanera repara tuberías de tiempo. Cuando el tiempo se fuga, el pasado se mezcla con el presente y el futuro se pudre.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Original." }],
    price: 50400,
    stock: 8,
    image: "https://picsum.photos/seed/fontaneratiempo/300/450",
    rating: "4.6"
  },
  {
    id: 74,
    title: "El piragüista del río de los muertos",
    author: "Javier Beltrán",
    description: "Un hombre transporta almas en su piragua. Cada viaje cobra un recuerdo. Al final, no recuerda ni su propio nombre.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Oscuro y poético." }],
    price: 54500,
    stock: 4,
    image: "https://picsum.photos/seed/piraguistario/300/450",
    rating: "4.8"
  },
  {
    id: 75,
    title: "Los olvidadores profesionales",
    author: "Isabel Paredes",
    description: "Profesionales que olvidan por ti. Contratas sus servicios para borrar un recuerdo. Pero ellos también olvidan que lo hicieron.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Inquietante." }],
    price: 47100,
    stock: 11,
    image: "https://picsum.photos/seed/olvidadores/300/450",
    rating: "4.7"
  },
  {
    id: 76,
    title: "El niño que contaba estrellas fugaces",
    author: "Daniel Ortega",
    description: "Un niño cuenta estrellas fugaces. Cada estrella que cuenta es un deseo no pedido. Un día decide pedir él el deseo.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Tierno." }],
    price: 39400,
    stock: 12,
    image: "https://picsum.photos/seed/niñoestrellas/300/450",
    rating: "4.5"
  },
  {
    id: 77,
    title: "El afinador de corazones rotos",
    author: "Lucía Gómez",
    description: "Un afinador repara corazones rotos como si fueran pianos. Pero cada corazón reparado desafina otro a cambio.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Romántico y triste." }],
    price: 49000,
    stock: 7,
    image: "https://picsum.photos/seed/afinadorcorazones/300/450",
    rating: "4.9"
  },
  {
    id: 78,
    title: "La vigía del acantilado de los suicidas",
    author: "Miguel Ángel",
    description: "Una mujer vigila un acantilado donde la gente va a morir. No evita los saltos. Solo registra los nombres. Hasta que uno le habla antes de saltar.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Duro y real." }],
    price: 56200,
    stock: 3,
    image: "https://picsum.photos/seed/vigiaacantilado/300/450",
    rating: "4.6"
  },
  {
    id: 79,
    title: "El último viaje del submarino amarillo",
    author: "Ana Torres",
    description: "Un submarino amarillo que viaja al centro de la tristeza. Su tripulación busca la fuente de toda melancolía para destruirla.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Psicodélico." }],
    price: 42300,
    stock: 9,
    image: "https://picsum.photos/seed/submarinoamarillo/300/450",
    rating: "4.7"
  },
  {
    id: 80,
    title: "Los ladrones de sombras",
    author: "Carlos Ruiz",
    description: "Una banda roba sombras. Sin sombra, pierdes la capacidad de mentir. El mundo se vuelve peligrosamente honesto.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Filosófico." }],
    price: 51000,
    stock: 5,
    image: "https://picsum.photos/seed/ladronessombras/300/450",
    rating: "4.5"
  },
  {
    id: 81,
    title: "La cajita de las segundas oportunidades",
    author: "Valentina Serrano",
    description: "Una cajita que concede una segunda oportunidad. Pero solo una. Y no puedes elegir en qué.",
    reviews: [{ user: "María González", rating: 5, comment: "Intensa." }],
    price: 45200,
    stock: 10,
    image: "https://picsum.photos/seed/cajitasegundas/300/450",
    rating: "4.8"
  },
  {
    id: 82,
    title: "El último gaucho del fin del mundo",
    author: "Sebastián Mendoza",
    description: "En la Patagonia, el último gaucho cabalga hacia el fin del mundo. Lo siguen los fantasmas de todos los animales que mató.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Épico y triste." }],
    price: 53800,
    stock: 6,
    image: "https://picsum.photos/seed/ultimogaucho/300/450",
    rating: "4.6"
  },
  {
    id: 83,
    title: "Las hermanas de la noche eterna",
    author: "Camila Fuentes",
    description: "Tres hermanas que controlan la noche. Una enciende las estrellas, otra apaga la luna, la tercera borra los sueños malos.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Poético." }],
    price: 41500,
    stock: 13,
    image: "https://picsum.photos/seed/hermanasnoche/300/450",
    rating: "4.9"
  },
  {
    id: 84,
    title: "El cambista de sonrisas",
    author: "Javier Beltrán",
    description: "Un cambista que compra sonrisas tristes y vende sonrisas felices. Pero las sonrisas felices siempre son prestadas.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Agridulce." }],
    price: 48800,
    stock: 8,
    image: "https://picsum.photos/seed/cambistasonrisas/300/450",
    rating: "4.7"
  },
  {
    id: 85,
    title: "El jardinero del fin del mundo",
    author: "Isabel Paredes",
    description: "Un jardinero planta un jardín en el desierto. Cada flor que crece es la vida de una persona. Cuando una flor muere, alguien muere.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Simbólico." }],
    price: 56900,
    stock: 4,
    image: "https://picsum.photos/seed/jardinero findelmundo/300/450",
    rating: "4.8"
  },
  {
    id: 86,
    title: "La tejedora de nubes",
    author: "Daniel Ortega",
    description: "Una mujer teje nubes con los suspiros de los enamorados. Las nubes luego lloran la tristeza que contienen.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Romántica." }],
    price: 43700,
    stock: 11,
    image: "https://picsum.photos/seed/tejedoranubes/300/450",
    rating: "4.6"
  },
  {
    id: 87,
    title: "El faro de los nombres olvidados",
    author: "Lucía Gómez",
    description: "Un faro que guarda los nombres de las personas que murieron solas. Una noche, alguien enciende el faro y todos los nombres vuelan.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Emotivo." }],
    price: 47600,
    stock: 7,
    image: "https://picsum.photos/seed/faronombres/300/450",
    rating: "4.7"
  },
  {
    id: 88,
    title: "El niño que domaba tormentas",
    author: "Miguel Ángel",
    description: "Un niño que puede domar tormentas. Las cabalga como si fueran caballos. Pero una tormenta lo doma a él y lo lleva lejos.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Aventura." }],
    price: 52400,
    stock: 5,
    image: "https://picsum.photos/seed/niñotormentas/300/450",
    rating: "4.5"
  },
  {
    id: 89,
    title: "Las putas tristes de la esquina feliz",
    author: "Ana Torres",
    description: "Trabajadoras sexuales en una esquina que, por alguna razón, siempre es feliz. La felicidad del lugar es un misterio que una clienta intenta resolver.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Cruda y real." }],
    price: 40300,
    stock: 9,
    image: "https://picsum.photos/seed/putastristes/300/450",
    rating: "4.6"
  },
  {
    id: 90,
    title: "El último viaje del cartero estrella",
    author: "Carlos Ruiz",
    description: "Un cartero reparte cartas a los muertos. En su último viaje, recibe una carta para sí mismo, escrita por un muerto que aún lo ama.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Tierno y triste." }],
    price: 55300,
    stock: 6,
    image: "https://picsum.photos/seed/carteroestrella/300/450",
    rating: "4.9"
  },
  {
    id: 91,
    title: "El viajante de lágrimas",
    author: "Valentina Serrano",
    description: "Un vendedor ambulante que compra lágrimas. Las vende a quienes no pueden llorar. Pero las lágrimas compradas siempre saben a sal falsa.",
    reviews: [{ user: "María González", rating: 5, comment: "Conmovedor." }],
    price: 46600,
    stock: 10,
    image: "https://picsum.photos/seed/viajantelagrimas/300/450",
    rating: "4.7"
  },
  {
    id: 92,
    title: "Los limpiadores de pesadillas",
    author: "Sebastián Mendoza",
    description: "Un equipo que entra en las pesadillas de la gente y las limpia. Pero una pesadilla se resiste y empieza a expandirse.",
    reviews: [{ user: "Carlos Ramírez", rating: 4, comment: "Terror onírico." }],
    price: 58100,
    stock: 4,
    image: "https://picsum.photos/seed/limpiadorespesadillas/300/450",
    rating: "4.8"
  },
  {
    id: 93,
    title: "La última carta del soldado que nunca existió",
    author: "Camila Fuentes",
    description: "Una familia recibe cartas de un soldado que murió antes de nacer. Las cartas predicen el futuro con exactitud aterradora.",
    reviews: [{ user: "Laura Méndez", rating: 5, comment: "Misteriosa." }],
    price: 50000,
    stock: 8,
    image: "https://picsum.photos/seed/ultimacartasoldado/300/450",
    rating: "4.6"
  },
  {
    id: 94,
    title: "El herrero de los imposibles",
    author: "Javier Beltrán",
    description: "Un herrero que fabrica objetos imposibles: una llave que abre cualquier puerta excepto la correcta, un martillo que rompe el silencio.",
    reviews: [{ user: "Andrés Torres", rating: 4, comment: "Inventiva." }],
    price: 53400,
    stock: 6,
    image: "https://picsum.photos/seed/herreroimposibles/300/450",
    rating: "4.7"
  },
  {
    id: 95,
    title: "La sordina del violín desafinado",
    author: "Isabel Paredes",
    description: "Un violín desafinado que toca la música perfecta cuando su dueña está triste. Un día, la tristeza se acaba y el violín enmudece.",
    reviews: [{ user: "Sofía Herrera", rating: 5, comment: "Melancólico." }],
    price: 42800,
    stock: 12,
    image: "https://picsum.photos/seed/violindesafinado/300/450",
    rating: "4.5"
  },
  {
    id: 96,
    title: "El niño que soñaba ciudades",
    author: "Daniel Ortega",
    description: "Un niño sueña ciudades. Al despertar, las ciudades existen. Los gobiernos quieren controlar sus sueños. Él solo quiere soñar su casa.",
    reviews: [{ user: "Miguel Castro", rating: 4, comment: "Fascinante." }],
    price: 56000,
    stock: 5,
    image: "https://picsum.photos/seed/niñociudades/300/450",
    rating: "4.9"
  },
  {
    id: 97,
    title: "Las que tejen el olvido",
    author: "Lucía Gómez",
    description: "Mujeres que tejen mantas con los hilos del olvido. Las mantas se usan para envolver a los moribundos y ayudarles a partir sin recuerdos.",
    reviews: [{ user: "Valentina Ruiz", rating: 5, comment: "Hermoso y triste." }],
    price: 49500,
    stock: 7,
    image: "https://picsum.photos/seed/tejenolvido/300/450",
    rating: "4.8"
  },
  {
    id: 98,
    title: "El afinador de pianos de la casa encantada",
    author: "Miguel Ángel",
    description: "Un afinador entra a una casa encantada. El piano está desafinado. Cuando lo afina, los fantasmas empiezan a cantar.",
    reviews: [{ user: "Juan Esteban", rating: 4, comment: "Escalofriante." }],
    price: 44600,
    stock: 9,
    image: "https://picsum.photos/seed/afinadorpianos/300/450",
    rating: "4.6"
  },
  {
    id: 99,
    title: "La niña que guardaba lunas en un frasco",
    author: "Ana Torres",
    description: "Una niña guarda lunas llenas en frascos. Cuando hay eclipse, abre un frasco y libera una luna para que el mundo no se quede a oscuras.",
    reviews: [{ user: "Natalia Gómez", rating: 5, comment: "Mágico." }],
    price: 41100,
    stock: 14,
    image: "https://picsum.photos/seed/niñalunas/300/450",
    rating: "4.7"
  },
  {
    id: 100,
    title: "El cartero de los sueños interrumpidos",
    author: "Carlos Ruiz",
    description: "Un cartero entrega los sueños que la gente dejó sin terminar. El destinatario debe soñar el final. Si no puede, el sueño se pudre.",
    reviews: [{ user: "Felipe Martínez", rating: 4, comment: "Originalísimo." }],
    price: 58700,
    stock: 3,
    image: "https://picsum.photos/seed/carterosuenos/300/450",
    rating: "4.9"
  }
];

export default books;