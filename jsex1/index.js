function appendImgElem(keyword , index){
    const ImgElem = document.createElement("img");
    ImgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector(".gallery");
    galleryElem.appendChild(ImgElem);
}
function removephotos(){
    const galleryElem = document.querySelector(".gallery");
    galleryElem.innerHTML = ' ';
}
function searchPhotos(event){    
    const keyword = event.target.value;
    if(event.key === 'Enter' && keyword){
        removephotos();
        for(let i=1 ; i<=9 ; i++){
            appendImgElem(keyword , i);    
        }
    }
}

function run(){    
    const inputElem = document.querySelector("input");
    inputElem.addEventListener("keydown" , searchPhotos);
}

run();































/*const name = "Pantawit";
let height = 175;
let isMale = false;
let city = null;
let bignumber = 10n;
console.log(name , height , isMale , city , bignumber);

const person = { //object
    name: "Torsak",
    height: 175,
    city: "bangkok"
};
console.log(person.name);
person.height = 180;
console.log(person.height); 
person.weight = 70;
console.log(person);

const number = [5,10,15,20];
console.log(number);
number.push(25); //เพิ่มตัวหลัง
console.log(number);
number.pop(); //ลบตัวหลัง
console.log(number);
number.unshift(1); //เพิ่มตัวหน้า
console.log(number);
number.shift(); // ลบตัวหน้า
console.log(number);

let result = 10+5*2/2;
console.log(result);

let password = " ";
if(password === " "){
    console.log("password is NULL");
}
else if(password.length >= 8 && password.length <= 12){
    console.log("password is valid");
}
else{
    console.log("password is invalid");
}

function calculatevat(money , vat){
    return money * vat /100;
}
const total = calculatevat(100,7);
console.log(total);
console.log(calculatevat(100,10));

for(let i=0 ; i<10 ; i++){
    if(i === 5 ){
        break;
    }    
    console.log(i);
}*/