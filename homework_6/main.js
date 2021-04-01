// localStorage.clear();

// var carts = [];


let getIndex = num => {
    localStorage.setItem("i",num);
    window.location.href='details.html';

}


let initDetail = () => {
    localStorage.setItem("quant", 1);
    localStorage.setItem("glaze", "No glazing");

    var i = localStorage.getItem("i");
    let sub = document.getElementById("sub");
    const text = document.createTextNode(rolls[i].sub);

    sub.appendChild(text);

    let pic = document.getElementById("detail_img");
    pic.src = rolls[i].url;

    let desc = document.getElementById("desc");
    const description = document.createTextNode(rolls[i].description);
    
    desc.appendChild(description);

    let price = document.getElementById("price");
    const p = document.createTextNode(rolls[i].price);

    price.appendChild(p);

    
    q = localStorage.getItem("total") || 0;
    let quantity = document.getElementById("quantity");
    quantity.innerText = q;
    
}



let getGlazing = e => {
    localStorage.setItem("glaze",e);
    console.log(e);
}

let getNumber = e => {
    console.log(e);
    localStorage.setItem("quant", e);
}


let addToCart = () => {
    var i = localStorage.getItem("i")
    var quant = localStorage.getItem("quant");
    var glaze = localStorage.getItem("glaze");


    var cart = JSON.parse(localStorage.getItem("carts"));

    if (cart === null) {
        cart = []
    }

    cart.push([i, quant, glaze])

    localStorage.setItem("carts", JSON.stringify(cart));
    console.log(localStorage.getItem("carts"));

    var total = parseInt(localStorage.getItem("total") || 0);
    total += parseInt(quant);
    localStorage.setItem("total", total);

    q = localStorage.getItem("total") || 0;
    let quantity = document.getElementById("quantity");
    quantity.innerText = q;

}

let getQuantity = () => {
    q = localStorage.getItem("total") || 0;
    let quantity = document.getElementById("quantity");
    quantity.innerText = q;
}


