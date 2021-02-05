export const APP_STORE = {
	state: {
		email: '',
		role: '',
		SessionID: '',
		serverIp: 'https://vova-a29d07ed.localhost.run',
	},
	mutations: {
		GET_USER_EMAIL(state, value) {
			state.email = value;
		},
		GET_USER_SESSIONID(state, value){
			state.SessionID = value;
		},
		GET_USER_ROLE(state, value) {
			state.role = value;
		},
	},
	getters: {
		email: (state) => state.email,
		SessionID: (state) => state.SessionID,
		role: (state) => state.role,
	},
};