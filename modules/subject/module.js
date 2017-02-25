/**
 * Created by Grim on 2016/10/31.
 */
(function (angular) {
    var app=angular.module('movie.subject',[]);
    app.controller('movie.subjectCtrl',function ($scope,$routeParams,httpProService) {
        //获取到$routeParams中传过来的id
        $scope.name=$routeParams.id;
        var url='https://api.douban.com/v2/movie/subject/'+$routeParams.id;
        var params={
            apikey:'00fa6c0654689a0202ef4412fd39ce06'
        };
        httpProService
            .jsonp(url,params,function (data) {
                //console.log(data);
                $scope.subject=data;
                $scope.$apply();//更新$scope
            })
    })
})(angular);