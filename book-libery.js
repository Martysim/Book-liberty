class Book {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = false;
    this.readDate = null;
  };
  markAsRead() {
    this.isRead = true;
    this.readDate = new Date();
  };
};

class HorrorBook extends Book {
  constructor(title, genre, author, rating) {
    super(title, genre, author);
    this.rating = rating;
  };
  rate() {
    this.rating++;
  };
};

class BookList {
  constructor() {
    this.books = [];
    this.readBooks = 0;
    this.unreadBooks = 0;
    this.currentBook = null;
    this.nextBook = null;
    this.lastBookRead = null;
  };

  add(book) {
    this.books.push(book);
    if (book.isRead) {
      this.readBooks++;
    } else {
      this.unreadBooks++;
    };
    if (!this.currentBook) {
      this.currentBook = book;
    };
    if (!this.nextBook ) {
        this.nextBook = this.books.find(book => !book.isRead && (this.currentBook.title !== book.title)) || null;
    };
  };

  finishCurrentBook() {
    if (this.currentBook) {
      this.currentBook.markAsRead();
      if (this.currentBook.isRead) {
        this.lastBookRead = this.currentBook ;
      };
      
      this.currentBook = this.nextBook ;
      
      this.nextBook = this.books.find(book => !book.isRead && (this.currentBook.title !== book.title)) || null;

      this.readBooks++;
      this.unreadBooks--;
    };
  };
}; 


const book1 = new Book("Harry Potter", "Fantasy", " J. K. Rowling");
const book2 = new HorrorBook("Ghost Story", "Horror", "Peter Straub", 4);
const book3 = new Book("Hello, Molly!", "Comedy", " Sean Wilsey");
const book4 = new Book("The Little Prince", "novella", "Antoine de Saint-Exupéry");
const book5 = new Book("It Starts with Us", " romance novel", " 	Colleen Hoover ");


const bookList = new BookList();

bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.add(book4);
bookList.add(book5);


console.log(bookList.books);
console.log("--------------------------------------");
console.log("--------------------------------------");
bookList.finishCurrentBook();

console.log("Read books = 1:" ,bookList.readBooks);
console.log("unread books = 4:",bookList.unreadBooks); 
console.log("curenstBook title:", bookList.currentBook.title); 
console.log("nextBook title:", bookList.nextBook.title);
console.log("lastBookRead title:" ,bookList.lastBookRead.title); 
book2.rate();
console.log("rating horror book:", book2.rating);
console.log("--------------------------------------");
console.log("--------------------------------------");

bookList.finishCurrentBook();

console.log("isRead books = 2:" , bookList.readBooks); 
console.log("unread books = 3:", bookList.unreadBooks);
console.log("curenstBook title:", bookList.currentBook.title); 
console.log("nextBook title:", bookList.nextBook.title); 
console.log("lastBookRead title:", bookList.lastBookRead.title); 
console.log("--------------------------------------");
console.log("--------------------------------------");

bookList.finishCurrentBook();

console.log("isRead books = 3:" , bookList.readBooks);
console.log("unread books = 2:", bookList.unreadBooks);
console.log("curenstBook title:", bookList.currentBook.title); 
console.log("nextBook title:", bookList.nextBook.title); 
console.log("lastBookRead title:", bookList.lastBookRead.title); 
console.log("--------------------------------------");
console.log("--------------------------------------");

console.log(bookList.books); 
