// Gallery Images Data
const galleryData = [
    // Nature Photos
    { id: 1, category: 'nature', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop&q=80', title: 'Mountain Peak' },
    { id: 2, category: 'nature', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=500&fit=crop&q=80', title: 'Forest Path' },
    { id: 3, category: 'nature', src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop&q=80', title: 'Ocean Waves' },
    { id: 4, category: 'nature', src: 'https://images.unsplash.com/photo-1584673961397-be26e009333f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D', title: 'Green Field' },
    { id: 5, category: 'nature', src: 'https://i.pinimg.com/736x/19/2b/5e/192b5ea67aa0dc0df792315d88406ab3.jpg', title: 'Flower Garden' },
    { id: 6, category: 'nature', src: 'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=500&h=500&fit=crop&q=80', title: 'Starry Night' },

    // Portrait Photos
    { id: 7, category: 'portrait', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&q=80', title: 'Professional Portrait' },
    { id: 8, category: 'portrait', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&q=80', title: 'Studio Shot' },
    { id: 9, category: 'portrait', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&q=80', title: 'Candid Portrait' },
    { id: 10, category: 'portrait', src: 'https://images8.alphacoders.com/128/1289506.jpg', title: 'Black & White' },
    { id: 11, category: 'portrait', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop&q=80', title: 'Fashion Shot' },
    { id: 12, category: 'portrait', src: 'https://maghoodstudios.com/wp-content/uploads/2019/10/i-SVqmWWX-4K-scaled.jpg', title: 'Family Photo' },

    // Urban Photos
    { id: 13, category: 'urban', src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop&q=80', title: 'City Lights' },
    { id: 14, category: 'urban', src: 'https://cdn.shopify.com/s/files/1/0074/4505/3498/files/jakob-owens-DQPP9rVLYGQ-unsplash.jpg?v=1570163275', title: 'Street Photography' },
    { id: 15, category: 'urban', src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&h=500&fit=crop&q=80', title: 'Street Art' },
    { id: 16, category: 'urban', src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&h=500&fit=crop&q=80', title: 'Rainy Street' },
    { id: 17, category: 'urban', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop&q=80', title: 'Downtown' },
    { id: 18, category: 'urban', src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop&q=80', title: 'Market' },

    // Landscape Photos
    { id: 19, category: 'landscape', src: 'https://ik.imgkit.net/3vlqs5axxjf/TAW/uploadedImages/All_Gateways/Adventure_Travel/Features/EXP_180625_CS_DesertDestinations_HERO_alreadysized.jpg?tr=w-1200%2Cfo-auto', title: 'Desert Landscape' },
    { id: 20, category: 'landscape', src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/08/ba/d3/beggining-of-the-sunset.jpg?w=1200&h=1200&s=1', title: 'Alpine Valley' },
    { id: 21, category: 'landscape', src: 'https://www.snowvalleyresorts.com/wp-content/uploads/features-scaled.jpg', title: 'Mountain Valley' },
    { id: 22, category: 'landscape', src: 'https://www.kumarakomlakeresort.in/assets/images/luxury-accommodation/heritage-lake-view-villas/gallery/heritage-lake-view-villas-2.jpg', title: 'Lake View' },
    { id: 23, category: 'landscape', src: 'https://images.pexels.com/photos/31377755/pexels-photo-31377755.jpeg?cs=srgb&dl=pexels-ja-661987039-31377755.jpg&fm=jpg', title: 'Canyon' },
    { id: 24, category: 'landscape', src: 'https://cdn.shopify.com/s/files/1/0053/6513/7472/products/palous-rays.jpg?v=1544056558', title: 'Rolling Hills' },

    // Architecture Photos
    { id: 25, category: 'architecture', src: 'https://media.architecturaldigest.com/photos/5c5db6a68695162977266dda/master/pass/CRYGK4.jpg', title: 'Modern Building' },
    { id: 26, category: 'architecture', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=500&fit=crop&q=80', title: 'Historic Building' },
    { id: 27, category: 'architecture', src: 'https://4kwallpapers.com/images/wallpapers/modern-architecture-3840x2160-12288.jpg', title: 'Modern Bridge' },
    { id: 28, category: 'architecture', src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', title: 'Interior Design' },
    { id: 29, category: 'architecture', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTla6HN8_0mHbztSlFQofAuXNiA99JUXBXT_w&s', title: 'Ancient Ruins' },
    { id: 30, category: 'architecture', src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop&q=80', title: 'Architectural Details' },
];

// Demo Reviews
const demoReviews = [
    {
        name: 'Sarah Johnson',
        role: 'Event Organizer',
        rating: 5,
        comment: 'Absolutely stunning photography! The team captured every beautiful moment of our wedding. Highly recommend!',
        avatar: null
    },
    {
        name: 'Michael Chen',
        role: 'Business Owner',
        rating: 5,
        comment: 'Professional and creative. The product photos really helped boost our sales. Will hire again!',
        avatar: null
    },
    {
        name: 'Emma Davis',
        role: 'Magazine Editor',
        rating: 4,
        comment: 'Great quality work and excellent customer service. Really impressed with the turnaround time.',
        avatar: null
    },
    {
        name: 'John Williams',
        role: 'Corporate Client',
        rating: 5,
        comment: 'SnapPro delivered beyond expectations. Their attention to detail is unmatched in the industry.',
        avatar: null
    },
    {
        name: 'Lisa Anderson',
        role: 'Art Director',
        rating: 5,
        comment: 'Creative vision combined with technical excellence. A dream team to work with!',
        avatar: null
    },
    {
        name: 'Robert Martinez',
        role: 'Travel Agency Owner',
        rating: 4,
        comment: 'Beautiful travel photography that tells a story. Customers absolutely love the content.',
        avatar: null
    }
];

// Global Variables
let currentFilter = 'all';
let currentImageIndex = 0;
let reviews = [...demoReviews];
let selectedRating = 5;
let selectedPaymentMethod = null;
let isBillingAnnual = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    initializeEventListeners();
    loadNightMode();
    renderReviews();
});

// Gallery Functions
function initializeGallery() {
    renderGallery('all');
}

function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    const filtered = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

    filtered.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy">`;
        galleryItem.addEventListener('click', () => openImageModal(filtered, index));
        galleryGrid.appendChild(galleryItem);
    });
}

function openImageModal(imageArray, index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageArray[index].src;
    modal.classList.add('active');

    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');

    prevBtn.onclick = () => {
        currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length;
        modalImage.src = imageArray[currentImageIndex].src;
    };

    nextBtn.onclick = () => {
        currentImageIndex = (currentImageIndex + 1) % imageArray.length;
        modalImage.src = imageArray[currentImageIndex].src;
    };

    document.addEventListener('keydown', handleImageKeyboard);
}

function handleImageKeyboard(e) {
    const modal = document.getElementById('imageModal');
    if (!modal.classList.contains('active')) return;

    if (e.key === 'ArrowLeft') document.querySelector('.modal-prev').click();
    if (e.key === 'ArrowRight') document.querySelector('.modal-next').click();
    if (e.key === 'Escape') closeModal('imageModal');
}

// Event Listeners
function initializeEventListeners() {
    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderGallery(currentFilter);
        });
    });

    // Night Mode Toggle
    document.getElementById('nightModeToggle').addEventListener('click', toggleNightMode);

    // Billing Toggle
    const billingToggle = document.getElementById('billingToggle');
    if (billingToggle) {
        billingToggle.addEventListener('change', () => {
            isBillingAnnual = billingToggle.checked;
            updatePricingDisplay();
        });
    }

    // Auth Modal
    document.getElementById('authBtn').addEventListener('click', () => openModal('authModal'));
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Add Review Button
    document.getElementById('addReviewBtn').addEventListener('click', () => openModal('addReviewModal'));

    // Review Form
    document.getElementById('reviewForm').addEventListener('submit', handleReviewSubmit);

    // Star Rating
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.dataset.value;
            document.getElementById('reviewRating').value = selectedRating;
            updateStarDisplay();
        });
    });

    // Modal Close Buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal.id);
        });
    });

    // Close modal on background click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });

    // Contact Form
    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully! We will get back to you soon.');
        e.target.reset();
    });

    // Social Login Buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const provider = btn.classList[1];
            showNotification(`Connecting with ${provider.charAt(0).toUpperCase() + provider.slice(1)}...`);
        });
    });

    // Auth Form Submission
    document.querySelectorAll('.auth-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Login successful! Welcome back.');
            closeModal('authModal');
            e.target.reset();
        });
    });
}

