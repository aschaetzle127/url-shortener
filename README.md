# url-shortener
Microservice that takes in a long URL and generates a shortened version.

Prerequisites:

In order to run this project locally, you should have the following installed:
* [NPM](https://nodejs.org/en/)
* [Node.js](https://www.npmjs.com//)
* [MongoDB](https://www.mongodb.com/)

To run locally: 
* clone repo using `git clone: https://github.com/aschaetzle127/url-shortener.git`

* configure your .env file like so:
`PORT=3000
MONGO_URI='mongodb+srv://dolly-0202:FjCVMbOAh62h4OGB@cluster0.lak3c.mongodb.net/shortener'`

* In your terminal, use the following commands:
	* npm i
	* npm run dev
	
* You should see the following success messages:
	* `Listening on port 3000`
	* `MongoDB connection successful!`

* In PostMan

	* POST: http://localhost:3000/api/shorturl/create
	* Example JSON: 
	{
		"url_input": "https://www.google.com/search?q=pasta+sauce&oq=pasta+sauce&aqs=chrome..69i57j46i433j0l6.2644j0j4&sourceid=chrome&ie=UTF-8"
	}

	* You should receive a response JSON that matches the urlSchema in `schema.js`
	* Example Response JSON:
	{
	    "_id": "601a373639e2fce8ef82ba1e",
	    "long_url": "https://www.google.com/search?q=pasta+sauce&oq=pasta+sauce&aqs=chrome..69i57j46i433j0l6.2644j0j4&sourceid=chrome&ie=UTF-8",
	    "short_url": "http://localhost:3000/u/oH3tXq8",
	    "url_id": "oH3tXq8",
	    "__v": 0
	}


* Once you have received your response JSON.  Click on the short_url linke to see your url shortener in action!



ESSAY PORTION

Given the work I completed today.  There are a few different ways I would improve upon the url-shortener as a microservice.  First and foremost, I would like to turn this microservice into an npm package.  I believe that converting this would offer better usability, as developers would be able to easily integrate this into their existing UIs, as well as ensure that users could add to the database.  This larger database would give us some insight on what types of urls/users/domains are being converted to short urls which could give us great user data for future developments/improvements. Second, I would ensure that the service was scalable.  At the current time, the database cluster hosted on AWS has limited storage and the storage beyond the free services can become very costly for information that needs to be retreived instantly.  Therfore, I would have to do a full cost analysis to find the best options for this as well as a technical analysis to ensure that mongoDB is the best choice.  

