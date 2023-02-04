const modal = document.getElementsByClassName("modal");
const blur = document.getElementsByClassName("blur");
const openModalBtn = document.getElementsByClassName("btn-open");
const userName = document.getElementById("username");
const imgGirl = document.getElementById("imgGirl");
const imgBoy = document.getElementById("imgBoy");
const avatar = document.getElementById("avatar");
const logo = document.getElementById("logo");
const shape = document.getElementById("shape");
const submit = document.getElementById("submit");
const inputColor = document.getElementById("inputColor");
const nameChange = document.getElementById("name");
const radio = document.getElementsByClassName("radio");
const openBtn = document.getElementById("openBtn");
const header = document.getElementsByClassName("header");
const chooseLogo = document.getElementsByClassName("chooseLogo");

const openModal = () => {
    modal[0].classList.remove("hidden");
    blur[0].classList.remove("hidden");
}

const closeModal = () => {
    modal[0].classList.add("hidden");
    blur[0].classList.add("hidden");
}



const modalList = (e) => {
    e.preventDefault()
    nameChange.innerHTML = userName.value
    let imageNumber
    [...radio].forEach(radio => {
        if (radio.checked){
            imageNumber = radio.id
        }
    });
    console.log(radio)
    switch (imageNumber) {
        case '1': avatar.src = "./image/IMG_4192.JPEG"
            break;
        case '2': avatar.src = "./image/IMG_4193.JPEG"
            break;
        case '3': avatar.src = "./image/IMG_4194.JPEG"
            break;
        case '4': avatar.src = "./image/IMG_4196.JPG"
            break;
    }


    let logoNumber
    [...chooseLogo].forEach(chooseLogo => {
        if (chooseLogo.checked){
            logoNumber = chooseLogo.id
        }
    });
    
    switch (logoNumber) {
        case 'logo1': logo.src = "./Logo/logo1.jpg"
            break;
        case 'logo2': logo.src = "./Logo/logo2.jpg"
            break;
        case 'logo3': logo.src = "./Logo/logo3.jpg"
            break;
        case 'logo4': logo.src = "./Logo/logo4.jpg"
    }

    nameChange.style.color = inputColor.value
    openBtn.style.backgroundColor = inputColor.value
    document.body.style.backgroundImage = `linear-gradient(213deg,${inputColor.value} 5%,#212121 5% 10%,#fff 10% 60%, ${inputColor.value}  15% 73%,#212121 73% 86%,${inputColor.value}  86% 100%)`;
    avatar.style.backgroundImage = `linear-gradient(35deg,transparent 50%,${inputColor.value} 50%)`
}



openModalBtn[0].addEventListener("click" , openModal);
blur[0].addEventListener("click" , closeModal);
submit.addEventListener("click" , closeModal);
submit.addEventListener("click" ,modalList);
// submit.addEventListener("click" , formDetails);
inputColor[0].addEventListener("input" , generate);

