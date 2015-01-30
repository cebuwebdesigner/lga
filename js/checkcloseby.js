time=setInterval(function(){



///?long=-30.512615!!!lat=146.917881!!!courtid=201!!!courtname=Albury!!!r=1

var url = window.location.href;
var params = url.split('?'); //long=-33.856613!!!lat=151.177322!!!courtid=237!!!courtname=Balmain!!!r=1
var ABC=params[1];
//localStorage['courtassociate']=ABC;
var AABBCC = ABC.split('!!!');


var AA = AABBCC[0];
var AAA = AA.split('=');
var alphastart=AAA[1]; //long

var BB = AABBCC[1];
var BBB = BB.split('=');
var alphatype=BBB[1]; //lat

var CC = AABBCC[2];
var CCC = CC.split('=');
localStorage['courtselected']=CCC[1]; //court
var thecourtid=CCC[1]; //court


 var hostserver = localStorage['globalurl'];
	var totalassociate = localStorage['totassociat'];
	var AAA = localStorage['myID2'].split(',');
	var theid = AAA[1];
	

	
					$.post(hostserver+"realtimegps.php",
					  {  myid:theid,
						courtid:thecourtid,
						long:alphastart,
						lat:alphatype,
						total:totalassociate
					  },
					  function(data,status){
						if(status=="success"){
						//window.top.location.href = "form.html"; 
						//alert(totalassociate+" "+data);
						if(data=="refresh"){
							window.top.location.href = localStorage['refreshcloseby']; 
							}
						
						}else{
							alert("Please check your connection and try again");
							}
					  });
						 
	 
	 
	 
	 
},15000);





