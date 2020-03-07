$(function(){
	var imgl = $('.lundiv img').length;
	var index = imgl-1;
	setInterval(function(){
		index++;
		showimg();
	},2000);
	$('.lundiv').hover(function(){
		$(this).find('span').show();
	},function(){
		$(this).find('span').hide();
	})
	$('.lundiv span').eq(0).click(function(){
		index--;
		showimg();
	})
	$('.lundiv span').eq(1).click(function(){
		index++;
		showimg();
	})
	function showimg(){
		if(index > imgl){
			index=0;
		}else if(index < 0){
			index = imgl-1;
		}
		$('.lundiv img').eq(index).animate({opacity:'1'}).siblings('img').animate({opacity:'0'});
	}
	$('.ulbox1 li').hover(function(){
		$(this).find('ul').show();
	},function(){
		$(this).find('ul').hide();
	});
	$('.hbdiv button').hover(function(){
		$(this).css('background','brown');
	},function(){
		$(this).css('background','red');
	});
	$('.gg4 button').hover(function(){
		$(this).css({
			'background': 'red',
			'color': 'white'
		})
	},function(){
		$(this).css({
			'background': 'white',
			'color': 'red'
		})
	})
	$('.rd3t div').hover(function(){
		$(this).find('img').css('transform','scale(1.2)');
	},function(){
		$(this).find('img').css('transform','scale(1)');
	});
	setInterval(function(){
		$('.pyt img').animate({left:'-340px'},5000).animate({left:'0px'},5000)
	},1000)
})
