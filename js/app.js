console.log('Iframe browser am running!');

const registerServiceWorker = async () => {
  try {
    await navigator.serviceWorker.register('/pwa/windowControlsOverlay-newCSSVars-old/sw.js', { scope: '/pwa/windowControlsOverlay-newCSSVars-old/'});
    console.log('Service worker registered');
  } catch (e) {
    console.log(`Registration failed: ${e}`);
  }
}

if (navigator.serviceWorker) {
  registerServiceWorker();
}

document.children[0].classList.add("testWin");

// Button handlers for emulating different orientations
const resetEmulation = () => {
  document.children[0].classList.remove('emulateWin');
  document.children[0].classList.remove('emulateMac');
  updateWCOInfo();
}

const emulateWin = () => {
  document.children[0].classList.remove('emulateMac');
  document.children[0].classList.add('emulateWin');
  updateWCOInfo();
}

const emulateMac = () => {
  document.children[0].classList.remove('emulateWin');
  document.children[0].classList.add('emulateMac');
  updateWCOInfo();
}

// Logging stuff in UI should all go below here. 
const updateWCOInfo = () => {
  const wcoElement = document.getElementById('WCO');
  const visibleElement = document.getElementById('WCOVisible');
  const rectElement = document.getElementById('WCORect');
  const cssElement = document.getElementById('WCOCss');
  const cssElementTest = document.getElementById('WCOCssTest');
  if (!navigator.windowControlsOverlay) {
    wcoElement.textContent = "navigator.windowControlsOverlay = undefined";
    visibleElement.textContent = "";
    rectElement.textContent = "";
  } else {
    wcoElement.textContent = "navigator.windowControlsOverlay";
    visibleElement.textContent = 
        `visible = ${navigator.windowControlsOverlay.visible}`;
    const rect = navigator.windowControlsOverlay.getBoundingClientRect();
    rectElement.textContent =
`getBoundingClientRect() = {
  x: ${rect.x},
  y: ${rect.y},
  width: ${rect.width},
  height: ${rect.height},
  top: ${rect.top},
  right: ${rect.right},
  bottom: ${rect.bottom},
  left: ${rect.left}
}`;

    const paddingLeft = getComputedStyle(cssElementTest).getPropertyValue('padding-left');
    const paddingRight = getComputedStyle(cssElementTest).getPropertyValue('padding-right');
    const paddingTop = getComputedStyle(cssElementTest).getPropertyValue('padding-top');
    const paddingBottom= getComputedStyle(cssElementTest).getPropertyValue('padding-bottom');
  cssElement.textContent =
`titlebar-area-inset-left: ${paddingLeft},
titlebar-area-inset-right: ${paddingRight},
titlebar-area-inset-top: ${paddingTop},
titlebar-area-inset-bottom: ${paddingBottom},
`;

    const cssError = document.getElementById("CSSEnvsEvaluateTo0");
    if (paddingLeft == "0px" && paddingRight == "0px") {
      cssError.style.visibility = "visible";
    } else {
      cssError.style.visibility = "hidden";
    }
  }
}

updateWCOInfo();

const onGeometryChange = () => {
  updateWCOInfo();
}

try {
  navigator.windowControlsOverlay.addEventListener('geometrychange',
                                                   onGeometryChange);
} catch (e) {
  console.error(e);
  
  // Show errors in webpage so it's obvious that something is broken.
  const errorDiv = document.getElementById("GeometryChangeListenerError");
  errorDiv.style.visibility = "visible";

  // If geometry change is not enabled, update on resize instead.
  window.addEventListener('resize', onGeometryChange);
}
