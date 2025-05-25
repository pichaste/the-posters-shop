// Data for Lamy products
const lamyProducts = [
    { id: 'p001', name: 'Lamy Safari Fountain Pen Poster', category: 'Safari', price: 29.99, isNew: true, isSold: false, images: ['https://placehold.co/400x250/007bff/ffffff?text=Lamy+Safari+Poster', 'https://placehold.co/400x250/17a2b8/ffffff?text=Safari+Blue+Variant', 'https://placehold.co/400x250/fd7e14/ffffff?text=Safari+Orange+Variant'], description: 'A vibrant tribute to the iconic Lamy Safari, known for its ergonomic design and bold colors.' },
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
    { id: 'p015', name: 'Lamy Accent Design', category: 'Accent', price: 31.00, isNew: false, isSold: false, images: ['https://placehold.co/400x250/ff6347/ffffff?text=Accent'], description: 'A design-focused poster celebrating the interchangeable grip sections of the Lamy Accent.' },
    { id: 'p016', name: 'Lamy Pico Minimal', category: 'Pico', price: 25.00, isNew: true, isSold: false, images: ['https://placehold.co/400x250/9acd32/ffffff?text=Pico'], description: 'A minimalist poster showcasing the compact and extendable design of the Lamy Pico ballpoint pen.' },
    { id: 'p017', name: 'Lamy Logo Illustration', category: 'Logo', price: 27.00, isNew: false, isSold: false, images: ['https://placehold.co/400x250/4682b4/ffffff?text=Logo'], description: 'An illustrative poster emphasizing the simple yet effective design of the Lamy Logo pen.' },
    { id: 'p018', name: 'Lamy Ideo Sketch', category: 'Ideo', price: 38.00, isNew: false, isSold: true, images: ['https://placehold.co/400x250/b0c4de/343a40?text=Ideo'], description: 'A hand-drawn style sketch poster celebrating the unique, ergonomic triangular body of the Lamy Ideo.' }
];

// Global cart array
let cart = [];
let currentFilter = 'All'; // Track the currently active filter

// Get main section elements (moved inside DOMContentLoaded for safer access)
let heroSection;
let postersSection;
let cartPage;

// Get poster grid container (moved inside DOMContentLoaded)
let posterGrid;
let filterButtonsContainer;

// Get cart page elements (moved inside DOMContentLoaded)
let cartCountSpanDesktop;
let cartCountSpanMobile;
let cartItemsDiv;
let cartTotalSpan;
let proceedToCheckoutBtn;
let continueShoppingBtn;

// Get navbar links (moved inside DOMContentLoaded)
let homeLink;
let cartLinkDesktop;
let cartLinkMobile;

// Get message box elements (for "Item Added" notification) (moved inside DOMContentLoaded)
let messageBoxOverlay;
let messageBoxTitle;
let messageBoxContent;
let messageBoxCloseBtn;

// Get mailto modal elements (moved inside DOMContentLoaded)
let mailtoModalElement;
let mailtoModal;

// Elements for shipping address form (moved inside DOMContentLoaded)
let shippingAddressForm;
let fullNameInput;
let addressLine1Input;
let addressLine2Input;
let cityInput;
let stateInput;
let zipCodeInput;
let sendEmailInquiryBtn;

// Elements for the new confirmation state in mailtoModal (moved inside DOMContentLoaded)
let shippingFormContent;
let emailSentConfirmation;
let confirmEmailSentBtn;

// New elements for Contact Modal (moved inside DOMContentLoaded)
let contactModalElement;
let contactModal;
let contactForm;
let contactNameInput;
let contactEmailInput;
let contactSubjectInput;
let contactMessageTextarea;
let sendContactEmailBtn;

// Get image modal elements (moved inside DOMContentLoaded)
let imageModalElement;
let imageModal;
let modalCarouselIndicators;
let modalCarouselInner;
let imageModalLabel;
let modalAddToCartBtn;

// Variable to hold the product currently displayed in the image modal
let currentProductInModal = null;

// Obfuscated email address for contact form
// Example: 'contact@example.com' -> char codes
const obfuscatedEmailParts = [99, 111, 110, 116, 97, 99, 116, 64, 101, 120, 97, 109, 112, 108, 101, 46, 99, 111, 109];
const recipientEmail = String.fromCharCode(...obfuscatedEmailParts);


