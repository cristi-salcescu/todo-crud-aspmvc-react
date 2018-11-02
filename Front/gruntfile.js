module.exports = function(grunt) {

  grunt.initConfig({
		concat: {
			libs: {
				src: [
					"node_modules/jquery/dist/jquery.js"
				],
                dest: "Client/bundles/libs.js"
			},
			css : {
                src: ["Client/css/*.css", "Client/components/**/*.css"],
                dest: "Client/bundles/styles.css"
			}
		},

		watch: {
			js: {
				files: [
                    "Client/components/*.jsx", "Client/dataaccess/*.js", "Client/stores/*.js", "Client/app.js", "Client/tests/*.js"
				],
				tasks: ["browserify", "jshint", "qunit"]
			},
			css: {
				files: [
					"Client/css/*.css"
				],
				tasks: ["concat:css"]
			}
		},

		browserify: {
			dist: {
				options: {
					debug: true,
					standalone: 'Bundle',
					transform: [
							['babelify', {presets: ['es2015', 'react']}]
						]
				},
                src: ["Client/dataaccess/*.js", 'Client/components/*.jsx', "Client/app.js"],
                dest: 'Client/bundles/scripts.js',
			},
			tests: {
				options: {
					debug: true,
					standalone: 'Bundle',
					transform: [
						['babelify', {presets: ['es2015', 'react']}]
					]
					},
                src: ["Client/stores/*.js", "Client/tests/*.js"],
                dest: 'Client/bundles/tests.js'
			}
		},

		jshint: {
			options: {
				undef: true,
				browser: true,
				strict: true,
				esversion: 6,
				globals: {
					jQuery: true,
					$: true,
					console: true
				},
			},
		
            beforeconcat: ["Client/dataaccess/*.js", "Client/stores/*.js"]
		},
		  
		qunit: {
            all: "Client/tests/tests.html"
		},
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask("default", ["jshint", "browserify", "concat"]);
};