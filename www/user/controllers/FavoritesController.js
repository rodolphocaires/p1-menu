app.controller('FavoritesCtrl', ['$scope', function ($scope) {
	$scope.manicures = [
		{
			name: 'Manicure da Silva',
			rating: 3.4
		},
		{
			name: 'Manicure Oliveira',
			rating: 4.2
		}
	];
}]);