-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: paycript
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `priceTotal` decimal(30,15) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_4faaff6e-f23a-46a9-bdd1-518f692b3e6b` (`userId`),
  CONSTRAINT `FK_4faaff6e-f23a-46a9-bdd1-518f692b3e6b` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_products`
--

DROP TABLE IF EXISTS `cart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a527ba43-64ea-46e4-8b85-cb9e7e4787b7` (`productId`),
  KEY `FK_7ad034d1-5e6c-4740-87b3-a5e88d44f70a` (`cartId`),
  CONSTRAINT `FK_7ad034d1-5e6c-4740-87b3-a5e88d44f70a` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`),
  CONSTRAINT `FK_a527ba43-64ea-46e4-8b85-cb9e7e4787b7` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_products`
--

LOCK TABLES `cart_products` WRITE;
/*!40000 ALTER TABLE `cart_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Deportes'),(2,'Inmuebles'),(3,'Mineria'),(4,'NFT'),(5,'Tecnologia'),(6,'Vehiculos');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coin`
--

DROP TABLE IF EXISTS `coin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coin`
--

LOCK TABLES `coin` WRITE;
/*!40000 ALTER TABLE `coin` DISABLE KEYS */;
INSERT INTO `coin` VALUES (1,'Bitcoin'),(2,'Ethereum'),(3,'USDT');
/*!40000 ALTER TABLE `coin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `shortDescription` varchar(155) NOT NULL,
  `price` decimal(25,15) NOT NULL,
  `description` text NOT NULL,
  `date` bigint(20) NOT NULL,
  `image` varchar(255) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `coinId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1b7c2dcd-c38b-4537-a627-ba94f738361a` (`categoryId`),
  KEY `FK_1e9636b0-4d29-4d26-8de7-73cd27aa03b1` (`coinId`),
  CONSTRAINT `FK_1b7c2dcd-c38b-4537-a627-ba94f738361a` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`),
  CONSTRAINT `FK_1e9636b0-4d29-4d26-8de7-73cd27aa03b1` FOREIGN KEY (`coinId`) REFERENCES `coin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cafetera Moulinex dolce gusto','Máquina manual de diseño minimalista y tecnología avanzada.',0.000040000000000,'Cafetera manual de diseño y tecnologia avanzada. Super economica.',1624543491000,'img-cafetera-moulinex.jpg',5,1,NULL),(2,'Peugeot 208','208 color amarillo',1.000000000000000,'Tu peugeot 208 0KM a solo un paso. RESPUESTA INMEDIATA A SUS CONSULTAS: Respondemos al instante consultas y llamados. Podemos programar una videollamada para que usted pueda ver los autos sin moverse de su casa u oficina',1624543491000,'peugeot208.jpg',6,1,NULL),(3,'Set de herramientas Stanley Racing','150 pcs',1000.000000000000000,'Tienda Oficial STANLEY® Argentina, Set Herramientas RACING 150 Piezas Maletin STANLEY R99-150LA Set de Herramientas',1635343491000,'Herramientas-Stanley.jpg',5,3,NULL),(4,'Cabaña Mar de Ostende','A 5 cuadras del mar, esquina, Pdo. Pinamar',5.000000000000000,'Cabaña de troncos ubicada en Mar del Ostende con dos entradas independientes, cercada con alambre tejido y cubierta con cerco natural, amplia cocina y comedor. Baño nuevo y 2 (dos) dormitorios con 1 (una) cama matrimonial y el otro con 1 (una) cucheta doble, también cuenta con 1 (un) sofá cama de (2) dos plazas. Cochera amplia descubierta, amplio parque y deck con parrilla. Está ubicada a 5 cuadras del mar, a 50 metros del centro comercial y a 5 minutos (en auto) del centro de Pinamar. Cuenta con todos los servicios: luz, agua corriente, gas natural, TV por cable, WIFI, microondas, pava eléctrica y tostadora',1636985091000,'cabaña.jpg',2,2,NULL),(5,'Paleta de pádel Davor Patrol negra','Paleta de pádel',0.000001000000000,'El pádel es un deporte para todas las edades, no importa si sos profesional o recién estás empezando. Disfrutalo con una paleta que cumpla con todo lo que buscás. Potenciá tu juego. Esta paleta de pádel compuesta por soft eva te permitirá conseguir una mayor estabilidad, duplicando la capacidad de respuesta en todo tipo de golpes.',1638021891000,'paleta-padel.jpg',1,1,NULL),(6,'Short deportivo de microfibra','Short deportivo con bolsillos para running',50.000000000000000,'Shorts Deportivo De Running Atletismo Gimnasio unisex con cintura ajustable en jersey set. Talle S M L XL XXL. Color Negro / Rojo / Azul / Amarillo fluor. Short ligero que aporta confort y libertad de movimientos durante el juego. Con un ajuste perfecto y una composición que brinda comodidad en cada movimiento. El tejido de secado rápido proporciona una gestión óptima de la sudoración',1638021891000,'Short-Deportivo.jpg',1,3,NULL),(7,'Casa en el bosque','Casa de piedra blanca en el bosque peralta ramos',10.000000000000000,'La Casa de piedra blanca en el Bosque Peralta Ramos, 2 dormitorios, baño completo, cocina equipada, Cabaña de piedra de 70 m².',1636985091000,'Casa-Piedra.jpg',2,2,NULL),(8,'Rig mineria ethereum 6 gpu rx 580','Mineria Ethereum',0.001000000000000,'RIGS PARA MINAR ETHEREUM - 180 mh (ganancia diaria aprox 15 a 20 dolares x dia) y subiendo.',1613397891000,'Rig-Mineria.jpg',3,2,NULL),(9,'ParaElisee','ParaElisee NFT',10.000000000000000,'NFT con animación, posee cuadro de regalo',1628345091000,'paraelisse.jpg',4,3,NULL),(10,'Paint Black','Pistola para pintar',100.000000000000000,'Pistola de pintura marca paint para tu hogar.',1628345091000,'paint-black.jpg',5,3,NULL),(11,'Bicicleta Cross Lamborghini','Bicicleta cross rodado 16',2.000000000000000,'Bicicleta cross. Rodado 16. Sonido de motor en manubrio. CONSULTE DISPONIBILIDAD ANTES DE OFERTAR.',1623420291000,'bicimoto.jpg',6,2,NULL),(12,'Pelota de tenis','Set de pelotas de tenis.',10.000000000000000,'Set de 3 pelotas de tenis marca Penn.',1623420291000,'pelota-tenis.jpg',1,3,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_products`
--

DROP TABLE IF EXISTS `user_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productsId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_88aafa5c-1f27-4af3-bfa0-942d6e4159cf` (`userId`),
  KEY `FK_b78a8696-6a03-4c1a-af19-e40bb9ff37cf` (`productsId`),
  CONSTRAINT `FK_88aafa5c-1f27-4af3-bfa0-942d6e4159cf` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_b78a8696-6a03-4c1a-af19-e40bb9ff37cf` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_products`
--

LOCK TABLES `user_products` WRITE;
/*!40000 ALTER TABLE `user_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `dni` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `location` varchar(155) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Maria Belen','Legresti',38630829,'mariabelenlegresti@gmail.com','prueba123','default-user.png','Lanus, Buenos Aires'),(2,'marcos','zulian',35108008,'imaquagarage@gmail.com','$2a$10$zNs2aWgqDldRE.SsfYregueg63QVhw2Ky6g2JFJPz5Imeu90CL.5W','1640045381597_img.jpg','colanchanga'),(3,'marcos','zulian',35108008,'as@gmail.com','$2a$10$CO/nIUvZjVo8lB.usB2HmeXHTTSpCGEnaZXv1hmhRQIK7Zh3Iw3ui','1640045450721_img.jpg','colanchanga');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'paycript'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-20 21:40:09
