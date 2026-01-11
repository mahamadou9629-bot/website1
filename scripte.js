const modal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");
const buyButtons = document.querySelectorAll(".buy-btn");
const form = document.getElementById("orderForm");

// recherche
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();

    if (value === "") {
      product.classList.remove("highlight", "fade");
    } 
    else if (name.includes(value)) {
      product.classList.add("highlight");
      product.classList.remove("fade");
    } 
    else {
      product.classList.remove("highlight");
      product.classList.add("fade");
    }
  });
});



let selectedProduct = "";

// Ouvrir le formulaire
buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedProduct = button.parentElement.querySelector("img").innerText;
    modal.style.display = "flex";
  });
});

// Fermer le formulaire
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Soumission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("clientName").value;
  const payment = document.getElementById("paymentMethod").value;

  alert(
    "Commande confirmée ✅\n\n" +
    "Produit : " + selectedProduct + "\n" +
    "Nom : " + name + "\n" +
    "Paiement : " + payment
  );

  modal.style.display = "none";
  form.reset();
});
