// COSTA RICA WILDLIFE GALLERY
// Real species photographed in the wild - gallery populated from this list.
// Used to drive the Wildlife section cards.

const wildlife = [
    {
        image: "assets/images/scarlet-macaw.jpg",
        species: "Scarlet Macaw",
        local: "Lapa Roja",
        blurb: "Iconic CR rainforest resident. Loud, brilliant, and monogamous for life. Best spotted at La Fortuna and the Osa Peninsula.",
        fun_fact: "Their beaks are strong enough to crack a Brazil nut.",
        tag: "Bird"
    },
    {
        image: "assets/images/three-toed-sloth.jpg",
        species: "Three-Toed Sloth",
        local: "Perezoso de Tres Dedos",
        blurb: "Manuel Antonio's most Instagrammed resident. Algae grows in their fur, giving them a green tint for camouflage.",
        fun_fact: "They can hold their breath underwater for 40 minutes.",
        tag: "Mammal"
    },
    {
        image: "assets/images/two-toed-sloth.jpg",
        species: "Two-Toed Sloth",
        local: "Perezoso de Dos Dedos",
        blurb: "Nocturnal cousin of the three-toed. Common in the Caribbean lowlands and around Cahuita.",
        fun_fact: "They only come down from the canopy about once a week to poop.",
        tag: "Mammal"
    },
    {
        image: "assets/images/red-eyed-tree-frog-studio.png",
        species: "Red-Eyed Tree Frog",
        local: "Rana de Ojos Rojos",
        blurb: "The cover model of every rainforest brochure. Eyes pop open to startle predators at night. Found in the Caribbean lowlands.",
        fun_fact: "They are not actually red - their eyes are only revealed when threatened.",
        tag: "Amphibian"
    },
    {
        image: "assets/images/red-eyed-tree-frog-rainforest.webp",
        species: "Red-Eyed Tree Frog (in situ)",
        local: "Dominical, Costa Rica",
        blurb: "Same species in the wild at Dominical on the Pacific coast. Nocturnal - you'll see them on every night walk with a UV flashlight.",
        fun_fact: "Their feet have suction cups that allow them to climb and cling to leaves.",
        tag: "Amphibian"
    },
    {
        image: "assets/images/blue-jeans-frog.jpg",
        species: "Blue-Jeans Poison Frog",
        local: "Rana Venenosa",
        blurb: "Tiny, electric, and famous on TikTok. Found in the Osa Peninsula and Caribbean slope. Don't lick it.",
        fun_fact: "Their bright colors warn predators: 'I am toxic, leave me alone.'",
        tag: "Amphibian"
    }
];

function renderWildlife() {
    const grid = document.getElementById('wildlife-grid');
    if (!grid) return;

    grid.innerHTML = wildlife.map(w => `
        <article class="wildlife-card">
            <div class="wildlife-image-wrap">
                <img src="${w.image}" alt="${w.species} in Costa Rica" loading="lazy" />
                <span class="wildlife-tag">${w.tag}</span>
            </div>
            <div class="wildlife-content">
                <h3 class="wildlife-species">${w.species}</h3>
                <p class="wildlife-local">${w.local}</p>
                <p class="wildlife-blurb">${w.blurb}</p>
                <p class="wildlife-fact"><span class="fact-icon">💡</span> <strong>Did you know?</strong> ${w.fun_fact}</p>
            </div>
        </article>
    `).join('');
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof renderWildlife === 'function') {
            renderWildlife();
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { wildlife, renderWildlife };
}
