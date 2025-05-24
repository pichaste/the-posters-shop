// Data for Lamy products
const lamyProducts = [
    { id: 'p001', name: 'Lamy Safari Fountain Pen Poster', category: 'Safari', price: 29.99, isNew: true, isSold: false, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmylamy.com.tw%2Fwp-content%2Fuploads%2FLAMY-SAFARI-2024-%25E5%25BE%25A9%25E5%258F%25A4%25E7%25B6%25A0%25E9%2587%2591%25E5%25A4%25BE-DM-%25E6%25AD%25A3%25E6%2596%25B9%25E9%258B%25BC%25E7%25AD%2586-scaled.jpg&f=1&nofb=1&ipt=01ba2c8278f9ef743e1d22dec2f13a6c81131a2d5d6f1e0807d7863f716a98d3', description: 'A vibrant tribute to the iconic Lamy Safari, known for its ergonomic design and bold colors.' },
    { id: 'p002', name: 'Lamy Al-Star Blueprint Poster', category: 'Al-Star', price: 34.99, isNew: false, isSold: false, image: 'https://placehold.co/400x250/28a745/ffffff?text=Al-Star+Poster', description: 'An intricate blueprint design showcasing the aluminum body and transparent grip of the Al-Star series.' },
    { id: 'p003', name: 'Lamy Lx Minimalist Art Print', category: 'Lx', price: 39.99, isNew: false, isSold: true, image: 'https://placehold.co/400x250/ffc107/343a40?text=Lx+Poster', description: 'A sleek and minimalist art print inspired by the elegant and refined Lamy Lx fountain pen.' },
    { id: 'p004', name: 'Lamy 2000 Exploded View Poster', category: 'Lamy 2000', price: 49.99, isNew: true, isSold: false, image: 'https://placehold.co/400x250/dc3545/ffffff?text=2000+Poster', description: 'Detailed exploded view of the legendary Lamy 2000, highlighting its innovative design and craftsmanship.' },
    { id: 'p005', name: 'Lamy Scala Abstract Design', category: 'Scala', price: 32.99, isNew: false, isSold: false, image: 'https://placehold.co/400x250/6f42c1/ffffff?text=Scala+Poster', description: 'An abstract interpretation of the Lamy Scala, focusing on its clean lines and sophisticated form.' },
    { id: 'p006', name: 'Lamy Studio Geometric Print', category: 'Studio', price: 28.99, isNew: false, isSold: false, image: 'https://placehold.co/400x250/fd7e14/ffffff?text=Studio+Poster', description: 'A modern geometric print inspired by the unique propeller-shaped clip and cylindrical body of the Lamy Studio.' },
    { id: 'p007', name: 'Lamy Aion Modern Art', category: 'Aion', price: 36.99, isNew: true, isSold: false, image: 'https://placehold.co/400x250/20c997/ffffff?text=Aion+Poster', description: 'Contemporary art piece capturing the seamless, elegant design of the Lamy Aion pen.' },
    { id: 'p008', name: 'Lamy Cp1 Technical Drawing', category: 'Cp1', price: 31.99, isNew: false, isSold: true, image: 'https://placehold.co/400x250/6610f2/ffffff?text=Cp1+Poster', description: 'A precise technical drawing of the slender and minimalist Lamy CP1 pen.' },
    { id: 'p009', name: 'Lamy Safari Blue Edition', category: 'Safari', price: 29.99, isNew: false, isSold: false, image: 'https://placehold.co/400x250/17a2b8/ffffff?text=Safari+Blue', description: 'A special edition poster celebrating the popular blue color variant of the Lamy Safari.' },
    { id: 'p010', name: 'Lamy Al-Star Black Edition', category: 'Al-Star', price: 34.99, isNew: true, isSold: false, image: 'https://placehold.co/400x250/343a40/ffffff?text=Al-Star+Black', description: 'Showcasing the sleek and sophisticated black edition of the Lamy Al-Star.' },
    { id: 'p011', name: 'Lamy 2000 Sectional View', category: 'Lamy 2000', price: 49.99, isNew: false, isSold: false, image: 'https://placehold.co/400x250/e83e8c/ffffff?text=2000+View', description: 'An artistic rendering of the internal mechanics of the Lamy 2000 fountain pen.' },
    { id: 'p012', name: 'Lamy Studio Line Art', category: 'Studio', price: 28.99, isNew: false, isSold: true, image: 'https://placehold.co/400x250/6c757d/ffffff?text=Studio+Line', description: 'Elegant line art focusing on the distinctive silhouette of the Lamy Studio pen.' },
    { id: 'p013', name: 'Lamy Dialog 3 Poster', category: 'Dialog', price: 45.00, isNew: true, isSold: false, image: 'https://placehold.co/400x250/8a2be2/ffffff?text=Dialog+3', description: 'A dynamic poster highlighting the innovative twist mechanism of the Lamy Dialog 3.' },
    { id: 'p014', name: 'Lamy Dialog CC Poster', category: 'Dialog CC', price: 42.00, isNew: false, isSold: false, image: 'https://placehold.co/400x250/00ced1/ffffff?text=Dialog+CC', description: 'Capturing the compact elegance and retractable nib of the Lamy Dialog CC.' },
    { id: 'p015', name: 'Lamy Accent Design', category: 'Accent', price: 31.00, isNew: false, isSold: false, image: 'https://placehold.co/400x250/ff6347/ffffff?text=Accent', description: 'A design-focused poster celebrating the interchangeable grip sections of the Lamy Accent.' },
    { id: 'p016', name: 'Lamy Pico Minimal', category: 'Pico', price: 25.00, isNew: true, isSold: false, image: 'https://placehold.co/400x250/9acd32/ffffff?text=Pico', description: 'A minimalist poster showcasing the compact and extendable design of the Lamy Pico ballpoint pen.' },
    { id: 'p017', name: 'Lamy Logo Illustration', category: 'Logo', price: 27.00, isNew: false, isSold: false, image: 'https://placehold.co/400x250/4682b4/ffffff?text=Logo', description: 'An illustrative poster emphasizing the simple yet effective design of the Lamy Logo pen.' },
    { id: 'p018', name: 'Lamy Ideo Sketch', category: 'Ideo', price: 38.00, isNew: false, isSold: true, image: 'https://placehold.co/400x250/b0c4de/343a40?text=Ideo', description: 'A hand-drawn style sketch poster celebrating the unique, ergonomic triangular body of the Lamy Ideo.' }
];

// Global cart array
let cart = [];
let currentFilter = 'All'; // Track the currently active filter

// Get main section elements
const heroSection = document.getElementById('hero-section');
const postersSection = document.getElementById('posters-section');
const cartPage = document.getElementById('cart-page');

// Get poster grid container
const posterGrid = document.getElementById('poster-grid');
const filterButtonsContainer = document.getElementById('filter-buttons');

// Get cart page elements
const cartCountSpanDesktop = document.getElementById('cart-count-desktop');
const cartCountSpanMobile = document.getElementById('cart-count-mobile');
const cartItemsDiv = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout-btn');
const continueShoppingBtn = document.getElementById('continue-shopping-btn');

// Get navbar links
const homeLink = document.getElementById('home-link');
const shopPostersLink = document.getElementById('shop-posters-link');
const cartLinkDesktop = document.getElementById('cart-link-desktop');
const cartLinkMobile = document.getElementById('cart-link-mobile');

// Get message box elements (for "Item Added" notification)
const messageBoxOverlay = document.getElementById('messageBoxOverlay');
const messageBoxTitle = document.getElementById('messageBoxTitle');
const messageBoxContent = document.getElementById('messageBoxContent');
const messageBoxCloseBtn = document.getElementById('messageBoxCloseBtn');

// Get mailto modal elements
const mailtoModalElement = document.getElementById('mailtoModal');
const mailtoModal = new bootstrap.Modal(mailtoModalElement); // Initialize Bootstrap Modal
const mailtoLink = document.getElementById('mailtoLink'); // This element is not used in the current code

// New elements for shipping address form
const shippingAddressForm = document.getElementById('shippingAddressForm');
const fullNameInput = document.getElementById('fullName');
const addressLine1Input = document.getElementById('addressLine1');
const addressLine2Input = document.getElementById('addressLine2');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const zipCodeInput = document.getElementById('zipCode');
const sendEmailInquiryBtn = document.getElementById('sendEmailInquiryBtn');


// Get image modal elements
const imageModalElement = document.getElementById('imageModal');
const imageModal = new bootstrap.Modal(imageModalElement);
const modalImage = document.getElementById('modalImage');
const imageModalLabel = document.getElementById('imageModalLabel');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn'); // New button

// Variable to hold the product currently displayed in the image modal
let currentProductInModal = null;

/**
 * Displays a custom message box.
 * @param {string} title - The title of the message box.
 * @param {string} content - The content/message to display.
 */
function showMessageBox(title, content) {
    messageBoxTitle.textContent = title;
    messageBoxContent.textContent = content;
    messageBoxOverlay.classList.add('show');
    // Automatically hide after 3 seconds
    setTimeout(hideMessageBox, 3000);
}

/**
 * Hides the custom message box.
 */
function hideMessageBox() {
    messageBoxOverlay.classList.remove('show');
}

// Add event listener to the close button of the message box
messageBoxCloseBtn.addEventListener('click', hideMessageBox);
// Also hide if clicking outside the message box content
messageBoxOverlay.addEventListener('click', (event) => {
    if (event.target === messageBoxOverlay) {
        hideMessageBox();
    }
});

/**
 * Removes an item from the cart based on its ID.
 * @param {string} productId - The ID of the product to remove.
 */
function removeFromCart(productId) {
    const initialCartLength = cart.length;
    cart = cart.filter(item => item.id !== productId);
    // No showMessageBox for "Item Removed" as per user request
    updateCartDisplay();
}

/**
 * Updates the cart count in the navbar and renders cart items on the cart page.
 */
function updateCartDisplay() {
    const currentCartCount = cart.length;

    if (cartCountSpanDesktop) {
        cartCountSpanDesktop.textContent = currentCartCount;
    }
    if (cartCountSpanMobile) {
        cartCountSpanMobile.textContent = currentCartCount;
    }

    cartItemsDiv.innerHTML = ''; // Clear current cart items display
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="text-center text-muted">Your cart is empty.</p>';
        proceedToCheckoutBtn.disabled = true;
    } else {
        proceedToCheckoutBtn.disabled = false;
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';

            const detailsContainer = document.createElement('div');
            detailsContainer.style.display = 'flex';
            detailsContainer.style.alignItems = 'center';
            detailsContainer.style.flexGrow = '1';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            detailsContainer.appendChild(img);

            const detailsTextDiv = document.createElement('div');
            detailsTextDiv.className = 'cart-item-details';
            const nameHeading = document.createElement('h6');
            nameHeading.textContent = `${item.name} (Item #${item.itemNumber})`;
            detailsTextDiv.appendChild(nameHeading);
            const pricePara = document.createElement('p');
            pricePara.textContent = `$${item.price.toFixed(2)}`;
            detailsTextDiv.appendChild(pricePara);
            detailsContainer.appendChild(detailsTextDiv);

            cartItemDiv.appendChild(detailsContainer);

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-item-btn';
            removeButton.textContent = 'Remove';
            removeButton.setAttribute('data-product-id', item.id);
            removeButton.addEventListener('click', () => removeFromCart(item.id));
            cartItemDiv.appendChild(removeButton);

            cartItemsDiv.appendChild(cartItemDiv);
            total += item.price;
        });
    }
    cartTotalSpan.textContent = total.toFixed(2);
    renderPosters(currentFilter); // Re-render posters to update button states
    // Also update the state of the modal's add to cart button if the modal is open
    if (imageModal._isShown && currentProductInModal) {
        updateModalAddToCartButton(currentProductInModal);
    }
}

