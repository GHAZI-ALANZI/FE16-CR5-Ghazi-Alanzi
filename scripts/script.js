"use strict";
//Creat the main Class Animal and use display() 
class Animal {
    constructor(img, name, gender, age, size, vaccine, color) {
        this.img = img;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.size = size;
        this.vaccine = vaccine;
        this.color = color;
        items.push(this);
    }
    display() {
        let bt = document.querySelector(".toggelBt");
        if (this.vaccine ==
            "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`) {
            this.color = "green";
        }
        else {
            this.color = "red";
        }
        return `<div class="card col-lg-3 col-md-4 col-sm-8 p-0 m-0 ">
  <img src="${this.img}" class="card-img-top  d-md-block d-lg-block d-none " alt="...">
  <div class="card-body p-0">
    <h5 class="card-title bg-dark text-light text-center">${this.name}</h5>
    <h6 class="card-title ms-3">Gender:${this.gender}</h6>
    <h6 class="card-title ms-3">Age:${this.age}</h6>
    <h6 class="card-title ms-3">Size:${this.size}</h6>
    <button type="button" class="btn  toggelBt w-100 text-light shadow p-2 fw-bolder fs-3 rounded-pill " style="background-color:${this.color};">${this.vaccine}</button>
  </div>
  </div>`;
    }
}
//class for dogs
class Dogs extends Animal {
    constructor(img, name, gender, age, size, vaccine, breed, training, color) {
        super(img, name, gender, age, size, vaccine, color);
        this.breed = breed;
        this.training = training;
    }
    display() {
        let bt = document.querySelector(".toggelBt");
        if (this.vaccine ==
            "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`) {
            this.color = "green";
        }
        else {
            this.color = "red";
        }
        return `<div class="card col-lg-3 col-md-4 col-sm-8  p-0 m-0">
  <img src="${this.img}" class="card-img-top d-md-block d-lg-block d-none " alt="...">
  <div class="card-body p-0">
  <h5 class="card-title bg-dark text-light text-center">${this.name}</h5>
  <h6 class="card-title ms-3">Gender:${this.gender}</h6>
  <h6 class="card-title  ms-3">Age:${this.age}</h6>
  <h6 class="card-title  ms-3">Size:${this.size}</h6>
  <button type="button" class="btn  toggelBt w-100 text-light shadow p-2 fw-bolder fs-3 rounded-pill" style="background-color:${this.color};">${this.vaccine}</button>
  <h6 class="card-title  ms-3">Breed:${this.breed}</h6>
  <h6 class="card-title  ms-3">Training:${this.training}</h6>
  </div>
  </div>`;
    }
}
//class for cats
class Cats extends Animal {
    constructor(img, name, gender, age, size, vaccine, breed, furColor, URLbreed, color) {
        super(img, name, gender, age, size, vaccine, color);
        this.breed = breed;
        this.furColor = furColor;
        this.URLbreed = URLbreed;
    }
    display() {
        let bt = document.querySelector(".toggelBt");
        if ((this.vaccine = "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`)) {
            this.color = "green";
        }
        else {
            this.color = "red";
        }
        return `<div class="card col-lg-3 col-md-4 col-sm-8  p-0 m-0  ">
  <img src="${this.img}" class="card-img-top d-md-block d-lg-block d-none " alt="...">
  <div class="card-body p-0">
  <h5 class="card-title bg-dark text-light text-center">${this.name}</h5>
  <h6 class="card-title ms-3">Gender:${this.gender}</h6>
  <h6 class="card-title ms-3">Age:${this.age}</h6>
  <h6 class="card-title ms-3">Size:${this.size}</h6>
  <button type="button" class="btn  toggelBt w-100  text-light shadow p-2 fw-bolder fs-3 rounded-pill" style="background-color:${this.color};">${this.vaccine}</button>
  <h6 class="card-title ms-3">Breed:${this.breed}</h6>
  <h6 class="card-title ms-3">Furcolor:${this.furColor}</h6>
  <h6 class="card-title ms-3">Breed url:<a href="">${this.URLbreed}</a></h6>
  </div>
  </div>`;
    }
}
// creat Arroy which have all info about Animals
let items = [];
new Animal("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1BEZeQ46xy3KslCVDnGwZruQ4fD2Ca47uKI7nx3aGzKM35UuvlcJCuODd4-JZRbGZEQ&usqp=CAU", "Bacon", "female", 4, "small", "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`, "success");
new Animal("https://i.pinimg.com/originals/41/2d/0a/412d0a708130f873e1175de5b926d294.jpg", "Spike", "male", 4, "small", "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`, "success");
new Dogs("https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=526&q=80", "Sushi", "male", 2, "large", "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`, "north usa", "Yes", "success");
new Dogs("https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80", "platano", "male", 5, "small", "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`, "Poodle", "No", "success");
new Dogs("https://images.unsplash.com/photo-1596797882870-8c33deeac224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", "Toto", "male", 5, "medium", "no vaccine" + "    " + `<i class="fa-solid fa-xmark"></i>`, "Pug", "Yes", "danger");
new Dogs("https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=569&q=80", "Jimmy", "male", 5, "small", "no vaccine" + "    " + `<i class="fa-solid fa-xmark"></i>`, "Bigearspretty", "Yes", "danger");
new Cats("https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", "Tom", "male", 5, "medium", "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`, "Norwegian ", "brown", "https://en.wikipedia.org/wiki/Norwegian_Forest_cat", "success");
new Cats("https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", "Cryus", "female", 3, "small", "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`, "Angora", "white", "https://en.wikipedia.org/wiki/Turkish_Angora", "success");
//add info about Animals to the cards in HTML page 
function petGalliery() {
    document.querySelector(".row").innerHTML = "";
    for (let item of items) {
        document.querySelector(".row").innerHTML += item.display();
    }
}
petGalliery();
// sort by Age and add button of vccine Toggle to work also after sorting
function sortAge() {
    items.sort(function (a, b) {
        let x = a.age;
        let y = b.age;
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
        return 0;
    });
    petGalliery();
    let btns = document.getElementsByClassName("toggelBt");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            if (btns[i].style.backgroundColor == "red") {
                btns[i].style.backgroundColor = "green";
                btns[i].innerHTML = "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`;
            }
            else {
                btns[i].style.backgroundColor = "red";
                btns[i].innerHTML = "no vaccine" + "    " + `<i class="fa-solid fa-xmark"></i>`;
            }
        });
    }
    ;
}
document.getElementById("toggle").addEventListener("click", sortAge);
// Cret Toggle button to covert to red If there is no vaccine
let btns = document.getElementsByClassName("toggelBt");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        if (btns[i].style.backgroundColor == "red") {
            btns[i].style.backgroundColor = "green";
            btns[i].innerHTML = "vaccine" + "   " + `<i class="fa-solid fa-syringe"></i>`;
        }
        else {
            btns[i].style.backgroundColor = "red";
            btns[i].innerHTML = "no vaccine" + "    " + `<i class="fa-solid fa-xmark"></i>`;
        }
    });
}
;
