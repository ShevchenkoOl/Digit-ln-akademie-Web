                        // Funkce jako argumenty, události

const plus = (num1, num2) => {
    return num1 + num2;
    };
    
    const minus = (num1, num2) => {
    return num1 - num2;
    };
    
    const times = (num1, num2) => {
    return num1 * num2;
    };
    
    const divide = (num1, num2) => {
    return num1 / num2;
    };
const calc = (num1, op, num2) => {
//     if (op === '+') {
//         return num1 + num2;
//     }
//     if (op === '-') {
//         return num1 - num2;
//     }
//     if (op === '*') {
//         return num1 * num2;
//     }
//     if (op === '/') {
//         return num1 / num2;
//     }
//        return null;
return op(num1, num2);
     };
     const sect = calc(8, minus, 9);
document.body.innerHTML += sect;



    const weakPassword = (len) => {
    let result = '';
    for (let i = 0; i < len; i++) {
        result += String(i % 10);
    }
    return result;
    };
    const mediumPassword = (len) => {
    let result = '';
    for (let i = 0; i < len; i++) {
        const digit = Math.floor(Math.random() * 10);
        result += String(digit);
    }
    return result;
    };

    const strongPassword = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
    let result = '';
    for (let i = 0; i < len; i++) {
        const charIndex = Math.floor(Math.random() * chars.length);
        result += chars[charIndex];
    }

    return result;
                            };
                        const createAccount = (user, generatePassword) => {
                            const password = generatePassword(9);
                            return `<p>Uzivalel: ${user}, ma heslo ${password}</p>`; 
                        };
                            //             const createAccount = (user, generatePassword) => {
                            //                 const password = generatePassword(9);
                            //                 return `<p>Uživatel: ${user}</p> <p>s heslem: ${password}</p>`;
                            //             };
                
    document.body.innerHTML += `
        <p>${createAccount('Míša', weakPassword)}</p>
        <p>${createAccount('Řízek', mediumPassword)}</p>
        <p>${createAccount('Mápodčepicí', strongPassword)}</p>
    `;

