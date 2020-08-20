if (4 == 8) {
    console.log('OK!');
} else {
    console.log('NO!');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Yes');
}


const num2 = 50;

(num2 == 49) ? console.log('Yes') : console.log('NO')

let num3 = 50;

switch (num3) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 42:
        console.log('Yes');
        break;
    default:
        console.log('Не в этот раз');
        break;
}

let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } 
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        // break;
        continue;
    }
    console.log(i);
}