/**
 * Adds a product to the cart.
 * @param {object} product - The product object to add.
 */
function addToCart(product) {
    // Check if the item is already in the cart
    if (cart.some(item => item.id === product.id)) {
        showMessageBox('Already in Cart', `${product.name} (Item #${product.itemNumber}) is already in your cart.`);
        return;
    }

    cart.push(product);
    updateCartDisplay();
    // Removed showMessageBox('Item Added!', ...) as per user request
    console.log(`Added ${product.name} (ID: ${product.id}, Item #: ${product.itemNumber}) to cart.`);
}

/**
 * Generates the mailto link and opens the email client.
 */
function generateAndOpenMailtoLink(event) {
    event.preventDefault(); // Prevent default form submission

    const fullName = fullNameInput.value.trim();
    const addressLine1 = addressLine1Input.value.trim();
    const addressLine2 = addressLine2Input.value.trim(); // Optional
    const city = cityInput.value.trim();
    const state = stateInput.value.trim();
    const zipCode = zipCodeInput.value.trim();

    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;

    const cartTotal = cartTotalSpan.textContent;
    const shippingDisclaimer = document.querySelector('.shipping-disclaimer').textContent;

    let itemsList = '';
    cart.forEach(item => {
        itemsList += `- ${item.name} **Item #${item.itemNumber}** - Price: $${item.price.toFixed(2)}\n`;
    });

    // Construct the address block for the email
    const addressBlock = `
Shipping Address:
${fullName}
${addressLine1}
${addressLine2 ? addressLine2 + '\n' : ''}${city}, ${state} ${zipCode}
`;

    const body = encodeURIComponent(
        `${formattedDate}\n\n` +
        `Hello,\n\n` +
        `I am interested in purchasing the following items from your Lamy Posters collection:\n` +
        `${itemsList}\n` +
        `Total Price: $${cartTotal}\n` +
        `${shippingDisclaimer}\n\n` +
        `${addressBlock.trim()}\n\n` + // Trim to remove leading/trailing newlines
        `Your Contact Information\n` +
        `Name: ${fullName}\n` +
        `Address: ${addressLine1}${addressLine2 ? ' ' + addressLine2 : ''}\n` +
        `City, State, Zip: ${city}, ${state} ${zipCode}\n\n` +
        `***Please ensure that Paypal has your correct delivery address - Shipping labels are generated from information you provide.***`
    );
    const mailtoUrl = `mailto:your-email@example.com?subject=${encodeURIComponent(`Purchase Inquiry - Lamy Posters Cart - ${fullName}`)}&body=${body}`;

    window.location.href = mailtoUrl; // Open email client
    // Add a small delay before hiding the modal to give the browser time to open the mailto link
    setTimeout(() => {
        mailtoModal.hide(); // Close the modal
    }, 100); // 100ms delay
}

