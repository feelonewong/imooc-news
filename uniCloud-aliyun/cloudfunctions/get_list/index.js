'use strict';
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		user_id,
		name,
		pageIndex = 1,
		pageSize = 10
	} = event;

	let matchObj = {};
	if (name !== "全部") {
		matchObj = {
			classify: name
		}
	}

	const userInfo = await db.collection("user").doc(user_id).get();
	const article_likes_ids = userInfo.data[0].article_likes_ids;
	//使用聚合的方式处理数据
	const list = await db.collection('article')
		.aggregate()
		// 追加字段
		.addFields({
			is_like: $.in(['$_id', article_likes_ids])
		})
		.match(matchObj)
		.project({
			content: 0
		})
		// 要跳过多少数据
		.skip(pageSize * (pageIndex - 1))
		.limit(pageSize)
		.end()

	//简单的操作筛选数据
	// .field({
	// 	content:false
	// }).get();

	//返回数据给客户端
	return {
		code: 200,
		msg: "请求成功",
		data: list.data
	}
};
