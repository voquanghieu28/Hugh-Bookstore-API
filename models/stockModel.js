const dbConnection = require('./dbConnection')

module.exports = class AuthorModel {
    constructor(bookId, amount, shelve, next_date, last_date) {
        this.bookId = bookId 
        this.amount = amount
        this.shelve = shelve 
        this.next_date = next_date
        this.last_date = last_date 
    }
    

    save(callback) {
        return dbConnection.query('INSERT INTO stock(book_id, amount, shelve, next_date, last_date) VALUES (?, ?, ?, ?, ?)'
        ,[this.bookId, this.amount, this.shelve, this.next_date, this.last_date] , callback)
    }

    static getAll(callback) {
        return dbConnection.query('SELECT * FROM stock', callback)
    }

    static getByID(id, callback) {
        return dbConnection.query('SELECT * FROM stock WHERE book_id = ?', id, callback)
    }

}