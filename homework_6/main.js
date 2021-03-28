

let getIndex = num => {
    localStorage.setItem("i",num);
    window.location.href='details.html';

}


let initDetail = () => {
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

}

