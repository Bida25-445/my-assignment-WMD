window.onload=function(){

    let cars = document.querySelectorAll(".car");

    cars.forEach(function(car, index){

        setTimeout(function(){
            car.classList.add("show");
        }, index*600);

    });
}