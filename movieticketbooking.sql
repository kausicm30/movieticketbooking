-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2021 at 03:53 AM
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
('balu', 'balu@gmail.com', 'kausic'),
('manickam', 'manickam@gmail.com', 'kausic'),
('akshai', 'akshai@gmail.com', 'kausic'),
('mathan', 'mathan@gmail.com', 'kausic'),
('mathan', 'mathan@gmail.com', 'kausic'),
('manickam', 'manickam@gmail.com', 'kausic');

-- --------------------------------------------------------

--
-- Table structure for table `seatbooking`
--

CREATE TABLE `seatbooking` (
  `email` varchar(50) DEFAULT NULL,
  `moviename` varchar(50) DEFAULT NULL,
  `movietime` varchar(50) DEFAULT NULL,
  `nooftickets` varchar(50) DEFAULT NULL,
  `seatnumbers` varchar(50) DEFAULT NULL,
  `totalamount` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seatbooking`
--

INSERT INTO `seatbooking` (`email`, `moviename`, `movietime`, `nooftickets`, `seatnumbers`, `totalamount`) VALUES
('kausicm30@gmail.com', 'Master', '2.00pm', '3', '29,30,31', '450'),
('balu@gmail.com', 'Master', '2.00pm', '2', '15,16', '300'),
('mathan@gmail.com', 'Drishyam 2', '8.00pm', '4', '17,18,23,24', '600'),
('kausicm30@gmail.com', 'WAR', '8.00am', '4', '3,4,5,6', '600'),
('balu@gmail.com', 'KGF', '5.00pm', '4', '13,18,27,39', '600'),
('balu@gmail.com', 'GodzillavsKong', '11.00am', '4', '11,12,21,22', '600'),
('kausicm30@gmail.com', 'Master', '2.00pm', '3', '3,4,5', '450');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
