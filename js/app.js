console.log('I am running!');
window.addEventListener('DOMContentLoaded', (event) => {
    var extNotLoaded;
    fetch("chrome-extension://gleekbfjekiniecknbkamfmkohkpodhe/manifest.json")
        .then(response => response.json())
        .then(data => {
            installedExtVersion = data.version;
			extUpdateUrl = data.update_url;
            extNotLoaded = setTimeout(() => {
                document.getElementById('frame').src += ''
            }, 1000);
        })
        .catch((error) => modal.classList.add('show'))
		
	if (window.navigator.windowControlsOverlay && window.navigator.windowControlsOverlay.visible) {
		document.getElementsByName('theme-color')[0].setAttribute("content","#36393f");
	}

 
