-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2022 at 05:24 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbms-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `constructions`
--

CREATE TABLE `constructions` (
  `id` varchar(225) NOT NULL,
  `title` varchar(100) NOT NULL,
  `owner` varchar(50) NOT NULL,
  `estimate_cost` double NOT NULL,
  `location` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `request_material`
--

CREATE TABLE `request_material` (
  `material` varchar(50) NOT NULL,
  `cost` float NOT NULL,
  `quantity` varchar(10) NOT NULL,
  `uid` varchar(225) DEFAULT NULL,
  `site_id` varchar(225) DEFAULT NULL,
  `isApproved` tinyint(1) NOT NULL DEFAULT 0,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` varchar(225) NOT NULL,
  `receiver` varchar(225) NOT NULL,
  `details` varchar(225) NOT NULL,
  `amount` double NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `site_id` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` varchar(225) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_no` int(10) NOT NULL,
  `password` varchar(225) NOT NULL,
  `site_id` varchar(225) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `name`, `email`, `phone_no`, `password`, `site_id`, `isAdmin`) VALUES
('6877e6b0-8704-11ec-ae7e-c713dd58fe58', 'admin', 'admin@gmail.com', 1234567890, '$2a$05$s04ZDmmopl0fbtsdlaDMi.DNdtBbvSy7FBYyr9ehKZWm7q/ssKzgm', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `workers`
--

CREATE TABLE `workers` (
  `id` varchar(225) NOT NULL,
  `name` varchar(50) NOT NULL,
  `contact_info` varchar(100) NOT NULL,
  `pay_per_day` int(11) NOT NULL,
  `site_id` varchar(225) DEFAULT NULL,
  `gender` varchar(1) NOT NULL,
  `work_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `constructions`
--
ALTER TABLE `constructions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `location` (`location`);

--
-- Indexes for table `request_material`
--
ALTER TABLE `request_material`
  ADD KEY `uid` (`uid`),
  ADD KEY `site_id` (`site_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_ibfk_1` (`site_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `site_id` (`site_id`);

--
-- Indexes for table `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FOREIGN` (`site_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `request_material`
--
ALTER TABLE `request_material`
  ADD CONSTRAINT `request_material_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `request_material_ibfk_2` FOREIGN KEY (`site_id`) REFERENCES `constructions` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`site_id`) REFERENCES `constructions` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`site_id`) REFERENCES `constructions` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Constraints for table `workers`
--
ALTER TABLE `workers`
  ADD CONSTRAINT `FOREIGN` FOREIGN KEY (`site_id`) REFERENCES `constructions` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
