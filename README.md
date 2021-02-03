# url-shortener
Microservice that takes in a long URL and generates a shortened version.

To run locally: 
* clone repo using `git clone: https://github.com/aschaetzle127/url-shortener.git`

* configure your .env file like so:
`PORT=3000
MONGO_URI='mongodb+srv://dolly-0202:FjCVMbOAh62h4OGB@cluster0.lak3c.mongodb.net/shortener'`

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
