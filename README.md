README
==

Welcome to this angular rails template, for rails 4 and angular 1.

## Set Up

```
$ git clone https://github.com/dgliwa/angular_rails_template.git
$ bundle install
$ rails s
```

## Template Help
The file structure for the application is as follows:

* app/
	* assets/
		* javascripts/
			* angular/
				* controllers/
					* indexController.js
				* directives/
				* services/
				* app.js
			* templates/
				* index.html
			* application.js
		* stylesheets
			* ...
	* controllers
		* ...
	* ...
* ...


The application controller provides the root url, which initializes the angular application.  The angular app uses angular-route by default, and has a small sample controller.  There is no css, but it is simple to add your own css files or frameworks with statically or through the asset pipeline.  I attempted to follow the [angular style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) as best as possible.

How you build your rails api is entirely up to you.

## Karma/Jasmine tests

For the javascript tests, you will need phantomjs installed on your path.  For macs, it's as simple as `brew install phantomjs`.

To install all the js test dependencies:

```
$ npm install
```
To run the tests once:

```
$ rake karma:run
```
To start the test runner for active changes to the tests, you can run:

```
$ rake karma:start
```



## Deployment

I have yet to deploy this application to a production environment, this template is initially intended to be a sandbox for people trying to set up angular and rails without needing to use something like grunt.  This step will be added later, as I have time.


## Coming Soon
If you have suggestions on what to add, please open an issue.