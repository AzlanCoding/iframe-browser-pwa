# iframe-browser-pwa
[browser-in-website](https://github.com/AzlanCoding/browser-in-website) project but in a PWA form  <br>
<img src="blob:chrome-untrusted://media-app/72cc91c9-492c-4d4f-a72f-c9563aa83848" alt="Screen recording 2022-06-30 11.25.19.gif"/>![image](https://user-images.githubusercontent.com/101229146/176586625-0b8c6b44-cf37-4a01-adde-d615271aae06.png)

Reference: [codepo8/github-page-pwa](https://github.com/codepo8/github-page-pwa/blob/main/manifest.webmanifest)  <br>
icon from [Flaticon](https://www.flaticon.com/free-icons/web-development)  <br>
<br>
The website is here:  <br>
[azlancoding.github.io/iframe-browser-pwa](https://azlancoding.github.io/iframe-browser-pwa/) <br>
<br>
This project is to help students bypass websites accidentally blocked by schools device manager apps (e.g. Mobile guardian) to do reaserch.  <br>
It makes use of iframe to do so. You can call it an iframe browser. <br>
Using this extension to help the site work: https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe <br>
This extension ignores X-frame-headers and Content Security Policy (CSP) Headers. <br>
I managed to create a PWA for it. You may install it from the link above. <br>
Password to website if prompted: BZssK37k <br>
**TO UPDATE THE WEBSITE,REINSTALL PWA & CLEAR WEBSITE DATA(Cache)**
# Disclaimer
1. I don't actually know, html and Javascript, I just copied and modify online code based on experience with C++, C# and Python.  
2. I am only 14 😁. 
3. I did not make this extension, someonelse did.
4. Use of this website is at your own risk. If your school cathches you, It's none of my buisiness.
# Recently added features 
1. Fullscreen option
2. Back and forward buttons
3. Tab strib(removed the windows overlay function) (Enable via chrome://flags/#enable-desktop-pwas-tab-strip)
4. No longer need to key in `"https://"` in the front of url
5. Added reload button! (yes finally!)
# Recently fixed
1. Fixed bug in which blank url input returns blank iframe (now returns 404)
2. Disabled spellcheck in url bar
# Upcoming features
1. A sidebar that shows:
  a. History
  b. Bookmarks
2. Use of cookies to store history and bookmarks
# Removed Features
1. Windows Overlay Function was replaced with Tab Strip as it gave it a more, browser like look.
# Need help from public
1. known issues
# Known issues
1. Some websites like reddit can only be shown in the iframe browser for 3 seconds and disappears after that.
2. Website cannot bypass proxy
