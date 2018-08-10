$(function(){
		var htimer = null;
	$(".dropone").hover(function(){
        clearInterval(htimer);
		$(this).find("a").css({"color":"#f44","text-decoration":"underline","cursor":"pointer"});
		$(".list").show();
	},function(){
		$(this).find("a").css({"color":"#6C6C6C","text-decoration":"none"});
		htimer = setInterval(function(){$(".list").hide();},700);
	});
	$(".drop").hover(function(){      
		$(this).find("a").css({"color":"#f44","text-decoration":"underline","cursor":"pointer"});
	},function(){
		$(this).find("a").css({"color":"#6C6C6C","text-decoration":"none"});
	});
	$("#nav li").hover(function(){
		$(this).find(".jnNav").show();
	},function(){
		$(this).find(".jnNav").hide();
	});

	//小图片切换大图片
	$("#jnProitem ul.imgList li a").bind("click",function(){
		var imgSrc = $(this).find("img").attr("src");
		var i = imgSrc.lastIndexOf(".");
		var unit = imgSrc.subString(i);
		imgSrc = imgSrc.subString(0,i);
		var imgSrc_big = imgSrc + "big" + unit;
		$("$thickImg").attr("href",imgSrc_big);
	});
	//选项卡
	var $div_li = $("div.tab_menu ul li");
	$div_li.click(function(){
		$(this).addClass("selected")//当前li元素高亮
			   .siblings().removeClass("selected");//去掉同辈元素的高亮
	    var index = $div_li.index(this);//获取当前点击li元素的索引
		$("div.tab_box > div")
			.eq(index).show()//显示li元素对应的div元素
			.siblings().hide();//隐藏其他同辈元素的div元素
	}).hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
});