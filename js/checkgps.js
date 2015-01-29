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





