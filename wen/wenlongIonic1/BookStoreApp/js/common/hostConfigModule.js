/**
 * Created by lin on 2017/1/12.
 */
(function(){
    angular.module("hostConfigModule",[])
        .constant("HOSTURL","http://localhost/zuoye/wenlongIonic/PHP/book/")
        // .constant("IMAGEURL","http://localhost/zuoye/wenlongIonic/PHP/images/")
        .constant("IMAGEURL","http://localhost/zuoye/wenlongIonic/admin/uploads/")
        .constant("VERSION","1.3.2")
        .constant("INTROHEIGHT",window.innerHeight-44)
        .constant("USERDATA",{})
})()