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

	//СͼƬ�л���ͼƬ
	$("#jnProitem ul.imgList li a").bind("click",function(){
		var imgSrc = $(this).find("img").attr("src");
		var i = imgSrc.lastIndexOf(".");
		var unit = imgSrc.subString(i);
		imgSrc = imgSrc.subString(0,i);
		var imgSrc_big = imgSrc + "big" + unit;
		$("$thickImg").attr("href",imgSrc_big);
	});
	//ѡ�
	var $div_li = $("div.tab_menu ul li");
	$div_li.click(function(){
		$(this).addClass("selected")//��ǰliԪ�ظ���
			   .siblings().removeClass("selected");//ȥ��ͬ��Ԫ�صĸ���
	    var index = $div_li.index(this);//��ȡ��ǰ���liԪ�ص�����
		$("div.tab_box > div")
			.eq(index).show()//��ʾliԪ�ض�Ӧ��divԪ��
			.siblings().hide();//��������ͬ��Ԫ�ص�divԪ��
	}).hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
});