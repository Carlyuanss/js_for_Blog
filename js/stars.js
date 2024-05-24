// 创建一个立即执行函数，以避免全局变量污染
!function() {
    // 初始化一些变量
    var stars = []; // 存储星星对象的数组
    var mousePosition = { x: 0, y: 0 }; // 鼠标位置
    var starColors = ["#FFD700", "#FFA500", "#FF6347", "#FF4500"]; // 星星的颜色
 
    function initialize() {
        setupEventListeners();
        animateStars();
    }
 
    function setupEventListeners() {
        // 添加事件监听器
        document.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleWindowResize);
    }
 
    function handleWindowResize(event) {
        // 更新窗口尺寸
        // 这里可以添加适应窗口大小的逻辑
    }
 
    function handleMouseMove(event) {
        // 更新鼠标位置
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;
        createStar(mousePosition.x, mousePosition.y, starColors[Math.floor(Math.random() * starColors.length)]);
    }
 
    function createStar(x, y, color) {
        var star = new Star();
        star.init(x, y, color);
        stars.push(star);
    }
 
    function updateStars() {
        // 更新星星的位置
        for (var i = 0; i < stars.length; i++)
            stars[i].update();
        // 删除已经消失的星星
        for (i = stars.length - 1; i >= 0; i--)
            if (stars[i].lifeSpan < 0) {
                stars[i].die();
                stars.splice(i, 1);
            }
    }
 
    function animateStars() {
        // 使用 requestAnimationFrame 循环更新星星
        requestAnimationFrame(animateStars);
        updateStars();
    }
 
    function Star() {
        this.character = "*";
        this.lifeSpan = 120;
        this.initialStyles = {
            position: "fixed",
            top: "0",
            display: "block",
            pointerEvents: "none",
            "z-index": "10000000",
            fontSize: "20px",
            "will-change": "transform"
        };
 
        this.init = function(x, y, color) {
            this.velocity = {
                x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            };
            this.position = {
                x: x - 10,
                y: y - 20
            };
            this.initialStyles.color = color;
            this.element = document.createElement("span");
            this.element.innerHTML = this.character;
            applyStyles(this.element, this.initialStyles);
        };
 
        this.update = function() {
            // 更新星星的位置和样式
            // 这里可以添加星星的移动逻辑
        };
 
        this.die = function() {
            // 处理星星消失时的逻辑
        };
    }
 
    // 辅助函数：应用样式
    function applyStyles(element, styles) {
        for (var prop in styles)
            element.style[prop] = styles[prop];
        document.body.appendChild(element);
    }
 
    // 初始化
    initialize();
}();
