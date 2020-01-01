// 所有和文章相关的ajax请求
var article = {
    // 热点图
    hotpic: function (callback) {
        $.get(baseUrl + '/hotpic', function (res) {
            callback(res);
        });
    },


    // 最新资讯
    latest: function (callback) {
        $.get(baseUrl + '/latest', function (res) {
            callback(res);
        });
    },


    // 获取列表页的文章（全部分类后面的列表）
    search: function (data, callback) {
        $.get(baseUrl + '/search', data, function (res) {
            callback(res);
        });
    },


    // 获取文章详情内容
    article: function (id, callback) {
        $.get(baseUrl + '/article', { id: id }, function (res) {
            callback(res);
        });
    }

};
