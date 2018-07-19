CREATE TABLE   IF NOT EXISTS  `kyc_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addr` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `kyc_info` set addr='0xd16F9f595F748c4B77eBA290f3eD51ea56ED2fDe';
