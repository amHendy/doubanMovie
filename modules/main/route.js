/**
 * Created by Grim on 2016/10/31.
 */
(function (angular) {
    //路由主模块
    var app=angular.module('movie.mainApp');
    //配置路由表
    app.config(function ($routeProvider) {
        //配置路由表
        $routeProvider
            .otherwise({
                redirectTo:'/in_theaters'
            })
            // .when('/main',{
            //     template:'<h1>$routeProvider</h1>'
            // })
    })
})(angular);