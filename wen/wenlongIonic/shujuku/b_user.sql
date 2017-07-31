/*
Navicat MySQL Data Transfer

Source Server         : h507
Source Server Version : 50632
Source Host           : localhost:3306
Source Database       : h507

Target Server Type    : MYSQL
Target Server Version : 50632
File Encoding         : 65001

Date: 2017-02-15 15:25:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for b_user
-- ----------------------------
DROP TABLE IF EXISTS `b_user`;
CREATE TABLE `b_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_tel` char(11) NOT NULL,
  `user_sex` char(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of b_user
-- ----------------------------
INSERT INTO `b_user` VALUES ('1', 'tom', 'e10adc3949ba59abbe56e057f20f883e', '13890879001', 'w');
INSERT INTO `b_user` VALUES ('2', 'wang', 'e10adc3949ba59abbe56e057f20f883e', '2134567', 'w');
INSERT INTO `b_user` VALUES ('3', 'root', 'e10adc3949ba59abbe56e057f20f883e', '12346556', null);
INSERT INTO `b_user` VALUES ('4', 'liu', 'e10adc3949ba59abbe56e057f20f883e', '231465', null);
INSERT INTO `b_user` VALUES ('5', 'liuyan', 'e10adc3949ba59abbe56e057f20f883e', '23457', null);
INSERT INTO `b_user` VALUES ('6', 'liuyifei', 'e10adc3949ba59abbe56e057f20f883e', '3457', null);
INSERT INTO `b_user` VALUES ('7', 'ya', 'e10adc3949ba59abbe56e057f20f883e', '32456', null);
INSERT INTO `b_user` VALUES ('8', 'hehe', 'e10adc3949ba59abbe56e057f20f883e', '12345354', null);
INSERT INTO `b_user` VALUES ('9', 'haha', 'e10adc3949ba59abbe56e057f20f883e', '432567', null);
INSERT INTO `b_user` VALUES ('10', 'hhh', 'e10adc3949ba59abbe56e057f20f883e', '23465', null);
INSERT INTO `b_user` VALUES ('11', 'hhhh', 'e10adc3949ba59abbe56e057f20f883e', '2134256', null);
INSERT INTO `b_user` VALUES ('12', 'hhhhh', 'e10adc3949ba59abbe56e057f20f883e', '3456', null);
INSERT INTO `b_user` VALUES ('13', 'heihei', 'e10adc3949ba59abbe56e057f20f883e', '213657', null);
INSERT INTO `b_user` VALUES ('14', 'ht', 'e10adc3949ba59abbe56e057f20f883e', '4325678', null);
INSERT INTO `b_user` VALUES ('15', 'wo', 'e10adc3949ba59abbe56e057f20f883e', '23768', null);
INSERT INTO `b_user` VALUES ('16', 'we', 'e10adc3949ba59abbe56e057f20f883e', '234567', null);
