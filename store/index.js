export const APP_STORE = {
	state: {
		name: '',
		number: '',
		certificate: '',
		phone: '',
		site: '',
		address: '',
		full_name_responsible_person: '',
		email: undefined,
		role: '',
		SessionID: '',
		serverIp: 'https://vova-489375f3.localhost.run',
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