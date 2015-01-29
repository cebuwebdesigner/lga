time=setInterval(function(){





function initGeolocation() {
 if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback,
                                         {enableHighAccuracy:true, timeout:60000, maximumAge:600000});
        } else {
            console.log('Geolocation is not supported');
        }
}
 
function errorCallback() {}
 
function successCallback(position) {
	//alert(position.coords.latitude + ',' + position.coords.longitude)
     /* var mapUrl = "http://maps.google.com/maps/api/staticmap?center=";
      mapUrl = mapUrl + position.coords.latitude + ',' + position.coords.longitude;
      mapUrl = mapUrl + '&zoom=15&size=512x512&maptype=roadmap&sensor=false';
      var imgElement = document.getElementById("static-map");
      imgElement.src = mapUrl;*/
	  
 	var thelatitude  = position.coords.latitude;
	var thelongitude = position.coords.longitude;
	localStorage['mylatKey'] = thelatitude;
	localStorage['mylongKey2'] = thelongitude;
	var AAA = localStorage['myID2'].split(',');
	var theid = AAA[1];
	var hostserver=localStorage['globalurl'];
				
	if(thelatitude!=""){
	$.post(hostserver+"gps.php",
  {
    id:theid,
	long:thelongitude,
	lat:thelatitude
  },
  function(data,status){
    if(status=="success"){
	//window.top.location.href = "form.html"; 
	}else{
		alert("Please check your connection and try again");
		}
  });
}
		
	/*		*/
		
		
	  
    }
	
	
	initGeolocation();




























	var vpass2 = localStorage['myID2'];//document.getElementById("password").value;
	var params = vpass2.split(',');
	var vpass2=params[1];
	
 
	 var hostserver = localStorage['globalurl'];
		$.post(hostserver+"pop-notification.php",
 		 {
			userid:vpass2
  		},
		  function(data,status){
			if(status=="success"){
			//alert(data);
			//showAlert("successfully added to court calendar; "+localStorage['courtname']+","+caldate)
		   if(data>0){
			   
		   document.getElementById('badge2').style.visibility="visible"; 
		   $( ".badge" ).html( data );
			localStorage['popnotific']=1;
			localStorage['popnotificcount']=data;
		   }else{
			   
			    document.getElementById('badge2').style.visibility="hidden"; 
			   }
		   
			}else{
				alert("Please check your connection and try again");
				}
		  });
				



},10000);

if(localStorage['popnotific']==1){
	 document.getElementById('badge2').style.visibility="visible"; 
	 var thezdata=localStorage['popnotificcount']; $( ".badge" ).html(thezdata);
	}
//var e = $('<div style="display:block; float:left;width:'+width+'px; height:'+height+'px; margin-top:'+positionY+'px;margin-left:'+positionX+'px;border:1px dashed #CCCCCC;"></div>');
//$('#box').append(e); e.attr('id', 'myid');