function hitung() {
    var angka1 = parseFloat(document.getElementById('angka1').value);
    var angka2 = parseFloat(document.getElementById('angka2').value);
    var operator = document.getElementById('operator').value;
    var hasil;

    switch(operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            if(angka2 != 0) {
                hasil = angka1 / angka2;
            } else {
                hasil = 'Tidak bisa dibagi dengan 0';
            }
            break;
        default:
            hasil = 'Operator tidak valid';
    }

    document.getElementById('result').innerText = 'Hasil: ' + hasil;
}
