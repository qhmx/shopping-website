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
	$(".jnCatinfo .promoted").append('<s class="hot"></s>');

	//图片广告
	var index = 0;
	function showImg(index){
		var $rollobj = $("#jnImageroll");
		var $rolllist = $rollobj.find("div a");
		var newhref = $rolllist.eq(index).attr("href");
		$("#JS_imgWrap").attr("href",newhref)
			            .find("img").eq(index).stop(true,true).fadeIn()
			            .siblings().fadeOut();
		$rolllist.removeClass("chos").css("opacity","0.7")
			     .eq(index).addClass("chos").css("opacity","1");
	}
	$('#jnImageroll div a').mouseover(function(){
		index = $("#jnImageroll div a").index(this);
		showImg(index);
	}).eq(0).mouseover();
	var timer = null;
	//滑入停止动画，滑出开始动画
	$("#jnImageroll").hover(function(){
		if(timer){
			clearInterval(timer);
		}
	},function(){
		timer = setInterval(function(){
			showImg(index);
			index++;
			if(index == 5){index=0;}
		},5000);
	}).trigger("mouseleave");
//提示效果
	var x= 10;
	var y = 20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
		$("body").append(tooltip);
		$("#tooltip")
			.css({
			    "top":(e.pageY+y) + "px",
				"left":(e.pageX+x) + "px"
		    }).show("fast");
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mouseover(function(e){
		$("#tooltip")
			.css({
			    "top":(e.pageY+y) + "px",
				"left":(e.pageX+x) + "px"
		    });
	});

    /*$("#jnBrandList li").each(function(index){
		var $img = $(this).find("img");
		var img_w = $img.width();
		var img_h = $img.height();
		var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imagemask"></span>';
		$(spanHtml).appendTo(this);
	});

	$("#jnBrandList").delegate(".imagemask","hover",function(){
		$(this).toggleClass("imageOver");
	});*/
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass("chos")
			   .siblings().removeClass("chos");
		var idx = $("#jnBrandTab li a").index(this);
		showBrandList(idx);
		return false;
	}).eq(0).click();

});
//显示不同的模块

function showBrandList(index){
	var $rollobj = $("#jnBrandList");
	var rollWidth = $rollobj.find("li").outerWidth();
	rollWidth = rollWidth * 4;
	$rollobj.stop(true,false).animate({left : -rollWidth*index},1000);
}


