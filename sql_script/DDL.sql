USE hugh_bookstore;
DROP TABLE IF EXISTS stock;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS author;
DROP TABLE IF EXISTS publisher;

CREATE TABLE author (
	id    			INT AUTO_INCREMENT,
	name  			VARCHAR( 30 ) NOT NULL,
	main_category 	VARCHAR( 30 ) NOT NULL,
	PRIMARY KEY( id )
);

CREATE TABLE publisher (
	id    			INT AUTO_INCREMENT,
	name  			VARCHAR( 30 ) NOT NULL,
	address	 		VARCHAR( 50 ) NOT NULL,
	phone	 		VARCHAR( 20 ) NOT NULL,
	PRIMARY KEY( id )
);


CREATE TABLE book (
	id    			INT AUTO_INCREMENT,
	name  			VARCHAR( 30 ) NOT NULL,
	barcode			VARCHAR(20),
	publish_date	DATE,
	price			DECIMAL(10,2),
	author_id 		INT,
	publisher_id	INT,
    image_file		VARCHAR(20),
	summary_file	VARCHAR(300),
    review_video_file	VARCHAR(30),
	PRIMARY KEY( id ),
	FOREIGN KEY(author_id) REFERENCES author(id),
	FOREIGN KEY(publisher_id) REFERENCES publisher(id)
);



CREATE TABLE stock (
	book_id    		INT,
	amount			INT,
	shelve			VARCHAR(5),
	next_date		DATE,
	last_date 		DATE,
	PRIMARY KEY(book_id),
	FOREIGN KEY(book_id) REFERENCES book(id)
);






