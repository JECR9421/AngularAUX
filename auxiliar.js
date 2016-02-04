/*Pasar parametros a una promise de ajax*/




                  $http.get('/plugin/' + key + '/js').success((function(key) {
						return function(data) {
							console.log(key, data);
						}
					})(key));
					
/*EJEMPLO*/

						DBpeticiones.bdRequest(DBparametros.getPeticiones(),"Archivos","selectPublicacion")

                  .success((function(key) {
                      return function(data) {
                        var img = "";
                        img = data[0].directorio +'/'+data[0].referencia+data[0].extension;
                        scope.arrayPadre[key].imgmain = img;
                          //console.log(key, data);
                      }
                  })(i)); //i parametro que se pasó
				  
				  
/*Pasar parametro a una promise timeout*/

var polling_interval=10;
                var poll = function(param1, param2) 
                {
                  
                  if(param2 == undefined){
                    return;
                  }/*Rompe recursividad*/
                  
                  var timer =   $timeout(function() {

                      poll(param1, undefined);/*Aquí es donde se pasa la variable al timeout se ejecuta en la 2vez
					  tener cuidado para romper la recursividad cuando se requiera para que no se encicle*/

                       /*Ejecutar la instrucción que se desea en el timeout*/


                     }, polling_interval); 
                  

                }; 
                poll(i, " ");//i parametro proveniente desde afuera
				
	//Settear active a menu			
				
	 controller('MainCtrl', function ($scope,$location) {
		$scope.current = "";
		$scope.$on('$routeChangeSuccess', function () {
			
			$scope.current = $location.path();
		});				

	<li ng-class="{active: current == '/ingresar'}"><a ng-href="#/ingresar">Ingresar Votos</a></li>

	//For keys json
	for (var key in p) {
	  if (p.hasOwnProperty(key)) {
		alert(key + " -> " + p[key]);
	  }
	}	
                  