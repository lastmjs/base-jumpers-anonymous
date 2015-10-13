'use strict';

module.exports = function(grunt) {

		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			ngAnnotate: {
		            dev: {
						files: {
		                'www/dist/application.js': ['www/app.js', 'www/modules/*/*.js', 'www/modules/*/*/*.js', 'www/modules/*/*/*/*.js', 'www/directives/*/*.js', 'www/services/*.js', 'www/models/*.js'],
	            	},
				}
			},
			reload: {
				port: 6001,
				proxy: {
					host: 'localhost'
				}
			},
			watch: {
				files: ['www/*', 'www/models/*'],
				tasks: 'ngAnnotate',
				options: {
					livereload: true
				}
			},
			connect: {
				all: {
					options: {
						port: 9000,
						hostname: '0.0.0.0'
					}
				}
			}
		});
		
		grunt.loadNpmTasks('grunt-ng-annotate');
		grunt.loadNpmTasks('grunt-contrib-connect');
		grunt.loadNpmTasks('grunt-contrib-watch');
		
		grunt.registerTask('default', ['ngAnnotate', 'connect', 'watch']);
};