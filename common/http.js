export default function $http(options){
	let {url, data} = options;
	let dataObj = {
		user_id:"608ddcd089dd6e0001492e3c",
		...data
	}
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name:url,
			data:dataObj
		}).then(res => {
			let code = res.result.code;
			let response = res.result;
			if (code === 200) {
				resolve(response);
			} else {
				reject(response)
			}
		}).catch(error => {
			reject(error);
		})
	})
}
