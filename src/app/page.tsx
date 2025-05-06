export default function Home() {
  const books = [
    { 
      title: "1984", 
      author: "George Orwell",
      year: 1949,
      cover: "/images/1984.jpg",
      description: "Un classique dystopique explorant les dangers du totalitarisme et de la surveillance de masse."
    },
    { 
      title: "Le Meilleur des Mondes", 
      author: "Aldous Huxley",
      year: 1932,
      cover: "/images/brave-new-world.jpg",
      description: "Une société futuriste où le bonheur artificiel et le conditionnement remplacent la liberté."
    },
    { 
      title: "Fahrenheit 451", 
      author: "Ray Bradbury",
      year: 1953,
      cover: "/images/fahrenheit.jpg",
      description: "Dans un monde où les livres sont interdits et brûlés, un pompier commence à remettre en question sa société."
    }
    ,
    { 
      title: "Full 45", 
      author: "Ray Bradbury",
      year: 1953,
      cover: "/images/fahrenheit.jpg",
      description: "Dans un monde où les livres sont interdits et brûlés, un pompier commence à remettre en question sa société."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-blue-800 text-white shadow-lg">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-4xl font-bold mb-2">Bibliothèque Associative</h1>
          <p className="text-blue-200">Notre collection de livres classiques</p>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold text-blue-800 mb-8 border-b-2 border-blue-200 pb-2">
          Catalogue de livres
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-blue-100 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-blue-800">
                    {book.title}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-900">{book.title}</h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-blue-700">{book.author}</p>
                  <span className="text-sm text-blue-600">{book.year}</span>
                </div>
                <p className="text-gray-600 text-sm mt-3">{book.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition w-full">
                  Emprunter
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="bg-blue-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">© {new Date().getFullYear()} Bibliothèque Associative | Projet déployé via Jenkins CI/CD</p>
        </div>
      </footer>
    </div>
  );
}