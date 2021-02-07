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
		user_id: '',
		SessionID: '',
		serverIp: 'http://127.0.0.1:5000', // https://charityserver.tk
		socket: require('socket.io-client')('http://127.0.0.1:5000/'),
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