(function(){
    angular.module("messageModule",[])
        .factory("messageService",["$ionicLoading",
            function($ionicLoading){
                return {
                    showLoading:function(msgText){
                        var showText = null;
                        if(msgText){
                            showText = msgText;
                        }else {
                            showText = "正在加载...";
                        }
                        $ionicLoading.show({
                           template:'<ion-spinner icon="spiral" class="spinner-light">' +
                           '</ion-spinner>'+showText
                        })
                    },
                    hideLoading:function(){
                        $ionicLoading.hide();
                    },
                    showMessage:function(msgText){
                        $ionicLoading.show({
                            template:msgText,
                            duration:2000,
                            noBackdrop:true
                        })
                    }
                }
        }])
})()
