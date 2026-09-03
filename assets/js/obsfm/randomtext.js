var texts = [
    "那块蛋糕是个谎言。",
];

var textsnight = [
    "这么晚了还在浏览博客吗？",
];

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


