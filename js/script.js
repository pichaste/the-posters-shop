// Data for Lamy products
const lamyProducts = [
    { id: 'p001', name: 'Lamy Safari Fountain Pen Poster', category: 'Safari', price: 29.99, isNew: true, isSold: false, images: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmylamy.com.tw%2Fwp-content%2Fuploads%2FLAMY-SAFARI-2024-%25E5%25BE%25A9%25E5%258F%25A4%25E7%25B6%25A0%25E9%2587%2591%25E5%25A4%25BE-DM-%25E6%25AD%25A3%25E6%2596%25B9%25E9%258B%25BC%25E7%25AD%2586-scaled.jpg&f=1&nofb=1&ipt=01ba2c8278f9ef743e1d22dec2f13a6c81131a2d5d6f1e0807d7863f716a98d3', 'https://placehold.co/400x250/17a2b8/ffffff?text=Safari+Blue+Variant', 'https://placehold.co/400x250/fd7e14/ffffff?text=Safari+Orange+Variant'], description: 'A vibrant tribute to the iconic Lamy Safari, known for its ergonomic design and bold colors.' },
    { id: 'p002', name: 'Lamy Al-Star Blueprint Poster', category: 'Al-Star', price: 34.99, isNew: false, isSold: false, images: ['https://placehold.co/400x250/28a745/ffffff?text=Al-Star+Poster', 'https://placehold.co/400x250/343a40/ffffff?text=Al-Star+Black+Variant'], description: 'An intricate blueprint design showcasing the aluminum body and transparent grip of the Al-Star series.' },
    { id: 'p003', name: 'Lamy Lx Minimalist Art Print', category: 'Lx', price: 39.99, isNew: false, isSold: true, images: ['https://placehold.co/400x250/ffc107/343a40?text=Lx+Poster'], description: 'A sleek and minimalist art print inspired by the elegant and refined Lamy Lx fountain pen.' },
    { id: 'p004', name: 'Lamy 2000 Exploded View Poster', category: 'Lamy 2000', price: 49.99, isNew: true, isSold: false, images: ['https://placehold.co/400x250/dc3545/ffffff?text=2000+Poster', 'https://placehold.co/400x250/e83e8c/ffffff?text=2000+Sectional+View'], description: 'Detailed exploded view of the legendary Lamy 2000, highlighting its innovative design and craftsmanship.' },
    { id: 'p005', name: 'Lamy Scala Abstract Design', category: 'Scala', price: 32.99, isNew: false, isSold: false, images: ['https://placehold.co/400x250/6f42c1/ffffff?text=Scala+Poster'], description: 'An abstract interpretation of the Lamy Scala, focusing on its clean lines and sophisticated form.' },
    { id: 'p006', name: 'Lamy Studio Geometric Print', category: 'Studio', price: 28.99, isNew: false, isSold: false, images: ['https://placehold.co/400x250/fd7e14/ffffff?text=Studio+Poster', 'https://placehold.co/400x250/6c757d/ffffff?text=Studio+Line+Art'], description: 'A modern geometric print inspired by the unique propeller-shaped clip and cylindrical body of the Lamy Studio.' },
    { id: 'p007', name: 'Lamy Aion Modern Art', category: 'Aion', price: 36.99, isNew: true, isSold: false, images: ['https://placehold.co/400x250/20c997/ffffff?text=Aion+Poster'], description: 'Contemporary art piece capturing the seamless, elegant design of the Lamy Aion pen.' },
    { id: 'p008', name: 'Lamy Cp1 Technical Drawing', category: 'Cp1', price: 31.99, isNew: false, isSold: true, images: ['https://placehold.co/400x250/6610f2/ffffff?text=Cp1+Poster'], description: 'A precise technical drawing of the slender and minimalist Lamy CP1 pen.' },
    { id: 'p010', name: 'Lamy Al-Star Black Edition', category: 'Al-Star', price: 34.99, isNew: true, isSold: false, images: ['https://placehold.co/400x250/343a40/ffffff?text=Al-Star+Black'], description: 'Showcasing the sleek and sophisticated black edition of the Lamy Al-Star.' },
    { id: 'p011', name: 'Lamy 2000 Sectional View', category: 'Lamy 2000', price: 49.99, isNew: false, isSold: false, images: ['https://placehold.co/400x250/e83e8c/ffffff?text=2000+View'], description: 'An artistic rendering of the internal mechanics of the Lamy 2000 fountain pen.' },
    { id: 'p012', name: 'Lamy Studio Line Art', category: 'Studio', price: 28.99, isNew: false, isSold: true, images: ['https://placehold.co/400x250/6c757d/ffffff?text=Studio+Line'], description: 'Elegant line art focusing on the distinctive silhouette of the Lamy Studio pen.' },
    { id: 'p013', name: 'Lamy Dialog 3 Poster', category: 'Dialog', price: 45.00, isNew: true, isSold: false, images: ['https://placehold.co/400x250/8a2be2/ffffff?text=Dialog+3', 'https://placehold.co/400x250/00ced1/ffffff?text=Dialog+3+Angle'], description: 'A dynamic poster highlighting the innovative twist mechanism of the Lamy Dialog 3.' },
    { id: 'p014', name: 'Lamy Dialog CC Poster', category: 'Dialog CC', price: 42.00, isNew: false, isSold: false, images: ['https://placehold.co/400x250/00ced1/ffffff?text=Dialog+CC'], description: 'Capturing the compact elegance and retractable nib of the Lamy Dialog CC.' },
    { id: 'p015', name: 'Lamy Accent Design', category: 'Accent', price: 31.00, isNew: false, isSold: false, images: ['https://placehold.co/400x250/fd7e14/ffffff?text=Accent'], description: 'An artistic poster emphasizing the interchangeable grip section of the Lamy Accent.' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const postersSection = document.getElementById('posters-section');
const posterGrid = document.getElementById('poster-grid');
const filterButtonsContainer = document.getElementById('filter-buttons');
const cartCountDesktop = document.getElementById('cart-count-desktop');
const cartCountMobile = document.getElementById('cart-count-mobile');
const cartPage = document.getElementById('cart-page');
const homeLink = document.getElementById('home-link');
const cartLinkDesktop = document.getElementById('cart-link-desktop');
const cartLinkMobile = document.getElementById('cart-link-mobile');
const continueShoppingBtn = document.getElementById('continue-shopping-btn');
const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const mailtoModal = new bootstrap.Modal(document.getElementById('mailtoModal'));
const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
const howToOrderModal = new bootstrap.Modal(document.getElementById('howToOrderModal'));
const shippingAddressForm = document.getElementById('shippingAddressForm');
const sendEmailInquiryBtn = document.getElementById('sendEmailInquiryBtn');
const emailSentConfirmation = document.getElementById('emailSentConfirmation');
const confirmEmailSentBtn = document.getElementById('confirmEmailSentBtn');
const messageBoxOverlay = document.getElementById('messageBoxOverlay');
const messageBoxTitle = document.getElementById('messageBoxTitle');
const messageBoxContent = document.getElementById('messageBoxContent');
const messageBoxCloseBtn = document.getElementById('messageBoxCloseBtn');
const navbarBrandLink = document.getElementById('navbar-brand-link');
const contactForm = document.getElementById('contactForm');
const sendContactEmailBtn = document.getElementById('sendContactEmailBtn');
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImageCarousel = document.getElementById('modalImageCarousel');
const carouselIndicators = document.getElementById('carouselIndicators');
const carouselInner = document.getElementById('carouselInner');
const imageModalLabel = document.getElementById('imageModalLabel');
const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

let currentModalProductId = null; // To keep track of the product whose images are in the modal

// --- Helper Functions ---

function showMessageBox(title, message) {
    messageBoxTitle.textContent = title;
    messageBoxContent.textContent = message;
    messageBoxOverlay.classList.add('show');
}

function hideMessageBox() {
    messageBoxOverlay.classList.remove('show');
}

// Function to update cart counts
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountDesktop.textContent = count;
    cartCountMobile.textContent = count;
    proceedToCheckoutBtn.disabled = cart.length === 0;
}

// Function to save cart to local storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to render product cards
function renderProducts(productsToRender) {
    posterGrid.innerHTML = ''; // Clear existing products
    productsToRender.forEach(product => {
        const isSoldOut = product.isSold;
        const buttonText = isSoldOut ? 'Sold Out' : 'Add to Cart';
        const buttonDisabled = isSoldOut ? 'disabled' : '';
        const buttonClass = isSoldOut ? 'btn-secondary' : 'btn-add-to-cart';

        const productCard = `
            <div class="col">
                <div class="card poster-card h-100" data-product-id="${product.id}">
                    <div class="clickable-area">
                        <img src="${product.images[0]}" class="card-img-top" alt="${product.name}">
                        ${product.isNew ? '<span class="label new">NEW</span>' : ''}
                        ${product.isSold ? '<span class="label sold">SOLD</span>' : ''}
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title clickable-area">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="item-number-color">Item: ${product.id}</p>
                        <p class="price mt-auto">$${product.price.toFixed(2)}</p>
                        <div class="social-share-container mb-3">
                            <a href="#" class="share-button" data-platform="pinterest" data-product-id="${product.id}"><i class="fab fa-pinterest"></i></a>
                            <a href="#" class="share-button" data-platform="twitter" data-product-id="${product.id}"><i class="fab fa-x-twitter"></i></a>
                            <a href="#" class="share-button" data-platform="facebook" data-product-id="${product.id}"><i class="fab fa-facebook-f"></i></a>
                        </div>
                        <button class="btn ${buttonClass} w-100 ${buttonDisabled}" data-product-id="${product.id}" ${buttonDisabled}>
                            ${buttonText}
                        </button>
                    </div>
                </div>
            </div>
        `;
        posterGrid.innerHTML += productCard;
    });
    addEventListenersToProductCards();
    addEventListenersToShareButtons();
}

// Function to render filter buttons
function renderFilterButtons() {
    const categories = ['All', ...new Set(lamyProducts.map(p => p.category))];
    filterButtonsContainer.innerHTML = ''; // Clear existing buttons

    categories.forEach(category => {
        const buttonClass = category === 'All' ? 'all-filter-button' : '';
        const button = document.createElement('button');
        button.className = `btn btn-outline-primary rounded-pill px-3 py-2 ${buttonClass}`;
        button.textContent = category;
        button.dataset.category = category;
        filterButtonsContainer.appendChild(button);
    });

    // Add event listeners to filter buttons
    filterButtonsContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const selectedCategory = event.target.dataset.category;
            filterProducts(selectedCategory);

            // Update active state of buttons
            filterButtonsContainer.querySelectorAll('.btn').forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline-primary');
            });
            event.target.classList.add('active');
            event.target.classList.remove('btn-outline-primary');
            event.target.classList.add('btn-primary');
        }
    });

    // Set 'All' as active by default
    const allButton = filterButtonsContainer.querySelector('.all-filter-button');
    if (allButton) {
        allButton.classList.add('active');
        allButton.classList.remove('btn-outline-primary');
        allButton.classList.add('btn-primary');
    }
}

