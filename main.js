// get the index of added cinnamon roll
let getIndex = num => {
    localStorage.setItem("i",num);
    window.location.href='details.html';

}


let initDetail = () => {
    // dynamically change picture and description
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


    // generate number of items in cart 
    q = localStorage.getItem("total") || 0;
    let quantity = document.getElementById("quantity");
    quantity.innerText = q;
    
}


// get which glazing option is selected
let getGlazing = e => {
    localStorage.setItem("glaze",e);

}

// get the quantity of selected item
let getNumber = e => {

    localStorage.setItem("quant", e);
}

// get information about added item (index, quantity, glazing)
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

    var total = parseInt(localStorage.getItem("total") || 0);
    total += parseInt(quant);
    localStorage.setItem("total", total);

    q = localStorage.getItem("total") || 0;
    let quantity = document.getElementById("quantity");
    quantity.innerText = q;



    var money = parseFloat(localStorage.getItem("money") || 0)
    money += parseInt(quant)*parseFloat(rolls[i].money)
    localStorage.setItem("money", money)

}

// generate number of items in cart in all other pages
let getQuantity = () => {
    q = localStorage.getItem("total") || 0;
    let quantity = document.getElementById("quantity");
    quantity.innerText = q;
}


let drawcart = () => {
    let cartList = JSON.parse(localStorage.getItem("carts"));


// get subtotal and total 
    q = localStorage.getItem("total") || 0;
    let quantity = document.getElementById("quantity");
    quantity.innerText = q;

    money = localStorage.getItem("money") || 0;
    let subtotal = document.getElementById("subtotal");
    subtotal.innerText = "$ " + money;
    
    let sum = document.getElementById("sum");
    sum.innerText = "$ " + (parseFloat(money)+5);

    if (cartList.length !== 0) {
        var empty = document.getElementById("empty")
        empty.style["display"] = "none";
    }

    // generate list of added items
    for (let i = 0;i < cartList.length;i++) {
        item = cartList[i];
        index = item[0];
        itemName = rolls[index].name + " Cinnamon Roll";
        img_URL = rolls[index].url;
        itemPrice = rolls[index].price;
        itemQuantity = "Quantity: " + item[1];
        itemGlaze = "Glazing: " + item[2];

        let listing = document.getElementById("checkout-items");

        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "newDiv")
        newDiv.setAttribute("id", index);


        newDiv.innerHTML = "<h4>" +itemName+ "</h4>" + "<div class='contentDiv'> <img class='left_pic' src='"+img_URL+"'/> <div class='cart_right'> <p>"+itemPrice+"<p>"+itemQuantity+"</p> <p>"+itemGlaze+"<br><div class='edit'> <p class='modify'> <b> Edit </b> </p> <p class='modify' style='margin-left: 30px' onclick='removeItem("+index+")'> <b> Remove </b> </p>  </div> </p></p></div> </div>"

        listing.appendChild(newDiv);

    }


}

// remove items, adjust total amount and the number beside cart
let removeItem = index => {
    let cartList = JSON.parse(localStorage.getItem("carts"));
    let total = localStorage.getItem("total");

    let money = localStorage.getItem("money");

    for (let j=0; j < cartList.length; j++) {
        if (parseInt(cartList[j][0]) === index) {
            reduce = cartList[j][1];
            moneyLose = parseInt(reduce)*parseFloat(rolls[cartList[j][0]].money);
            cartList.splice(j, 1);
        }
    }

    new_total = parseInt(total)- parseInt(reduce);
    new_money = parseFloat(money)- parseFloat(moneyLose);

    localStorage.setItem("total", new_total);
    localStorage.setItem("money", new_money);


    q = localStorage.getItem("total") || 0;
    let quantity = document.getElementById("quantity");
    quantity.innerText = q;


    money = localStorage.getItem("money") || 0;
    let subtotal = document.getElementById("subtotal");
    subtotal.innerText = "$ " + money;
    
    let sum = document.getElementById("sum");
    sum.innerText = "$ " + (parseFloat(money)+5);



    localStorage.setItem("carts", JSON.stringify(cartList));
    
    var empty = document.getElementById("empty")
    if (cartList.length === 0) {
        empty.style["display"] = "block";
    }


    let cancel = document.getElementById(index);
    cancel.style["display"] = "none";



}