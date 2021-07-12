const textarea = document.querySelector('#textarea');
const flag = document.querySelector('#feature-flag');
textarea.value = localStorage.getItem('autosave-data');
function autoSave() {
  if (flag.checked === true) {
    console.log('sa,eer');
    localStorage.setItem('autosave-data', textarea.value);
  }
}
setInterval(autoSave, 1000);
