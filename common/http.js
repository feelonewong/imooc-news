export default function $http(options){
	let {url, data} = options;
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name:url,
			data
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
