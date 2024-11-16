const facts = [
    "I have a strong creative side with a passion for sketching.",
    "I enjoy experimenting with flavors and creating delicious meals.",
    "I love solving math problems and challenging myself."
];

let currentFactIndex = 0;

document.getElementById('reveal-btn').addEventListener('click', function() {
    const factDisplay = document.getElementById('fact-display');
    factDisplay.textContent = facts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % facts.length;
});
