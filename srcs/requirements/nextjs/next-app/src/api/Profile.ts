import axios from "axios";



export const getProfile = (id:number) => {

	const API = `http://localhost/api/user/${id}`;


	// TODO: 추후엔 인터셉터로 수정해야함 (토큰)
	return axios.get(API, {
		headers: {
			"Content-Type": "application/json",
		}
	});
}
