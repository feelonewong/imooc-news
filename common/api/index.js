
const requireApi = require.context(".",false,/.js$/);

let module = {}
//实现自动导出函数
requireApi.keys().forEach( (key,index)=>{
	if(key === "./index.js"){
		return;
	};
	Object.assign(module, requireApi(key));
})
export default module;