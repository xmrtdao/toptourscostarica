// TOP TOURS COSTA RICA - TOURS DATA
// Top 10 ranked tours with TikTok integration

const tours = [
    {
        rank: 1,
        title: "Arenal Volcano & Hot Springs",
        location: "📍 La Fortuna, Arenal",
        description: "Experience the iconic Arenal Volcano with natural hot springs, waterfall hikes, and wildlife spotting. The perfect introduction to Costa Rica's volcanic landscape.",
        price: "$89",
        rating: 4.9,
        reviews: 2847,
        image: "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?w=800&h=600&fit=crop",
        tiktok_views: "2.3M",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 2,
        title: "Monteverde Cloud Forest Zip Line",
        location: "📍 Monteverde",
        description: "Soar through the cloud forest canopy on world-famous zip lines. Spot quetzals, howler monkeys, and experience the thrill of a lifetime.",
        price: "$75",
        rating: 4.8,
        reviews: 1923,
        image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=800&h=600&fit=crop",
        tiktok_views: "1.8M",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 3,
        title: "Manuel Antonio Wildlife Tour",
        location: "📍 Manuel Antonio",
        description: "Explore Costa Rica's most famous national park. See sloths, monkeys, iguanas, and pristine beaches in one unforgettable day.",
        price: "$65",
        rating: 4.9,
        reviews: 3156,
        image: "https://images.unsplash.com/photo-1581464397214-70f66c78481c?w=800&h=600&fit=crop",
        tiktok_views: "3.1M",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 4,
        title: "Tortuguero Canal Boat Tour",
        location: "📍 Tortuguero",
        description: "Navigate the mystical canals of Tortuguero. Spot caimans, monkeys, sloths, and (in season) nesting sea turtles.",
        price: "$95",
        rating: 4.7,
        reviews: 1456,
        image: "https://images.unsplash.com/photo-1589553416260-f5a8341e898e?w=800&h=600&fit=crop",
        tiktok_views: "987K",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 5,
        title: "Rincón de la Vieja Adventure",
        location: "📍 Guanacaste",
        description: "Volcano hiking, waterfall rappelling, hot springs, and traditional Costa Rican lunch. The ultimate adventure package.",
        price: "$110",
        rating: 4.8,
        reviews: 987,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
        tiktok_views: "756K",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 6,
        title: "Corcovado National Park Expedition",
        location: "📍 Osa Peninsula",
        description: "National Geographic calls it 'the most biologically intense place on Earth'. See tapirs, scarlet macaws, and maybe even jaguars.",
        price: "$145",
        rating: 4.9,
        reviews: 654,
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=600&fit=crop",
        tiktok_views: "1.2M",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 7,
        title: "Pacific Coast Sunset Catamaran",
        location: "📍 Guanacaste Coast",
        description: "Sail into the sunset with snorkeling, dolphin watching, and open bar. The perfect romantic adventure.",
        price: "$99",
        rating: 4.7,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&h=600&fit=crop",
        tiktok_views: "892K",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 8,
        title: "White Water Rafting - Pacuare River",
        location: "📍 Limón Province",
        description: "World-class Class III-IV rapids through pristine rainforest. Voted one of the top 5 rafting rivers globally.",
        price: "$125",
        rating: 4.9,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1530866495561-58c57c2e80e2?w=800&h=600&fit=crop",
        tiktok_views: "1.1M",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 9,
        title: "Coffee & Chocolate Cultural Tour",
        location: "📍 Central Valley",
        description: "Learn about Costa Rica's coffee and chocolate heritage. Taste organic brews and make your own chocolate from bean to bar.",
        price: "$55",
        rating: 4.6,
        reviews: 1567,
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
        tiktok_views: "654K",
        booking_url: "https://tiktok.com/@toptourscostarica"
    },
    {
        rank: 10,
        title: "Night Walk Wildlife Safari",
        location: "📍 Santa Elena",
        description: "Discover the rainforest's nocturnal secrets. See frogs, snakes, tarantulas, and sleeping birds with expert guides.",
        price: "$45",
        rating: 4.7,
        reviews: 2134,
        image: "https://images.unsplash.com/photo-1596700095722-3b2a158a5a5e?w=800&h=600&fit=crop",
        tiktok_views: "1.5M",
        booking_url: "https://tiktok.com/@toptourscostarica"
    }
];

// Render tours to the page
function renderTours() {
    const toursGrid = document.getElementById('tours-grid');
    
    if (!toursGrid) return;
    
    toursGrid.innerHTML = tours.map(tour => `
        <div class="tour-card" data-rank="${tour.rank}">
            <div class="tour-rank">#${tour.rank}</div>
            <img src="${tour.image}" alt="${tour.title}" class="tour-image" loading="lazy">
            <div class="tour-content">
                <h3 class="tour-title">${tour.title}</h3>
                <p class="tour-location">${tour.location}</p>
                <p class="tour-description">${tour.description}</p>
                <div class="tour-meta">
                    <span class="tour-price">${tour.price}</span>
                    <div class="tour-rating">
                        <span>⭐</span>
                        <span>${tour.rating}</span>
                        <span style="color: #999; font-size: 0.9rem;">(${tour.reviews.toLocaleString()})</span>
                    </div>
                </div>
                <div style="margin-top: 10px; color: #666; font-size: 0.9rem;">
                    🎬 ${tour.tiktok_views} TikTok views
                </div>
                <a href="${tour.booking_url}" target="_blank" class="tour-button">
                    Book on TikTok →
                </a>
            </div>
        </div>
    `).join('');
}

// Animate stats counter
function animateStats() {
    const followersEl = document.getElementById('tiktok-followers');
    if (!followersEl) return;
    
    let count = 0;
    const target = 50000;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        followersEl.textContent = (count / 1000).toFixed(0) + 'K+';
    }, stepTime);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTours();
    animateStats();
    initSmoothScroll();
    
    console.log('🇨🇷 Top Tours Costa Rica loaded - Pura Vida!');
});

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tours, renderTours };
}
