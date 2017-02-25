/**
 * Created by Grim on 2016/10/31.
 */
(function (angular) {
    //子模块的路由表
    var app=angular.module('movie.searchmovie');
    app.config(function ($routeProvider) {
        //:page表示这个page参数可以改变
        //? 表示这个参数可以为空
        $routeProvider
            .when('/searchmovie/:q/:page?',{
                templateUrl:'modules/searchmovie/template.html',
                controller:'movie.searchmovieCtrl'
            })
    })
})(angular);