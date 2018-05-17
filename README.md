MASSIVE - Films Carousel React Component
===========================

Code test completed using React, CSS Modules, Babel/ES6 & Browserify

Input Materials:
The carousel serves film data & corresponding images placed in the `./data` folder. When the `npm run build` script is executed, `data/images` is copied to `public/` replacing the existing `public/images` directory (read below).  

This is the expected format of the `./data/data.json` file: 
```json
{
	"carousel":[
		{
			"imageurl": "images/bike.png", 
			"title":"A Guy On A Bike", 
			"synopsis":"Lorem ipsum dolor sit amet", 
			"link": "www.good.com"
		},
		// ...
	]
}
```
How to run:
-----------
- `npm i` Install node.js dependencies


- `npm run watch` Watches for changes to js & css files in `./src` folder & bundles to respective subdirectories in `./public`. From here one can open `public/index.js` in their browser, reloading after any changes. **If your browser is sandboxed like mine, you'll need to start your own development server (eg. [nodemon](https://github.com/remy/nodemon))

- `npm run build` Uses browserify plugins to reduce file size, remove extraneous code, & inject backward-compatable css for older browsers, with bundles produced in the same locations as `npm run watch`. 

- `npm start` Starts a Python web server in `./public` folder running on `0.0.0.0:8000` 


Author: @*camcan* (mr.campbell.hawkes@gmail.com)



