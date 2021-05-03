'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {name} = event;
	//使用聚合的方式处理数据
	let list = await db.collection("article").aggregate().match({
			classify:name
		}).project({
			content: 0
		}).end();
	
	//简单的操作筛选数据
	// .field({
	// 	content:false
	// }).get();

	//返回数据给客户端
	return {
		code: 200,
		msg:"请求成功",
		data: list.data
	}
};
