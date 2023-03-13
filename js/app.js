let myDom = document;

const myDog = {
    name: "Firulais",
};

const myCat = {
    "name": "Kitty",
};

console.log(myDog.name);
console.log(myCat.name);

function Mouse (name, age) {
        this.name = name;
        this.age = age
    }

const myMouse = new Mouse ("Perez", 4);

class Button {
    constructor (parentID, text){
        this.parentID = parentID;
        this.text = text;
    }
    render(){
        let myApp = document.getElementById(this.parentID)
        let button = '<button>' + this.text + '</button>'
        myApp.innerHTML = button; //Vamos a escribir en HTML para que se dibuje un boton con el texto de this.text
    }
}

class Input {
    constructor (parentID, placeholder){
        this.parentID = parentID;
        this.placeholder = placeholder;
    }
    render(){
        let newInput = document.getElementById(this.parentID)
        let form = '<input type="email" placeholder="' + this.placeholder + '">'
        
        newInput.innerHTML = form; //Vamos a escribir en HTML para que se dibuje un boton con el texto de this.text
    }
}

let myButton = new Button('app', 'Esto es un botón');
myButton.render()

let myInput = new Input('app1', 'Esto es un input');
myInput.render()

//Construir el objeto boton y llamar al metodo render de ese objeto
//Ej let myButton = new....
//myButton.metodoquesea()