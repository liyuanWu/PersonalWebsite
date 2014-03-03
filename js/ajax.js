function loadXMLDoc(source)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("content").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET",source,true);
xmlhttp.send();
}

function activeVitae(){
	$(".navbar-collapse ul li").removeClass('active');
	$("#Vitae").addClass('active');
}

function activeWork(obj){
	$(".navbar-collapse ul li").removeClass('active');
	var p = $(obj).parent().get(0);
	$(p).addClass('active');
	$("#majorWork").addClass('active');
}

function activeIndex(){
	$(".navbar-collapse ul li").removeClass('active');
	$("#index").addClass('active');
}