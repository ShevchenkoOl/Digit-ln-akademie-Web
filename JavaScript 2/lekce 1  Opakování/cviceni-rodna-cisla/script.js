const rodneCislo = prompt("Prosim zadejte svoje rodne cislo");

const checkBirthID = (rodneCislo) => {
  //let platne = true;
  if (
    rodneCislo.length === 10 &&
    Number.isInteger(Number(rodneCislo)) &&
    parseInt(rodneCislo) % 11 === 0
  ) {
    alert("✔️ Zadané rodné číslo je platné.");
  } else {
    alert("Zadané rodné číslo neni platné.");
  }
};
checkBirthID(rodneCislo);
