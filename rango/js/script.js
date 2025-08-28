const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu-lateral');
const fecharBtn = document.getElementById('fechar-btn');

btn.addEventListener('click', () => {
  menu.classList.toggle('aberto');
  btn.style.display = 'none'; 
});

fecharBtn.addEventListener('click', () => {
  menu.classList.remove('aberto');
  btn.style.display = 'flex';
});

  document.getElementById("whatsapp-float").addEventListener("click", function () {
    window.open("https://chat.whatsapp.com/LyCM1uKQoG5FZozoF4Vhbd", "_blank");
  });
  