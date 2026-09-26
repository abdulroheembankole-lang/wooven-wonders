/* =====================================================
   WOOVEN WONDERS
   PRODUCT DATABASE
===================================================== */

const products = [

    {
        name: "Crochet Key Holder",
        price: 4000,
        image: "images/key-holder.png"
    },

    
       
{
    name: "Scrunchie",
    price: 2500,
    image: "images/scrunchie.png"
},   


    {
        name: "Phone Pouch",
        price: 4000,
        image: "images/phone-pouch.png"
    },

    {
        name: "Mini Purse",
        price: 5000,
        image: "images/mini-purse.png"
    },

    {
        name: "Hand Bag",
        price: 8000,
        image: "images/hand-bag.png"
    },

    {
        name: "Tote Bag",
        price: 15000,
        image: "images/tote-bag.png"
    },

    {
        name: "Backpack",
        price: 18000,
        image: "images/backpack.png"
    },

    {
        name: "Face Cap",
        price: 5000,
        image: "images/face-cap.png"
    },

    {
        name: "Bucket Hat",
        price: 6000,
        image: "images/bucket-hat.png"
    },

    {
        name: "Top Shirt",
        price: 10000,
        image: "images/top-shirt.png"
    },

    {
        name: "Socks",
        price: 4000,
        image: "images/socks.png"
    },

    {
        name: "Cardigan",
        price: 18000,
        image: "images/cardigan.png"
    },

    {
        name: "Scarf",
        price: 10000,
        image: "images/scarf.png"
    },

    {
        name: "Amigurumi",
        price: 6000,
        image: "images/amigurumi.png"
    },

    {
        name: "Flower Bouquet",
        price: 12000,
        image: "images/flower-bouquet.png"
    },

    {
        name: "Mug Holder",
        price: 2500,
        image: "images/mug-holder.png"
    },

    {
        name: "Plant Holder",
        price: 5000,
        image: "images/plant-holder.png"
    },

    {
        name: "Storage Basket",
        price: 7000,
        image: "images/storage-basket.png"
    },

    {
        name: "Headband",
        price: 2500,
        image: "images/headband.png"
    },

    {
        name: "Bracelet",
        price: 1500,
        image: "images/bracelet.png"
    },

    {
        name: "Crochet Flower",
        price: 2000,
        image: "images/crochet-flower.png"
    }

];


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

const productContainer =
    document.getElementById("product-container");


products.forEach((product) => {

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `

        <img
            class="product-image"
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
        >

        <div class="product-info">

            <h3>${product.name}</h3>

            <p class="price">
                ₦${product.price.toLocaleString()}
            </p>

        </div>

    `;

    productContainer.appendChild(card);

});