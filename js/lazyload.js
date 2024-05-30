document.addEventListener('DOMContentLoaded', function() {
    // 获取所有img元素
    var images = document.getElementsByTagName('img');
    // 遍历img元素
    for(var i = 0; i < images.length; i++) {
        // 为每个img元素添加loading="lazy"
        images[i].setAttribute('loading', 'lazy');
    }
});
