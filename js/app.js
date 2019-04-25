let listLogin = ["admin", "manager", "seller"];
let alert = document.querySelector(".alert");
let commande = document.querySelector(".commandeClient");
let divTotal = document.querySelector(".total");
let resume = document.querySelector(".resume");
let contenuTableau = document.querySelector(".contenuTableau");


class Pizza {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}
class Boissons {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
} 
// class commandeClient {
//     constructor(id, name, total){
//         this.id = id;
//         this.name = name[""];
//         this.total = total;
//     }
// }
let listBoissons =  [
    new Boissons ("Coca-cola", 1.50),
    new Boissons ("Fanta", 1.20),
    new Boissons ("Oasis", 1.50),
    new Boissons ("Eau", 1.50),
    new Boissons ("Perrier", 1.50),
];
let listPizzas = [
    new Pizza ("Margherita", 6.00),
    new Pizza ("Napolitaine", 7.50),
    new Pizza ("Hawaïenne", 8.00),
    new Pizza ("Bolognaise", 7.50),
    new Pizza ("Thon", 6.00)
];

let listCommandes = [];

uniquId = () => {
    return 'Id' + Math.random().toString(36).substr(2,6);
}

goToCommande = () => {
    let inputLogin = document.querySelector("input[name='login']").value;
    while (inputLogin != "admin" || inputLogin != "manager" || inputLogin != "seller") {
        alert.innerHTML = '<div class="alert alert-danger" role="alert">Erreur de login !</div>';
        break;
    }
    for (let e of listLogin) {
        if (inputLogin == e) {
            document.location.href = "views/commande.html";
            break;
        }
    }
}
let commandeClient = [];
commandeClient.name = [];
commandeClient.total = 0;

addProduct = () => {
    let product = document.querySelector("#select").value;
    let qty = document.querySelector("#qty").value;
    let price;

    for (let b of listBoissons){
        if (b.name == product){
            price = b.price; 
            for (let i=1; i<=qty; i++){
                commandeClient.name.push(b.name);
            }    
        }
    }
    for (let p of listPizzas){
        if (p.name == product){
            price = p.price;
            for (let i=1; i<=qty; i++){
                commandeClient.name.push(p.name);
            }
            // commandeClient.name.push(qty);
            // commandeClient.name.push(p.name);
        }
    }

    price = price * qty;
    price = Number(price.toFixed(2));
    commandeClient.total += price;
    console.log(commandeClient);
    commande.innerHTML += '<div class="row"><div class="col-4">'+product+ '</div><div class="col-3">'+qty+'</div><div class="col-3">'+price+' €</div></div><hr>';
    divTotal.innerHTML ="<div><strong>Total : <span>"+commandeClient.total+" €</span></strong></div>";
}

submit = () => {
    commandeClient.id = uniquId();
    listCommandes.push(commandeClient);
    console.log(listCommandes);
    console.log(listCommandes.id);
    console.log(listCommandes.total);
    // let partie1 = "<tr><td>"+commandeClient.id+"</td><td>";
    // let partie2 = commandeClient.name.length + " " +commandeClient.name[0]+ "s";
    // let partie3 = "</td><td>"+commandeClient.total+" €</td></tr>"
    // contenuTableau.innerHTML = partie1 + partie2 + partie3;


    contenuTableau.innerHTML += "<tr><td>"+commandeClient.id+"</td><td>"+commandeClient.name+"</td><td>"+commandeClient.total+" €</td></tr>";

    commandeClient.name = [];
    commandeClient.total = 0;
    commande.innerHTML = '<div class="row"><div class="col-4 title">Produit:</div><div class="col-3 title">Quantité:</div><div class="col-3 title">Prix:</div></div><hr style="height:1px; background-color:black;">';
    divTotal.innerHTML = "";
}

goToList = () => {
    console.log("prout");
    let x = document.querySelector("#hidden");
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}
