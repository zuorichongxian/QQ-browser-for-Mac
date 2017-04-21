/**
 * Created by Administrator on 2017/4/20.
 */
$(function() {
	var index = 0,
		timer = null;
	/*
	   监听鼠标的滚动
	*/
	$(window).mousewheel(function(event, delta) {
		//		console.log(delta);
		clearTimeout(timer)
		timer = setTimeout(function() {
			//			index-=delta;
			index = index - delta
			//			console.log(index)
			if(index >= $(".gps li").length - 1) {
				index = $(".gps li").length - 1

			} else if(index <= 0) {
				index = 0
			}
			//切换选中圆点和页面
			$(".gps li").eq(index).addClass("current").siblings().removeClass('current')
			$("section").eq(index).show().siblings("section").hide()
			showAndHide(index)
setTimeout(function() {
			$('section').eq(index).removeClass('current').siblings('section').addClass('current');
		}, 10);

		}, 400)
		
	});
	//  监听小圆点点击

	showAndHide(index)
	$(".gps li").click(function() {
		index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current")
		$("section").eq(index).show().siblings("section").hide()
		showAndHide(index)
		setTimeout(function() {
			$('section').eq(index).removeClass('current').siblings('section').addClass('current');
		}, 10);

	})

	/**
	 * 
	 * @param 首屏元素显示和隐藏的方法
	 */
	function showAndHide(index) {
		if(index == 0) {
			$(".left-top-logo").hide()
			$(".scroll").show()
		} else {
			$(".left-top-logo").show()
			$(".scroll").hide()

		}

	}
});