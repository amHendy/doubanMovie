(function (angular) {
    //创建正在热映的子模块
    //1创建子模块的文件夹
    //2 module.js、route.js、template.html
    //3 添加引用
    //4 测试代码是否成功
    var app = angular.module('movie.searchmovie', []);
    //创建控制器
    app.controller('movie.searchmovieCtrl', function ($scope,
                                                      $route,
                                                      $routeParams,
                                                      httpProService) {
        //测试
        // $scope.name='movie.in_theatersCtrl';
        //$routeParams 是用来获取url的参数
        //https://api.douban.com/v2/movie/in_theaters?apikey=00fa6c0654689a0202ef4412fd39ce06&callback=JSONP2
        //url地址
        var url = 'https://api.douban.com/v2/movie/search';
        // console.log($routeParams);
        //分页
        // 1 2 3
        // 0 5 10
        //页码数
        //通过url获取到当前页数
        console.log($routeParams);
        $scope.page = parseInt($routeParams.page || '1');
        //页容量
        $scope.pageCount = 5;
        //最大页数
        $scope.maxPage = 0;
        $scope.startPage = ($scope.page - 1) * $scope.pageCount;
        //电影总数量
        $scope.total = 0;
        //params参数
        var pararms = {
            apikey: '00fa6c0654689a0202ef4412fd39ce06',
            start: $scope.startPage,//起始元素
            count: $scope.pageCount,//返回结果的数量
            q: $routeParams.q
        };
        //上一页 下一页的切换
        $scope.upPage = function (page) {
            if (page > 0) {
                $route.updateParams({page: page});
            }
        };
        $scope.downPage = function (page) {
            if (page <= $scope.maxPage) {
                $route.updateParams({page: page});
            }
        };
        // $scope.updatePage=function (page) {
        //     //更新页面上的url中的参数
        //     if($scope.page>0&&$scope.page<=maxPage){
        //         $route.updateParams({page:page});
        //     }
        //     console.log(page);
        //     $scope.page=page;
        // };
        //调用jsonp服务获取数据
        httpProService
            .jsonp(url, pararms, function (data) {
                //绑定电影列表
                $scope.subjects = data.subjects;
                //电影标题
                $scope.title = data.title;
                $scope.total = data.total;
                $scope.maxPage = Math.ceil(data.total / $scope.pageCount);//向上取整拿到总页数
                console.log(data);
                $scope.$apply();//更新$scope
            })
    })
})(angular);
