-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3606
-- Tiempo de generación: 11-11-2020 a las 17:58:38
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion`
--

CREATE TABLE `cotizacion` (
  `idcotizacion` int(10) NOT NULL,
  `fk_idproductos` int(10) NOT NULL,
  `fcotizacion` int(100) NOT NULL,
  `cantidad` int(50) NOT NULL,
  `valorTotal` int(50) NOT NULL,
  `fechaCreacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cotizacion`
--

INSERT INTO `cotizacion` (`idcotizacion`, `fk_idproductos`, `fcotizacion`, `cantidad`, `valorTotal`, `fechaCreacion`) VALUES
(2, 1, 2, 2, 24, '2020-11-11 09:22:44'),
(3, 1, 3, 3, 36, '2020-11-11 09:23:36'),
(4, 1, 4, 2, 24, '2020-11-11 09:23:58'),
(5, 2, 4, 3, 39, '2020-11-11 09:37:11'),
(6, 1, 6, 2, 24, '2020-11-11 09:58:22'),
(7, 2, 6, 4, 52, '2020-11-11 09:59:00'),
(8, 1, 8, 2, 24, '2020-11-11 10:19:23'),
(9, 2, 9, 2, 26, '2020-11-11 10:22:07'),
(10, 1, 9, 2, 24, '2020-11-11 10:22:22'),
(11, 1, 11, 1, 12, '2020-11-11 10:29:34'),
(12, 1, 12, 2, 24, '2020-11-11 10:30:36'),
(13, 2, 12, 3, 39, '2020-11-11 10:30:47'),
(14, 1, 14, 2, 24, '2020-11-11 10:53:51'),
(15, 1, 15, 3, 36, '2020-11-11 10:55:18'),
(16, 1, 16, 5, 60, '2020-11-11 11:00:05'),
(17, 2, 16, 2, 26, '2020-11-11 11:00:37'),
(18, 1, 18, 2, 24, '2020-11-11 11:01:31'),
(19, 2, 18, 2, 26, '2020-11-11 11:01:38'),
(20, 1, 20, 4, 48, '2020-11-11 11:06:09'),
(21, 2, 21, 2, 26, '2020-11-11 11:06:52'),
(22, 1, 22, 2, 24, '2020-11-11 11:07:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturaelectronica`
--

CREATE TABLE `facturaelectronica` (
  `idFactura` int(10) NOT NULL,
  `idCotizacion` int(10) NOT NULL,
  `NombreComprador` varchar(100) NOT NULL,
  `ContactoComprador` varchar(50) NOT NULL,
  `documentoComprador` int(20) NOT NULL,
  `dirrComprador` varchar(100) NOT NULL,
  `valortotal` int(30) NOT NULL,
  `fechaCreacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idproductos` int(10) NOT NULL,
  `referencia` varchar(50) NOT NULL,
  `descripción` varchar(500) NOT NULL,
  `caracteristicas` varchar(1000) NOT NULL,
  `valor` int(50) NOT NULL,
  `fechaCreacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idproductos`, `referencia`, `descripción`, `caracteristicas`, `valor`, `fechaCreacion`) VALUES
(1, '1231231', 'Producto 1', 'zxasdasdsadasdsadsaadsadasdds', 12, '2020-11-10 14:51:02'),
(2, '12321321', 'Producto 2', 'sadsadasdsadadassadsadsadasdsadasdsa', 13, '2020-11-10 14:51:49'),
(4, '213212132121321', 'sdsadsadsasd', 'sadsadsadasdaddasdsa', 123343, '2020-11-10 15:22:11'),
(5, '12322112312', 'szdsadasdsadasdasdsad', 'sadsadasdasdsadsadasdasdasdasdddasd', 12343, '2020-11-10 15:23:59'),
(6, '21232132121', 'adasdsadasasdsdsdasdsa', 'sadsadsadasdasdsadsadsddddd', 1234, '2020-11-10 15:25:49'),
(9, '2321321321123321213', 'sdasdsadsadasddsadasdsa', 'asdsadsadsadsadsasadasds', 123, '2020-11-10 15:34:25'),
(10, '3432432423', 'sdsadasdsdasdddddd sas', 'sadasdgvhhhhhhhh', 65, '2020-11-11 07:11:05'),
(11, '87', 'ghjhghkjhgkjghgh', 'vcbcvbvcbvbv', 34, '2020-11-11 07:11:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `root` tinyint(1) NOT NULL DEFAULT 0,
  `token` varchar(32) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `observations` varchar(45) DEFAULT NULL,
  `fk_estados` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `telefono`, `direccion`, `email`, `username`, `password`, `verified`, `root`, `token`, `created_at`, `updated_at`, `deleted_at`, `observations`, `fk_estados`) VALUES
(1, 'Andrey Sarria', '3183263424', 'cra 42# 13c 25', 'andreypatino@gmail.com', 'andreypatino', '202cb962ac59075b964b07152d234b70', 1, 1, NULL, '2020-11-10 11:20:17', '2020-11-10 11:20:17', NULL, NULL, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  ADD PRIMARY KEY (`idcotizacion`);

--
-- Indices de la tabla `facturaelectronica`
--
ALTER TABLE `facturaelectronica`
  ADD PRIMARY KEY (`idFactura`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproductos`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username_UNIQUE` (`username`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cotizacion`
--
ALTER TABLE `cotizacion`
  MODIFY `idcotizacion` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `facturaelectronica`
--
ALTER TABLE `facturaelectronica`
  MODIFY `idFactura` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idproductos` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
