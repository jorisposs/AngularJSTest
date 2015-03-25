'use strict';

angular.module('ProductApp.controllers', []).

    controller('ProductsController', ['$scope', 'ProductService',
        function($scope, ProductService){
    		$scope.products = [];
    		
    		$scope.searchfilter = function(product){
    			var keyword = new RegExp($scope.namefilter, 'i');
    			return keyword.test(product.name);
    		}
    		
    		ProductService.getProductsJSON().success(function(response){
    			$scope.products = response.products;
    		});
    	}
        
    ]).
    
    controller('ProductController', ['$scope', '$routeParams', 'ProductService',
        function($scope, $routeParams, ProductService){
			$scope.product = null;
			var name = $routeParams.name;
			
			ProductService.getProductJSON(name).success(function(response){
				$scope.product = response;
			});
    	}
    
    ]).
//    
    controller('NewProductController', ['$scope', 'ProductService',
        function($scope, ProductService){
    		$scope.addProduct = function(){
    			var productJSON = "{"products":
    				{ "id" + $scope.newProduct.id + "price" +  $scope.newProduct.price + "name" +
    					$scope.newProduct.name + "brand" + $scope.newProduct.brand + 
    					"description" + $scope.newProduct.description}"
    			ProductService.addProduct(productJSON);
    		}
		
			
		}
        
    ]);
