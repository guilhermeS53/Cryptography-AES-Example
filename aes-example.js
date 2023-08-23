const CryptoJS = require('crypto-js'); // import da biblioteca crypto.js

function aesEncrypt(key, iv, plaintext) {
    const cipher = CryptoJS.AES.encrypt(plaintext, key, { iv: iv });
    return cipher.toString();
}

function aesDecrypt(key, iv, ciphertext) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key, { iv: iv });
    return bytes.toString(CryptoJS.enc.Utf8);
}

const key = CryptoJS.enc.Hex.parse('a7c02f2f1dc26a757749425a43f288d09cb2f40a6acb4a6e7857a9d28d5352c0'); // código hash gerado por uma ferramenta online
const iv = CryptoJS.enc.Hex.parse('fedcba9876543210fedcba9876543210');
const plaintext = 'Texto Limpo';

const ciphertext = aesEncrypt(key, iv, plaintext);
const decryptedText = aesDecrypt(key, iv, ciphertext);

console.log('Texto original:', plaintext); // nosso plaintext é o "texto limpo", ou seja, o texto inicial
console.log('Texto criptografado:', ciphertext); // criptografia aplicada ao texto
console.log('Texto descriptografado:', decryptedText); // texto após ter passado pelo processo de descriptografia