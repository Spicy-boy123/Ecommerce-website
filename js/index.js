const newProducts = [
    {
      id: 11,
      image: "image/product-thumb-11.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    },
    {
      id: 12,
      image: "image/product-thumb-12.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    },
    {
      id: 13,
      image: "image/product-thumb-13.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    },
    {
      id: 14,
      image: "image/product-thumb-14.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    }
  ];
const bestSellingProducts = [
    {
      id: 11,
      image: "image/product-thumb-11.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    },
    {
      id: 12,
      image: "image/product-thumb-12.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    },
    {
      id: 13,
      image: "image/product-thumb-13.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    },
    {
      id: 14,
      image: "image/product-thumb-14.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    },{
        id: 15,
      image: "image/product-thumb-1.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    }
    ,{
        id: 16,
      image: "image/product-thumb-2.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    }
    ,{
        id: 17,
      image: "image/product-thumb-3.jpg",
      title: "Amber Jar",
      description: "Honey best nectar you wish to get"
    }
  ];

  
  const productList = document.querySelector('.new-products');
  const bestSellingProductList = document.querySelector('.best-selling');

  function generateNewProducts(){
    let productHtml = "";
    newProducts.forEach(e => {
        
        productHtml+=`
                    <div class="col">
                      <div class="category-card bg-white p-3 h-100">
                        <img src="${e.image}" alt="Product 1" class="img-fluid rounded mb-3">
                        <h6 class="fw-bold mb-1">${e.title}</h6>
                        <p class="text-muted mb-0">${e.description}</p>
                      </div>
                    </div>`;

    });
    productList.innerHTML = productHtml;
  }
  function generateBestSellingProducts() {
    let productHtml = "";
    bestSellingProducts.forEach((e, index) => {
        productHtml += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${e.image}" class="card-img-top" alt="${e.title}">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text">${e.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="card-text"><strong>$19.99</strong></p>
                            <!-- View Details Button, trigger modal -->
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal${index}">View Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal for Product ${e.title} -->
            <div class="modal fade" id="productModal${index}" tabindex="-1" aria-labelledby="productModalLabel${index}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel${index}">${e.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-5">
                                    <img src="${e.image}" class="img-fluid mb-3" alt="${e.title}">
                                </div>
                                <div class="col-md-7 d-flex">
                                    <div>
                                        <p><strong>Price:</strong> $19.99</p>
                                        <p><strong>Description:</strong> ${e.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    bestSellingProductList.innerHTML = productHtml;
}




  generateNewProducts();
  generateBestSellingProducts();