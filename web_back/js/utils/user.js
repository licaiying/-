// 所有和用户相关的ajax请求，全部放到这个js里面
// 比如：登录、退出、获取用户信息

var user = {
    // 退出功能
    logout: function () {
        $.post(baseUrl + '/admin/logout', function (res) {
            // console.log(res);  //{msg: "登出成功", code: 200}
            alert(res.msg);
            if (res.code == 200) {
                // 退出成功，跳转到登录页面（login.html）
                location.href = 'login.html';
            }
        });
    },

    // 登录功能
    login: function (username, password) {
        $.ajax({
            type: 'POST',
            url: baseUrl + '/admin/login',
            data: {
                user_name: username,
                password: password
            },
            success: function (res) {
                // console.log(res); // {msg: "用户名或密码错误", code: 400}
                alert(res.msg);
                if (res.code == 200) {
                    location.href = 'index.html'
                }
            }
        });
    },

    // 获取管理员信息功能
    getuser: function (callback) {
        $.get(baseUrl + '/admin/getuser', function (res) {
            //    console.log(res);  // {msg: "获取成功", code: 200, data: {…}}
            callback(res);
            // if (res.code == 200) {
            //     // 获取管理员的头像和信息（渲染页面）
            //     $('.user_info').find('img').attr('src', res.data.user_pic).next('span').html('欢迎&nbsp;&nbsp;' + res.data.nickname);
            // }
        });
    }

};