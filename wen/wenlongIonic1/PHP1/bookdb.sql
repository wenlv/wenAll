-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2016-12-16 10:08:35
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookdb`
--

-- --------------------------------------------------------

--
-- 表的结构 `b_book`
--

CREATE TABLE `b_book` (
  `book_id` int(11) NOT NULL,
  `book_title` varchar(255) NOT NULL,
  `book_author` varchar(255) NOT NULL,
  `book_price` float NOT NULL,
  `book_pudate` int(11) NOT NULL,
  `book_status` char(5) NOT NULL,
  `book_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_book`
--

INSERT INTO `b_book` (`book_id`, `book_title`, `book_author`, `book_price`, `book_pudate`, `book_status`, `book_desc`) VALUES
(1, 'HTML5', 'W3C', 8.5, 1480490660, 'true', '<p>摘要:HTML5源码,图片特效,翻页</p>\r\n<p>HTML5响应式翻页效果，鼠标移到右上角会看到翻页效果，需要鼠标拖动后翻页，支持ie9+，html5浏览器。&nbsp;<br />　　单页和双页。&nbsp;<br />　　自动播放和暂停。&nbsp;<br />　　点击左右翻页。&nbsp;<br />　　鼠标点击左右页面区域翻页。&nbsp;<br />　　鼠标点击左右页面区域拖拉翻页。&nbsp;<br />　　键盘右右键翻页。&nbsp;<br />　　双击鼠标放大，双击鼠标（或ESC）还原（未提供）。&nbsp;<br />　　文件夹幻灯片放映（未提供）。&nbsp;<br />　　幻灯片播放速度设置。&nbsp;<br />　　目录式导航页面（未提供）。&nbsp;<br />　　文字、图片、视频支持。&nbsp;<br />　　url链接支持。&nbsp;<br />　　自定义背景颜色（未提供）。&nbsp;<br />　　30+背景图案（未提供）。&nbsp;<br />　　台式机及移动设备的工作原理相同。&nbsp;<br />　　可调整大小的书 - downscales来适应器件分辨率。&nbsp;<br />　　无限数量的页面。</p>\r\n'),
(2, 'Java', 'Oracle', 78.5, 1480490660, 'false', '<p>　　《计算机科学丛书：Java编程思想（第4版）》赢得了全球程序员的广泛赞誉，即使是晦涩的概念，在BruceEckel的文字亲和力和小而直接的编程示例面前也会化解于无形。从Java的基础语法到高级特性（深入的面向对象概念、多线程、自动项目构建、单元测试和调试等），本书都能逐步指导你轻松掌握。<br>　　从《计算机科学丛书：Java编程思想（第4版）》获得的各项大奖以及来自世界各地的读者评论中，不难看出这是一本经典之作。本书的作者拥有多年教学经验，对C、C++以及Java语言都有独到、深入的见解，以通俗易懂及小而直接的示例解释了一个个晦涩抽象的概念。本书共22章，包括操作符、控制执行流程、访问权限控制、复用类、多态、接口、通过异常处理错误、字符串、泛型、数组、容器深入研究、JavaI/O系统、枚举类型、并发以及图形化用户界面等内容。这些丰富的内容，包含了Java语言基础语法以及高级特性，适合各个层次的Java程序员阅读，同时也是高等院校讲授面向对象程序设计语言以及Java语言的好教材和参考书。<br>　　《计算机科学丛书：Java编程思想（第4版）》特点：<br>　　适合初学者与专业人员的经典的面向对象叙述方式，为更新的JavaSE5/6增加了新的示例和章节。<br>　　测验框架显示程序输出。<br>　　设计模式贯穿于众多示例中：适配器、桥接器、职责链、命令、装饰器、外观、工厂方法、享元、点名、数据传输对象、空对象、代理、单例、状态、策略、模板方法以及访问者。<br>　　为数据传输引入了XML，为用户界面引入了SWT和Flash。<br>　　重新撰写了有关并发的章节，有助于读者掌握线程的相关知识。<br>　　专门为第4版以及JavaSE5/6重写了700多个编译文件中的500多个程序。<br>　　支持网站包含了所有源代码、带注解的解决方案指南、网络日志以及多媒体学习资料。<br>　　覆盖了所有基础知识，同时论述了高级特性。<br>　　详细地阐述了面向对象原理。<br>　　在线可获得Java讲座CD，其中包含BruceEckel的全部多媒体讲座。<br>　　在网站上可以观看现场讲座、咨询和评论。<br>　　专门为第4版以及JavaSE5/6重写了700多个编译文件中的500多个程序。<br>　　支持网站包含了所有源代码、带注解的解决方案指南、网络日志以及多媒体学习资料。<br>　　覆盖了所有基础知识，同时论述了高级特性。<br>　　详细地阐述了面向对象原理。</p>'),
(3, 'iOSdevelopment', 'Apple', 88.5, 1480490660, 'true', '<p>　　《Effective Objective-C 2.0：编写高质量iOS与OS X代码的52个有效方法》是C++开发大师Scott Meyers亲自担当顾问编辑的“Effective Software Development Series”系列丛书中的新作。从语法、接口与API设计、内存管理、框架等7大方面总结和探讨了Objective-C编程中52个鲜为人知和容易被忽视的特性与陷阱。书中包含大量实用范例代码，为编写易于理解、便于维护、易于扩展和高效的Objective-C应用提供了解决方案。<br>　　《Effective Objective-C 2.0：编写高质量iOS与OS X代码的52个有效方法》共7章。第1章通论与Objective-C的核心概念相关的技巧；第2章讲述的技巧与面向对象语言的重要特征（对象、消息和运行期）相关；第3章介绍的技巧与接口和API设计相关；第4章讲述协议与分类相关的技巧；第5章介绍内存管理中易犯的错误以及如何避免犯这些错误；第6章介绍块与大中枢派发相关的技巧；第7章讲解使用Cocoa和Cocoa Touch系统框架时的相关技巧。</p>'),
(4, 'AngularJS', 'google', 9.8, 1480490660, 'false', '<p>　　本书是Android初学者的入门书。全书由浅入深、系统全面地讲解了Android软件开发的方方面面。<br>　　第1章带领你搭建Android开发环境，完成你的一个Android程序。<br>　　第2至13章完整地讲解了Android开发中的各种基本知识和关键技术，包括四大组件、UI、碎片、广播机制、数据存储、服务、多媒体、网络、定位服务、传感器，以及分布式版本控制系统Git的使用等等。在部分章节会穿插相关技术的高级使用技巧。<br>　　第14章和第15章则将带领你编写一个完整的项目，教会你如何打包、上架、嵌入广告并获得盈利。<br>　　本书内容通俗易懂，既适合初学者循序渐进地阅读，也可作为一本参考手册，随时查阅。</p>');

-- --------------------------------------------------------

--
-- 表的结构 `b_images`
--

CREATE TABLE `b_images` (
  `image_id` int(11) NOT NULL,
  `image_name` varchar(500) NOT NULL,
  `book_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_images`
--

INSERT INTO `b_images` (`image_id`, `image_name`, `book_id`) VALUES
(2, '1.jpg', 1),
(3, '3.jpg', 3),
(4, '4.jpg', 4),
(5, '2.jpg', 2);

-- --------------------------------------------------------

--
-- 表的结构 `b_order`
--

CREATE TABLE `b_order` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_order`
--

