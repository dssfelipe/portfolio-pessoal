const texts = ["Student Developer", "Student Software Engineer", "Student Cybersecurity"];

let index = 0;
let isDeleting = false;
let textIndex = 0;
let speed = 100;

const typeWrite = () => {
    const typewrite = document.querySelector("#typewrite");
    const currentText = texts[textIndex];

    if (!isDeleting && index <= currentText.length) {
        typewrite.textContent = currentText.substring(0, index);
        index++;
        speed = 100;
    } else if (isDeleting && index >= 0) {
        typewrite.textContent = currentText.substring(0, index);
        index--;
        speed = 40;
    }

    if (index > currentText.length) {
        isDeleting = true;
        speed = 1000;
    }

    if (index === 0 && isDeleting) {
        isDeleting = false;

        if (textIndex < texts.length - 1) {
            textIndex++;
        } else {
            textIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeWrite, speed);
};


window.addEventListener("load", typeWrite);
