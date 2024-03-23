const letter = document.getElementById('text');
const button = document.getElementById('btn');

button.addEventListener('click',() => {

  setTimeout(() =>{

    letter.textContent=('ボタンをクリックしました');
  },2000);
})