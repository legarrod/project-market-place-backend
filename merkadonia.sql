-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2023 a las 04:05:30
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hospital-pets`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quote`
--

CREATE TABLE `quote` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `hour` varchar(10) DEFAULT NULL,
  `doctor` varchar(100) DEFAULT NULL,
  `id_pet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `quote`
--

INSERT INTO `quote` (`id`, `date`, `hour`, `doctor`, `id_pet`) VALUES
(1, '2023-02-24', '10:00 am', 'Carlos Perez', 1),
(2, '2023-02-25', '11:00 am', 'Carlos Perez', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `rol` varchar(20) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `full_name`, `phone`, `address`, `email`, `rol`, `password`) VALUES
(1, 'Luis Garcia', '1111111', 'Calle 34 # 43-56', 'correo@gmail.com', 'user', '1234'),
(5, 'Andres Dias', '343434343', '', 'andres@gmail.com', 'USER', '$2b$10$gAO80ciE2Y2ZTbSH1YJzneVMNhS9nqZ7RKRI/Z4arT8LGZ65jSTce'),
(6, 'Andres Dias', '343434343', '', 'andres@gmail.com', 'USER', '$2b$10$T3Zhv/.2O2tATfzdF/4bCeDPT1x1fqIaciZJIkwIyGK3xNfP1q6JG');

--
-- Índices para tablas volcadas
--


--
-- Indices de la tabla `quote`
--
ALTER TABLE `quote`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor` (`doctor`),

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--


--
-- AUTO_INCREMENT de la tabla `quote`
--
ALTER TABLE `quote`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--

--
-- Filtros para la tabla `quote`
--
ALTER TABLE `quote`
  ADD CONSTRAINT `quote_ibfk_1` FOREIGN KEY (`id_pet`) REFERENCES `pets` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
