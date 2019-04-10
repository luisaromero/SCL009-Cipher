const btnCifrado = document.getElementById('encode');
const btnDescifrado = document.getElementById('decode');

const containerResult = document.getElementById('result');

btnCifrado.addEventListener('click', () => {
  let texto = document.getElementById('first').value;
  let desplazamiento = document.getElementById('second').value;

  containerResult.innerHTML = window.cipher.encode(texto, desplazamiento);

})
btnDescifrado.addEventListener('click', () => {
  let texto = document.getElementById('first').value;
  let desplazamiento = document.getElementById('second').value;

  containerResult.innerHTML = window.cipher.decode(texto, desplazamiento);
  })