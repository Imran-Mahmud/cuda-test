$(document).ready(function(){
	//menu down show start
	$(".js_services_section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
		
	});
	//menu down show end 
	//menu down show just copy
	$(".js_team_section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky2");
		}else{
			$("nav").removeClass("sticky2");
		}
		
	});
	$(".js_portfolio_section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky3");
		}else{
			$("nav").removeClass("sticky3");
		}
		
	});
	$(".js_about_section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky4");
		}else{
			$("nav").removeClass("sticky4");
		}
		
	});
	
	
	//mixitup(portfolio)
	var mixer= mixitup('#mixurer');


	
});
	
//for mobile menu
function openNav(){
	document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
	document.getElementById("myNav").style.width = "0%";
}
