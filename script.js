$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows:false,
});
$('.contests__class').on('click',function(){
	var tab = $(this).attr('data-tab');
	if (!$(this).hasClass('contests__class_active')) {
		$(this).parent().children('.contests__class').removeClass('contests__class_active');
		$(this).addClass('contests__class_active');
		$(this).parents('.main-content__inner').find('.contests__tab').hide(0).removeClass('contests__tab_active');
		$('#'+tab).show(0).addClass('contests__tab_active');
	}
})