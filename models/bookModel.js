const dbConnection = require('./dbConnection')

module.exports = class BookModel {
    constructor(name, barcode, author, publisher, image, price, publishDate, video, summary) {
        this.name = name 
        this.author = author
        this. publisher = publisher
        this.price = price
        this.publishDate = publishDate
        this.barcode = barcode
        this.image = image
        this.video = video
        this.summary = summary
    }

    save(callback) {
        return dbConnection.query('INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_directory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        ,[this.name, this.barcode, this.publishDate, this.price, this.author, this.publisher, this.image, this.video, this.summary] , callback)
    }

    static getAll(callback) {
        return dbConnection.query('SELECT * FROM book', callback)
    }

    static getByID(id, callback) {
        return dbConnection.query('SELECT * FROM book WHERE id = ?', id, callback)
    }

    static getByName(name, callback) {
        return dbConnection.query("SELECT * FROM book WHERE name LIKE CONCAT('%', ?, '%') ", name, callback)
    }

    static getByCriteria(criterias, callback) {
        var query = "SELECT * FROM book WHERE "
        var parameters = []
        console.log(Object.values(criterias));
        if (criterias.name != undefined) {
            query += "name LIKE CONCAT('%', ?, '%') AND "
            parameters.push(criterias.name)
        }
        if (criterias.id != undefined) {
            query += 'id = ? AND '
            parameters.push(criterias.id)
        }
        if (criterias.barcode != undefined) {
            query += 'barcode = ? AND '
            parameters.push(criterias.barcode)
        }
        if (criterias.publish_date != undefined) {
            query += 'publish_date = ? AND '
            parameters.push(criterias.publish_date)
        }
        if (criterias.price != undefined) {
            query += 'price = ? AND '
            parameters.push(criterias.price)
        }
        if (criterias.author_id != undefined) {
            query += 'author_id = ? AND '
            parameters.push(criterias.author_id)
        }
        if (criterias.publish_id != undefined) {
            query += 'publisher_id = ? AND '
            parameters.push(criterias.publisher_id)
        }

        if (criterias.min_price != undefined) {
            query += 'price >= ? AND '
            parameters.push(criterias.min_price)
        }
        if (criterias.max_price != undefined) {
            query += 'price <= ? AND '
            parameters.push(criterias.max_price)
        }
        query += 'TRUE'
 
        return dbConnection.query(query, parameters, callback)
    }
}

