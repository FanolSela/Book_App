const db = require('../db/connection')
const Book = require('../models/book')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const books = 
    [
      {
        "name": "Dragon Ball Z",
        "imgURL": "https://images-na.ssl-images-amazon.com/images/I/81Dy6cNM7yL.jpg",
        "author": "Akira Toriyama",
        "description": "The adventures of Son Goku who pursues to be the greatest martial artist ever",
        "price": "$19.99"
      },
      {
        "name": "Naruto",
        "imgURL": "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/220px-NarutoCoverTankobon1.jpg",
        "author": "Masashi Kishimoto",
        "description": "The story of a young ninja, Naruto Uzumaki, whos journey is to become the Hokage of the Hidden Leaf Village",
        "price": "19.99"
      },
      {
        "name": "Yu-Gi-Oh!",
        "imgURL": "https://images-na.ssl-images-amazon.com/images/I/71Lc33eUICL.jpg",
        "author": "Kazuki Takahashi",
        "description": "A story of a boy named Yugi Moto, who solves the Millenium Puzzle, and awakens mystical energies of the pharaoh",
        "price": "19.99"
      },
      {
        "name": "JoJo's Bizarre Adeventure",
        "imgURL": "https://upload.wikimedia.org/wikipedia/en/f/f7/JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg",
        "author": "Hiroriko Araki",
        "description": "The story of the Joestar family, a family whose various members discover they are destined to take down supernatural foes using powers that they possess.",
        "price": "19.99"
      },
      {
        "name": "Death Note",
        "imgURL": "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_UY1200_CR99,0,630,1200_AL_.jpg",
        "author": "Tsugumi Ohba",
        "description": "The series centers around a high school student who discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
        "price": "19.99"
      },
      {
        "name": "Fullmetal Alchemist: Brotherhood",
        "imgURL": "https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg",
        "author": "Hiromu Arakawa",
        "description": "the story of two alchemist brothers, Edward and Alphonse Elric, who want to restore their bodies after a disastrous failed attempt to bring their mother back to life through alchemy",
        "price": "19.99"
      },
      {
        "name": "Attack on Titan",
        "imgURL": "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg",
        "author": "Hajime Isayama",
        "description": "The story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother.",
        "price": "19.99"
      },
      {
        "name": "Hunter x Hunter",
        "imgURL": "https://upload.wikimedia.org/wikipedia/en/0/0f/Hunter_x_Hunter_cover_-_vol1.jpg",
        "author": "Yoshihiro Togashi",
        "description": "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world renowned Hunter",
        "price": "19.99"
      },
      {
        "name": "Berserk",
        "imgURL": "https://upload.wikimedia.org/wikipedia/en/4/45/Berserk_vol01.jpg",
        "author": "Kentaro Miura",
        "description": "The story centers on the character of Guts, a lone mercenary, and Griffith, the leader of a mercenary band called the Band of the Hawk.",
        "price": "19.99"
      },
      {
        "name": "Yu Yu Hakusho",
        "imgURL": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/YuYu_Hakusho_volume_1.jpg/220px-YuYu_Hakusho_volume_1.jpg",
        "author": "Yoshihiro Togashi",
        "description": "The series tells the story of Yusuke Urameshi, a teenage delinquent who is struck and killed by a car while attempting to save a child's life.",
        "price": "19.99"
    },
    {
        "name": "Bleach",
        "imgURL": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSi2hARqHfwYHf2MTjqT4x4bXQgLjQlpKxgUdD8KmvHhve5G_g9",
        "author": "Tite Kubo",
        "description": "he story follows the adventures of Ichigo Kurosaki after he obtains the powers of a Soul Reaper—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki.",
        "price": "19.99"
      },
      {
        "name": "One Piece",
        "imgURL": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOwFZdwHW0u9h5gvl99G1NZ43i_wJWeSOY6vOPb2Q6VWbA6g1k",
        "author": "Eiichiro Oda",
        "description": "The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit.",
        "price": "19.99"
    },
    ]
  await Book.insertMany(books)
  console.log("Created books")
}
const run = async () => {
  await main()
  db.close()
}

run()