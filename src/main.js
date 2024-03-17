const { invoke } = window.__TAURI__.tauri;

invoke('number')
  .then(result => {
    document.getElementById('number').innerText = result;
  })
  .catch(err => {
    console.error('Error calling number:', err);
  });