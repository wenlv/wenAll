$(function () {
//首先判断是否有Cookie，记录登录if ($.cookie("chkRemember") == "true") {
        $("#chkRemember").attr("checked", true);
        var name = $.cookie("sp001_userName");
        var pwd = $.cookie("sp001_passWord");
        $("#txt_pwd").val($.cookie("sp001_passWord"));
        $("#txt_UserName").val($.cookie("sp001_userName"));
        $.ajax({
            type: "POST",
            url: "/Handler/LoginHandler.ashx?username=" + name + "&pwd=" + pwd + "&flag=1",
            dataType: 'text', //返回string格式数据
            cache: false,
            data: '',
            async: false, //设置同步
            success: function (data) {
                if (data == "1") {
                    window.location.href = '/MainWeb.aspx';
                }
                if (data == "3") {
                    alert('9月12后以后禁止登录');
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert("登陆失败，请联系管理员");
            }
        });
    }
    $("#txt_UserName").focus();
    //按enter提交输入
    document.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
            loginSubmit();
        }
    }
})
function ReloadCheckCode() {
    var checkCode = document.getElementById("img_code");
    var rand = Math.random();
    checkCode.src = "/ValidateCode.aspx?randnum=" + rand;
}
function loginSubmit() {
    var username = $("#txt_UserName").val();
    var pwd = $("#txt_Pwd").val();
    var code = $("#txt_Code").val();

    if (username == "") {
        alert('请输入用户名!')
        // $("#msg").html('请输入用户名!')
        $("#txt_UserName").focus();
        return false;
    }
    if (pwd == "") {
        alert('请输入密码!')
        // $("#msg").html('请输入密码!')
        $("#txt_pwd").focus();
        return false;
    }
    if (code == "") {
        alert('请输入验证码！')

        $("#txt_code").focus();
        return false;
    }
    $.ajax({
        type: "POST",
        url: "/Handler/LoginHandler.ashx?username=" + escape(username) + "&pwd=" + escape(pwd) + "&code=" + code,
        dataType: 'text', //返回string格式数据
        cache: false,
        data: '',
        async: false, //设置同步
        success: function (data) {
            if (data == "0") {
                alert('您输入的用户名或密码有误!');
                // $("#msg").html('您输入的用户名或密码有误!')
                $("#txt_UserName").focus();
            }
            if (data == "1") {
                if ($("#chkRemember").attr("checked")) {
                    if (!($.cookie("chkRemember") == "true")) {
                        $.cookie("chkRemember", "true", { expires: 30 }); // 存储一个带30天期限的 cookie
                        $.cookie("sp001_userName", username, { expires: 30 });
                        $.cookie("sp001_passWord", pwd, { expires: 30 });
                        alert($.cookie("sp001_userName") + $.cookie("sp001_passWord"));
                    }
                }
                else {
                    if ($.cookie("chkRemember") == "true") {
                        $.cookie("chkRemember", "true", { expires: -1 }); //清除
                        $.cookie("sp001_userName", username, { expires: -1 });
                        $.cookie("sp001_passWord", pwd, { expires: -1 });
                    }
                }
                window.location.href = '/MainWeb.aspx';
            }
            if (data == "2") {
                alert('您输入的验证码有误!')
                //$("#msg").html('您输入的验证码有误!')
                $("#txt_UserName").focus();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            alert(XMLHttpRequest.status);
            alert("登陆失败，请联系管理员");
        }
    });
}