// Pricing Functions
function updatePricingDisplay() {
    document.querySelectorAll('.pricing-card .amount').forEach(amount => {
        if (isBillingAnnual) {
            amount.textContent = amount.dataset.annual;
        } else {
            amount.textContent = amount.dataset.monthly;
        }
    });
}

// Review Functions
function renderReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.innerHTML = '';

    reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.style.animationDelay = `${index * 0.1}s`;

        const initials = review.name.split(' ').map(n => n[0]).join('');

        let reviewHTML = `
            <div class="review-header">
                <div class="review-avatar">
                    ${review.avatar ? `<img src="${review.avatar}" alt="${review.name}">` : initials}
                </div>
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <p>${review.role || 'Client'}</p>
                </div>
            </div>
            <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <div class="review-comment">${review.comment}</div>
        `;

        if (review.avatar) {
            reviewHTML += `<img src="${review.avatar}" class="review-image" alt="Review photo">`;
        }

        reviewCard.innerHTML = reviewHTML;
        reviewsGrid.appendChild(reviewCard);
    });
}

function handleReviewSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('reviewName').value;
    const role = document.getElementById('reviewRole').value;
    const comment = document.getElementById('reviewComment').value;
    const photoInput = document.getElementById('reviewPhoto');
    
    let photoData = null;
    if (photoInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (event) => {
            photoData = event.target.result;
            addReviewToList(name, role, selectedRating, comment, photoData);
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        addReviewToList(name, role, selectedRating, comment, null);
    }
}

