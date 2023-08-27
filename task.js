// Manipulasi Strng

console.log("===MANIPULASI STRING===");

let name = "Hotniko Hildebrandus";
console.log(name);

let nameLength = name.length;
console.log(nameLength);

let nameUpper = name.toUpperCase();
console.log(nameUpper);

let nameLower = name.toLowerCase();
console.log(nameLower);

console.log(name[0]);

let nameSlice = name.slice (3, 8);
console.log(nameSlice);

let nameLoveJS = " Love Java Script";
console.log(name + nameLoveJS);

let nameLastCharacter = name.slice(-1);
console.log(nameLastCharacter);

//Mengubah Tipe Data

console.log("===MENGUBAH TIPE DATA===");

let age = "29";
console.log(age);

let ageToNumber = parseInt(age);
console.log(ageToNumber);

let height = "173";
console.log(height);

let heightToFloat = parseFloat(height)
console.log(heightToFloat);

//Pengecekan Tipe Data

console.log("===PENGECEKAN TIPE DATA===");

let data = true;
let no1 = 20;
let no2 = "Main Gitar";
console.log(typeof data) //Tipe data boolean
console.log(typeof no1) //Tipe data number
console.log(typeof no2) //Tipe data string

//Number

console.log("===PENJUMLAHAN DAN PENGURANGAN===");

let num1 = 10;
let num2 = 5;

console.log((num1 + num2) + " => Penjumlahan");
console.log((num1 - num2) + " => Pengurangan");

console.log("===PERKALIAN DAN PEMBAGIAN");

let num3 = 6;
let num4 = 2;

console.log((num3 * num4) + " => Perkalian");
console.log((num3 / num4) + " => Pembagian");

//Pangkat bilangan

console.log("===PANGKAT BILANGAN===");

let base = 3;
let exponent = 4;
let pemangkatan = Math.pow (base,exponent);

console.log((pemangkatan) + " =>Pemangkatan");

//Rata-rata dari array

console.log("===RATA-RATA DARI ARRAY===");

let arrayNumber = [5, 8, 12, 4, 6]
let arrayTotal = 0

for (let i = 0; i < arrayNumber.length ; i++){
    arrayTotal += arrayNumber[i];
}
result = arrayTotal/arrayNumber.length
console.log(result);

//Bilangan ganjil atau genap

console.log("===BILANGAN GANJIL ATAU GENAP===");

let num = 7;
if (num %2 == 0){
    console.log(num, " => Bilangan Genap");
}
else {
    console.log(num + " => Bilangan ganjil");
}

//Random

console.log("===RANDOM===");

let randomNo= Math.floor(Math.random() * 5+1);
console.log(randomNo + " => Random")

