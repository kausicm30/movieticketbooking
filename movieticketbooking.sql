-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2021 at 01:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movieticketbooking`
--

-- --------------------------------------------------------

--
-- Table structure for table `movieticket`
--

CREATE TABLE `movieticket` (
  `email` varchar(50) DEFAULT NULL,
  `nooftickets` int(11) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  `moviename` varchar(50) DEFAULT NULL,
  `totalamount` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movieticket`
--

INSERT INTO `movieticket` (`email`, `nooftickets`, `time`, `moviename`, `totalamount`) VALUES
('kausic@gmail.com', 2, '11.00am', 'Master', '300'),
('balu@gmail.com', 3, '11.00am', 'KGF', '300'),
('kausicm30@gmail.com', 4, '11.00am', 'Master', '600'),
('kausicm30@gmail.com', 4, '11.00am', 'Drishyam 2', '400');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`name`, `email`, `password`) VALUES
('kausic', 'kausicm30@gmail.com', 'kausic'),
('balu', 'balu@gmail.com', 'kausic');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
