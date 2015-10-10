app.controller('LoginCtrl', ['$scope', '$ionicLoading', '$state', '$ionicHistory', function ($scope, $ionicLoading, $state, $ionicHistory) {
	var showLoading = function () {
		$ionicLoading.show({
			template: 'Auenticando, aguarde...'
		});
	};

	var hideLoading = function () {
		$ionicLoading.hide();
	};

	$scope.authenticateUser = function () {
		showLoading();
		//TODO: Authentication
		hideLoading();

		$state.go('user.home');
		$ionicHistory.removeBackView();
		$scope.authModal.hide();
	};

	$scope.authenticateProfessional = function () {
		showLoading();
		//TODO: Authentication
		hideLoading();
		$state.go('pro.calendar');
		$ionicHistory.removeBackView();
		$scope.authModal.hide();
	};
}]);
