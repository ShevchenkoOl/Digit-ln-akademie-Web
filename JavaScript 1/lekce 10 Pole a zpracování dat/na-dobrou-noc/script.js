
const ovciJmena = [
    'Bětuška',
    'Cína',
    'Dolly',
    'Heidy',
    'Líza',
    'Belinda',
    'Celia',
    'Elvíra',
    'Karla',
    'Otýlie',
    'Škraboška',
    'Kopretinka',
    'Berta',
    'Růženka',
    'Bobinka',
    'Žofka',
    'Dášenka',
    'Vlnka',
    'Květuše',
    'Pampeliška',
  ];

ovciJmena.slice(0,10).forEach((el, index) => {
document.body.innerHTML += `Ovečka ${el}, jako ${index+1} přeskočila přes plot.<br>`;
});