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

export {
	get_label,
	get_list
}