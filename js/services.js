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
		return	$http.get('http://boiling-mesa-13925.herokuapp.com/api/portfolio');
	}

	return	portfolioFactory;

});
