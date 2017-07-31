/*
Navicat MySQL Data Transfer

Source Server         : h507
Source Server Version : 50632
Source Host           : localhost:3306
Source Database       : h507

Target Server Type    : MYSQL
Target Server Version : 50632
File Encoding         : 65001

Date: 2017-02-15 15:25:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for b_relatebook
-- ----------------------------
DROP TABLE IF EXISTS `b_relatebook`;
CREATE TABLE `b_relatebook` (
  `bookrelate_id` int(11) NOT NULL AUTO_INCREMENT,
  `book_id` int(11) NOT NULL,
  `relate_bookid` int(11) NOT NULL,
  PRIMARY KEY (`bookrelate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of b_relatebook
-- ----------------------------
INSERT INTO `b_relatebook` VALUES ('1', '1', '2');
INSERT INTO `b_relatebook` VALUES ('2', '1', '3');
INSERT INTO `b_relatebook` VALUES ('3', '1', '4');
INSERT INTO `b_relatebook` VALUES ('4', '2', '1');
INSERT INTO `b_relatebook` VALUES ('5', '2', '3');
INSERT INTO `b_relatebook` VALUES ('6', '2', '4');
INSERT INTO `b_relatebook` VALUES ('7', '3', '1');
INSERT INTO `b_relatebook` VALUES ('8', '3', '2');
INSERT INTO `b_relatebook` VALUES ('9', '3', '4');
INSERT INTO `b_relatebook` VALUES ('10', '4', '1');
INSERT INTO `b_relatebook` VALUES ('11', '4', '2');
INSERT INTO `b_relatebook` VALUES ('12', '4', '3');
INSERT INTO `b_relatebook` VALUES ('13', '5', '1');
INSERT INTO `b_relatebook` VALUES ('14', '5', '2');
INSERT INTO `b_relatebook` VALUES ('15', '47', '34');
INSERT INTO `b_relatebook` VALUES ('16', '48', '38');
