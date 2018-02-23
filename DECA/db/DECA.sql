SET NAMES UTF8;

DROP DATABASE IF EXISTS DECA;

CREATE DATABASE DECA CHARSET=UTF8;

USE DECA;

-- ----------------------------
-- Table structure for `DECA_index_carousel`
-- ----------------------------
DROP TABLE IF EXISTS `DECA_index_carousel`;
CREATE TABLE `DECA_index_carousel` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DECA_index_carousel
-- ----------------------------
INSERT INTO `DECA_index_carousel` VALUES ('1', 'images/index/1493169888.jpg', '轮播广告商品1', 'products.html?kw=');
INSERT INTO `DECA_index_carousel` VALUES ('7', 'images/index/1493170128.jpg', '轮播广告商品2', 'products.html?kw=');


-- ----------------------------
-- Table DECA_user  #用户列表
-- ----------------------------
CREATE TABLE DECA_user(
	uid INT(11) NOT NULL AUTO_INCREMENT,
	uname VARCHAR(32) DEFAULT NULL,
	upwd varchar(32) default NULL,
	email varchar(64) default NULL,
	phone varchar(16) default NULL,
	gender int(11) default NULL,
	avatar varchar(128) default 'default.png',
	PRIMARY KEY (uid)
);

INSERT INTO DECA_user VALUES ('1', 'dingding', '123456', 'ding@qq.com', '13511011000', '0','default.png');
INSERT INTO DECA_user VALUES ('2', 'dangdang', '123456', 'dang@qq.com', '13501234568', '1','default.png');
INSERT INTO DECA_user VALUES ('3', 'doudou', '123456', 'dou@qq.com', '13501234569', '1','default.png');
INSERT INTO DECA_user VALUES ('4', 'yaya', '123456', 'ya@qq.com', '13501234560', '0','default.png');


-- ----------------------------
-- Table DECA_laptop  #商品列表
-- ----------------------------

