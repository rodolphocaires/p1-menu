app.factory('UserService', function () {
	// For the purpose of this example I will store user data on ionic local storage but you should save it on a database
	var setUser = function (user_data) {
		window.localStorage.facebookUser = JSON.stringify(user_data);
	};

	var getUser = function () {
		return JSON.parse(window.localStorage.facebookUser || '{}');
	};

	return {
		getUser: getUser,
		setUser: setUser
	};
});