const deck = [
    { modifier: "In the dark", description: "All ‘scout’ type units and radar units/buildings are removed from the game.", count: 2 },
    { modifier: "Convert This", description: "No energy converters", count: 1 },
    { modifier: "Cortex faction only", description: "Professor Approved", count: 1 },
    { modifier: "Imploded Fusions", description: "No fusions or advanced fusions", count: 1 },
    { modifier: "Experimental Fiesta", description: "ALL extra experimental units ON (Scavengers too!)", count: 1 },
    { modifier: "Hover Boy", description: "Hovercrafts Only", count: 1 },
    { modifier: "Raid City", description: "No turrets, only offensive units", count: 2 },
    { modifier: "Legion says hello!", description: "Legion faction only - you are supposed to follow the rules and not pick other factions! (no setting for that)", count: 1 },
    { modifier: "Let there be light", description: "No fog of war", count: 1 },
    { modifier: "Very Aggro", description: "Starting boxes 50% of map (Full coverage)", count: 1 },
    { modifier: "Spamming Begone", description: "70 maxunits per player (including buildings)", count: 2 },
    { modifier: "Poverty Simulator", description: "Starting resources 100M and 100E", count: 1 },
    { modifier: "Greenest Gameplay", description: "No Metal Extractors", count: 1 },
    { modifier: "UnbaCom Enabled", description: "Chad Mode", count: 1 },
    { modifier: "Ruins enabled", description: "Balance Ruined", count: 1 }
];

let expandedDeck = [];
deck.forEach(card => {
    for (let i = 0; i < card.count; i++) {
        expandedDeck.push(card);
    }
});

function drawCard() {
    const randomIndex = Math.floor(Math.random() * expandedDeck.length);
    if (randomIndex < 0 || randomIndex >= expandedDeck.length) return;

    const drawnCard = expandedDeck[randomIndex];
    document.getElementById('modifier').textContent = drawnCard.modifier;
    document.getElementById('description').textContent = drawnCard.description;

    // Remove the drawn card from the expanded deck
    expandedDeck.splice(randomIndex, 1);

    displayChances(); // Update the displayed chances
}

function resetDeck() {
    expandedDeck = [];
    deck.forEach(card => {
        for (let i = 0; i < card.count; i++) {
            expandedDeck.push(card);
        }
    });

    document.getElementById('modifier').textContent = '';
    document.getElementById('description').textContent = '';
    displayChances();
}

function displayChances() {
    let chancesHTML = '';
    deck.forEach((card, index) => {
        const cardCountInExpandedDeck = expandedDeck.filter(c => c.modifier === card.modifier).length;
        const percentageChance = ((cardCountInExpandedDeck / expandedDeck.length) * 100).toFixed(2) + "%";
        if (cardCountInExpandedDeck > 0) {
            chancesHTML += `
                <div>
                    <span><strong>${card.modifier} x ${cardCountInExpandedDeck}</strong> (${percentageChance}): ${card.description}</span>
                    <button onclick="removeCard(${index})">Pick</button>
                </div>`;
        }
    });
    document.getElementById('chances').innerHTML = chancesHTML;
}

function removeCard(index) {
    if (index < 0 || index >= deck.length) return;

    const cardToRemove = deck[index];

    // Remove one occurrence of the card from the expanded deck
    const removeIndex = expandedDeck.findIndex(c => c.modifier === cardToRemove.modifier);
    if (removeIndex > -1) {
        expandedDeck.splice(removeIndex, 1);
    }

    displayChances(); // Update the displayed chances
}

const deck2 = [
    { modifier: "No Water", description: "", count: 2 },
    { modifier: "More Water", description: "Map dependent, see the list of values", count: 2 },
    { modifier: "Water Is Lava", description: "", count: 1 },
    { modifier: "Hooked", description: "map gets overwritten by Hooked", count: 1 },
    { modifier: "Speed Metal", description: "map gets overwritten by Speed Metal", count: 1 },
    { modifier: "No Modifiers", description: "", count: 2 },
    { modifier: "Inverted", description: "", count: 3 }
];

let expandedDeck2 = [];
deck2.forEach(card => {
    for (let i = 0; i < card.count; i++) {
        expandedDeck2.push(card);
    }
});

function drawCard2() {
    const randomIndex = Math.floor(Math.random() * expandedDeck2.length);
    if (randomIndex < 0 || randomIndex >= expandedDeck2.length) return;

    const drawnCard = expandedDeck2[randomIndex];
    document.getElementById('modifier2').textContent = drawnCard.modifier;
    document.getElementById('description2').textContent = drawnCard.description;

    // Remove the drawn card from the expanded deck
    expandedDeck2.splice(randomIndex, 1);

    displayChances2();
}

function displayChances2() {
    let chancesHTML = '';
    deck2.forEach((card, index) => {
        const cardCountInExpandedDeck = expandedDeck2.filter(c => c.modifier === card.modifier).length;
        const percentageChance = ((cardCountInExpandedDeck / expandedDeck2.length) * 100).toFixed(2) + "%";
        if (cardCountInExpandedDeck > 0) {
            chancesHTML += `
                <div>
                    <span><strong>${card.modifier} x ${cardCountInExpandedDeck}</strong> (${percentageChance}): ${card.description}</span>
                    <button onclick="removeCard2(${index})">Pick</button>
                </div>`;
        }
    });
    document.getElementById('chances2').innerHTML = chancesHTML;
}

function removeCard2(index) {
    if (index < 0 || index >= deck2.length) return;

    const cardToRemove = deck2[index];

    // Remove one occurrence of the card from the expanded deck
    const removeIndex = expandedDeck2.findIndex(c => c.modifier === cardToRemove.modifier);
    if (removeIndex > -1) {
        expandedDeck2.splice(removeIndex, 1);
    }

    displayChances2();
}

function resetDeck2() {
    expandedDeck2 = [];
    deck2.forEach(card => {
        for (let i = 0; i < card.count; i++) {
            expandedDeck2.push(card);
        }
    });

    document.getElementById('modifier2').textContent = '';
    document.getElementById('description2').textContent = '';
    displayChances2();
}

window.onload = function() {
    displayChances();
    displayChances2();
}