const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.split('')
    let dividedArr = []
    const chunkSize = 10
    for (let i = 0; i < arr.length; i += chunkSize) {
        let chunk = arr.slice(i, i + chunkSize)
        dividedArr.push(chunk)
    }

    let result = '';
    let dotsDash = '';
    let letter = '';
    let word = '';
    for (let i = 0; i < dividedArr.length; i++) {
        let str = dividedArr[i].join('').replace(/00/gi, '')
        if (str === '**********') word += ' ';

        for (let i = 0; i <= str.length; i += 2) {
            if (str[i] === '1' && str[i + 1] === '0') dotsDash += '.';
            else if (str[i] === '1' && str[i + 1] === '1') dotsDash += '-';
        }

        result = dotsDash
        dotsDash = ''

        for (let key in MORSE_TABLE) {
            if (result === key) {
                letter = MORSE_TABLE[key]
                word += letter
            }
        }
    }
    return word
}

module.exports = {
    decode
}