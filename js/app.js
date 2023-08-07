


const product = [
    {
        "id": 0,
        "image": "https://i.ibb.co/Dfh0Gtv/pant-1.jpg",
        "price": " 550",
        "title": "স্লিম ফিট ডেনিম জিন্স..."
    },
    {
        "id": 1,
        "image": "https://i.ibb.co/bdRzv2n/1.jpg",
        "price": " 550",
        "title": "স্লিম ফিট স্ট্রেচেবল জিন্স"
    },
    {
        "id": 2,
        "image": "https://i.ibb.co/Dfh0Gtv/pant-1.jpg",
        "price": " 550",
        "title": "মেনস ডেনিম জিন্স প্যান্ট"
    },
    {
        "id": 3,
        "image": "https://i.ibb.co/bdRzv2n/1.jpg",
        "price": " 550",
        "title": "সেমি ন্যারো ক্লাসিক জিন্স"
    },

]

const catagories = [...new Set(product.map((item) => {
    return item;
}))]

let i = 0;
document.getElementById('productItem').innerHTML = catagories.map((item) => {
    var { image, title, price } = item;
    return (
        ` <div class="mt-3 md:mt-3 rounded-tl-2xl h-72 w-56  rounded-br-2xl px-4 py-2 border border-2  border-yellow-400">
        <img class="mt-2" src=${image} alt="">
        <p class="rounded-tl-2xl rounded-br-2xl bg-sky-800 px-2 py-1">${title}
    </p>
    <div class="flex justify-around ">
    <p class=" my-4  bg-yellow-400 text-sky-800  rounded-tl-2xl  rounded-br-2xl py-1 px-1 "><span>৳</span>${price}</p>` +

        "<button style ='background-color:yellow; border-radius: 20px 5px ;margin:14px 2px; padding-left:4px;padding-right:4px; ' onclick= 'addtocart(" + (i++) + ")'> ক্রয় করুন</button>" + `</div>

     </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...catagories[a] })
    displaycart();

}
function delElement(a) {
    cart.pop({ ...catagories[a] })
    displaycart();
}
function displaycart() {
    let j = 0, total = 0;

    document.getElementById('count').innerHTML = cart.length

    if (cart.length === 0) {
        document.getElementById('product-cart ').innerHTML = "please Order something ....."
        document.getElementById('total').innerHTML = "৳" + 0 + ".00"

    }
    else {
        document.getElementById("product-cart ").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById('total').innerHTML = "৳" + total + ".00";

            return (

                `  <div class=" flex justify-left items-center">
                <img class="h-10 w-10" src=${image} alt="">
                <p class="text-white">${title}</p>
                
                
             <p class="text-white ms-16"><span>৳</span>${price}</p> ` +
                " <i class =' ms-10 fa-solid fa-trash' onclick ='delElement(" + (j++) + ")'></i></div>"


            );
        }).join('');
    };


}




let signUpBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title')


signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "সফলভাবে  প্রবেশ করেছেন"
    signUpBtn.classList.add("disable")
    signinBtn.classList.remove("disable")

}

signUpBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "অনুগ্রহ করে প্রবেশ করুন"
    signUpBtn.classList.remove("disable")
    signinBtn.classList.add("disable")

}

