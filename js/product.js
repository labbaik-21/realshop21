
const id = new URLSearchParams(window.location.search).get("id");

fetch("data/products.json")
  .then(res => res.json())
  .then(products => {

    const p = products.find(x => x.id === id);

    // Title & price
    document.getElementById("title").innerText = p.name;
    document.getElementById("price").innerText = "৳" + p.price;
    document.getElementById("oldPrice").innerText = "৳" + p.oldPrice;

    // Main image
    document.getElementById("featured").src = p.images[0];

    // Thumbnails
    const thumbs = document.getElementById("thumbs");
    p.images.forEach(img => {
      const t = document.createElement("img");
      t.src = img;
      t.className = "thumbnail";
      t.onclick = () => document.getElementById("featured").src = img;
      thumbs.appendChild(t);
    });

    // Short + Long description
    document.getElementById("shortDesc").innerText = p.shortDesc;
    document.getElementById("longDesc").innerText = p.description;

    // Features
    const ul = document.getElementById("features");
    p.features.forEach(f => {
      const li = document.createElement("li");
      li.innerHTML = "<span>✓</span> " + f;
      ul.appendChild(li);
    });

  });


