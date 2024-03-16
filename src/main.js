const { invoke } = window.__TAURI__.tauri;

invoke("greet",{name: "World"}).then((response) => {
  window.header.innerHTML = response
})
