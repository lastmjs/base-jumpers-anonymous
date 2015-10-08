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
			}/*,
			nodemon: {
				dev: {
					script: './bin/www',
					nodeArgs: ['--watch'],
					options: {
						ignore: ['public/lib', 'node_modules'],
						callback: function(nodemon) {
							nodemon.on('start', function() {
								grunt.task.run('default');
							});
						}
					}
				}
			},*/
		});
		
		grunt.loadNpmTasks('grunt-ng-annotate');
		//grunt.loadNpmTasks('grunt-nodemon');
		
		grunt.registerTask('default', ['ngAnnotate']);
		//grunt.registerTask('default', ['ngAnnotate', 'nodemon']);
};