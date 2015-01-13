function courtlink(){  window.top.location.href = localStorage['courtlink']; }



function editbck() { window.history.back(); }



function associates(){ window.top.location.href = "associates.html"; }



function favourites(){  window.top.location.href = "load-favorites.html?url=favorites.html";}


function requestssend() {   window.parent.location.href = "load-request.html?url=requests-send.html";  }
function requestsrecieved() {   window.parent.location.href = "load-request.html?url=requests-recieved.html"; }
function requestsalll() {   window.parent.location.href = "load-request.html?url=requests-all.html";  }
function closeby() {   window.top.location.href = 'courts-list.html?'+localStorage['courtassociate'];  }

var hideSb = function(){
    StatusBar.show;
      cordova.exec(null, null, 'StatusBar', 'show', ['Ehi', 'You']);
    };
	
	
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(StatusBar);
}

StatusBar.backgroundColorByName("black");
StatusBar.backgroundColorByHexString("#000000");