/**
 * Created by lin on 2017/1/12.
 */
(function(){
    angular.module("postDataModule",[])
        .provider("postDataService",function(){
            this.$get = ["$http","HOSTURL","$httpParamSerializer",
                function($http,HOSTURL,$httpParamSerializer){
                   return {
                       postRequst:function(url,data,success,fail){
                           var header = null;
                           var requestData = data;
                           if(url=="userInfoLogin.php" ||url=="userRegistPOST.php"){
                               requestData = $httpParamSerializer(data);
                               header = {"Content-Type":"application/x-www-form-urlencoded"};
                           }
                           $http.post(
                               HOSTURL+url,
                               requestData,
                               {headers:header}
                           ).then(success,fail);
                       }
                   }
            }]
        })
})();