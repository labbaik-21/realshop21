fetch("data/products.json")
  .then(res => res.json())
  .then(products => {

    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    products.forEach(p => {
      const card = `
   <div class="product-card">
     <div class="product-image-container">
       <a href="product.html?id=${p.id}" class="product-link">
         <img src="${p.image}" alt="${p.name}">
       </a>
     </div>

     <div class="product-info">
       <p class="product-name">
         <a href="product.html?id=${p.id}" class="text-link">${p.name}</a>
       </p>

       <div class="price-box">
         <span class="current-price">৳${p.price}</span>
         <span class="old-price">৳${p.oldPrice}</span>
       </div>
       <button class="add-button">Add to Cart</button>
     </div>
   </div>
   `;
      grid.innerHTML += card;




      // search option popup setup

      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('navMenu');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        }

      });
      //SEARCH OPTION SETUP

      // STEP 1: HTML elements ধরা
      const searchInput = document.getElementById("searchInput");
      const productGrid = document.getElementById("productGrid");
      const products = productGrid.getElementsByClassName("product-card");

      // STEP 2: Search logic
      searchInput.addEventListener("keyup", function () {
        const searchText = searchInput.value.toLowerCase();

        for (let i = 0; i < products.length; i++) {
          const productName = products[i]
            .querySelector(".product-name")
            .innerText
            .toLowerCase();

          if (productName.includes(searchText)) {
            products[i].style.display = "block";
          } else {
            products[i].style.display = "none";
          }
        }
      });



    });



  });