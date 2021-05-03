'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let list = await db.collection("article")
	.field({
		content:false
	}).get();

	//返回数据给客户端
	return {
		code: 200,
		msg:"请求成功",
		data: list.data
	}
};
