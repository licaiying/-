// 处理 文章类别的查询、新增、删除、修改工作

var category = {
    // 1.查询文章类别的方法
    show: function (callback) {
        $.get(baseUrl + '/admin/category_search', function (res) {
            callback(res);
        });
    },

    // 2.新增文章类别的方法
    add: function (name, slug, callback) {
        $.post(
            baseUrl + '/admin/category_add',
            { name: name, slug: slug },
            function (res) {
                callback(res);
            });
    },

    // 3.删除文章类别的方法
    delete: function (id, callback) {
        $.post(baseUrl + '/admin/category_delete', { id: id }, function (res) {
            callback(res);
        });
    },

    // 4.修改(更新)文章类别的方法
    updata: function (id, name, slug, callback) {
        $.post(
            baseUrl + '/admin/category_edit',
            {
                id: id,
                name: name,
                slug: slug
            },
            function (res) {
                callback(res);
            }
        );
    }
};