// Function to filter and render products
function filterProducts(category) {
    let filteredProducts = [];
    if (category === 'All') {
        filteredProducts = lamyProducts;
    } else {
        filteredProducts = lamyProducts.filter(product => product.category === category);
    }
    renderProducts(filteredProducts);
}

// Function to add product to cart
function addToCart(productId) {
    const product = lamyProducts.find(p => p.id === productId);
    if (product) {
        if (product.isSold) {
            showMessageBox('Item Sold Out', 'This item is currently sold out and cannot be added to your cart.');
            return;
        }

        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        updateCartCount();
        showMessageBox('Added to Cart', `${product.name} has been added to your cart.`);
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartItems();
    updateCartCount();
}

// Function to render cart items
function renderCartItems() {
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const cartItemElement = `
                <div class="cart-item">
                    <img src="${item.images[0]}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h6>${item.name}</h6>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price: $${item.price.toFixed(2)}</p>
                        <p>Total: $${itemTotal.toFixed(2)}</p>
                    </div>
                    <button class="remove-item-btn" data-product-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemElement;
        });
    }

    cartTotalSpan.textContent = total.toFixed(2);
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            removeFromCart(productId);
        });
    });
}

// Function to show the posters section and hide the cart
function showPostersSection() {
    postersSection.style.display = 'block';
    // Only show hero section if it's the 'home' view
    const currentActiveNavLink = document.querySelector('.navbar-nav .nav-link.active');
    if (currentActiveNavLink && currentActiveNavLink.id === 'home-link') {
        heroSection.style.display = 'block';
    } else if (document.activeElement && document.activeElement.id === 'navbar-brand-link') {
        heroSection.style.display = 'block';
    } else {
        heroSection.style.display = 'none';
    }
    cartPage.style.display = 'none';
}

// Function to show the cart section and hide posters
function showCartPage() {
    postersSection.style.display = 'none';
    heroSection.style.display = 'none';
    cartPage.style.display = 'block';
    renderCartItems(); // Render cart items whenever cart page is shown
}

// Function to generate Mailto link for purchase inquiry
function generateMailtoLink(fullName, addressLine1, addressLine2, city, state, zipCode) {
    const recipient = 'email@email.com'; // Replace with your actual email
    const subject = `Purchase Inquiry - Posters Cart - ${fullName}`;
    let body = `Dear What A Poster Team,\n\n`;
    body += `I would like to inquire about purchasing the following items from my cart:\n\n`;

    cart.forEach(item => {
        body += `- ${item.name} (Item ID: ${item.id}) - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)} each\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    body += `\nCart Total: $${total.toFixed(2)}\n\n`;
    body += `My shipping address is:\n`;
    body += `Full Name: ${fullName}\n`;
    body += `Address Line 1: ${addressLine1}\n`;
    if (addressLine2) {
        body += `Address Line 2: ${addressLine2}\n`;
    }
    body += `City: ${city}\n`;
    body += `State: ${state}\n`;
    body += `Zip Code: ${zipCode}\n\n`;
    body += `Please confirm availability and provide instructions for payment.\n\n`;
    body += `Thank you,\n${fullName}`;

    const encodedBody = encodeURIComponent(body);
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;
}