// Initialize carousel and render posters when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Assign elements after DOM is loaded
    heroSection = document.getElementById('hero-section');
    postersSection = document.getElementById('posters-section');
    cartPage = document.getElementById('cart-page');

    posterGrid = document.getElementById('poster-grid');
    filterButtonsContainer = document.getElementById('filter-buttons');

    cartCountSpanDesktop = document.getElementById('cart-count-desktop');
    cartCountSpanMobile = document.getElementById('cart-count-mobile');
    cartItemsDiv = document.getElementById('cart-items');
    cartTotalSpan = document.getElementById('cart-total');
    proceedToCheckoutBtn = document.getElementById('proceed-to-checkout-btn');
    continueShoppingBtn = document.getElementById('continue-shopping-btn');

    homeLink = document.getElementById('home-link');
    cartLinkDesktop = document.getElementById('cart-link-desktop');
    cartLinkMobile = document.getElementById('cart-link-mobile');

    messageBoxOverlay = document.getElementById('messageBoxOverlay');
    messageBoxTitle = document.getElementById('messageBoxTitle');
    messageBoxContent = document.getElementById('messageBoxContent');
    messageBoxCloseBtn = document.getElementById('messageBoxCloseBtn');

    mailtoModalElement = document.getElementById('mailtoModal');
    mailtoModal = new bootstrap.Modal(mailtoModalElement);

    shippingAddressForm = document.getElementById('shippingAddressForm');
    fullNameInput = document.getElementById('fullName');
    addressLine1Input = document.getElementById('addressLine1');
    addressLine2Input = document.getElementById('addressLine2');
    cityInput = document.getElementById('city');
    stateInput = document.getElementById('state');
    zipCodeInput = document.getElementById('zipCode');
    sendEmailInquiryBtn = document.getElementById('sendEmailInquiryBtn');

    shippingFormContent = document.getElementById('shippingFormContent');
    emailSentConfirmation = document.getElementById('emailSentConfirmation');
    confirmEmailSentBtn = document.getElementById('confirmEmailSentBtn');

    contactModalElement = document.getElementById('contactModal');
    contactModal = new bootstrap.Modal(contactModalElement);
    contactForm = document.getElementById('contactForm');
    contactNameInput = document.getElementById('contactName');
    contactEmailInput = document.getElementById('contactEmail');
    contactSubjectInput = document.getElementById('contactSubject');
    contactMessageTextarea = document.getElementById('contactMessage');
    sendContactEmailBtn = document.getElementById('sendContactEmailBtn');

    imageModalElement = document.getElementById('imageModal');
    imageModal = new bootstrap.Modal(imageModalElement);
    modalCarouselIndicators = document.getElementById('modalCarouselIndicators');
    modalCarouselInner = document.getElementById('modalCarouselInner');
    imageModalLabel = document.getElementById('imageModalLabel');
    modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

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
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'cart-item';

                const detailsContainer = document.createElement('div');
                detailsContainer.style.display = 'flex';
                detailsContainer.style.alignItems = 'center';
                detailsContainer.style.flexGrow = '1';

                const img = document.createElement('img');
                img.src = item.images[0]; // Display first image in cart
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
        proceedToCheckoutBtn.disabled = cart.length === 0; // Enable/disable based on cart content
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
            console.log(`Attempted to add ${product.name} (ID: ${product.id}, Item #: ${product.itemNumber}) but it's already in cart.`);
            return;
        }

        cart.push(product);
        updateCartDisplay();
        console.log(`Added ${product.name} (ID: ${product.id}, Item #: ${product.itemNumber}) to cart.`);
    }

    /**
     * Generates the mailto link and opens the email client for purchase inquiry.
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

        const body = encodeURIComponent(
            `${formattedDate}\n\n` +
            `Hello,\n\n` +
            `I am interested in purchasing the following items from your Posters collection:\n` +
            `${itemsList}\n` +
            `Total Price: $${cartTotal}\n` +
            `${shippingDisclaimer}\n\n` +
            `Shipping Information\n` + // Updated title
            `Name: ${fullName}\n` +
            `Address: ${addressLine1}${addressLine2 ? ' ' + addressLine2 : ''}\n` +
            `City, State, Zip: ${city}, ${state} ${zipCode}\n\n` +
            `***Please ensure that Paypal has your correct delivery address - Shipping labels are generated from information you provide.***`
        );
        const mailtoUrl = `mailto:inkeogram@gmail.com?subject=${encodeURIComponent(`Purchase Inquiry - Posters Cart - ${fullName}`)}&body=${body}`;

        window.location.href = mailtoUrl; // Attempt to open email client

        // Hide the shipping form and show the confirmation message
        shippingFormContent.style.display = 'none';
        emailSentConfirmation.style.display = 'block';
    }

    /**
     * Handles the confirmation that the email has been sent.
     * Clears the cart and closes the modal.
     */
    function confirmEmailSentAndClearCart() {
        cart = []; // Clear the cart
        updateCartDisplay(); // Update the display to reflect the empty cart
        mailtoModal.hide(); // Close the modal
        showMessageBox('Purchase Inquiry Sent!', 'Your inquiry has been sent. We will get back to you as soon as we can.');
    }

    /**
     * Generates the mailto link and opens the email client for contact form.
     */
    function sendContactEmail(event) {
        event.preventDefault(); // Prevent default form submission

        const name = contactNameInput.value.trim();
        const email = contactEmailInput.value.trim();
        const subject = contactSubjectInput.value.trim();
        const message = contactMessageTextarea.value.trim();

        const emailSubject = encodeURIComponent(`Contact Inquiry from ${name}: ${subject}`);
        const emailBody = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        const mailtoLink = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;
        window.location.href = mailtoLink;

        // Clear form and close modal after a short delay
        setTimeout(() => {
            contactForm.reset();
            contactModal.hide();
            showMessageBox('Message Sent!', 'Thank you for your message. We will get back to you shortly.');
        }, 100);
    }

    /**
     * Displays the mailto modal with pre-populated subject and body based on cart contents.
     */
    function showMailtoModalForCart() {
        // Reset form fields and show the shipping form content
        shippingAddressForm.reset();
        shippingFormContent.style.display = 'block';
        emailSentConfirmation.style.display = 'none';
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
        const media = product.images[0]; // Use the product's first image URL
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
        imageModalLabel.textContent = product.name;

        // Clear previous carousel content
        modalCarouselIndicators.innerHTML = '';
        modalCarouselInner.innerHTML = '';

        // Dynamically create carousel items and indicators
        product.images.forEach((imageSrc, index) => {
            const indicator = document.createElement('button');
            indicator.setAttribute('type', 'button');
            indicator.setAttribute('data-bs-target', '#modalImageCarousel');
            indicator.setAttribute('data-bs-slide-to', index);
            indicator.setAttribute('aria-label', `Slide ${index + 1}`);
            if (index === 0) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            }
            modalCarouselIndicators.appendChild(indicator);

            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item', 'h-100');
            if (index === 0) {
                carouselItem.classList.add('active');
            }
            const img = document.createElement('img');
            img.src = imageSrc;
            img.className = 'd-block w-100 h-100'; // Make image fill carousel item
            img.alt = product.name;
            carouselItem.appendChild(img);
            modalCarouselInner.appendChild(carouselItem);
        });

        // Initialize the Bootstrap Carousel for the modal
        const modalCarousel = new bootstrap.Carousel(document.getElementById('modalImageCarousel'), {
            interval: false // Disable auto-sliding for manual control
        });

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

            // Create the carousel for the tile
            const tileCarouselId = `tileCarousel-${product.id}`;
            const tileCarouselDiv = document.createElement('div');
            tileCarouselDiv.id = tileCarouselId;
            tileCarouselDiv.className = 'carousel slide tile-carousel clickable-image'; // Added clickable-image class
            tileCarouselDiv.setAttribute('data-bs-interval', 'false'); // Disable auto-slide
            // Add event listener directly to the carousel for opening the modal
            tileCarouselDiv.addEventListener('click', (event) => {
                event.preventDefault();
                showImageModal(product);
            });


            const carouselInner = document.createElement('div');
            carouselInner.className = 'carousel-inner';

            product.images.forEach((imageSrc, imgIndex) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = `carousel-item ${imgIndex === 0 ? 'active' : ''}`;
                const img = document.createElement('img');
                img.src = imageSrc;
                img.className = 'd-block w-100';
                img.alt = `${product.name} image ${imgIndex + 1}`;
                carouselItem.appendChild(img);
                carouselInner.appendChild(carouselItem);
            });

            tileCarouselDiv.appendChild(carouselInner);

            // Add carousel controls if more than one image
            if (product.images.length > 1) {
                const prevButton = document.createElement('button');
                prevButton.className = 'carousel-control-prev';
                prevButton.type = 'button';
                prevButton.setAttribute('data-bs-target', `#${tileCarouselId}`);
                prevButton.setAttribute('data-bs-slide', 'prev');
                prevButton.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';
                tileCarouselDiv.appendChild(prevButton);

                const nextButton = document.createElement('button');
                nextButton.className = 'carousel-control-next';
                nextButton.type = 'button';
                nextButton.setAttribute('data-bs-target', `#${tileCarouselId}`);
                nextButton.setAttribute('data-bs-slide', 'next');
                nextButton.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';
                tileCarouselDiv.appendChild(nextButton);
            }

            cardDiv.appendChild(tileCarouselDiv); // Add the carousel to the card

            // Card body content
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body d-flex flex-column';

            const titleLink = document.createElement('a'); // New clickable link for title
            titleLink.href = '#';
            titleLink.className = 'clickable-title';
            titleLink.addEventListener('click', (event) => {
                event.preventDefault();
                showImageModal(product);
            });

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.innerHTML = `${product.name} <span class="item-number-color">Item #${itemNumber}</span>`;
            titleLink.appendChild(title); // Append title to the new link
            cardBody.appendChild(titleLink); // Append the link to cardBody


            const category = document.createElement('p');
            category.className = 'card-text';
            category.textContent = `Category: ${product.category}`;
            cardBody.appendChild(category);

            const descriptionTitle = document.createElement('p');
            descriptionTitle.className = 'card-text fw-bold mb-0';
            descriptionTitle.textContent = 'Description:';
            cardBody.appendChild(descriptionTitle);

            const descriptionContent = document.createElement('p');
            descriptionContent.className = 'card-text';
            descriptionContent.textContent = product.description;
            cardBody.appendChild(descriptionContent);

            const price = document.createElement('p');
            price.className = 'price mt-auto';
            price.textContent = `$${product.price.toFixed(2)}`;
            cardBody.appendChild(price);

            if (!product.isSold) {
                const button = document.createElement('button');
                button.className = 'btn btn-add-to-cart w-100 mt-2';
                button.textContent = isInCart ? 'Added to Cart' : 'Add to Cart';
                button.disabled = isInCart;
                button.setAttribute('data-product-id', product.id);
                button.addEventListener('click', (event) => {
                    event.stopPropagation(); // Ensure this click doesn't propagate
                    addToCart(product);
                    console.log(`Add to Cart button clicked for product: ${product.name}`); // Added log
                });
                cardBody.appendChild(button);
                console.log(`Button for ${product.name} created and listener attached. Initial disabled: ${isInCart}`); // Added log
            } else {
                const soldOutText = document.createElement('p');
                soldOutText.className = 'text-danger fw-bold text-center mt-2';
                soldOutText.textContent = 'Currently Sold Out';
                cardBody.appendChild(soldOutText);
            }

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

            // Initialize the Bootstrap Carousel for the tile after it's added to the DOM
            // This is crucial for the carousel to function correctly.
            if (product.images.length > 1) {
                new bootstrap.Carousel(document.getElementById(tileCarouselId), {
                    interval: false // Disable auto-sliding for manual control
                });
            }
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
        console.log(`[showSection] Attempting to show section: ${sectionToShow}`);

        // Ensure elements are assigned before trying to access their style
        if (!heroSection || !postersSection || !cartPage) {
            console.error('[showSection] One or more main section elements not found! Cannot set display properties.');
            return;
        }

        heroSection.style.display = 'none';
        postersSection.style.display = 'none';
        cartPage.style.display = 'none';
        console.log('[showSection] All sections initially hidden.');

        if (sectionToShow === 'home') {
            heroSection.style.display = 'block';
            postersSection.style.display = 'block';
            console.log('[showSection] Home section (hero and posters) set to display: block');
        } else if (sectionToShow === 'shop') {
            // This case is now effectively 'home' since 'Shop Posters' is removed
            // If you want to show only posters without the carousel, you'd adjust this.
            heroSection.style.display = 'none'; // Hide carousel if only showing shop
            postersSection.style.display = 'block';
            renderPosters(currentFilter); // Re-render posters when navigating to shop
            console.log('[showSection] Shop section (posters only) set to display: block');
        } else if (sectionToShow === 'cart') {
            cartPage.style.display = 'block';
            updateCartDisplay(); // Update cart display when showing cart page
            console.log('[showSection] Cart section set to display: block');
        }
        console.log(`[showSection] Final display styles: heroSection=${heroSection.style.display}, postersSection=${postersSection.style.display}, cartPage=${cartPage.style.display}`);
    }

    // Add event listeners for navigation
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
    });

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
        showSection('home');
    });

    // Add event listener for the shipping address form submission
    shippingAddressForm.addEventListener('submit', generateAndOpenMailtoLink);

    // Add event listener for the confirm email sent button
    confirmEmailSentBtn.addEventListener('click', confirmEmailSentAndClearCart);

    // Add event listener for the contact form submission
    contactForm.addEventListener('submit', sendContactEmail);


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
