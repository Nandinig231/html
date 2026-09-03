let cart = [];

let total = 0;


/* ================= ADD TO CART ================= */

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total = total + price;

    updateCart();

    alert(name + " added to cart!");
}


/* ================= UPDATE CART ================= */

function updateCart() {

    let cartItems =
        document.getElementById("cart-items");

    let cartCount =
        document.getElementById("cart-count");

    let totalAmount =
        document.getElementById("total");


    cartCount.innerText = cart.length;

    totalAmount.innerText = total;


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty
            </p>`;

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach(function(item, index) {

        cartItems.innerHTML += `

            <div class="cart-item">

                <span>
                    ${item.name}
                    - ₹${item.price}
                </span>

                <button
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        `;

    });

}


/* ================= REMOVE ITEM ================= */

function removeItem(index) {

    total = total - cart[index].price;

    cart.splice(index, 1);

    updateCart();

}


/* ================= CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert(
        "🎉 Order placed successfully!\n" +
        "Total Amount: ₹" + total
    );


    cart = [];

    total = 0;

    updateCart();

}


/* ================= SEARCH ================= */

function searchProducts() {

    let searchText =
        document
        .getElementById("search")
        .value
        .toLowerCase();


    let products =
        document.querySelectorAll(".product");


    products.forEach(function(product) {

        let productName =
            product
            .querySelector("h3")
            .innerText
            .toLowerCase();


        if (productName.includes(searchText)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= SHOP NOW ================= */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}