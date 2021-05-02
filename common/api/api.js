let get_label = (data) => {
	return new Promise((resolve, reject) => {
		uniCloud.callFunction(data).then(res => {
			let code = res.result.code;
			let response = res.result;
			if (code === 200) {
				resolve(response);
			} else {
				reject(response)
			}
		}).catch(error=>{
			reject(error);
		})
	})
}

export default {
	get_label
}
