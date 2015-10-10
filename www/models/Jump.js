angular.module('BJA').factory('Jump', [
	function() {
		
		var Jump = persistence.define('Jump', {
			title: 'TEXT',
			description: 'TEXT',
			username: 'TEXT',
			deletedAt: 'DATE'
		});
		
		Jump.prototype.save = function(callback) {
		
			persistence.add(this);
			persistence.flush(function() {
				callback && callback();
			});
			
		};
		
		Jump.prototype.executeDelete = function(callback) {
			
			this.deletedAt = new Date();
			this.save(callback);
			
		};
		
		Jump.getAllByUsername = function(username, callback) {
			
			Jump.all().filter('username', '=', username).and(new persistence.PropertyFilter('deletedAt', '=', null)).list(function(jumps) {
				callback(jumps);
			});
			
		};
		
		return Jump;
	}
]);