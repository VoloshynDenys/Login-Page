function darkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}
document.querySelector("#themeModeBtn").addEventListener("click", darkMode);

console.log("Hello world");