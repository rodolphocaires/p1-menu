app.directive('starRating', function () {
	return {
		restrict: 'A',
		template: '<ul class="rating"><li ng-repeat="star in stars" ng-class="star" class="icon ion-ios7-star" ng-click="toggle($index)"></li></ul>',
		scope: {
			ratingValue: '=',
			max: '=',
			readonly: '@',
			onRatingSelected: '&'
		},
		link: function (scope) {
			var updateStars = function () {
				scope.stars = [];
				for (var i = 0; i < scope.max; i++) {
					scope.stars.push({
						energized: i < scope.ratingValue,
						'ion-ios7-star-half': scope.ratingValue % 1 > 0 && i === Math.floor(scope.ratingValue)
					});
				}
			};
			scope.toggle = function (index) {
				if (angular.isUndefined(scope.readonly)) {
					scope.ratingValue = index + 1;
					scope.onRatingSelected({rating: index + 1});
				}
			};
			scope.$watch('ratingValue', function () {
				updateStars();
			}
			);
		}
	};
});