angular.module('starter.controllers', ['ionic','ui.router', 'ngCordova', 'firebase', 'ngMessages'])
    .factory("Users", function($firebaseArray){
        var itemsRef = new Firebase("https://organator.firebaseio.com/");
        return $firebaseArray(itemsRef);
    })
    .controller('AppCntrl', function ($scope, $state) {

        $scope.init = function () {

        }

        $scope.hospital_clicked = function () {

            $state.go('hospital');
        }
        $scope.donor_clicked = function () {

            $state.go('donor');
        }
        $scope.why_donate = function () {

            $state.go('whyToDonate');
        }
    })
    .controller('hospitalCtrl', function ($scope, $state) {

		$scope.init = function () {}
        $scope.hospital_login_clicked = function(){
            $state.go('hospital_home');
        }

	})
    .controller('donorCtrl', function ($scope, $state) {
		$scope.init = function () {}
        $scope.new_user_clicked = function(){
            $state.go('donor_signup');
        }
         $scope.auth_true = function (){
            $state.go('personalDetails');
        }
         
    })
    .controller('hospitalHomeCtrl', function($scope, $cordovaSQLite, Users){
        $scope.init = function(){}
        $scope.listOfDonors = Users;
    })
    .controller('donorsignupCtrl', function ($scope, $state, Users) {
        $scope.users = Users;
		$scope.init = function () {}
        $scope.auth_true = function (){
            $state.go('personalDetails');
        }
        $scope.add_user = function(){
            $scope.users.$add({
                "name": '$scope.name',
                "email": '$scope.email', 
                "password": 'password'
            });
        }
    })


    .controller('whyToDonateCtrl', function ($scope) {
		$scope.init = function () {}

    })
    .controller('personalDetailsCtrl', function($scope, $state) {
        $scope.valid_persoDetails =  function(){
            $state.go('addressDetails');
        }
    })

    .controller('addressDetailsCtrl', function($scope, $state) {
        $scope.valid_addressDetails = function(){
            $state.go('organsDetails');
        }
    })

    .controller('organsDetailsCtrl', function($scope, $state) {
        $scope.valid_organsDetails =  function(){
            $state.go('confirmPage');
        }
    })
    .controller('confirmPageCtrl', function($scope, $state) {
        $scope.valid_confirmation =  function(){
            $state.go('healthFitness');
        }
    })
    .controller('healthFitnessCtrl', function($scope, $state) {
        $scope.init =  function(){

        }
    });
