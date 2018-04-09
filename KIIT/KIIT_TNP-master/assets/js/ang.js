var app = angular.module('demo',[]);

app.controller('Ctrl', function($scope,$http) {
	
		// http get request to read CSV file content
		
		 $timeout(function() {
        $http.get('/kiittnp_testv.1.0.0/IEC_CR.json').success(function(data){
		 $scope.data = data.table;
		 $scope.data1=data.table1;
		 });
      }, 1000);
})