// Function to generate Mailto link for contact form
function generateContactMailtoLink(name, email, subject, message) {
    const recipient = 'email@email.com'; // Replace with your actual contact email
    const fullSubject = `Contact Form: ${subject}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const encodedBody = encodeURIComponent(body);
    return `mailto:${recipient}?subject=${encodeURIComponent(fullSubject)}&body=${encodedBody}`;
}

// Function to open image modal
function openImageModal(productId) {
    const product = lamyProducts.find(p => p.id === productId);
    if (!product) return;

    currentModalProductId = productId; // Store the ID of the product currently in the modal

    imageModalLabel.textContent = product.name; // Set modal title
    modalAddToCartBtn.dataset.productId = productId; // Set product ID for add to cart button

    // Disable Add to Cart button if sold out or already in cart
    const isInCart = cart.some(item => item.id === productId);
    if (product.isSold) {
        modalAddToCartBtn.textContent = 'Sold Out';
        modalAddToCartBtn.disabled = true;
        modalAddToCartBtn.classList.add('btn-secondary');
        modalAddToCartBtn.classList.remove('btn-primary');
    } else if (isInCart) {
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

    // Clear previous carousel content
    carouselIndicators.innerHTML = '';
    carouselInner.innerHTML = '';

    // Populate carousel with product images
    product.images.forEach((imageSrc, index) => {
        const indicator = `<button type="button" data-bs-target="#modalImageCarousel" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></button>`;
        carouselIndicators.innerHTML += indicator;

        const carouselItem = `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                                <img src="${imageSrc}" class="d-block w-100" alt="${product.name} - Image ${index + 1}">
                              </div>`;
        carouselInner.innerHTML += carouselItem;
    });

    imageModal.show(); // Show the Bootstrap modal
}

// --- Event Listeners ---

// Add event listeners to "Add to Cart" buttons dynamically
function addEventListenersToProductCards() {
    document.querySelectorAll('.poster-card .btn-add-to-cart, .poster-card .clickable-area').forEach(element => {
        element.removeEventListener('click', handleProductCardClick); // Remove existing listener to prevent duplicates
        element.addEventListener('click', handleProductCardClick);
    });
}

function handleProductCardClick(event) {
    const productId = event.currentTarget.dataset.productId || event.currentTarget.closest('.poster-card').dataset.productId;
    if (event.target.classList.contains('btn-add-to-cart')) {
        // If the add to cart button was clicked
        addToCart(productId);
    } else if (event.target.closest('.clickable-area')) {
        // If the image or title was clicked
        openImageModal(productId);
    }
}

// Add event listeners to social share buttons
function addEventListenersToShareButtons() {
    document.querySelectorAll('.share-button').forEach(button => {
        button.removeEventListener('click', handleShareButtonClick); // Prevent duplicate listeners
        button.addEventListener('click', handleShareButtonClick);
    });
}

function handleShareButtonClick(event) {
    event.preventDefault(); // Prevent default link behavior
    const platform = event.currentTarget.dataset.platform;
    const productId = event.currentTarget.dataset.productId;
    const product = lamyProducts.find(p => p.id === productId);

    if (!product) return;

    const pageUrl = window.location.href; // Get current page URL
    const imageUrl = product.images[0]; // Use the first image for sharing
    const text = `Check out this amazing poster: ${product.name} from What A Poster! Price: $${product.price.toFixed(2)}.`;

    let shareUrl = '';

    switch (platform) {
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(text)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(pageUrl)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(text)}`;
            break;
        default:
            return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Event listener for Mailto modal's Add to Cart button
modalAddToCartBtn.addEventListener('click', () => {
    if (currentModalProductId) {
        addToCart(currentModalProductId);
        imageModal.hide(); // Hide the image modal after adding to cart
    }
});


// Navigation
homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    showPostersSection();
    filterProducts('All'); // Reset filters to "All" when going to home
    // Also reset active nav link
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
    homeLink.classList.add('active');
    // Also reset active filter button
    filterButtonsContainer.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active', 'btn-primary');
        btn.classList.add('btn-outline-primary');
    });
    const allButton = filterButtonsContainer.querySelector('.all-filter-button');
    if (allButton) {
        allButton.classList.add('active', 'btn-primary');
        allButton.classList.remove('btn-outline-primary');
    }
});

