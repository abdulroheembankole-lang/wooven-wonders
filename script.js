/* =====================================================
   WOOVEN WONDERS
   PRODUCT DATABASE
===================================================== */

const products = [
    { name: "Crochet Key Holder", price: 4000, image: "key-holder.png" },
    { name: "Scrunchie", price: 2500, image: "scrunchie.png" },
    { name: "Phone Pouch", price: 4000, image: "phone-pouch.png" },
    { name: "Mini Purse", price: 5000, image: "mini-purse.png" },
    { name: "Hand Bag", price: 8000, image: "hand-bag.png" },
    { name: "Tote Bag", price: 15000, image: "tote-bag.png" },
    { name: "Backpack", price: 18000, image: "backpack.png" },
    { name: "Face Cap", price: 5000, image: "face-cap.png" },
    { name: "Bucket Hat", price: 6000, image: "bucket-hat.png" },
    { name: "Top Shirt", price: 10000, image: "top-shirt.png" },
    { name: "Socks", price: 4000, image: "socks.png" },
    { name: "Cardigan", price: 18000, image: "cardigan.png" },
    { name: "Scarf", price: 10000, image: "scarf.png" },
    { name: "Amigurumi", price: 6000, image: "amigurumi.png" },
    { name: "Flower Bouquet", price: 12000, image: "flower-bouquet.png" },
    { name: "Mug Holder", price: 2500, image: "mug-holder.png" },
    { name: "Plant Holder", price: 5000, image: "plant-holder.png" },
    { name: "Storage Basket", price: 7000, image: "storage-basket.png" },
    { name: "Headband", price: 2500, image: "headband.png" },
    { name: "Bracelet", price: 1500, image: "bracelet.png" },
    { name: "Crochet Flower", price: 2000, image: "crochet-flower.png" }
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
