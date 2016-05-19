var wrapp = $('#wrapp');
wrapp.append('<div class="container"></div>');
var container = $('.container');
var mainArray = ['bars','deaf','glide','blind','gitlab','at','asterisk','ban','bars','deaf','glide','blind','gitlab','at','asterisk','ban'];
for(var i=0;i<16;i++){
	var rand = Math.floor(Math.random()*mainArray.length);
	container.append('<div class="box"><div class="back"><i class="fa fa-'+mainArray[rand]+'" aria-hidden="true"></i></div><div class="front"></div></div>');
	mainArray.splice(rand,1);

}
$('.box').click(function  () {
	$(this).find('.front').css('transform', 'perspective(900px) rotateY(90deg)');
	$(this).find('.back').css('transform', 'perspective(900px) rotateY(0deg)');
})