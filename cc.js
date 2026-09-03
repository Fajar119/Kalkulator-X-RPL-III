let layar = document.getElementById("hasil");

function input(nilai) {
    layar.value += nilai;
}

function clearAll() {
    layar.value = "";
}

function hapus() {
    layar.value = layar.value.slice(0, -1);
}

function hitung() {
    layar.value = eval(layar.value);
}