This site is unlocked for the June holidays!
/split/
// code for the lock
d = new Date()
hrs = d.getHours();
min = d.getMinutes();
day = d.getDay();
//const sec = d.getSeconds();
//alert(hrs);
//alert(min);
function pass() {
  return prompt("Enter Password:", "Unlocked during 10:40am to 11:20am GMT+0800 (Singapore Standard Time)");
}
function word() {
while (true) {
	if (pass() == "BZssK37k") {
	    auth = true;
	    break
	}else{
	    alert("invalid password")
	    
	}
}
}
function breaks() {
	if (hrs == 10 && min >= 40) {
		return true
	}else if (hrs == 11 && min < 20) {
		return true
	}else {
		return false
	}
}
if (hrs >= 14 || hrs < 8 || breaks() == true|| day == 0 || day == 6|| auth == true){
    //alert("pass not needed");
    
}else {
    alert("You are using this webite during school hours. Pls enter the password to bypass. Current time: " + d);
    word();
}
//}
