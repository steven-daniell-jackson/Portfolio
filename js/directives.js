angular.module('portfolio-directives', [])


.directive('navbar', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: '../templates/partials/navbar.html' 
  }; 
})

.directive('portfolioItem', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      portfolioData: '=' 
    }, 
    templateUrl: '../templates/partials/portfolio-item.html' 
  }; 
});