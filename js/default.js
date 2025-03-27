        // 定义随机文字的内容
        const foodArray = ['新婚快乐️', '百年好合', '早生贵子', '身体健康', '永远幸福', '开开心心', '六六大顺', '牛逼！'];
        
        // 定时生成随机文字动画
        setInterval(function () {
            var rTop = Math.ceil(Math.random() * $(window).height()), // 随机垂直位置
                rLeft = Math.ceil(Math.random() * ($(window).width() - 50)), // 随机水平位置
                rSize = Math.ceil(Math.random() * (50 - 15) + 14); // 随机字体大小
            var randomFood = foodArray[Math.floor(Math.random() * foodArray.length)]; // 从数组中随机选一个表情或文字

            $("<span class='temp'></span>")
                .html(randomFood)
                .css({
                    top: rTop + "px", // 设置随机垂直位置
                    left: rLeft + "px", // 设置随机水平位置
                    color: "rgba(" + Math.floor(Math.random() * 156 + 100) + "," + Math.floor(Math.random() * 156 + 100) + "," + Math.floor(Math.random() * 156 + 100) + "," + Math.random() + ")", // 白色，随机透明度
                    fontSize: rSize + "px", // 设置随机字体大小
                })
                .appendTo("body") // 添加到页面
                .fadeIn("slow", function () { // 淡入效果
                    $(this).fadeOut("slow", function () { // 淡出效果
                        $(this).remove(); // 淡出后删除元素
                    });
                });
        }, 25); // 每200毫秒生成一次文字