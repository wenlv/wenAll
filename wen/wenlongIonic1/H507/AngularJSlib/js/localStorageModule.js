/**
 * Created by lin on 2017/1/11.
 */
(function(){
    angular.module("localStorageModule",[])
        .provider("localStorageService",function(){
            //$window  等价 window 建议使用$window
            this.$get = ["$window",function($window){
                return {
                    get:function(key){
                        return $window.localStorage.getItem(key);
                    },
                    set:function(key,value){
                        $window.localStorage.setItem(key,value);
                    },
                    getObject:function(key){
                        var objStr = $window.localStorage.getItem(key);
                        try{
                            return JSON.parse(objStr);
                        }catch(e){
                            return null;
                        }
                    },
                    setObject:function(key,value){
                        $window.localStorage.setItem(key,JSON.stringify(value));
                    }
                }

            }]
        })
})()