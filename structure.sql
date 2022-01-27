/*-----------------------------------------CREACION DE TABLAS--------------------------------------*/
CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `lastName` VARCHAR(50) NOT NULL,
   `dni` INT NOT NULL,
   `email` VARCHAR(50) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `location` VARCHAR(155) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `shortDescription` VARCHAR(155) NOT NULL,
   `price` DECIMAL(25,15) NOT NULL,
   `description` TEXT NOT NULL,
   `date` BIGINT(20) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `categoryId` INT NOT NULL,
   `coinId` INT NOT NULL,
   `userId` INT NOT NULL,
   `cartId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cart` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `priceTotal` DECIMAL(25,15) NOT NULL,
   `userId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `category` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `coin` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

/*-----------------------------------------CONFIGURACION DE RELACIONES--------------------------------------*/
ALTER TABLE `products` ADD CONSTRAINT `FK_1b7c2dcd-c38b-4537-a627-ba94f738361a` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_1e9636b0-4d29-4d26-8de7-73cd27aa03b1` FOREIGN KEY (`coinId`) REFERENCES `coin`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_22ee719f-33fd-48e8-a5cc-54bbddf852c7` FOREIGN KEY (`userId`) REFERENCES `users`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_b7648356-759f-40a8-af49-7a3df2bf29d0` FOREIGN KEY (`cartId`) REFERENCES `cart`(`id`)  ;

ALTER TABLE `cart` ADD CONSTRAINT `FK_4faaff6e-f23a-46a9-bdd1-518f692b3e6b` FOREIGN KEY (`userId`) REFERENCES `users`(`id`)  ;

/*----------------------------------------------RELLENO DE BASE DE DATOS--------------------------------------*/
/*INSERCION DE CATEGORIAS*/
insert into category (name) values ('Deportes');
insert into category (name) values ('Inmuebles');
insert into category (name) values ('Mineria');
insert into category (name) values ('NFT');
insert into category (name) values ('Tecnologia');
insert into category (name) values ('Vehiculos');

select * from category

select * from coin

/*INSERCION DE MONEDAS*/
insert into coin (name) values ('Bitcoin');
insert into coin (name) values ('Ethereum');
insert into coin (name) values ('USDT');

/*INSERCION DE PRODUCTOS*/
select * from products

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Cafetera Moulinex dolce gusto','Máquina manual de diseño minimalista y tecnología avanzada.',0.0000040,'Cafetera manual de diseño y tecnologia avanzada. Super economica.', 1624543491000, 'img-cafetera-moulinex.jpg', 5, 1, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Peugeot 208','208 color amarillo','1','Tu peugeot 208 0KM a solo un paso. RESPUESTA INMEDIATA A SUS CONSULTAS: Respondemos al instante consultas y llamados. Podemos programar una videollamada para que usted pueda ver los autos sin moverse de su casa u oficina', 1624543491000,'peugeot208.jpg', 6, 1, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Set de herramientas Stanley Racing','150 pcs','1000','Tienda Oficial STANLEY® Argentina, Set Herramientas RACING 150 Piezas Maletin STANLEY R99-150LA Set de Herramientas',1635343491000, 'Herramientas-Stanley.jpg', 5, 3, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Cabaña Mar de Ostende','A 5 cuadras del mar, esquina, Pdo. Pinamar','5','Cabaña de troncos ubicada en Mar del Ostende con dos entradas independientes, cercada con alambre tejido y cubierta con cerco natural, amplia cocina y comedor. Baño nuevo y 2 (dos) dormitorios con 1 (una) cama matrimonial y el otro con 1 (una) cucheta doble, también cuenta con 1 (un) sofá cama de (2) dos plazas. Cochera amplia descubierta, amplio parque y deck con parrilla. Está ubicada a 5 cuadras del mar, a 50 metros del centro comercial y a 5 minutos (en auto) del centro de Pinamar. Cuenta con todos los servicios: luz, agua corriente, gas natural, TV por cable, WIFI, microondas, pava eléctrica y tostadora', 1636985091000, 'cabaña.jpg', 2,2, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Paleta de pádel Davor Patrol negra','Paleta de pádel', 0.000001, 'El pádel es un deporte para todas las edades, no importa si sos profesional o recién estás empezando. Disfrutalo con una paleta que cumpla con todo lo que buscás. Potenciá tu juego.', 1638021891000, 'paleta-padel.jpg', 1, 1, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Short deportivo de microfibra','Short deportivo con bolsillos para running', 50, 'Shorts Deportivo De Running Atletismo Gimnasio unisex con cintura ajustable en jersey set. Talle S M L XL XXL. Color Negro / Rojo / Azul / Amarillo fluor. Short ligero que aporta confort y libertad de movimientos durante el juego. Con un ajuste perfecto y una composición que brinda comodidad en cada movimiento. El tejido de secado rápido proporciona una gestión óptima de la sudoración', 1638021891000, 'Short-Deportivo.jpg', 1, 3, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Casa en el bosque','Casa de piedra blanca en el bosque peralta ramos',10,'La Casa de piedra blanca en el Bosque Peralta Ramos, 2 dormitorios, baño completo, cocina equipada, Cabaña de piedra de 70 m².', 1636985091000, 'Casa-Piedra.jpg', 2, 2, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Rig mineria ethereum 6 gpu rx 580','Mineria Ethereum', 0.001,'RIGS PARA MINAR ETHEREUM - 180 mh (ganancia diaria aprox 15 a 20 dolares x dia) y subiendo.', 1613397891000, 'Rig-Mineria.jpg', 3, 2, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('ParaElisee','ParaElisee NFT', 10, 'NFT con animación, posee cuadro de regalo', 1628345091000, 'paraelisse.jpg', 4, 3, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Paint Black','Pistola para pintar', 100, 'Pistola de pintura marca paint para tu hogar.', 1628345091000, 'paint-black.jpg', 5, 3, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Bicicleta Cross Lamborghini','Bicicleta cross rodado 16', 2,'Bicicleta cross. Rodado 16. Sonido de motor en manubrio. CONSULTE DISPONIBILIDAD ANTES DE OFERTAR.', 1623420291000, 'bicimoto.jpg', 6, 2, 1);

insert into products (name, shortDescription, price, description, date, image, categoryId, coinId, userId)
values ('Pelota de tenis','Set de pelotas de tenis.', 10, 'Set de 3 pelotas de tenis marca Penn.', 1623420291000, 'pelota-tenis.jpg', 1, 3, 1);