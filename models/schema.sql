DROP DATABASE IF EXISTS Mixed_db;
CREATE DATABASE Mixed_db;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

-- not inserted yet, having trouble want to have some seeds for testing purposes

INSERT INTO Mixeds (name, alcoholic,category,glass,Ing1,Ing1Vol,Ing2,Ing2Vol,Ing3,Ing3Vol,createdAt,updatedAt) VALUES ("Gin & Tonic",TRUE,"Ordinary Drink","Highball glass","gin","2 oz","Tonic water","5 oz", "Lime","1",current_timestamp,current_timestamp)