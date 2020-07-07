USE hugh_bookstore;


SET SQL_SAFE_UPDATES=0;
	DELETE FROM stock;
	DELETE FROM book;
	DELETE FROM author;
	DELETE FROM publisher;
SET SQL_SAFE_UPDATES=1;


INSERT INTO author(name, main_category) VALUES ('Jack Smith', 'IT');
INSERT INTO author(name, main_category) VALUES ('Hugh Spring', 'IT');
INSERT INTO author(name, main_category) VALUES ('Barron Jack', 'Romantic');
INSERT INTO author(name, main_category) VALUES ('John Nguyen', 'Programming');
INSERT INTO author(name, main_category) VALUES ('Jimmy Joe', 'Cooking');
INSERT INTO author(name, main_category) VALUES ('Sandra Stan', 'Thriller');
INSERT INTO author(name, main_category) VALUES ('Ocean Cox', 'History');


INSERT INTO publisher(name, address, phone) 
	VALUES ('The New Horizon', '213 Johnson road, Ottawa ON K2T0E2', '343-454-3321');
INSERT INTO publisher(name, address, phone) 
	VALUES ('Victory College', '1353 Database road, Toronto ON F2T3UH', '513-424-2134');
INSERT INTO publisher(name, address, phone) 
	VALUES ('The Cottage Times', '453 Youngson drive, Vancouver BC E2S3GH', '458-234-6452');
INSERT INTO publisher(name, address, phone) 
	VALUES ('Bussiness Express', '3423 Dummy road, Montreal QC D2F4C2', '142-458-1244');
INSERT INTO publisher(name, address, phone) 
	VALUES ('The Economy', '879 Queens avenue, Toronto ON S2W3UH', '213-563-2132');
INSERT INTO publisher(name, address, phone) 
	VALUES ('Knowledge Publish Company', '1234 Mountain road, Ottawa ON E3F3UH', '231-424-2134');


INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('Java How To Deploy', '45345736214', '2007-11-04', 95.99, 1, 1, '1.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('Python In a Nutshell', '45645061428', '2001-12-04', 150.45, 1, 1, '2.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('How to hack with html', '12345451478', '2017-12-04', 125.0, 1, 2, '3.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('Italian Cusine', '34212461428', '2014-11-02', 245.50, 5, 3, '4.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('Dinner 365', '456443454328', '2020-04-04', 125.0, 5, 4, '5.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('How I Met Javascript', '12345061428', '2011-02-03', 85.0, 3, 5, '6.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('The adventure', '45645061428', '2001-12-04', 25.0, 7, 6, '7.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('The creepy server', '65325061428', '2002-11-04', 49.0, 6, 3, '8.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('The 1980s', '65425061234', '2000-07-24', 120, 7, 2, '9.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('Hello World!', '32145061428', '2007-02-04', 200.0, 4, 4, '10.png', 'video1.mp4', 'summary.txt');
INSERT INTO book(name, barcode, publish_date, price, author_id, publisher_id, image_file, review_video_file, summary_file) 
	VALUES ('Coding nights', '45645061428', '2001-12-04', 5.0, 06, 1, '11.png', 'video1.mp4', 'summary.txt');
	
	
INSERT INTO stock(book_id, amount, shelve, next_date, last_date) 
	VALUES (1, 150, 'C304', '2019-12-04', '2020-12-03');
INSERT INTO stock(book_id, amount, shelve, next_date, last_date) 
	VALUES (2, 10, 'C306', '2019-12-05', '2020-12-03');
INSERT INTO stock(book_id, amount, shelve, next_date, last_date) 
	VALUES (3, 5, 'B204', '2019-11-04', '2020-04-03');
INSERT INTO stock(book_id, amount, shelve, next_date, last_date) 
	VALUES (4, 203, 'Z213', '2019-12-04', NULL);
INSERT INTO stock(book_id, amount, shelve, next_date, last_date) 
	VALUES (5, 0, 'C123', '2019-10-04', NULL);
INSERT INTO stock(book_id, amount, shelve, next_date, last_date) 
	VALUES (6, 167, 'C234', '2018-03-04', '2021-12-02');