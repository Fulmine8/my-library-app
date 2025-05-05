export default function Home() {
  const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Le Meilleur des Mondes", author: "Aldous Huxley" }
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Catalogue de livres</h1>
      <ul className="list-disc pl-5">
        {books.map((book, i) => (
          <li key={i} className="mb-2">
            <span className="font-medium">{book.title}</span> - {book.author}
          </li>
        ))}
      </ul>
    </main>
  );
}