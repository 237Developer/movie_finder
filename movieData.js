const movies = [
  {
    id: "the-batman",
    title: "The Batman",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    releaseDate: "2022-03-04",
    rating: 8.2,
    genres: ["Action", "Crime", "Drama"],
    synopsis:
      "Batman investigates a series of murders committed by the Riddler while uncovering a deep web of corruption hidden within Gotham City.",
    director: "Matt Reeves",
    runtime: 176,
  },

  {
    id: "interstellar",
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    releaseDate: "2014-11-07",
    rating: 8.7,
    genres: ["Science Fiction", "Adventure", "Drama"],
    synopsis:
      "A team of explorers travels through a wormhole in search of a new home for humanity as Earth becomes increasingly uninhabitable.",
    director: "Christopher Nolan",
    runtime: 169,
  },

  {
    id: "inception",
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    releaseDate: "2010-07-16",
    rating: 8.8,
    genres: ["Science Fiction", "Action", "Thriller"],
    synopsis:
      "A skilled thief who steals secrets through dream-sharing technology is offered a chance at redemption by planting an idea into a target's subconscious.",
    director: "Christopher Nolan",
    runtime: 148,
  },

  {
    id: "joker",
    title: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    releaseDate: "2019-10-04",
    rating: 8.4,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis:
      "Arthur Fleck, a struggling comedian ignored by society, slowly descends into madness and becomes the infamous Joker.",
    director: "Todd Phillips",
    runtime: 122,
  },

  {
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    releaseDate: "2019-04-26",
    rating: 8.4,
    genres: ["Action", "Adventure", "Science Fiction"],
    synopsis:
      "After the devastating events caused by Thanos, the remaining Avengers unite for one final mission to restore the universe.",
    director: "Anthony Russo & Joe Russo",
    runtime: 181,
  },

  {
    id: "oppenheimer",
    title: "Oppenheimer",
    image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    releaseDate: "2023-07-21",
    rating: 8.6,
    genres: ["Biography", "Drama", "History"],
    synopsis:
      "The story of physicist J. Robert Oppenheimer and his leading role in the development of the atomic bomb during World War II.",
    director: "Christopher Nolan",
    runtime: 180,
  },

  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    releaseDate: "2024-03-01",
    rating: 8.5,
    genres: ["Science Fiction", "Adventure"],
    synopsis:
      "Paul Atreides joins forces with the Fremen to seek revenge against those who destroyed his family while embracing his destiny.",
    director: "Denis Villeneuve",
    runtime: 166,
  },

  {
    id: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    releaseDate: "2021-12-17",
    rating: 8.3,
    genres: ["Action", "Adventure", "Fantasy"],
    synopsis:
      "When Spider-Man's identity is revealed, Peter Parker seeks Doctor Strange's help, accidentally opening the multiverse.",
    director: "Jon Watts",
    runtime: 148,
  },

  {
    id: "top-gun-maverick",
    title: "Top Gun: Maverick",
    image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    releaseDate: "2022-05-27",
    rating: 8.3,
    genres: ["Action", "Drama"],
    synopsis:
      "Captain Pete 'Maverick' Mitchell trains a new generation of elite fighter pilots for a dangerous mission unlike any before.",
    director: "Joseph Kosinski",
    runtime: 131,
  },

  {
    id: "lord-of-the-rings-return-of-the-king",
    title: "The Lord of the Rings: The Return of the King",
    image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    releaseDate: "2003-12-17",
    rating: 9.0,
    genres: ["Fantasy", "Adventure", "Action"],
    synopsis:
      "As Frodo and Sam approach Mount Doom, the free peoples of Middle-earth gather for one final battle against Sauron's forces.",
    director: "Peter Jackson",
    runtime: 201,
  },

  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    releaseDate: "2008-07-18",
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"],
    synopsis:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos.",
    director: "Christopher Nolan",
    runtime: 152,
  },

  {
    id: "the-prestige",
    title: "The Prestige",
    image: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFhxsZACixdvXD.jpg",
    releaseDate: "2006-10-20",
    rating: 8.5,
    genres: ["Drama", "Mystery", "Science Fiction"],
    synopsis:
      "Two rival magicians engage in a bitter battle to create the ultimate illusion.",
    director: "Christopher Nolan",
    runtime: 130,
  },

  {
    id: "fight-club",
    title: "Fight Club",
    image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    releaseDate: "1999-10-15",
    rating: 8.8,
    genres: ["Drama"],
    synopsis:
      "An insomniac office worker forms an underground fight club with a mysterious man.",
    director: "David Fincher",
    runtime: 139,
  },

  {
    id: "the-matrix",
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    releaseDate: "1999-03-31",
    rating: 8.7,
    genres: ["Science Fiction", "Action"],
    synopsis:
      "A hacker discovers that reality is actually a sophisticated simulation controlled by machines.",
    director: "The Wachowskis",
    runtime: 136,
  },

  {
    id: "gladiator",
    title: "Gladiator",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    releaseDate: "2000-05-05",
    rating: 8.5,
    genres: ["Action", "Drama", "History"],
    synopsis:
      "A Roman general is forced into slavery and becomes a gladiator seeking revenge.",
    director: "Ridley Scott",
    runtime: 155,
  },

  {
    id: "avengers-infinity-war",
    title: "Avengers: Infinity War",
    image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    releaseDate: "2018-04-25",
    rating: 8.4,
    genres: ["Action", "Adventure", "Science Fiction"],
    synopsis:
      "The Avengers and their allies attempt to stop Thanos from collecting the Infinity Stones.",
    director: "Anthony Russo & Joe Russo",
    runtime: 156,
  },

  {
    id: "iron-man",
    title: "Iron Man",
    image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    releaseDate: "2008-05-02",
    rating: 7.9,
    genres: ["Action", "Science Fiction", "Adventure"],
    synopsis:
      "Tony Stark builds a powerful armored suit after being captured by terrorists.",
    director: "Jon Favreau",
    runtime: 126,
  },

  {
    id: "thor-ragnarok",
    title: "Thor: Ragnarok",
    image: "https://image.tmdb.org/t/p/w500/o5mHKEP9P8w6q9z0QJ7V0Q2QfP7.jpg",
    releaseDate: "2017-11-03",
    rating: 7.9,
    genres: ["Action", "Adventure", "Comedy"],
    synopsis: "Thor must escape Sakaar and save Asgard from destruction.",
    director: "Taika Waititi",
    runtime: 130,
  },

  {
    id: "captain-america-winter-soldier",
    title: "Captain America: The Winter Soldier",
    image: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    releaseDate: "2014-04-04",
    rating: 7.7,
    genres: ["Action", "Adventure", "Science Fiction"],
    synopsis:
      "Captain America discovers a dangerous conspiracy within S.H.I.E.L.D.",
    director: "Anthony Russo & Joe Russo",
    runtime: 136,
  },

  {
    id: "once-upon-a-time-in-hollywood",
    title: "Once Upon a Time in Hollywood",
    image: "https://image.tmdb.org/t/p/w500/8j58iEBwPbNPBSOvOeDKgXb8e4U.jpg",
    releaseDate: "2019-07-26",
    rating: 7.6,
    genres: ["Drama", "Comedy"],
    synopsis:
      "An actor and his stunt double navigate Hollywood in the late 1960s.",
    director: "Quentin Tarantino",
    runtime: 161,
  },

  {
    id: "the-departed",
    title: "The Departed",
    image: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    releaseDate: "2006-10-06",
    rating: 8.5,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis:
      "An undercover cop and a mole inside the police try to identify each other.",
    director: "Martin Scorsese",
    runtime: 151,
  },

  {
    id: "shutter-island",
    title: "Shutter Island",
    image: "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    releaseDate: "2010-02-19",
    rating: 8.2,
    genres: ["Mystery", "Thriller", "Drama"],
    synopsis:
      "A marshal investigates a mysterious disappearance at an isolated psychiatric facility.",
    director: "Martin Scorsese",
    runtime: 138,
  },

  {
    id: "the-wolf-of-wall-street",
    title: "The Wolf of Wall Street",
    image: "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
    releaseDate: "2013-12-25",
    rating: 8.2,
    genres: ["Crime", "Drama", "Comedy"],
    synopsis:
      "A wealthy stockbroker rises to enormous success through corruption, excess and fraud.",
    director: "Martin Scorsese",
    runtime: 180,
  },

  {
    id: "dune",
    title: "Dune",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    releaseDate: "2021-10-22",
    rating: 8.0,
    genres: ["Science Fiction", "Adventure", "Drama"],
    synopsis:
      "Paul Atreides travels to the dangerous planet Arrakis and becomes involved in a struggle over its valuable resources.",
    director: "Denis Villeneuve",
    runtime: 155,
  },

  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    releaseDate: "2017-10-06",
    rating: 8.0,
    genres: ["Science Fiction", "Drama", "Mystery"],
    synopsis:
      "A young blade runner uncovers a long-buried secret that leads him to find former blade runner Rick Deckard.",
    director: "Denis Villeneuve",
    runtime: 164,
  },

  {
    id: "titanic",
    title: "Titanic",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    releaseDate: "1997-12-19",
    rating: 7.9,
    genres: ["Drama", "Romance"],
    synopsis:
      "A young couple from different social classes fall in love aboard the ill-fated RMS Titanic.",
    director: "James Cameron",
    runtime: 194,
  },

  {
    id: "deadpool-2",
    title: "Deadpool 2",
    image: "https://image.tmdb.org/t/p/w500/qjiPP4FhTV3UAGa1Dbf2qEqTvu5.jpg",
    releaseDate: "2018-05-18",
    rating: 7.6,
    genres: ["Action", "Comedy", "Science Fiction"],
    synopsis:
      "Deadpool forms a team of mutants to protect a young boy from a powerful enemy from the future.",
    director: "David Leitch",
    runtime: 119,
  },
];

export default movies;
