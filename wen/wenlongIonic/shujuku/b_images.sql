/*
Navicat MySQL Data Transfer

Source Server         : h507
Source Server Version : 50632
Source Host           : localhost:3306
Source Database       : h507

Target Server Type    : MYSQL
Target Server Version : 50632
File Encoding         : 65001

Date: 2017-02-15 15:25:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for b_images
-- ----------------------------
DROP TABLE IF EXISTS `b_images`;
CREATE TABLE `b_images` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `image_name` varchar(500) NOT NULL,
  `book_id` int(11) NOT NULL,
  PRIMARY KEY (`image_id`,`book_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `b_images_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `b_book` (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of b_images
-- ----------------------------
INSERT INTO `b_images` VALUES ('2', '628058a1bf28d414c.jpg', '1');
INSERT INTO `b_images` VALUES ('3', '3.jpg', '3');
INSERT INTO `b_images` VALUES ('4', '4.jpg', '4');
INSERT INTO `b_images` VALUES ('5', '2.jpg', '2');
INSERT INTO `b_images` VALUES ('6', '808158a1bf3ec09ca.jpg', '5');
