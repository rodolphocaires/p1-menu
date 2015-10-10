app.controller('AppCtrl', ['$scope', '$ionicModal', function ($scope, $ionicModal) {
	//TODO: detect if user is authenticated and call login modal


	$ionicModal.fromTemplateUrl('common/templates/login.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function (modal) {
		$scope.authModal = modal;
		$scope.authModal.show();
	});
}]);