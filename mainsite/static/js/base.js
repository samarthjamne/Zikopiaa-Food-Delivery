let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    alert("so sorry!!, we are not available at this time");
});

let box1 = document.getElementById("box1");
box1.addEventListener("mousehover", () => {
    box1.style.backgroundColor = purple;
});

let box2 = document.getElementById("box2");
box2.addEventListener("mousehover", () => {
    box3.style.backgroundColor = red;
});

let box3 = document.getElementById("box3");
box3.addEventListener("mousehover", () => {
    box3.style.backgroundColor = blue;
});

// form validation

const fname = document.fname;
const email = document.email;
const phone = document.phone;
const message = document.message;

fname.addEventListener("blur", () => {
    if (fname.value < 5) alert("name must contain more than 5 letters");
});

// email.addEventListener("blur", () => {
//     if(email.value)
// });