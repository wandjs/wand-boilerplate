#Wand Boilerplate

An opinionated boilerplate project and workflow for HTML5/JavaScript applications.



###Features

* Simple two step setup process
* Automatically bundles JQuery, RequireJS, Backbone, Underscore, Handlebars and WandJS
* Automatic CSS compilation with [Stylus](http://learnboost.github.io/stylus/)
* Automatic JavaScript linting with [JSHint](http://www.jshint.com/)
* Built in development server running on [Connect](https://github.com/gruntjs/grunt-contrib-connect)

*(See [Roadmap](https://github.com/wandjs/wand-boilerplate#roadmap) for future plans)*


##Getting started

###Quickstart

*Note: The setup process will soon be automated into one command line call with [Yeoman](http://yeoman.io), but in the meantime you'll need to make sure you have [NPM](http://npmjs.org/) (Node Package Manager) and [Bower](http://github.com/twitter/bower) (front end package manager) installed before you begin the quickstart*



**Step 1:** Create a new directory, then navigate there in a terminal window.

**Step 2:** Paste the following commands into your terminal.


	git clone git@github.com:wandjs/wand-boilerplate.git
	cd wand-boilerplate/
	git remote rm origin
	npm install
	bower install
	grunt serve
	# Setup complete
	

You're done!

Point your browser at `http://localhost:8000`, and start programming!


###Explanation

Clone the repository

	git clone git@github.com:wandjs/wand-boilerplate.git
		
Navigate into the wand-boilerplate directory

	cd wand-boilerplate/

Disconnect from the remote repository
		
	git remote rm

Install Node dependencies with [NPM (Node Package Manager)](http://npmjs.org/)

	npm install

Install browser dependencies with [Bower](http://github.com/twitter/bower)

	bower install

Start an [Express](https://github.com/visionmedia/express) server (on port 8000)

	grunt serve
	
Just a comment, but ensures that previous command is executed

	# Setup complete
	
	
##Roadmap

Future plans include:

* Yeoman integration - reducing setup to one command line call
* Default RequireJS optimization task