INSERT INTO `b_order` (`order_id`, `user_id`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- 表的结构 `b_orderdetail`
--

CREATE TABLE `b_orderdetail` (
  `orderdetail_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `book_num` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_orderdetail`
--

INSERT INTO `b_orderdetail` (`orderdetail_id`, `order_id`, `book_id`, `book_num`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 2, 1, 1),
(4, 2, 2, 1);

-- --------------------------------------------------------

--
-- 表的结构 `b_relatebook`
--

CREATE TABLE `b_relatebook` (
  `bookrelate_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `relate_bookid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_relatebook`
--

INSERT INTO `b_relatebook` (`bookrelate_id`, `book_id`, `relate_bookid`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 1, 4),
(4, 2, 1),
(5, 2, 3),
(6, 2, 4),
(7, 3, 1),
(8, 3, 2),
(9, 3, 4),
(10, 4, 1),
(11, 4, 2),
(12, 4, 3);

-- --------------------------------------------------------

--
-- 表的结构 `b_user`
--

CREATE TABLE `b_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_tel` char(11) NOT NULL,
  `user_sex` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_user`
--

INSERT INTO `b_user` (`user_id`, `user_name`, `user_password`, `user_tel`, `user_sex`) VALUES
(1, 'david', 'e10adc3949ba59abbe56e057f20f883e', '13890879001', 'w');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `b_book`
--
ALTER TABLE `b_book`
  ADD PRIMARY KEY (`book_id`),
  ADD UNIQUE KEY `book_title` (`book_title`);

--
-- Indexes for table `b_images`
--
ALTER TABLE `b_images`
  ADD PRIMARY KEY (`image_id`,`book_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `b_order`
--
ALTER TABLE `b_order`
  ADD PRIMARY KEY (`order_id`,`user_id`);

--
-- Indexes for table `b_orderdetail`
--
ALTER TABLE `b_orderdetail`
  ADD PRIMARY KEY (`orderdetail_id`,`order_id`,`book_id`);

--
-- Indexes for table `b_relatebook`
--
ALTER TABLE `b_relatebook`
  ADD PRIMARY KEY (`bookrelate_id`);

--
-- Indexes for table `b_user`
--
ALTER TABLE `b_user`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `b_book`
--
ALTER TABLE `b_book`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `b_images`
--
ALTER TABLE `b_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 使用表AUTO_INCREMENT `b_order`
--
ALTER TABLE `b_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `b_orderdetail`
--
ALTER TABLE `b_orderdetail`
  MODIFY `orderdetail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `b_relatebook`
--
ALTER TABLE `b_relatebook`
  MODIFY `bookrelate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `b_user`
--
ALTER TABLE `b_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 限制导出的表
--

--
-- 限制表 `b_images`
--
ALTER TABLE `b_images`
  ADD CONSTRAINT `b_images_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `b_book` (`book_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
