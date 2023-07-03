# iframe-browser-pwa
[browser-in-website](https://github.com/AzlanCoding/browser-in-website) project but in a PWA form  <br>
![image](https://raw.githubusercontent.com/AzlanCoding/azlancoding.github.io/main/iframe-browser/Screen%20recording%202022-06-30%2011.25.19.gif)

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
1. I did not make this extension, someonelse did.
2. Use of this website is at your own risk. If your school cathches you, It's none of my buisiness.
# Recently added features 
1. Fullscreen option
2. Back and forward buttons
3. Tab strib(removed the windows overlay function) (Enable via chrome://flags/#enable-desktop-pwas-tab-strip)
4. No longer need to key in `"https://"` in the front of url
5. Added reload button! (yes finally!)
# Recently fixed
1. Fixed bug in which blank url input returns blank iframe (now returns 404)
2. Disabled spellcheck in url bar
# Removed Features
1. Windows Overlay Function was replaced with Tab Strip as it gave it a more, browser like look.
