const dbConnection = require('./dbConnection')

module.exports = class PublisherModel {
    constructor(name, address, phone) {
        this.name = name 
        this.address = address
        this.phone = phone
    }

    save(callback) {
        return dbConnection.query('INSERT INTO publisher(name, adress, phone) VALUES (?, ?, ?)'
        ,[this.name, this.address, this.phone] , callback)
    }

    static getAll(callback) {
        return dbConnection.query('SELECT * FROM publisher', callback)
    }

    static getByID(id, callback) {
        return dbConnection.query('SELECT * FROM publisher WHERE id = ?', id, callback)
    }

    static getByName(name, callback) {
        return dbConnection.query("SELECT * FROM publisher WHERE name LIKE CONCAT('%', ?, '%') ", name, callback)
    }

    
}