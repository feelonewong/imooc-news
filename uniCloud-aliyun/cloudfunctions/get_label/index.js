'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	let label = await db.collection("label").get();
	
	return {
		code:200,
		msg:"请求数据成功",
		data: label.data
	};
};
