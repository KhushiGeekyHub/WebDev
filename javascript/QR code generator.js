const QRinput = document.getElementById('QR-input');
const QRimg = document.getElementById('QR-img');
const QRbutton = document.getElementById('QR-button');

console.log(QRinput, QRbutton, QRimg)

QRbutton.addEventListener('click', () => {
    const inputvalue = QRinput.value;
    console.log(inputvalue)

    if (!inputvalue) {
        alert('Please Enter valid URL');
        return;
    } else {
        QRimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        arimg.alt = `QR Code for ${inputvalue}`;
    }
});