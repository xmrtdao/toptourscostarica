// HERO IMAGE ROTATOR - Costa Rica Wildlife
// Rotates through stunning wildlife images (macaws, sloths, toucans, etc.)

const heroImages = [
    {
        url: "https://images.unsplash.com/photo-1551651306-5c7869f89a93?w=1920&h=1080&fit=crop",
        alt: "Scarlet Macaw in Costa Rica rainforest",
        credit: "Costa Rica Wildlife"
    },
    {
        url: "https://images.unsplash.com/photo-1581464397214-70f66c78481c?w=1920&h=1080&fit=crop",
        alt: "Three-toed sloth hanging from tree",
        credit: "Manuel Antonio National Park"
    },
    {
        url: "https://images.unsplash.com/photo-1596700095722-3b2a158a5a5e?w=1920&h=1080&fit=crop",
        alt: "Red-eyed tree frog on leaf",
        credit: "Costa Rica Nocturnal Wildlife"
    },
    {
        url: "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?w=1920&h=1080&fit=crop",
        alt: "Arenal Volcano with tropical forest",
        credit: "Arenal National Park"
    },
    {
        url: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=1920&h=1080&fit=crop",
        alt: "Cloud forest canopy zip line",
        credit: "Monteverde Cloud Forest"
    }
];

let currentImageIndex = 0;
let rotationInterval;

// Preload all images for smooth transitions
function preloadImages() {
    heroImages.forEach(img => {
        const preload = new Image();
        preload.src = img.url;
    });
}

// Update hero background with fade transition
function rotateHeroImage() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Fade out
    hero.style.opacity = '0.7';
    
    setTimeout(() => {
        // Change image
        const currentImage = heroImages[currentImageIndex];
        hero.style.backgroundImage = `linear-gradient(135deg, rgba(0,168,107,0.9) 0%, rgba(0,100,80,0.9) 100%), url('${currentImage.url}')`;
        
        // Update alt text (for accessibility)
        let altText = document.getElementById('hero-alt-text');
        if (!altText) {
            altText = document.createElement('span');
            altText.id = 'hero-alt-text';
            altText.style.cssText = 'position:absolute;clip:rect(1px,1px,1px,1px);width:1px;height:1px;overflow:hidden;';
            hero.appendChild(altText);
        }
        altText.textContent = currentImage.alt;
        
        // Fade in
        hero.style.opacity = '1';
        
        // Move to next image
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    }, 500);
}

// Initialize hero rotator
function initHeroRotator() {
    // Preload images
    preloadImages();
    
    // Set initial image
    rotateHeroImage();
    
    // Rotate every 8 seconds
    rotationInterval = setInterval(rotateHeroImage, 8000);
    
    console.log('🦜 Hero rotator initialized - 5 wildlife images');
}

// Pause rotation on user interaction (save battery)
function pauseRotation() {
    if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
    }
}

// Resume rotation
function resumeRotation() {
    if (!rotationInterval) {
        rotationInterval = setInterval(rotateHeroImage, 8000);
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { heroImages, initHeroRotator, pauseRotation, resumeRotation };
}
