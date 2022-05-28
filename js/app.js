console.log('Iframe browser am running!');
// listen to the service worker promise in index.html to see if there has been a new update.
// condition: the service-worker.js needs to have some kind of change - e.g. increment CACHE_VERSION.
window['isUpdateAvailable']
	.then(isAvailable => {
		if (isAvailable) {
			const toast = this.toastCtrl.create({
				message: 'New Update available! Reload the webapp to see the latest juicy changes.',
				position: 'bottom',
				showCloseButton: true,
			});
			toast.present();
		}
	});