/**
 * Displays the mailto modal with pre-populated subject and body based on cart contents.
 */
function showMailtoModalForCart() {
    // Reset form fields when modal opens
    shippingAddressForm.reset();
    mailtoModal.show();
}

/**
 * Generates a product-specific URL for sharing.
 * In a real application, this would link to a dedicated product page.
 * For this single-page app, it's a hash-based URL.
 * @param {string} productId - The ID of the product.
 * @returns {string} The URL for the product.
 */
function getProductShareUrl(productId) {
    // In a real e-commerce site, this would be a link to the product's dedicated page.
    // For this single-page example, we'll use a hash to simulate a unique product URL.
    return `${window.location.origin}${window.location.pathname}#product-${productId}`;
}

/**
 * Shares the product on Facebook.
 * @param {object} product - The product object to share.
 */
function shareOnFacebook(product) {
    const shareUrl = getProductShareUrl(product.id);
    const quote = encodeURIComponent(`${product.name} - ${product.description}`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${quote}`, '_blank');
}

/**
 * Shares the product on X (Twitter).
 * @param {object} product - The product object to share.
 */
function shareOnX(product) {
    const shareUrl = getProductShareUrl(product.id);
    const text = encodeURIComponent(`${product.name}: ${product.description}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`, '_blank');
}

/**
 * Shares the product on Pinterest.
 * @param {object} product - The product object to share.
 */
function shareOnPinterest(product) {
    const shareUrl = getProductShareUrl(product.id);
    const media = product.image; // Use the product's image URL
    const description = encodeURIComponent(`${product.name} - ${product.description}`);
    window.open(`https://pinterest.com/pin/create/button/?url=${shareUrl}&media=${media}&description=${description}`, '_blank');
}

/**
 * Shares the product on Instagram.
 * Note: Instagram's web sharing is limited. This will typically open Instagram's website,
 * and the user will need to manually upload the image and add the text.
 * @param {object} product - The product object to share.
 */
function shareOnInstagram(product) {
    // Instagram's web sharing is not direct like Pinterest/Facebook/X.
    // This will open Instagram's website, and the user will have to manually
    // upload the image and type the caption.
    // For a more integrated experience, a backend would be needed to handle
    // the Instagram API, which is beyond client-side capabilities.
    window.open('https://www.instagram.com/', '_blank');
    console.log(`Attempting to share ${product.name} on Instagram. User will need to manually upload.`);
}

/**
 * Updates the state of the "Add to Cart" button within the image modal.
 * @param {object} product - The product object currently displayed in the modal.
 */
function updateModalAddToCartButton(product) {
    if (product.isSold) {
        modalAddToCartBtn.textContent = 'Sold Out';
        modalAddToCartBtn.disabled = true;
        modalAddToCartBtn.classList.add('btn-secondary'); // Apply secondary style for sold out
        modalAddToCartBtn.classList.remove('btn-primary');
    } else if (cart.some(item => item.id === product.id)) {
        modalAddToCartBtn.textContent = 'Added to Cart';
        modalAddToCartBtn.disabled = true;
        modalAddToCartBtn.classList.remove('btn-secondary');
        modalAddToCartBtn.classList.add('btn-primary');
    } else {
        modalAddToCartBtn.textContent = 'Add to Cart';
        modalAddToCartBtn.disabled = false;
        modalAddToCartBtn.classList.remove('btn-secondary');
        modalAddToCartBtn.classList.add('btn-primary');
    }
}

/**
 * Displays the full-size image in a modal.
 * @param {object} product - The product object to display.
 */
function showImageModal(product) {
    currentProductInModal = product; // Store the product globally
    modalImage.src = product.image;
    imageModalLabel.textContent = product.name;

    // Update the Add to Cart button state based on the product
    updateModalAddToCartButton(product);

    // Remove previous event listeners to prevent multiple bindings
    modalAddToCartBtn.onclick = null; // Clear existing click handler
    if (!product.isSold) {
        modalAddToCartBtn.addEventListener('click', () => {
            addToCart(product);
            // After adding to cart, update the button state immediately
            updateModalAddToCartButton(product);
        });
    }
    imageModal.show();
}

/**
 * Renders the poster cards dynamically based on the lamyProducts array and current filter.
 * @param {string} filterCategory - The category to filter by, or 'All' for all products.
 */
function renderPosters(filterCategory = 'All') {
    posterGrid.innerHTML = ''; // Clear existing content
    const filteredProducts = filterCategory === 'All'
        ? lamyProducts
        : lamyProducts.filter(product => product.category === filterCategory);

    filteredProducts.forEach((product, index) => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card poster-card h-100'; // h-100 for consistent height

        // Generate unique item number and add it to the product object for cart use
        const itemNumber = (index).toString().padStart(4, '0');
        product.itemNumber = itemNumber; // Add itemNumber to the product object

        // Check if the item is already in the cart to disable the button
        const isInCart = cart.some(item => item.id === product.id);

        // Add "New" or "Sold" label if applicable
        if (product.isNew) {
            const newLabel = document.createElement('span');
            newLabel.className = 'label new';
            newLabel.textContent = 'New';
            cardDiv.appendChild(newLabel);
        } else if (product.isSold) {
            const soldLabel = document.createElement('span');
            soldLabel.className = 'label sold';
            soldLabel.textContent = 'Sold';
            cardDiv.appendChild(soldLabel);
        }

        // Clickable area for image and title
        const clickableArea = document.createElement('a');
        clickableArea.href = '#'; // Prevent default navigation
        clickableArea.className = 'clickable-area';
        clickableArea.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            showImageModal(product); // Pass the entire product object
        });

        const img = document.createElement('img');
        img.src = product.image;
        img.className = 'card-img-top';
        img.alt = product.name;
        clickableArea.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';

        const title = document.createElement('h5');
        title.className = 'card-title';
        // Append the item number to the title without parentheses and with a specific class for styling
        title.innerHTML = `${product.name} <span class="item-number-color">Item #${itemNumber}</span>`;
        clickableArea.appendChild(title); // Make title part of clickable area

        cardDiv.appendChild(clickableArea); // Add the clickable area to the card

        const category = document.createElement('p');
        category.className = 'card-text';
        category.textContent = `Category: ${product.category}`;
        cardBody.appendChild(category);

        // Add Description title and content
        const descriptionTitle = document.createElement('p');
        descriptionTitle.className = 'card-text fw-bold mb-0';
        descriptionTitle.textContent = 'Description:';
        cardBody.appendChild(descriptionTitle);

        const descriptionContent = document.createElement('p');
        descriptionContent.className = 'card-text';
        descriptionContent.textContent = product.description;
        cardBody.appendChild(descriptionContent);


        const price = document.createElement('p');
        price.className = 'price mt-auto'; // mt-auto to push price and button to bottom
        price.textContent = `$${product.price.toFixed(2)}`;
        cardBody.appendChild(price);

        // Add to Cart button
        if (!product.isSold) {
            const button = document.createElement('button');
            button.className = 'btn btn-add-to-cart w-100 mt-2';
            button.textContent = isInCart ? 'Added to Cart' : 'Add to Cart'; // Change text if in cart
            button.disabled = isInCart; // Disable if in cart
            button.setAttribute('data-product-id', product.id); // Store product ID
            button.addEventListener('click', (event) => {
                // Prevent event from bubbling up to card click if any
                event.stopPropagation();
                addToCart(product); // Call addToCart function
            });
            cardBody.appendChild(button);
        } else {
            const soldOutText = document.createElement('p');
            soldOutText.className = 'text-danger fw-bold text-center mt-2';
            soldOutText.textContent = 'Currently Sold Out';
            cardBody.appendChild(soldOutText);
        }

        // Social Media Share Icons
        const socialShareContainer = document.createElement('div');
        socialShareContainer.className = 'social-share-container';

        const pinterestLink = document.createElement('a');
            pinterestLink.href = '#';
            pinterestLink.title = 'Share on Pinterest';
            pinterestLink.innerHTML = '<i class="fab fa-pinterest"></i>';
            pinterestLink.addEventListener('click', (event) => {
                event.preventDefault();
                shareOnPinterest(product);
            });
            socialShareContainer.appendChild(pinterestLink);

            const xLink = document.createElement('a');
            xLink.href = '#';
            xLink.title = 'Share on X (Twitter)';
            xLink.innerHTML = '<i class="fab fa-x-twitter"></i>';
            xLink.addEventListener('click', (event) => {
                event.preventDefault();
                shareOnX(product);
            });
            socialShareContainer.appendChild(xLink);

            const facebookLink = document.createElement('a');
            facebookLink.href = '#';
            facebookLink.title = 'Share on Facebook';
            facebookLink.innerHTML = '<i class="fab fa-facebook-f"></i>';
            facebookLink.addEventListener('click', (event) => {
                event.preventDefault();
                shareOnFacebook(product);
            });
            socialShareContainer.appendChild(facebookLink);

            const instagramLink = document.createElement('a');
            instagramLink.href = '#';
            instagramLink.title = 'Share on Instagram';
            instagramLink.innerHTML = '<i class="fab fa-instagram"></i>';
            instagramLink.addEventListener('click', (event) => {
                event.preventDefault();
                shareOnInstagram(product);
            });
            socialShareContainer.appendChild(instagramLink);

        cardBody.appendChild(socialShareContainer);


        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);
        posterGrid.appendChild(colDiv);
    });

    // Update active state of filter buttons
    document.querySelectorAll('.filter-buttons .btn').forEach(button => {
        if (button.dataset.filter === filterCategory) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

/**
 * Initializes the filter buttons dynamically.
 */
function initializeFilterButtons() {
    // Get unique categories and sort them, then prepend 'All'
    const categories = ['All', ...new Set(lamyProducts.map(p => p.category))].sort((a, b) => {
        if (a === 'All') return -1; // 'All' comes first
        if (b === 'All') return 1;
        return a.localeCompare(b); // Sort others alphabetically
    });

    filterButtonsContainer.innerHTML = ''; // Clear existing buttons

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-primary';
        button.textContent = category;
        button.dataset.filter = category; // Store category in data-filter attribute

        // Add specific styling for the "All" button
        if (category === 'All') {
            button.classList.add('all-filter-button'); // New class for "All" button
        }

        button.addEventListener('click', () => {
            currentFilter = category; // Update current filter
            renderPosters(currentFilter);
        });
        filterButtonsContainer.appendChild(button);
    });
}

