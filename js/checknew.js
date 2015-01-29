time=setInterval(function(){





var hostserver= localStorage['globalurl'];
    // Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //

function onSuccess(position) {
   	
	
	localStorage['mylatKey'] = position.coords.latitude;
	localStorage['mylongKey2'] = position.coords.longitude;
							
	
	//http://buildwebdesign.com/kryptonite/legalapp/gps.php?id=73&long=123&lat=10
	
	var thelatitude  = position.coords.latitude;
	var thelongitude = position.coords.longitude;
	
	var AAA = localStorage['myID2'].split(',');
	var theid = AAA[1];
	

	
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