function createParagraph() {
  let para = document.createElement('p')
  para.textContent = "点击了按钮"
  document.body.appendChild(para)
}
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
