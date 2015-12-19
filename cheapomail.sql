

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `cheapomail`
--

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `body` text NOT NULL,
  `subject` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `recipient_ids` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `message_read`
--

 TABLE IF NOT EXISTS `message_read` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` int(11) NOT NULL,
  `reader_id` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `password` text NOT NULL,
  `username` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;



INSERT INTO user (first_name, last_name, password, username) VALUES ('Michael','Green','project','mikeX');
INSERT INTO user (first_name, last_name, password, username) VALUES ('Adrene','McIntosh','cheapo','sanique');
INSERT INTO user (first_name, last_name, password, username) VALUES ('Romaria','Martin','vanillamilk','worlboss');

SHOW TABLES;
SELECT * FROM user;
SELECT * FROM message;
SELECT * FROM message_read;
