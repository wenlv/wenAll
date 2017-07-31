回顾
===================
数据库的定义
	存储数据的仓库
	优点
		1. 可以存储大量的数据
		2. 查询的速度快
		3. 安全
		4. 描述业务逻辑(项目核心)
	数据库的分类
		1. 关系型数据库   mysql
		2. 非关系型数据库
	mysql数据库构成
		1. database   
				--mysql -uroot -p  ---> 密码
				--show databases;  查看所有的数据库
		2. 数据库内包含表
				--use h507;  	--使用库
				--show tables;	查看库内的所有表
		3. 数据库的表
				行row 		--记录
				列column	--字段
			a. 主键(id)
					int类型 
					auto_increment 自增
					unsigned		无符号
					primary key 	主键
			b. 其他字段
					数据类型
					数字类型
						int 
						tinyint
						smallint
						float
						bigint
					字符串类型
						varchar(255)	 不固定长度
						char(11) 		 固定长度
						text			 大文本
						enum			 枚举
		使用php操作mysql
			需要开启扩展
				php_mysql.dll
				php_mysqli.dll
				php_pdo_mysql.dll
数据库的增删改
	1. insert into goods ('goods_name','price','des') values('手机',1000,'双卡双待');
		insert into goods value(null,'手机',1200,'单卡单带');
		insert into goods value(null,'手机',1200,'单卡单带'),(null,'平板',123123,'不要钱');
	2. 	delete from goods where id=30;
		delete from goods where 'price' > 1999;

	3. update goods set 'price' = 10 where id<100;

=====================================
数据库的查询(使用频率最高)
	1. select * from goods;    /* *代表所有的字段  */
		select id,goods_name,addtime from goods;  /*查询指定字段的信息*/
		desc goods;   /*查询字段*/
	
	2. 设置别名
			a.  select id as 商品编号,goods_name as 商品名称,addtime as 添加时间 from goods;
			b.  select id 商品编号,goods_name 商品名称,addtime 添加时间 from goods;	
	3. 查询条件
			<   >  <=  >=  !=   =
			1.  select * from goods where id > 30;
					关键字or
			1s. select * from goods where id<30 or id>40;
					关键字and 
			1ss. select * from goods where id<32 and price < 2000;
			2.  select * from goods where goods_name='内衣';
					关键字in
			3.  select * from goods where id in (20,12,13,36,42);
					关键字between and
			4.  select * from goods where id between 30 and 35;
					关键字like  '%内%'
			5.  select * from goods where goods_name like '%内%';
	4. 排序方式
			关键字 order by
			关键字 desc(降序)  asc(升序   默认)
				select * from goods where id > 30 order by id asc ;
	5. limit限制条件
			select * from goods order by price desc limit 0,10;


php操作mysql

	1. mysql   --淘汰    (面向过程)
	2. mysqli  --需要掌握
				(面向过程)
				(面向对象)
	3. pdo 	   --更需要掌握	(面向对象)

=============================
作业
	整理笔记
	代码1遍
		自己做一个简答的后台(添加商品 展示商品)
==============================
使用集合函数的查询
	1. count()      计数
	2. sum()		计算总数
	3. max()		最大值
	4. min()		最小值
	5. avg()		求平均值
==================================
分页
	1. 得到总条数

	2.设置每页显示的条数
 
	3. 得到总页数

	4. 通过判断$_GET得到当前页数

	5. 设置 上一页  下一页  (需要判断 页数在合理的范围)

			--注意： sql语句$start如何得到 (页数-1)*每页显示的条数

==============================
	添加  add(array)
	删除  delete(id)
	修改  save(array)
	查询  select()
		where()
		limit()
		order()   --参数没有order by
		find(id)

作业
	完成项目(尽量使用model类)