cartLinkDesktop.addEventListener('click', (event) => {
    event.preventDefault();
    showCartPage();
    // Update active nav link
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
    cartLinkDesktop.classList.add('active');
});

cartLinkMobile.addEventListener('click', (event) => {
    event.preventDefault();
    showCartPage();
    // Update active nav link
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
    cartLinkMobile.classList.add('active');
});

continueShoppingBtn.addEventListener('click', () => {
    showPostersSection();
    // Reset active nav link to Home
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
    homeLink.classList.add('active');
});

proceedToCheckoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        // Reset form and confirmation message
        shippingAddressForm.reset();
        document.getElementById('shippingFormContent').style.display = 'block';
        emailSentConfirmation.style.display = 'none';
        mailtoModal.show();
    } else {
        showMessageBox('Cart Empty', 'Your cart is empty. Please add items before proceeding to checkout.');
    }
});

shippingAddressForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const addressLine1 = document.getElementById('addressLine1').value;
    const addressLine2 = document.getElementById('addressLine2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zipCode').value;

    const mailtoLink = generateMailtoLink(fullName, addressLine1, addressLine2, city, state, zipCode);

    // Try to open the mailto link
    const newWindow = window.open(mailtoLink, '_blank');
    if (newWindow) {
        newWindow.blur(); // Try to unfocus the new window
        window.focus(); // Bring main window back into focus
        document.getElementById('shippingFormContent').style.display = 'none';
        emailSentConfirmation.style.display = 'block';
    } else {
        // Fallback if the pop-up was blocked
        showMessageBox('Email Client Blocked', 'Your email client could not be opened automatically. Please copy the details below and send them manually to email@email.com:\n\n' + decodeURIComponent(mailtoLink.split('body=')[1]));
    }
});

