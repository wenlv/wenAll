/**
 * Created by lin on 2017/1/12.
 */
(function(){
    angular.module("hostConfigModule",[])
        .constant("HOSTURL","http://wenlv.ren/wen/wenlongIonic/PHP/book/")
        // .constant("IMAGEURL","http://localhost/zuoye/wenlongIonic/PHP/images/")
        .constant("IMAGEURL","http://wenlv.ren/wen/wenlongIonic/admin/uploads/")
        .constant("VERSION","1.3.2")
        .constant("INTROHEIGHT",window.innerHeight-44)
        .constant("USERDATA",{})
        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

			$ionicConfigProvider.platform.ios.tabs.style('standard');
			$ionicConfigProvider.platform.ios.tabs.position('bottom');
			$ionicConfigProvider.platform.android.tabs.style('standard');
			$ionicConfigProvider.platform.android.tabs.position('bottom');
			$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
			$ionicConfigProvider.platform.android.navBar.alignTitle('center');
			$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
			$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
			$ionicConfigProvider.platform.ios.views.transition('ios');
			$ionicConfigProvider.platform.android.views.transition('android');
		});




})()