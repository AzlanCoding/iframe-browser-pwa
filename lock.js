lock/split/
// code for the lock starts below
// code below will only run if text before split is set to "lock"
d = new Date()
hrs = d.getHours();
min = d.getMinutes();
day = d.getDay();
//const sec = d.getSeconds();
//alert(hrs);
//alert(min);
function pass() {
  return prompt("Enter Password:", "Unlocked during 11:00am to 11:40am GMT+0800 (Singapore Standard Time)");
}
function word() {
while (true) {
	if (pass() == "BZssK37k") {
	    auth = true;
	    console.log("AUTHENTICATION SUCCESSFUL! ACCESS GRANTED")
	    break
	}else{
	    alert("ACCESS DENIED")
	    
	}
}
}
function breaks() {
	let falsed = false;
	if (hrs == 11 && min >= 40 && falsed == true) { /*not needed*/ 
		return true
	}else if (hrs == 11 && min <= 40) {
		return true
	}else {
		return false
	}
}
if (hrs >= 14 || hrs < 8 || breaks() == true|| day == 0 || day == 6|| auth == true){
    console.log("pass not needed as requirent fullfilled");
    
}else {
    console.log("AUTHENTICATING...")
    alert("You are using this webite during school hours. Pls enter the password to bypass. Current time: " + d);
    word();
}
//}
