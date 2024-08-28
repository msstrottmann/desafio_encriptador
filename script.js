const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');   


// Función para cifrar con el cifrado César
function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        if (/[a-z]/i.test(char)) {
            const code = char.charCodeAt(0);
            if (char.toLowerCase() === char) { // Minúscula
                result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else { // Mayúscula
                result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
        } else {
            result += char; // Si no es una letra, se mantiene igual
        }
    }
    return result;
}

// Función para descifrar con el cifrado César
function caesarDecrypt(text, shift) {
    return caesarCipher(text, -shift);
}

encryptButton.addEventListener('click', () => {
    const text = inputText.value;
    const encryptedText = caesarCipher(text, 3); // Desplazamiento de 3
    outputText.textContent = encryptedText;
});

decryptButton.addEventListener('click', () => {
    const text = inputText.value;
    const decryptedText = caesarDecrypt(text, 3); // Desplazamiento de 3
    outputText.textContent = decryptedText;
});
