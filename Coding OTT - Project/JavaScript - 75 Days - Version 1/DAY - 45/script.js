/* ================= TASK ================= */

window.onload = function () {

    fetchProduct();

};

const baseURL = "https://api.freeapi.app";
const endPoint = "/api/v1/public/randomproducts?page=1&limit=10&query=mens-watches";
const server = baseURL + endPoint;

async function fetchProduct() {

    try {

        let response = await fetch(server, {
            method: "GET",
            headers: {
                accept: "application/json"
            }
        });

        let result = await response.json();
        loadProducts(result.data.data);
        console.log(result.data.data)

    } catch (error) {

        console.error("Fetch Error:", error);

    }

}

function loadProducts(data) {

    let ProdcutContainer = document.getElementById("ProdcutContainer");
    ProdcutContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        ProdcutContainer.innerHTML += `
        
        <div class="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow">

            <img src="https://dummyjson.com/image/400x200/008080/ffffff?text=Product ${i + 1}" alt="Product ${i + 1}" loading="lazy" class="w-full h-[180px] rounded-t-lg object-cover">

            <div class="p-5 flex flex-col gap-1">
                <h3 class="font-bold text-xl line-clamp-2">${(data[i].title)}</h3>
                <p class="text-gray-600 text-sm">₹${(data[i].price).toString()}</p>
            </div>

            <div class="mt-auto flex items-center justify-center gap-3 mb-5 text-white text-sm h-10 mx-3 rounded cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 bg-[length:200%_200%] bg-left transition-all duration-500 hover:bg-right">

                <i class="ri-shopping-cart-line"></i>
                <span>BUY NOW</span>
            </div>
        </div>
        
        `;

    }

}