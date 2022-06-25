// const get_advice = () => {
//   fetch('https://api.adviceslip.com/advice')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       document.querySelector('.title').textContent =
//         'Advice #' + data.slip.id;
//       document.querySelector('.text').textContent =
//         '"' + data.slip.advice + '"';
//     });
// };

const get_advice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const jsonData = await response.json();
  document.querySelector('.title').textContent = `Advice #${jsonData.slip.id}`;

  document.querySelector('.text').textContent = `"${jsonData.slip.advice}"`;
};

get_advice();
const clickbtn = document.querySelector('.btn');
clickbtn.addEventListener('click', get_advice, false);
