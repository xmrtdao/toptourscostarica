// HERO IMAGE ROTATOR - Real Costa Rica Wildlife
// Cycles through actual CR species photos (lapa, sloths, tree frogs)
// Loaded relative to repo root for GitHub Pages compatibility

const heroImages = [
    {
        url: "assets/images/scarlet-macaw.jpg",
        alt: "Scarlet macaw (lapa) in Costa Rica rainforest",
        credit: "Scarlet Macaw - La Fortuna"
    },
    {
        url: "assets/images/three-toed-sloth.jpg",
        alt: "Three-toed sloth in Costa Rica",
        credit: "Three-Toed Sloth - Manuel Antonio"
    },
    {
        url: "assets/images/red-eyed-tree-frog.jpg",
        alt: "Red-eyed tree frog at night in Costa Rica",
        credit: "Red-Eyed Tree Frog - Night Walk"
    },
    {
        url: "assets/images/blue-jeans-frog.jpg",
        alt: "Blue jeans poison dart frog in Costa Rica rainforest",
        credit: "Blue-Jeans Poison Frog - Osa Peninsula"
    },
    {
        url: "assets/images/two-toed-sloth.jpg",
        alt: "Two-toed sloth in Costa Rica",
        credit: "Two-Toed Sloth - Cahuita"
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
        hero.style.backgroundImage = `linear-gradient(135deg, rgba(0,168,107,0.7) 0%, rgba(0,80,60,0.8) 100%), url('${currentImage.url}')`;

        // Update alt text (for accessibility)
        let altText = document.getElementById('hero-alt-text');
        if (!altText) {
            altText = document.createElement('span');
            altText.id = 'hero-alt-text';
            altText.style.cssText = 'position:absolute;clip:rect(1px,1px,1px,1px);width:1px;height:1px;overflow:hidden;';
            hero.appendChild(altText);
        }
        altText.textContent = currentImage.alt;

        // Update the credit chip if present
        const creditEl = document.getElementById('hero-credit');
        if (creditEl) {
            creditEl.textContent = currentImage.credit;
        }

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

    console.log('🦜 Hero rotator initialized - 5 wildlife images (real CR species)');
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
