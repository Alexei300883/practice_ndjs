запрос(ы) для вставки данных минимум о двух книгах в коллекцию books
db.books.insertMany(
  {
    title: "книга 1",
    description: "сказки",
    authors: "Пушкин А.С."
  },
  {
    title: "книга 2",
    description: "рассказы",
    authors: "Горький М.А."
  } 
)

запрос для поиска полей документов коллекции books по полю title
db.books.find(
   {title: {$gt: "книга 1"}},
   {description:1, authors:1}
).limit(2)

запрос для редактирования полей: description и authors коллекции books по _id записи
db.books.updateOne(
    {id: {$lt: 22}},
    {$set: {description: "стихи", authors: "Лермонтов М."}}
)