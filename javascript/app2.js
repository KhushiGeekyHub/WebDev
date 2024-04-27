let itemscontainerElement = document.querySelector('.items-container');
let item = {
    item_image: 'images/fashion2.jpg',
    rating: {
        stars: 4.5,
        noOfReviews: 1400,
    },
    company_name: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Stdus',
    current_price: 600,
    original_price: 1080,
    discount_percentage: 42,
}
itemscontainerElement.innerHTML = `<div class="item-container">
<img class="item-image" src="${item.item_image}" alt="item image">
<div class="rating">
    ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
</div>
<div class="company-name">${item.company_name}</div>
<div class="item-name">${item.item_name}</div>
<div class="price">
    <span class="current-price"> Rs ${item.current_price}</span>
    <span class="original-price"> Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
</div>
<button class="btn-add-cart">Add To Cart</button>
</div>`;

