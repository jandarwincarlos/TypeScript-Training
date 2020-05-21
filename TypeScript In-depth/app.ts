import { Category } from './enums';
import { Book, Logger, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { CalculateLateFee as CalcFee, MaxBooksAllowed } from './lib/utilityFunctions';
import refBook from './encyclopedia';

function GetAllBooks(): Book[] {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    
    let numberOfBooks: number = books.length;
	let firstAvailable: string = '';
		
	for(let currentBook of books) {
		
		if(currentBook.available) {
			firstAvailable = currentBook.title;
			break;
		}
	}
	
	console.log('Total Books: ' + numberOfBooks);
	console.log('First Available: ' + firstAvailable);
}

function GetBookTitleByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks: any = GetAllBooks();
    const filteredTitles: string[] = [];

    for (let currenBook of allBooks) {
        if (currenBook.category === categoryFilter) {
            filteredTitles.push(currenBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    
    for(let title of titles) {
        console.log(title);
    }
}

function GetBookByID(id: number): Book {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];    
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer ' + name);

    if(age) {
        console.log('Age: ' + age);
    }

    if(city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    
    console.log('Checking out books for ' + customer);

    let booksCheckedOut: string[] = [];

    for(let id of bookIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
	const foundTitles: string[] = [];
	
	if(typeof bookProperty == 'string') {
		// get all books by a particular author
		for(let book of allBooks) {
			if(book.author === bookProperty) {
				foundTitles.push(book.title);
			}
		}
	}
	
	else if(typeof bookProperty == 'boolean') {
		// get all books based on specified availability
		for(let book of allBooks) {
			if(book.available === bookProperty) {
				foundTitles.push(book.title);
			}
		}
	}
	return foundTitles;
}

//****************************************************************

let hermansBooks = GetTitles('Herman Melville');
// hermansBooks.forEach(title => console.log(title));

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}

// let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2012);
// // ref.title = 'Facts and Figures';
// // ref.year = '2016';
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printCitation();

let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
}

let myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();

class Novel extends class { title!: string } {
    mainCharacter!: string;
}

let favoriteNovel = new Novel();
// favoriteNovel.


// let myBook: Book = {
//     id: 5,
//     title: 'Pride and Prejudice',
//     author: 'Jane Austen',
//     available: true,
//     category: Category.Fiction,
//     pages: 250,
//     markDamaged: (reason: string) => console.log('Damaged: ' + reason)
// }

// PrintBook(myBook);
// myBook.markDamaged!('torn pages');

// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log('Damage reported: ' + damage)
// logDamage('coffee stains');

// let favoriteAuthor: Author = {}
// let favoriteLibrarian: Librarian = {}

// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');




// let myBooks: string[] = CheckoutBooks('Throne', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// LogFirstAvailable();

// let poetryBooks = GetBookTitleByCategory(Category.Poetry);
// poetryBooks.forEach(title => console.log(title));

// let fictionBooks = GetBookTitleByCategory();
// fictionBooks.forEach(title => console.log(title));


// CreateCustomer('Michelle');
// CreateCustomer('Leigh', 6);
// CreateCustomer('Marie', 12, 'Atlanta');






// let x: number;
// x = 5;

// let idGenerator: (chars: string, nums: number) => string;
// idGenerator = CreateCustomerID;
// // idGenerator = (name: string, id: number) => { return id + name; }

// let myID: string = idGenerator('daniel', 15)
// console.log(myID);

// const fictionBooks = GetBookTitleByCategory(Category.Fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));