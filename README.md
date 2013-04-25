#wand-boilerplate

An opinionated boilerplate project and workflow for HTML5.


##Getting started

###Quickstart

*Note: The setup process will soon be automated into one command line call with [Yeoman](http://yeoman.io), but please bear with us in the meantime.*

**Step 1:** First create a new directory then navigate there in a terminal window.

**Step 2:** Paste the following commands into your terminal.


	git clone git@github.com:wandjs/wand-boilerplate.git
	cd wand-boilerplate/
	git remote rm origin
	npm install
	bower install
	grunt serve

**Step 3:** Once the installation is complete run the last unexecuted command `grunt serve`

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
