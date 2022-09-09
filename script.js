const container = document.querySelector('#gridContainer')
const clearBtn = document.querySelector("#clear")
const resetBtn = document.querySelector("#reset")
let size = prompt('How many squares per side? (max 60)',16);

if (size > 60) {
  size = 60;
}

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 1; i <= size * size; i++) {
  const div = document.createElement('div');
  div.id = 'div'+i;
  div.classList.add('divs');
  container.appendChild(div);
}

const divs = document.querySelectorAll('.divs');

divs.forEach(divs => divs.addEventListener("click", () => {
  divs.classList.toggle('active')}))

clearBtn.onclick = () => {;
    divs.forEach(divs => {
    divs.classList.remove('active');
    })}

resetBtn.onclick = () => window.location.reload(false);
