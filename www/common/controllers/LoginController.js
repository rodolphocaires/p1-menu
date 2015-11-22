app.controller('LoginCtrl', ['$scope', '$ionicLoading', '$state', '$ionicHistory', function ($scope, $ionicLoading, $state, $ionicHistory) {
	var showLoading = function () {
		$ionicLoading.show({
			template: 'Auenticando, aguarde...'
		});
	};

	var hideLoading = function () {
		$ionicLoading.hide();
	};

	var fbLoginSuccess = function (response) {
		if (!response.authResponse) {
			fbLoginError("Cannot find the authResponse");
			return;
		}

		var authResponse = response.authResponse;

		//TODO: Passar dados de autenticação para o klou
		hideLoading();
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('user.home');
		$scope.authModal.hide();
	};

	// This is the fail callback from the login method
	var fbLoginError = function (error) {
		console.log('fbLoginError', error);
		$ionicLoading.hide();
	};

	$scope.authenticateUser = function () {
		//TODO: Authentication

		facebookConnectPlugin.getLoginStatus(function (success) {
			if (success.status === 'connected') {
				// The user is logged in and has authenticated your app, and response.authResponse supplies
				// the user's ID, a valid access token, a signed request, and the time the access token
				// and signed request each expire
				console.log('getLoginStatus', success.status);

				//TODO: Chamar api klou passando dados do usuário para autenticação

				hideLoading();
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$state.go('user.home');
				$scope.authModal.hide();

			} else {
				// If (success.status === 'not_authorized') the user is logged in to Facebook,
				// but has not authenticated your app
				// Else the person is not logged into Facebook,
				// so we're not sure if they are logged into this app or not.

				console.log('getLoginStatus', success.status);

				showLoading();

				// Ask the permissions you need. You can learn more about
				// FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
				facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
			}
		});

	};

	$scope.authenticateProfessional = function () {
		showLoading();
		//TODO: Authentication
		hideLoading();
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('pro.calendar');
		//$ionicHistory.removeBackView();
		$scope.authModal.hide();
	};
}]);
