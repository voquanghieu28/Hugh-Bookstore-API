const dbConnection = require('./dbConnection')

module.exports = class AuthorModel {
    constructor(name, mainCategory) {
        this.name = name 
        this.mainCategory = mainCategory
    }

    save(callback) {
        return dbConnection.query('INSERT INTO author(name, main_category) VALUES (?, ?)'
        ,[this.name, this.mainCategory] , callback)
    }

    static getAll(callback) {
        return dbConnection.query('SELECT * FROM author', callback)
    }

    static getByID(id, callback) {
        return dbConnection.query('SELECT * FROM author WHERE id = ?', id, callback)
    }

    static getByName(name, callback) {
        return dbConnection.query("SELECT * FROM author WHERE name LIKE CONCAT('%', ?, '%') ", name, callback)
    }

    
}