DROP TABLE IF EXISTS `DECA_laptop`;
CREATE TABLE `DECA_laptop` (
  `lid` int(11) NOT NULL auto_increment,
  `family_id` int(11) default NULL,
  `family_name` varchar(64) default NULL,		 
  `title` varchar(128) default NULL,
  `details` varchar(1024) default NULL,
  `price` decimal(10,2) default NULL,
  `spec` varchar(64) default NULL,
  `shelf_time` bigint(20) default NULL,
  `sold_count` int(11) default NULL,
  `is_onsale` tinyint(1) default NULL,
  `lg` varchar(128) default NULL,	
  PRIMARY KEY  (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Records of DECA_laptop
-- ----------------------------
INSERT INTO `DECA_laptop` VALUES ('1', '1', '17/SS灯具设计新品', '圆形玻璃灯','玻璃灯工以玻璃管为基材，在专用的喷灯火焰上进行局部加热后，利用其热塑性和热熔性进行弯、吹、按、焊等加工成型的技术。是玻璃仪器和玻璃制品如玻璃温度计、保温瓶、灯泡、注射器、安瓿、管制瓶、电真空器件等生产中二次热加工的成型手段。', '169.00', '原色', '150123456789','694','1','images/product_details/1/1_1.jpg');
INSERT INTO `DECA_laptop` VALUES ('2', '2', '17/SS桌椅新品设计', 'Tapani table','桌子是一种常用家具，上有平面，下有支柱。可以在上面放东西、做事情、吃饭、写字、工作等。有光滑平板，由腿和其它支撑物固定起来的家具，在语文中亦可作名词。为了迎合大众需求，桌子的类型丰富多样。桌子按需求可以分为很多类别，比如办公桌、餐桌、课桌、电脑桌、讲桌等。', '399.00', '原色', '150123456789','242','1','images/product_details/2/2_1.jpg');
INSERT INTO `DECA_laptop` VALUES ('3', '2', '17/SS桌椅新品设计', 'Stakk小方椅','椅子是一种有靠背、有的还有扶手的坐具。古代席地而坐，原没有椅子，“椅”本是木名。《诗经》有“其桐其椅”，“椅”即“梓”，是一种树木的名称。', '99.00', '原色', '150123456789','252','1','images/product_details/3/3_1.jpg');
INSERT INTO `DECA_laptop` VALUES ('4', '1', '17/SS灯具设计新品', 'Pendant lamp','吊灯无论是以电线或以铁支垂吊，都不能吊得太矮，阻碍人正常的视线或令人觉得刺眼。以饭厅的吊灯为例，理想的高度是要在饭桌上形成一池灯光，但又不会阻碍桌上众人互望的视线。现时吊灯吊支已装上弹簧或高度调节器，可适合不同高度的楼底和需要性。', '69.00', '原色', '150123456789','256','1','images/product_details/4/4_1.jpg');
INSERT INTO `DECA_laptop` VALUES ('5', '3', '16/FW全系家居展示', '木制菜碟小套件','碟子，一种盛食品或调味品的小而浅的器皿，比盘子小，多为圆形，也有其他的形状，如椭圆形、长方形等。', '69.00', '原色', '150123456789','474','1','images/product_details/5/5_1.jpg');
INSERT INTO `DECA_laptop` VALUES ('6', '1', '17/SS灯具设计新品', 'Vandmand简洁小吊灯','吊装在室内天花板上的高级装饰用照明灯。吊灯无论是以电线或以铁支垂吊，都不能吊得太矮，阻碍人正常的视线或令人觉得刺眼。以饭厅的吊灯为例，理想的高度是要在饭桌上形成一池灯光，但又不会阻碍桌上众人互望的视线。现时吊灯吊支已装上弹簧或高度调节器，可适合不同高度的楼底和需要性。', '69.00', '原色', '150123456789','373','1','images/product_details/6/6_1.jpg');
INSERT INTO `DECA_laptop` VALUES ('7', '2', '17/SS桌椅新品设计', 'FIN-95懒人小方椅','椅子是一种有靠背、有的还有扶手的坐具。古代席地而坐，原没有椅子，“椅”本是木名。《诗经》有“其桐其椅”，“椅”即“梓”，是一种树木的名称。', '399.00', '原色', '150123456789','1188','1','images/product_details/7/7_1.jpg');
INSERT INTO `DECA_laptop` VALUES ('8', '1', '17/SS灯具设计新品', '橙色吊灯','吊灯无论是以电线或以铁支垂吊，都不能吊得太矮，阻碍人正常的视线或令人觉得刺眼。以饭厅的吊灯为例，理想的高度是要在饭桌上形成一池灯光，但又不会阻碍桌上众人互望的视线。现时吊灯吊支已装上弹簧或高度调节器，可适合不同高度的楼底和需要性。', '189.00', '原色', '150123456789','1793','1','images/product_details/8/8_1.jpg');



-- ----------------------------
-- Table structure for `DECA_laptop_family` #产品类型
-- ----------------------------
DROP TABLE IF EXISTS `DECA_laptop_family`;
CREATE TABLE `DECA_laptop_family` (
  `fid` int(11) NOT NULL auto_increment,
  `fname` varchar(32) default NULL,
  PRIMARY KEY  (`fid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DECA_laptop_family
-- ----------------------------
INSERT INTO `DECA_laptop_family` VALUES ('1', '17/SS灯具设计新品');
INSERT INTO `DECA_laptop_family` VALUES ('2', '17/SS桌椅新品设计');
INSERT INTO `DECA_laptop_family` VALUES ('3', '16/FW全系家居展示');



-- ----------------------------
-- Table structure for `DECA_laptop_pic` #产品图片
-- ----------------------------
DROP TABLE IF EXISTS `DECA_laptop_pic`;
CREATE TABLE `DECA_laptop_pic` (
  `pid` int(11) NOT NULL auto_increment,
  `laptop_id` int(11) default NULL,
  `lg` varchar(128) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=297 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DECA_laptop_pic   
-- ----------------------------
INSERT INTO `DECA_laptop_pic` VALUES ('1', '1', 'images/product_details/1/1_1.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('2', '1', 'images/product_details/1/1_2.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('3', '1', 'images/product_details/1/1_3.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('4', '2', 'images/product_details/2/2_1.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('5', '2', 'images/product_details/2/2_2.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('6', '2', 'images/product_details/2/2_3.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('7', '2', 'images/product_details/2/2_4.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('8', '2', 'images/product_details/2/2_5.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('9', '3', 'images/product_details/3/3_1.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('10', '3', 'images/product_details/3/3_2.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('11', '3', 'images/product_details/3/3_3.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('12', '3', 'images/product_details/3/3_4.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('13', '4', 'images/product_details/4/4_1.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('14', '4', 'images/product_details/4/4_2.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('15', '4', 'images/product_details/4/4_3.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('16', '4', 'images/product_details/4/4_4.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('17', '5', 'images/product_details/5/5_1.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('18', '5', 'images/product_details/5/5_2.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('19', '6', 'images/product_details/6/6_1.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('20', '6', 'images/product_details/6/6_2.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('21', '7', 'images/product_details/7/7_1.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('22', '7', 'images/product_details/7/7_2.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('23', '7', 'images/product_details/7/7_3.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('24', '7', 'images/product_details/7/7_4.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('25', '7', 'images/product_details/7/7_5.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('26', '7', 'images/product_details/7/7_6.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('27', '7', 'images/product_details/7/7_7.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('28', '8', 'images/product_details/8/8_1.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('29', '8', 'images/product_details/8/8_2.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('30', '8', 'images/product_details/8/8_3.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('31', '8', 'images/product_details/8/8_4.jpg');
INSERT INTO `DECA_laptop_pic` VALUES ('32', '8', 'images/product_details/8/8_5.jpg');




