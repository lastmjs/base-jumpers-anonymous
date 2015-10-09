angular.module('BJA').factory('Jump', [
	function() {
		
		var Jump = persistence.define('Jump', {
			title: 'TEXT',
			description: 'TEXT',
			username: 'TEXT'
		});
		
		Jump.prototype.save = function(callback) {
			
			persistence.add(this);
			persistence.flush(function() {
				callback && callback();
			});
			
		};
		
		return Jump;
	}
]);