function addReviewToList(name, role, rating, comment, photo) {
    const newReview = {
        name,
        role,
        rating: parseInt(rating),
        comment,
        avatar: photo
    };

    reviews.unshift(newReview);
    renderReviews();
    document.getElementById('reviewForm').reset();
    document.getElementById('reviewRating').value = 5;
    selectedRating = 5;
    updateStarDisplay();
    showNotification('Thank you! Your review has been added successfully.');
    closeModal('addReviewModal');
}

function updateStarDisplay() {
    document.querySelectorAll('.star').forEach(star => {
        star.classList.remove('active');
        if (star.dataset.value <= selectedRating) {
            star.classList.add('active');
        }
    });
}

// Payment Functions
function openPaymentModal(plan, amount) {
    const modal = document.getElementById('paymentModal');
    document.getElementById('paymentTitle').textContent = `${plan} Plan Payment`;
    document.getElementById('paymentPlan').textContent = `Plan: ${plan}`;
    
    const totalWithGST = Math.round(amount * 1.18);
    document.getElementById('paymentAmount').textContent = `₹${totalWithGST.toLocaleString()}`;
    
    modal.classList.add('active');
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-option').forEach(opt => opt.style.opacity = '0.6');
    event.target.closest('.payment-option').style.opacity = '1';

    const formContainer = document.getElementById('paymentFormContainer');
    formContainer.innerHTML = '';

    const methods = {
        card: `
            <div class="payment-form">
                <div class="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" required>
                </div>
                <div class="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" maxlength="19" required>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM/YY" maxlength="5" required>
                    </div>
                    <div class="form-group">
                        <label>CVV</label>
                        <input type="text" placeholder="123" maxlength="3" required>
                    </div>
                </div>
            </div>
        `,
        upi: `
            <div class="payment-form">
                <div class="form-group">
                    <label>UPI ID</label>
                    <input type="text" placeholder="yourname@upi" required>
                </div>
                <p style="text-align: center; opacity: 0.7; margin: 1rem 0;">You will be redirected to Google Pay or your UPI app</p>
            </div>
        `,
        wallet: `
            <div class="payment-form">
                <div class="form-group">
                    <label>Select Wallet</label>
                    <select required>
                        <option>PayPal</option>
                        <option>Apple Pay</option>
                        <option>Paytm</option>
                        <option>PhonePe</option>
                    </select>
                </div>
            </div>
        `,
        crypto: `
            <div class="payment-form">
                <div class="form-group">
                    <label>Select Cryptocurrency</label>
                    <select required>
                        <option>Bitcoin (BTC)</option>
                        <option>Ethereum (ETH)</option>
                        <option>USDC</option>
                        <option>Tether (USDT)</option>
                    </select>
                </div>
                <p style="text-align: center; opacity: 0.7; margin: 1rem 0;">Minimum 1 confirmation required</p>
            </div>
        `,
        emi: `
            <div class="payment-form">
                <div class="form-group">
                    <label>EMI Duration</label>
                    <select required>
                        <option>3 Months</option>
                        <option>6 Months</option>
                        <option>12 Months</option>
                        <option>18 Months</option>
                    </select>
                </div>
                <p style="text-align: center; opacity: 0.7; margin: 1rem 0;">0% Interest on all EMI options</p>
            </div>
        `,
        netbanking: `
            <div class="payment-form">
                <div class="form-group">
                    <label>Select Bank</label>
                    <select required>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>SBI</option>
                        <option>Axis Bank</option>
                        <option>Other Banks</option>
                    </select>
                </div>
            </div>
        `
    };

    formContainer.innerHTML = methods[method] || '';
}

function processPayment() {
    if (!selectedPaymentMethod) {
        showNotification('Please select a payment method');
        return;
    }

    showNotification('Processing payment... This is a demo, no real transaction will occur.');
    setTimeout(() => {
        showNotification('Payment successful! Thank you for your subscription.');
        closeModal('paymentModal');
        selectedPaymentMethod = null;
    }, 2000);
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Night Mode Functions
function toggleNightMode() {
    const html = document.documentElement;
    const body = document.body;
    const isNightMode = body.classList.toggle('night-mode');
    localStorage.setItem('nightMode', isNightMode ? 'true' : 'false');
}

function loadNightMode() {
    const isNightMode = localStorage.getItem('nightMode') === 'true';
    if (isNightMode) {
        document.body.classList.add('night-mode');
    }
}

// Notification Function
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => closeModal(modal.id));
    }
});
