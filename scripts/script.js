const CHECKBOX_CHECKED = 1;
const CHECKBOX_UNCHECKED = 0;

const colorSchemeSwitch = document.getElementById('colorSchemeId');

colorSchemeSwitch.addEventListener('change', e => {
  localStorage.setItem('color-scheme', e.target.checked ? CHECKBOX_CHECKED : CHECKBOX_UNCHECKED )
  const scheme = localStorage.getItem('color-scheme') || 'auto';
  document.documentElement.style.setProperty('--darkmode', scheme);
});

window.addEventListener('load', e => {
  const scheme = localStorage.getItem('color-scheme') || 'auto';

  if ( scheme !== 'auto' ) {
    document.documentElement.style.setProperty('--darkmode', scheme);
    colorSchemeSwitch.checked = +scheme ? CHECKBOX_CHECKED : CHECKBOX_UNCHECKED;
  }
});