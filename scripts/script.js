//Creat the main Class Animal and use display() 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(img, name, gender, age, size, vaccine, color) {
        this.img = img;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.size = size;
        this.vaccine = vaccine;
        this.color = color;
        items.push(this);
    }
    Animal.prototype.display = function () {
        var bt = document.querySelector(".toggelBt");
        if (this.vaccine ==
            "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>") {
            this.color = "success";
        }
        else {
            this.color = "danger";
        }
        return "<div class=\"card col-lg-3 col-md-4 col-sm-8 p-0 m-0 \">\n  <img src=\"".concat(this.img, "\" class=\"card-img-top  d-md-block d-lg-block d-sm-none \" alt=\"...\">\n  <div class=\"card-body p-0\">\n    <h5 class=\"card-title bg-dark text-light text-center\">").concat(this.name, "</h5>\n    <h6 class=\"card-title ms-3\">Gender:").concat(this.gender, "</h6>\n    <h6 class=\"card-title ms-3\">Age:").concat(this.age, "</h6>\n    <h6 class=\"card-title ms-3\">Size:").concat(this.size, "</h6>\n    <button type=\"button\" class=\"btn btn-").concat(this.color, " toggelBt w-100  shadow p-2 fw-bolder fs-3 rounded-pill \" >").concat(this.vaccine, "</button>\n  </div>\n  </div>");
    };
    return Animal;
}());
//class for dogs
var dogs = /** @class */ (function (_super) {
    __extends(dogs, _super);
    function dogs(img, name, gender, age, size, vaccine, breed, training, color) {
        var _this = _super.call(this, img, name, gender, age, size, vaccine, color) || this;
        _this.breed = breed;
        _this.training = training;
        return _this;
    }
    dogs.prototype.display = function () {
        var bt = document.querySelector(".toggelBt");
        if (this.vaccine ==
            "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>") {
            this.color = "success";
        }
        else {
            this.color = "danger";
        }
        return "<div class=\"card col-lg-3 col-md-4 col-sm-8  p-0 m-0\">\n  <img src=\"".concat(this.img, "\" class=\"card-img-top d-md-block d-lg-block d-sm-none \" alt=\"...\">\n  <div class=\"card-body p-0\">\n  <h5 class=\"card-title bg-dark text-light text-center\">").concat(this.name, "</h5>\n  <h6 class=\"card-title ms-3\">Gender:").concat(this.gender, "</h6>\n  <h6 class=\"card-title  ms-3\">Age:").concat(this.age, "</h6>\n  <h6 class=\"card-title  ms-3\">Size:").concat(this.size, "</h6>\n  <button type=\"button\" class=\"btn btn-").concat(this.color, " toggelBt w-100  shadow p-2 fw-bolder fs-3 rounded-pill\">").concat(this.vaccine, "</button>\n  <h6 class=\"card-title  ms-3\">Breed:").concat(this.breed, "</h6>\n  <h6 class=\"card-title  ms-3\">Training:").concat(this.training, "</h6>\n  </div>\n  </div>");
    };
    return dogs;
}(Animal));
//class for cats
var cats = /** @class */ (function (_super) {
    __extends(cats, _super);
    function cats(img, name, gender, age, size, vaccine, breed, furColor, URLbreed, color) {
        var _this = _super.call(this, img, name, gender, age, size, vaccine, color) || this;
        _this.breed = breed;
        _this.furColor = furColor;
        _this.URLbreed = URLbreed;
        return _this;
    }
    cats.prototype.display = function () {
        var bt = document.querySelector(".toggelBt");
        if ((this.vaccine = "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>")) {
            this.color = "success";
        }
        else {
            this.color = "danger";
        }
        return "<div class=\"card col-lg-3 col-md-4 col-sm-8  p-0 m-0  \">\n  <img src=\"".concat(this.img, "\" class=\"card-img-top d-md-block d-lg-block d-sm-none \" alt=\"...\">\n  <div class=\"card-body p-0\">\n  <h5 class=\"card-title bg-dark text-light text-center\">").concat(this.name, "</h5>\n  <h6 class=\"card-title ms-3\">Gender:").concat(this.gender, "</h6>\n  <h6 class=\"card-title ms-3\">Age:").concat(this.age, "</h6>\n  <h6 class=\"card-title ms-3\">Size:").concat(this.size, "</h6>\n  <button type=\"button\" class=\"btn btn-").concat(this.color, " toggelBt w-100 shadow p-2 fw-bolder fs-3 rounded-pill\">").concat(this.vaccine, "</button>\n  <h6 class=\"card-title ms-3\">Breed:").concat(this.breed, "</h6>\n  <h6 class=\"card-title ms-3\">Furcolor:").concat(this.furColor, "</h6>\n  <h6 class=\"card-title ms-3\">Breed url:<a href=\"\">").concat(this.URLbreed, "</a></h6>\n  </div>\n  </div>");
    };
    return cats;
}(Animal));
// creat Arroy which have all info about Animals
var items = [];
new Animal("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1BEZeQ46xy3KslCVDnGwZruQ4fD2Ca47uKI7nx3aGzKM35UuvlcJCuODd4-JZRbGZEQ&usqp=CAU", "Bacon", "female", 4, "small", "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>", "success");
new Animal("https://i.pinimg.com/originals/41/2d/0a/412d0a708130f873e1175de5b926d294.jpg", "Spike", "male", 4, "small", "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>", "success");
new dogs("https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=526&q=80", "Sushi", "male", 2, "large", "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>", "north usa", "Yes", "success");
new dogs("https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80", "platano", "male", 5, "small", "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>", "Poodle", "No", "success");
new dogs("https://images.unsplash.com/photo-1596797882870-8c33deeac224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", "Toto", "male", 5, "medium", "no vaccine" + "    " + "<i class=\"fa-solid fa-xmark\"></i>", "Pug", "Yes", "danger");
new dogs("https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=569&q=80", "Jimmy", "male", 5, "small", "no vaccine" + "    " + "<i class=\"fa-solid fa-xmark\"></i>", "Bigearspretty", "Yes", "danger");
new cats("https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", "Tom", "male", 5, "medium", "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>", "Norwegian ", "brown", "https://en.wikipedia.org/wiki/Norwegian_Forest_cat", "success");
new cats("https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", "Cryus", "female", 3, "small", "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>", "Angora", "white", "https://en.wikipedia.org/wiki/Turkish_Angora", "success");
//add info about Animals to the cards in HTML page 
function petGalliery() {
    document.querySelector(".row").innerHTML = "";
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        document.querySelector(".row").innerHTML += item.display();
    }
}
petGalliery();
// sort by Age and add button of vccine Toggle to work also after sorting
function sortAge() {
    items.sort(function (a, b) {
        var x = a.age;
        var y = b.age;
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
        return 0;
    });
    petGalliery();
    var btns = document.getElementsByClassName("toggelBt");
    var _loop_2 = function (i) {
        btns[i].addEventListener("click", function () {
            if (btns[i].style.backgroundColor == "red") {
                btns[i].style.backgroundColor = "green";
                btns[i].innerHTML = "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>";
            }
            else {
                btns[i].style.backgroundColor = "red";
                btns[i].innerHTML = "no vaccine" + "    " + "<i class=\"fa-solid fa-xmark\"></i>";
            }
        });
    };
    for (var i = 0; i < btns.length; i++) {
        _loop_2(i);
    }
    ;
}
document.getElementById("toggle").addEventListener("click", sortAge);
// Cret Toggle button to covert to red If there is no vaccine
var btns = document.getElementsByClassName("toggelBt");
var _loop_1 = function (i) {
    btns[i].addEventListener("click", function () {
        if (btns[i].style.backgroundColor == "red") {
            btns[i].style.backgroundColor = "green";
            btns[i].innerHTML = "vaccine" + "   " + "<i class=\"fa-solid fa-syringe\"></i>";
        }
        else {
            btns[i].style.backgroundColor = "red";
            btns[i].innerHTML = "no vaccine" + "    " + "<i class=\"fa-solid fa-xmark\"></i>";
        }
    });
};
for (var i = 0; i < btns.length; i++) {
    _loop_1(i);
}
;
