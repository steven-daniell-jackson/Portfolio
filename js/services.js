angular.module('app.services', [])


// Create Portfolio Factory object
.factory('PortfolioFac', function($http){

	var portfolioFactory = {};

// Create post factory to post data to api
	portfolioFactory.create = function(portfolioData){

		return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/add-portfolio',portfolioData)
	}

// Create get factory to retrieve data from api
	portfolioFactory.all = function(){
		return	$http.get('http://localhost:3000/api/portfolio/');
	}

	// Create get factory to retrieve data from api
	portfolioFactory.latest = function(){
		return	$http.get('http://localhost:3000/api/portfolio/?query=latest');
	}

	// Create get factory to retrieve data from api
	portfolioFactory.previous = function(){
		return	$http.get('http://localhost:3000/api/portfolio/?query=previous');
	}

// Create get factory to retrieve data from api
	portfolioFactory.newsletter = function(){
		return	$http.get('http://localhost:3000/api/portfolio/?query=newsletter');
	}

// Create get factory to retrieve data from api
	portfolioFactory.landingpages = function(){
		return	$http.get('http://localhost:3000/api/portfolio/?query=landingpage');
	}

	// Create get factory to retrieve data from api
	portfolioFactory.other = function(){
		return	$http.get('http://localhost:3000/api/portfolio/?query=other');
	}
// Create get factory to retrieve data from api
	portfolioFactory.recent = function(){
		return	$http.get('http://localhost:3000/api/portfolio/?query=recent');
	}



	return	portfolioFactory;

});
