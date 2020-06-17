export const mutations = {
	SetUserId(state, id) {
		state.userId = id;
	},
	SetCarTotal(state, total) {
		state.carTotal = total;
	},
	SetCarListRefresh(state, type) {
		state.carListRefresh = type;
	},
	SetLoginSuccess(state,type){
		state.loginSuccess=type;
	}
}
