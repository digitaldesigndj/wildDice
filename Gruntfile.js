module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			main: {
				files: [
					// {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'}, // includes files in path
					// {src: ['out/**'], dest: 'dest/'}, // includes files in path and its subdirs
					{expand: true, cwd: 'out/', src: ['**'], dest: '../maker.out'},
				]
			}
		},
		csslint: {
			options: {
			// 	csslintrc: '.csslintrc'
				formatters: [
					{id: 'text', dest: 'report/csslint.txt'},
					{id: 'csslint-xml', dest: 'report/csslint.xml'}
				]
			},
			strict: {
				options: {
					import: false
				},
				src: ['out/styles/*.css']
			},
			// lax: {
			// 	options: {
			// 		import: false
			// 	},
			// 	src: ['out/styles/*.css']
			// }
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	// Default task(s).
	grunt.registerTask('default', ['csslint']);
	grunt.registerTask('move', ['copy']);

};
