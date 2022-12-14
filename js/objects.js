(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "rick",
        lastName: "sanchez",

    }
console.log(person.firstName)
    console.log(person.lastName)


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return (`Hello From ${this.firstName} ${this.lastName}`)
    }
    console.log(person.sayHello())

    person.middleName = 'joseph'




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages.css for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];




    shoppers.forEach(function(shopper){
    if(shopper.amount > 200){
        console.log(`${shopper.name} you have spent ${shopper.amount} the discount is 12%
        ${shopper.name} your total amounts to ${shopper.amount * (1 - .12)}`)
    } else {
        console.log(`${shopper.name} you do not get a discount you only spent ${shopper.amount}`)
    }
    })

shoppers[0].age = 25


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    let books = [
        { title: 'the hobbit',
          author: {
              firstName: 'hung',
              lastName: 'ho'
          }
          }, {
        title: 'book2',
            author: {
                firstName: 'lonnie',
                lastName: 'arellano'
            }
            }, {
            title: 'book3',
            author: {
                firstName: 'horace',
                lastName: 'smith'
            }
        }, {
            title: 'book4',
            author: {
                firstName: 'bryton',
                lastName: 'dominguez'
            }
        }, {
            title: 'book5',
            author: {
                firstName: 'stephan',
                lastName: 'lugo'
            }
}]
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    for(let i = 0; i < books.length; i++ ){
        console.log(`Book # ${i + 1}`)
        console.log(`Title: ${books[i].title}`)
        console.log('Author:' + books[i].author.firstName + ' ' + books[i].author.lastName)
    }

books.forEach(function (book, index, ){
        console.log(`book # ${index + 1}`)
        console.log(`Title: ${books[index].title}`)
    console.log('Author:' + books[index].author.firstName + ' ' + books[index].author.lastName)
    });





    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */






    function bookObject(title, authorName){
        let authorArray = authorName.split(" ");
        let bookObject ={
            title: title,
            author: {
                firstName: authorArray[0],
                lastName: authorArray[1]
            }
        };
        return bookObject;
    }


    let myBook = bookObject('guitar for dummies','lonnie arellano')


    let books3 = [
        bookObject("The Hobwbit", "lonnie Arellano"),
        bookObject("The Hobit", "lnnie Arellano"),

    ];




    // function createBook(title, authorName){
    //
    //    let book = {
    //         title: title,
    //         author: authorName,
    //     }
    //     return book
    // }
    //
    //
    // console.log(createBook('work','mrWork'))
})();