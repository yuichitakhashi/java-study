// create your classes here


class mountain {
    constructor(height,place){
        this.height = height;
        this.place = place;
    }
    pr_height(){
        console.log(this.height);
    }
    pr_place(){
        console.log(this.place);
    }
}

var mtFuji = new mountain(3776,"Shizuoka");
mtFuji.pr_height()

class gl_mountain extends mountain {
    constructor(height,place,country){
        super(height,place);
        this.country = country;
    }
    pr_country(){
        console.log(this.country);
    }
}

var everest = new gl_mountain(7777,"KT","nepal");
everest.pr_height();
everest.pr_place();
everest.pr_country();


// 練習問題

// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    docSomethingFun() {
        this.energy -= 10;
    }
    
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goTowork() {
        this.xp += 10;
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var internA =  new Worker(0, 10, "Bob", 21, 110);
    internA.goTowork();
    return internA;
}

// Task 4: Code a manager object, methods
function manager() {
    var managerA = new Worker(100, 30, "Alice", 30, 120);
    managerA.docSomethingFun();
    return managerA;
}

console.log(manager().name);