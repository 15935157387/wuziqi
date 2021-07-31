// 获取开始按钮
var start = document.querySelector(".start");
// 获取开始界面内容
var mask = document.querySelector(".mask");
// 获取功能按钮的盒子
var functionBox = document.querySelector(".functionBox");
// 获取认输按钮
var lose = document.querySelector(".lose");
// 获取退出按钮
var exit = document.querySelector(".exit");
// 回去重新开始按钮
var restart = document.querySelector(".restart");
/*开始游戏*/
start.addEventListener("click", function () {
    mask.style.display = "none";
    functionBox.style.display = "flex";
});
/*退出游戏*/
exit.addEventListener("click", function () {
    layer.confirm('确定要退出游戏？', {
        btn: ['取消', '退出'] //按钮
    }, function () {
        layer.msg('请继续游戏', {icon: 1, time: 1000});
    }, function () {
        window.close();
    });
});
/*重新开始*/
restart.addEventListener("click", function () {
        layer.confirm('确定要重新开始？', {
            btn: ['取消', '确认'] //按钮
        }, function () {
            if(flag){
            layer.msg('请继续游戏', {icon: 1, time: 1000});
            }else{
                layer.alert("游戏结束,请重新开始")
            }
        }, function () {
            location.reload();
        });
});
// 认输
lose.addEventListener("click", function () {
    if (flag) {
        if (have === 1) {
            layer.confirm('确定要认输？', {
                btn: ['取消', '确认'] //按钮
            }, function () {
                layer.msg('请继续游戏', {icon: 1, time: 1000});
            }, function () {
                layer.msg('你输了', {icon: 5, time: 1000});
                setTimeout(function () {
                    location.reload();
                }, 1100);
            });
        } else {
            layer.confirm('亲,还没开始下棋不能认输哦!', {
                btn: ['确认'] //按钮
            })
        }
    }else{
        layer.alert("游戏结束,无法认输");
    }

});
var about = document.querySelector(".about");
var aboutAlert = document.querySelector(".aboutAlert");
var closeBtn = document.querySelector(".closeBtn");
about.onclick = function () {
    aboutAlert.style.display = "block";
};
closeBtn.onclick = function () {
    aboutAlert.style.display = "none";
};