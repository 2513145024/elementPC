import request from "@/api/request";

export const HomeApi = {
	getData(params) {
		return request({
			url: "/api/home",
			method: "get",
			params
		});
	}
}
