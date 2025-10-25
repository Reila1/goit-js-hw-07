const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', (event) => {
  const name = event.target.value.trim(); 
  
  if (name === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = name;
  }
});