var texts = [
    "独特之处在于不同寻常。",
    "希望你的管理轨道引导你，某天去向更好的地方。",
    "世上所有小恐龙,都会面临大灭绝。",
    "那块蛋糕是个谎言。",
    "“这不是机器人茶会，这是机器人战争！”——士兵",
    "“Under the Water”是我初中时期最喜欢的歌。",
    "准备迎接出乎意料的结果吧。",
];

var textsnight = [
    "该睡觉了，弗里曼博士，该睡觉了。",
    "是时候把一切抛于脑后去睡觉了。",
    "这么晚了还在浏览博客吗？",
    "你度过了糟糕的一天吗？充实又苦涩？",
];

// function getRandomText() {
//     var randomIndex = Math.floor(Math.random() * texts.length);
//     return texts[randomIndex];
// }

function getRandomText() {
    var currentHour = new Date().getHours();
    var randomIndex;
    if (currentHour >= 23 || currentHour < 5) {
        var randomIndex = Math.floor(Math.random() * textsnight.length);
        return textsnight[randomIndex];
    } else {
        var randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }
}

function displayRandomText() {
    var randomTextElement = document.getElementById("randomText");
    randomTextElement.style.opacity = 0; // 设置透明度为0，开始淡出动画

    setTimeout(function() {
        randomTextElement.innerHTML = getRandomText();
        randomTextElement.style.opacity = 1; // 设置透明度为1，开始淡入动画
    }, 500); // 等待0.5秒后更新文字内容和透明度
}

// 初始显示一段随机文字
displayRandomText();

// 每隔一段时间更新一次随机文字
setInterval(displayRandomText, 30000);


