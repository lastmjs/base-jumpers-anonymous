angular.module('BJA', []) 
.controller('MainController', ['$scope',
	function($scope) {
		$scope.showSignUpArea = true;
	}
])
.controller('SignUpController', ['$scope',
	function($scope) {
		
		$scope.signUp = function(firstName, lastName, username, email) {
			
			alert('User saved!');
			
		};
		
	}
])
.controller('ViewJumpsController', ['$scope',
	function($scope) {
		
		$scope.showJumps = function(username) {
			
			$scope.jumps = [
				{
					title: 'Half Dome',
					description: 'I hit the side of the rock!'
				},
				{
					title: 'San Francisco',
					description: 'Lol, my chute almost didn\'t come out'
				},
				{
					title: 'Eiffel Tower',
					description: 'It was fun'
				}
			];
			
		};
		
	}
])
.controller('CreateJumpController', ['$scope',
	function($scope) {
		
		$scope.createJump = function(title, description, username) {
			
			alert('Jump saved!');
			
		};
		
	}
]);