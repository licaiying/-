// 放和文章相关的ajax请求

var article = {
    // 1.文章的查询
    show: function (data, callback) {
        $.get(baseUrl + '/admin/search', data, function (res) {
            callback(res);
        });
    },


    // 2.文章的删除
    delete: function () {

    },


    // 3.文章的添加
    add: function (fd, callback) {
        $.ajax({
            type: 'POST',
            url: baseUrl + '/admin/article_publish',
            data: fd,
            success: function (res) {
                callback(res);
            },
            contentType: false,
            processData: false
        });
    }
};