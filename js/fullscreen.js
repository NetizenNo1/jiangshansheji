// 固定横屏自适应脚本

// 游戏容器自适应缩放
function adjustGameScale() {
	var game = document.getElementById('game');
	if (!game) return;
	
	var viewportWidth = window.innerWidth;
	var viewportHeight = window.innerHeight;
	var gameWidth = 800;
	var gameHeight = 480;
	
	// 计算缩放比例（考虑旋转后的视口）
	var isPortrait = viewportHeight > viewportWidth;
	
	if (isPortrait) {
		// 竖屏模式下，内容已通过CSS旋转，这里调整游戏容器缩放
		var scaleX = viewportHeight / gameWidth;
		var scaleY = viewportWidth / gameHeight;
		var scale = Math.min(scaleX, scaleY);
		game.style.transform = 'scale(' + scale + ')';
	} else {
		// 横屏模式
		var scaleX = viewportWidth / gameWidth;
		var scaleY = viewportHeight / gameHeight;
		var scale = Math.min(scaleX, scaleY);
		
		if (scale < 1) {
			game.style.transform = 'scale(' + scale + ')';
		} else {
			game.style.transform = 'scale(1)';
		}
	}
}

// 屏幕方向变化监听
window.addEventListener('orientationchange', function() {
	setTimeout(adjustGameScale, 100);
});

// 窗口大小变化监听
window.addEventListener('resize', function() {
	setTimeout(adjustGameScale, 100);
});

// 页面加载完成后初始化
window.addEventListener('load', function() {
	adjustGameScale();
});

// 触摸设备检测
function isTouchDevice() {
	return ('ontouchstart' in window) || 
		   (navigator.maxTouchPoints > 0) || 
		   (navigator.msMaxTouchPoints > 0);
}

if (isTouchDevice()) {
	document.body.classList.add('touch-device');
}
