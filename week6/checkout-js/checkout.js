// VARIABLES
const shipment = 15.0;
const tax = 0.18;

let myCart = [
    { name: "Vintage Backpack", price: 34.99, pcs: 1, img: "./img/photo1.png" },
    { name: "Levi Shoes", price: 40.99, pcs: 1, img: "./img/photo2.png" },
    { name: "Antique Clock", price: 69.99, pcs: 1, img: "./img/photo3.jpg" },
];

// * render array
function renderMyCart() {
    myCart.forEach((item) => {
        document.querySelector("#product-rows").innerHTML +=
            `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-5">
          <img src=${item.img}  class="img-fluid rounded-start" alt="item picture">
        </div>
        <div class="col-md-7">
          <div class="card-body">
          
            <h5 class="card-title">${item.name}</h5>
            
                 <div class="item-price">
                        <p class="text-warning h2">$
                          <span class="discount-price">${(item.price * 0.7).toFixed(2)}</span>
                          <span class="h5 text-dark text-decoration-line-through">${item.price}</span>
                        </p>
                      </div>
                      
                      <div
                        class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                      >
                        <div class="pcs-controller">
                          <button class="btn btn-secondary btn-sm minus">
                            <i class="fas fa-minus"></i>
                          </button>
                          <p class="d-inline mx-4" id="item-pcs">${item.pcs}</p>
                          <button class="btn btn-secondary btn-sm plus">
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div class="item-removal mt-4">
                        <button class="btn btn-danger btn-sm w-100 remove-item">
                          <i class="fa-solid fa-trash-can me-2"></i>Remove
                        </button>
                      </div>
                      <div class="mt-2">
                        item Total: $<span class="item-total">${(item.price * 0.7 * item.pcs).toFixed(2)}</span>
                      </div>
          </div>
        </div>
      </div>
    </div>`;
    });
}

renderMyCart()

// * render table
function renderTable() {
    document.querySelector("#payment-table").innerHTML = `<table class="table">
                <tbody>
                  <tr class="text-end">
                    <th class="text-start">Total Price</th>
                    <td>$<span class="total">0.00</span></td>
                  </tr>
                  <tr class="text-end">
                    <th class="text-start">Tax (18%)</th>
                    <td>$<span class="tax">0.00</span></td>
                  </tr>
                  <tr class="text-end">
                    <th class="text-start">Shipment</th>
                    <td>$<span class="shipment">0.00</span></td>
                  </tr>
                  <tr class="text-end">
                    <th class="text-start">Grand Total</th>
                    <td>$<span class="grand-total">0.00</span></td>
                  </tr>
                </tbody>
              </table>`;
}

renderTable()

// after loading dom elements calling updateTable()
updateTable()


// ! DELETION
const delBtns = document.querySelectorAll(".remove-item")

delBtns.forEach((delBtn) => {

    delBtn.addEventListener('click', () => {
        deleteItem(delBtn)
    })

});


// function that removes item from DOM + array
function deleteItem(btn) {
    // const itemName = delBtn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    // OR
    const itemName = btn.closest(".card").querySelector("h5").textContent

    // remove from DOM
    btn.closest(".card").remove()

    //remove from ARRAY
    myCart = myCart.filter(item => item.name !== itemName)

    updateTable()
}


// ! (-) NUMBER OF PIECES (+)
// (+) PLUS BUTTON
document.querySelectorAll(".plus").forEach((plus) => {

    const pcs = plus.previousElementSibling

    plus.onclick = () => {
        // on click, increase pcs by 1
        pcs.textContent = Number(pcs.textContent) + 1

        pieceChange(pcs)
    }

});

// (-) MINUS BUTTON
document.querySelectorAll(".minus").forEach((minus) => {

    const pcs = minus.nextElementSibling

    minus.onclick = () => {
        if (Number(pcs.textContent) > 0) {
            // on click, reduce pcs by 1
            pcs.textContent = Number(pcs.textContent) - 1

            pieceChange(pcs)
        }

    }

})


function pieceChange(pcsElement) {
    // update pcs in myCart array
    myCart.map((item) => {
        if (item.name == pcsElement.closest(".card").querySelector("h5").textContent) {
            item.pcs = Number(pcsElement.textContent)
        }
    })

    // update card's total price
    pcsElement.closest(".row").querySelector(".item-total").textContent = (pcsElement.closest(".row").querySelector(".discount-price").textContent * pcsElement.textContent).toFixed(2)

    // update table
    updateTable()
}


// ! TABLE
function updateTable() {

    // total price arrray
    const itemTotal = document.querySelectorAll(".item-total");
    // convert NodeList to Array
    const total = Array.from(itemTotal).reduce((accumulator, curr) => accumulator + Number(curr.textContent), 0)
    // 2nd way of converting => [...itemTotal]
    const taxPrice = total * tax;
    const shipping = total > 0 ? shipment : 0;

    document.querySelector(".total").textContent = total.toFixed(2)
    document.querySelector(".tax").textContent = taxPrice.toFixed(2)
    document.querySelector(".shipment").textContent = shipping.toFixed(2)
    document.querySelector(".grand-total").textContent = (total + taxPrice + shipping).toFixed(2)

}

