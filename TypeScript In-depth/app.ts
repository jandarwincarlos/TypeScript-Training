function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction},
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogFirstAvailable(books: any[]): void {
    
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

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitleByCategory(categoryFilter: Category): Array<string> {
    
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

const poetryBooks = GetBookTitleByCategory(Category.Poetry);
LogBookTitles(poetryBooks);