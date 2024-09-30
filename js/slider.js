// const images = document.querySelectorAll(".hero-description--image");
// const buttonSlider = document.querySelectorAll(".list-slider__button-slider");
// let imageIndex = 0;

// function show(index) {
//     images[imageIndex].classList.remove("active");
//     images[index].classList.add("active");
//     imageIndex = index;
// }

// buttonSlider.forEach((e) => {
//     e.addEventListener("click", (event) => {
//         buttonSlider.forEach(button => button.classList.remove('active'));

//         if (event.target.classList.contains("list-slider__button-slider--back")) {
//             let index = imageIndex - 1;
//             if (index < 0) {
//                 index = images.length - 1;
//             }
//             show(index);
//         } else if (event.target.classList.contains("list-slider__button-slider--next")) {
//             let index = imageIndex + 1;
//             if (index >= images.length) {
//                 index = 0;
//             }
//             show(index);
//         }

//         e.classList.add('active');
//     });
// });

// show(imageIndex);


const images = document.querySelectorAll(".hero-description--image");
const buttonSlider = document.querySelectorAll(".list-slider__button-slider");
let imageIndex = 0;

function show(index) {
    // Робимо попереднє зображення "previous", щоб воно поступово зникло
    images[imageIndex].classList.remove("active");
    images[imageIndex].classList.add("previous");

    // Через невелику затримку прибираємо клас "previous"
    setTimeout(() => {
        images[imageIndex].classList.remove("previous");
    }, 250); // Тривалість transition повинна співпадати з CSS

    // Робимо нове зображення активним
    images[index].classList.add("active");
    imageIndex = index;
}

buttonSlider.forEach((e) => {
    e.addEventListener("click", (event) => {
        buttonSlider.forEach(button => button.classList.remove('active'));

        if (event.target.classList.contains("list-slider__button-slider--back")) {
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
        } else if (event.target.classList.contains("list-slider__button-slider--next")) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }

        e.classList.add('active');
    });
});

show(imageIndex);
