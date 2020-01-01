// 处理文章的增加、删除、修改等数据
var category = {
    // 获取文章分类
    show: function (callback) {
        $.get(baseUrl + '/category', function (res) {
            callback(res);
        });
    },
};