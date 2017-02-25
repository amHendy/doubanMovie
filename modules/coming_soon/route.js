/**
 * Created by Grim on 2016/10/31.
 */
(function (angular) {
    //子模块的路由表
    var app=angular.module('movie.coming_soon');
    app.config(function ($routeProvider) {
        //:page表示这个page参数可以改变
        //? 表示这个参数可以为空
        $routeProvider
            .when('/coming_soon/:page?',{
                templateUrl:'modules/coming_soon/template.html',
                controller:'movie.coming_soonCtrl'
            })
    })
})(angular);