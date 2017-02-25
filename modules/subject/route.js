/**
 * Created by Grim on 2016/10/31.
 */
(function (angular) {
    var app=angular.module('movie.subject');
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/subject/:id',{
                templateUrl:'modules/subject/template.html',
                controller:'movie.subjectCtrl'
            })
    })
})(angular);
