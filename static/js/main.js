;(function($,win){
	var page={
		init:function(){
			this.fnTab('.member-tab-title','.member-tab-cont');	
			this.fnShowLoginPanel();
			this.fnLoginPanel();
			this.mShowNav();
		},
		//会员tab切换
		fnTab:function(titleWrap,contWrap){
			var index=0;
			$(titleWrap).find('a').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
				index=$(this).index();
				$(contWrap)
					.find('.member-tab-item')
					.eq(index)
					.removeClass('hide')
					.siblings()
					.addClass('hide');
			});	
		},
		//显示登录
		fnShowLoginPanel:function(){
			$('[data-ele=btnLogin]').on('click',function(){
				$('.panel-login').removeClass('hide');
				$('.panel-group-1').removeClass('hide');
			});		
		},
		//登录弹出层事件
		fnLoginPanel:function(){
			$('.panel-login').on('click','.mask',function(){
				$('.panel-login').addClass('hide');
				$('.panel-group-1').addClass('hide');
				$('.panel-group-2').addClass('hide');
				$('.panel-group-3').addClass('hide');
			}).on('click','.panel-group-1 .submit',function(){
				$('.panel-group-1').addClass('hide');
				$('.panel-group-2').removeClass('hide');
			}).on('click','.panel-group-2 .submit',function(){
				$('.panel-group-2').addClass('hide');
				$('.panel-login').addClass('hide');
			}).on('click','.wechat',function(){
				$('.panel-group-1').addClass('hide');
				$('.panel-group-3').removeClass('hide');
			}).on('click','.panel-group-3 .submit',function(){
				$('.panel-group-1').addClass('hide');
				$('.panel-group-3').addClass('hide');
				$('.panel-login').addClass('hide');
			});
		},
		//手机端显示导航按钮	
		mShowNav:function(){
			$('.m-btn').on('click',function(){
				if($('body').hasClass('open')){
					$('body').removeClass('open')
				}else{
					$('body').addClass('open')
				}
			});
		}
	}
	page.init();
	win.page=page;
})(jQuery,window);