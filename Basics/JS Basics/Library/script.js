const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.book_id = crypto.randomUUID();
    this.info = function () {
        console.log(this.title + " by" + this.author + ", " + this.pages + ", " + this.read)
    }
}

Book.prototype.toggle_read = function () {
    if (this.read == 'read') {
        this.read = 'not_read';
    } else {
        this.read = 'read';
    }
}

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    new_book = new Book(title, author, pages, read);
    myLibrary.push(new_book)
    display_books(new_book)

}

function display_books(book_ins) {
    const books = document.querySelector('.books');

    const item = document.createElement('div');
    item.className = book_ins.book_id;

    const title = document.createElement('p');
    title.textContent = book_ins.title
    item.appendChild(title)

    const author = document.createElement('p');
    author.textContent = book_ins.author
    item.appendChild(author)

    const pages = document.createElement('p');
    pages.textContent = book_ins.pages
    item.appendChild(pages)

    const read = document.createElement('p');
    read.textContent = book_ins.read
    item.appendChild(read)

    const book_id = document.createElement('p');
    book_id.textContent = book_ins.book_id
    item.appendChild(book_id)

    const remove = document.createElement('button');
    remove.textContent = 'Remove';

    remove.addEventListener("click", function (e) {
        index = myLibrary.indexOf(e.target.parentElement.className);
        if (index > -1) {
            myLibrary.splice(index, 1)
        }
        e.target.parentElement.remove();

        e.preventDefault();

    })
    item.appendChild(remove)

    const toggle = document.createElement('button');
    toggle.textContent = book_ins.read;

    toggle.addEventListener("click", (e) => {
        book_ins.toggle_read();  // access book_ins from closure
        toggle.textContent = book_ins.read;
    })
    item.appendChild(toggle)
    books.appendChild(item)

}


addBookToLibrary("The Creative Act", "Rick Rubbin", 300, "read")
addBookToLibrary("The art of KelogsLoops", "Hui", 250, "read")

const form = document.getElementById('book-details')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const book_name = formData.get('book_name');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read = formData.get('read');

    addBookToLibrary(book_name, author, pages, read);
    form.reset();
})