confirmEmailSentBtn.addEventListener('click', () => {
    cart = []; // Clear the cart
    saveCart();
    updateCartCount();
    mailtoModal.hide(); // Close the modal
    showPostersSection(); // Go back to the main shopping page
    showMessageBox('Success!', 'Your inquiry has been sent and your cart has been cleared. Thank you!');
    // Reset active nav link to Home
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
    homeLink.classList.add('active');
});

messageBoxCloseBtn.addEventListener('click', hideMessageBox);
messageBoxOverlay.addEventListener('click', (event) => {
    if (event.target === messageBoxOverlay) {
        hideMessageBox();
    }
});

navbarBrandLink.addEventListener('click', (event) => {
    event.preventDefault();
    showPostersSection();
    filterProducts('All'); // Reset filters to "All" when going to home
    // Also reset active nav link to Home
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => link.classList.remove('active'));
    homeLink.classList.add('active');
    // Also reset active filter button
    filterButtonsContainer.querySelectorAll('.btn').forEach(btn => {
        btn.classList.remove('active', 'btn-primary');
        btn.classList.add('btn-outline-primary');
    });
    const allButton = filterButtonsContainer.querySelector('.all-filter-button');
    if (allButton) {
        allButton.classList.add('active', 'btn-primary');
        allButton.classList.remove('btn-outline-primary');
    }
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactSubject = document.getElementById('contactSubject').value;
    const contactMessage = document.getElementById('contactMessage').value;

    const mailtoLink = generateContactMailtoLink(contactName, contactEmail, contactSubject, contactMessage);

    const newWindow = window.open(mailtoLink, '_blank');
    if (newWindow) {
        newWindow.blur();
        window.focus();
        contactForm.reset();
        contactModal.hide();
        showMessageBox('Message Sent', 'Your contact message has been sent. We will get back to you shortly.');
    } else {
        showMessageBox('Email Client Blocked', 'Your email client could not be opened automatically. Please copy the details below and send them manually to email@email.com:\n\n' + decodeURIComponent(mailtoLink.split('body=')[1]));
    }
});

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    renderFilterButtons();
    filterProducts('All'); // Render all products by default
    updateCartCount();

    // Scroll to Top Button Logic
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        // Only show on mobile/tablet screens (less than lg breakpoint which is 992px)
        if (window.innerWidth < 992) {
            // Get the posters section element
            const postersSectionElement = document.getElementById('posters-section');
            if (postersSectionElement) {
                // Check if the user has scrolled past the top of the posters section
                // A buffer of 100px is added to ensure it's truly "above the fold"
                const firstRowOffset = postersSectionElement.offsetTop + 100;
                if (window.scrollY > firstRowOffset) {
                    scrollToTopBtn.classList.add('show');
                } else {
                    scrollToTopBtn.classList.remove('show');
                }
            }
        } else {
            // Ensure button is hidden on larger screens
            (document.getElementById('scrollToTopBtn')).classList.remove('show');
        }
    });
});