/**
 * Manages section visibility.
 * @param {string} sectionToShow - The ID of the section to show.
 */
function showSection(sectionToShow) {
    heroSection.style.display = 'none';
    postersSection.style.display = 'none';
    cartPage.style.display = 'none';

    if (sectionToShow === 'home') {
        heroSection.style.display = 'block';
        postersSection.style.display = 'block';
    } else if (sectionToShow === 'shop') {
        postersSection.style.display = 'block';
        renderPosters(currentFilter); // Re-render posters when navigating to shop
    } else if (sectionToShow === 'cart') {
        cartPage.style.display = 'block';
        updateCartDisplay(); // Update cart display when showing cart page
    }
}

// Event Listeners for Navigation
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('home');
});

shopPostersLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('shop');
});

// Updated cart link event listeners
if (cartLinkDesktop) {
    cartLinkDesktop.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('cart');
    });
}
if (cartLinkMobile) {
    cartLinkMobile.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('cart');
    });
}

// Event listener for "Proceed to Checkout" button on cart page
proceedToCheckoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        showMailtoModalForCart();
    } else {
        showMessageBox('Cart Empty', 'Please add items to your cart before proceeding to checkout.');
    }
});

// Event listener for "Continue Shopping" button on cart page
continueShoppingBtn.addEventListener('click', () => {
    showSection('shop');
});

// Add event listener for the shipping address form submission
shippingAddressForm.addEventListener('submit', generateAndOpenMailtoLink);


// Initialize carousel and render posters when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Bootstrap Carousel
    const heroCarousel = document.getElementById('heroCarousel');
    if (heroCarousel) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 5000, // Slide every 5 seconds
            pause: 'hover' // Pause on mouse hover
        });
    }

    initializeFilterButtons(); // Initialize filter buttons
    renderPosters(currentFilter); // Render posters initially with default filter
    updateCartDisplay(); // Initial cart display
    showSection('home'); // Show home section by default
});

