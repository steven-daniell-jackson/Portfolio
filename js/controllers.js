angular.module('app.controllers', [])
  
.controller('portfolioCtrl', function($scope, PortfolioFac) {

$scope.preloader = true;

// Access factory and assign the returned data
PortfolioFac.all()
.success(function(data) {
	console.log(data);
            $scope.entries = data;
            $scope.entries.reverse()
            console.log($scope.entries)
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


        

})

.controller('newPortfolioCtrl', function($scope, PortfolioFac) {


// Submit function bound on "Submit" button on form
$scope.submit = function(form){

// Check if form is valid
if(form.$valid) {

// Debug: console.log("Form valid")

// Use Data-binding to build object to send to API
var formData = {

    clientname: $scope.clientname,
    platform: $scope.platform,
    url: $scope.url,
    date: $scope.date,
    recent: $scope.recent,
    imgsrc: $scope.imgsrc,
    comments: $scope.comments,
    website: $scope.website,
    newsletter: $scope.newsletter,
    landingpage: $scope.landingpage,
    other: $scope.other

}

console.log(formData)
// Call factory and submit the formData for processing
PortfolioFac.create(formData)

 // If successful print returned message form API else print error
 .success(function(data) {

// Clear form
$scope.platform = '';
$scope.clientname = '';
$scope.url = '';
// $scope.recent = '';
$scope.imgsrc = '';
$scope.date = '';
$scope.comments = '';

// Data binding on status to log API returned message
$scope.status = data.message;
console.log($scope.status);
})
 .error(function(data) {
    console.log('Error: ' + data);
 });
}
  
  }      

})

      
