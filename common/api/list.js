import $http from "../http.js";

let  get_label = (data)=>{
	return $http({
		url:"get_label",
		data
	})
}

let get_list = (data)=>{
	return $http({
		url: "get_list",
		data
	})
}

let update_like = (data)=>{
	return $http({
		url: "update_like",
		data
	})
}

export {
	get_label,
	get_list,
	update_like
}