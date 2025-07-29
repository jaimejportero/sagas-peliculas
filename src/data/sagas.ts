export interface Movie {
  title: string;
  year: number;
  platform: string[];
}

export interface Saga {
  id: string;
  title: string;
  icon: string;
  description: string;
  movies: Movie[];
}

export const sagas: Saga[] = [
  {
    id: "lotr",
    title: "El Señor de los Anillos + El Hobbit",
    icon: "🧝‍♂️",
    description:
      "Una saga épica de fantasía que sigue las aventuras de hobbits, elfos y humanos en la lucha por destruir un anillo con un poder inimaginable que podría sumergir al mundo en la oscuridad.",
    movies: [
      { title: "El Hobbit: Un viaje inesperado", year: 2012, platform: ["HBO Max", "Amazon Prime"] },
      { title: "El Hobbit: La desolación de Smaug", year: 2013, platform: ["HBO Max", "Amazon Prime"] },
      { title: "El Hobbit: La batalla de los cinco ejércitos", year: 2014, platform: ["HBO Max", "Amazon Prime"] },
      { title: "El Señor de los Anillos: La Comunidad del Anillo", year: 2001, platform: ["Amazon Prime"] },
      { title: "El Señor de los Anillos: Las dos torres", year: 2002, platform: ["Amazon Prime"] },
      { title: "El Señor de los Anillos: El retorno del rey", year: 2003, platform: ["Amazon Prime"] },
    ],
  },
  {
    id: "piratas",
    title: "Piratas del Caribe",
    icon: "🏴‍☠️",
    description:
      "Una divertida y trepidante serie de aventuras piratas con el carismático Jack Sparrow enfrentándose a maldiciones, fantasmas y traiciones en alta mar.",
    movies: [
      { title: "La maldición de la Perla Negra", year: 2003, platform: ["Disney+"] },
      { title: "El cofre del hombre muerto", year: 2006, platform: ["Disney+"] },
      { title: "En el fin del mundo", year: 2007, platform: ["Disney+"] },
      { title: "En mareas misteriosas", year: 2011, platform: ["Disney+"] },
      { title: "La venganza de Salazar", year: 2017, platform: ["Disney+"] },
    ],
  },
  {
    id: "hungergames",
    title: "Los Juegos del Hambre",
    icon: "🏹",
    description:
      "Distopía juvenil donde Katniss Everdeen lucha contra un sistema opresor en una competencia mortal transmitida para el entretenimiento de las élites.",
    movies: [
      { title: "Balada de pájaros cantores y serpientes", year: 2023, platform: ["Amazon Prime"] },
      { title: "Los Juegos del Hambre", year: 2012, platform: ["Netflix", "Amazon Prime"] },
      { title: "Los Juegos del Hambre: En llamas", year: 2013, platform: ["Netflix", "Amazon Prime"] },
      { title: "Los Juegos del Hambre: Sinsajo Parte 1", year: 2014, platform: ["Netflix", "Amazon Prime"] },
      { title: "Los Juegos del Hambre: Sinsajo Parte 2", year: 2015, platform: ["Netflix", "Amazon Prime"] },
    ],
  },
  {
    id: "alien",
    title: "Alien + Prometheus",
    icon: "👽",
    description:
      "Una saga de ciencia ficción y terror espacial donde la humanidad descubre horribles criaturas alienígenas que desafían su supervivencia.",
    movies: [
      { title: "Prometheus", year: 2012, platform: ["Disney+"] },
      { title: "Alien: Covenant", year: 2017, platform: ["Disney+"] },
      { title: "Alien, el octavo pasajero", year: 1979, platform: ["Disney+"] },
      { title: "Aliens: El regreso", year: 1986, platform: ["Disney+"] },
      { title: "Alien 3", year: 1992, platform: ["Disney+"] },
      { title: "Alien: Resurrección", year: 1997, platform: ["Disney+"] },
    ],
  },
  {
    id: "starwars",
    title: "Star Wars",
    icon: "🚀",
    description:
      "La icónica saga espacial que narra la lucha entre la luz y la oscuridad en una galaxia muy, muy lejana, con jedis, siths y aventuras intergalácticas.",
    movies: [
      { title: "Una Nueva Esperanza (Episodio IV)", year: 1977, platform: ["Disney+"] },
      { title: "El Imperio Contraataca (Episodio V)", year: 1980, platform: ["Disney+"] },
      { title: "El Retorno del Jedi (Episodio VI)", year: 1983, platform: ["Disney+"] },
      { title: "La Amenaza Fantasma (Episodio I)", year: 1999, platform: ["Disney+"] },
      { title: "El Ataque de los Clones (Episodio II)", year: 2002, platform: ["Disney+"] },
      { title: "La Venganza de los Sith (Episodio III)", year: 2005, platform: ["Disney+"] },
      { title: "Rogue One: Una historia de Star Wars", year: 2016, platform: ["Disney+"] },
      { title: "Han Solo: Una historia de Star Wars", year: 2018, platform: ["Disney+"] },
      { title: "El Despertar de la Fuerza (Episodio VII)", year: 2015, platform: ["Disney+"] },
      { title: "Los Últimos Jedi (Episodio VIII)", year: 2017, platform: ["Disney+"] },
      { title: "El Ascenso de Skywalker (Episodio IX)", year: 2019, platform: ["Disney+"] },
    ],
  },
  {
    id: "narnia",
    title: "Las Crónicas de Narnia",
    icon: "🦁",
    description:
      "Una aventura fantástica para toda la familia, donde niños atraviesan un armario mágico y descubren un mundo lleno de criaturas míticas y batallas épicas.",
    movies: [
      { title: "El León, la Bruja y el Armario", year: 2005, platform: ["Disney+"] },
      { title: "El Príncipe Caspian", year: 2008, platform: ["Disney+"] },
      { title: "La Travesía del Viajero del Alba", year: 2010, platform: ["Disney+"] },
    ],
  },
  {
    id: "matrix",
    title: "Matrix",
    icon: "💊",
    description:
      "Una saga de ciencia ficción que explora la realidad simulada y la rebelión humana contra máquinas que controlan el mundo, con icónicos combates y filosofía profunda.",
    movies: [
      { title: "Matrix", year: 1999, platform: ["HBO Max"] },
      { title: "Matrix Reloaded", year: 2003, platform: ["HBO Max"] },
      { title: "Matrix Revolutions", year: 2003, platform: ["HBO Max"] },
      { title: "Matrix Resurrections", year: 2021, platform: ["HBO Max"] },
    ],
  },
  {
    id: "harrypotter",
    title: "Harry Potter + Animales Fantásticos",
    icon: "🧙‍♂️",
    description:
      "El mundo mágico de Harry Potter y las aventuras de Newt Scamander en Animales Fantásticos, repleto de hechizos, misterios y criaturas mágicas.",
    movies: [
      { title: "Animales Fantásticos y dónde encontrarlos", year: 2016, platform: ["HBO Max"] },
      { title: "Animales Fantásticos: Los crímenes de Grindelwald", year: 2018, platform: ["HBO Max"] },
      { title: "Animales Fantásticos: Los secretos de Dumbledore", year: 2022, platform: ["HBO Max"] },
      { title: "Harry Potter y la piedra filosofal", year: 2001, platform: ["HBO Max"] },
      { title: "Harry Potter y la cámara secreta", year: 2002, platform: ["HBO Max"] },
      { title: "Harry Potter y el prisionero de Azkaban", year: 2004, platform: ["HBO Max"] },
      { title: "Harry Potter y el cáliz de fuego", year: 2005, platform: ["HBO Max"] },
      { title: "Harry Potter y la orden del Fénix", year: 2007, platform: ["HBO Max"] },
      { title: "Harry Potter y el misterio del príncipe", year: 2009, platform: ["HBO Max"] },
      { title: "Harry Potter y las Reliquias de la Muerte: Parte 1", year: 2010, platform: ["HBO Max"] },
      { title: "Harry Potter y las Reliquias de la Muerte: Parte 2", year: 2011, platform: ["HBO Max"] },
    ],
  },
  {
    id: "jurassic",
    title: "Jurassic Park + Jurassic World",
    icon: "🦖",
    description:
      "Una saga de aventuras y ciencia ficción donde la clonación de dinosaurios genera situaciones impredecibles y luchas por la supervivencia humana.",
    movies: [
      { title: "Jurassic Park", year: 1993, platform: ["Amazon Prime"] },
      { title: "El mundo perdido: Jurassic Park", year: 1997, platform: ["Amazon Prime"] },
      { title: "Jurassic Park III", year: 2001, platform: ["Amazon Prime"] },
      { title: "Jurassic World", year: 2015, platform: ["Amazon Prime"] },
      { title: "Jurassic World: El reino caído", year: 2018, platform: ["Amazon Prime"] },
      { title: "Jurassic World: Dominion", year: 2022, platform: ["Amazon Prime"] },
    ],
  },
  {
    id: "avengers",
    title: "Marvel (Vengadores + saga del infinito)",
    icon: "🦸‍♂️",
    description:
      "El universo cinematográfico de Marvel con superhéroes que luchan contra amenazas cósmicas y terrenales para salvar el mundo.",
    movies: [
      { title: "Iron Man", year: 2008, platform: ["Disney+"] },
      { title: "El Increíble Hulk", year: 2008, platform: ["Disney+"] },
      { title: "Iron Man 2", year: 2010, platform: ["Disney+"] },
      { title: "Thor", year: 2011, platform: ["Disney+"] },
      { title: "Capitán América: El primer vengador", year: 2011, platform: ["Disney+"] },
      { title: "Los Vengadores", year: 2012, platform: ["Disney+"] },
      { title: "Iron Man 3", year: 2013, platform: ["Disney+"] },
      { title: "Thor: El mundo oscuro", year: 2013, platform: ["Disney+"] },
      { title: "Capitán América: El Soldado de Invierno", year: 2014, platform: ["Disney+"] },
      { title: "Guardianes de la Galaxia", year: 2014, platform: ["Disney+"] },
      { title: "Vengadores: La era de Ultrón", year: 2015, platform: ["Disney+"] },
      { title: "Ant-Man", year: 2015, platform: ["Disney+"] },
      { title: "Capitán América: Civil War", year: 2016, platform: ["Disney+"] },
      { title: "Doctor Strange", year: 2016, platform: ["Disney+"] },
      { title: "Guardianes de la Galaxia Vol. 2", year: 2017, platform: ["Disney+"] },
      { title: "Spider-Man: Homecoming", year: 2017, platform: ["Disney+"] },
      { title: "Thor: Ragnarok", year: 2017, platform: ["Disney+"] },
      { title: "Black Panther", year: 2018, platform: ["Disney+"] },
      { title: "Vengadores: Infinity War", year: 2018, platform: ["Disney+"] },
      { title: "Ant-Man y la Avispa", year: 2018, platform: ["Disney+"] },
      { title: "Capitana Marvel", year: 2019, platform: ["Disney+"] },
      { title: "Vengadores: Endgame", year: 2019, platform: ["Disney+"] },
      { title: "Spider-Man: Lejos de casa", year: 2019, platform: ["Disney+"] },
    ],
  },
];
