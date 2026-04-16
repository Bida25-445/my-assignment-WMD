window.addEventListener("load", function () {
    const cars = document.querySelectorAll(".car");
    const names = document.querySelectorAll(".car-name");
    const copies = document.querySelectorAll(".car-copy");

    cars.forEach((car, index) => {
        setTimeout(() => {
            car.classList.add("show");
        }, index * 220);
    });

    names.forEach((name, index) => {
        setTimeout(() => {
            name.classList.add("show");
        }, 320 + index * 180);
    });

    copies.forEach((copy, index) => {
        setTimeout(() => {
            copy.classList.add("show");
        }, 500 + index * 180);
    });
});