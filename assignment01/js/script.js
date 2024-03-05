// Arrays containing words for different categories
const nouns1 = ["cat", "dog", "bird", "rabbit", "elephant"];
const verbs = ["ran", "jumped", "flew", "hopped", "swam"];
const adjectives = ["happy", "sad", "big", "small", "funny"];
const nouns2 = ["ball", "tree", "house", "car", "book"];
const settings = ["park", "beach", "forest", "mountain", "city"];

// Function to generate a random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random story from the arrays
function generateRandomStory() {
    const noun1 = getRandomWord(nouns1);
    const verb = getRandomWord(verbs);
    const adjective = getRandomWord(adjectives);
    const noun2 = getRandomWord(nouns2);
    const setting = getRandomWord(settings);

    const story = `${noun1} ${verb} ${adjective} ${noun2} ${setting}.`;
    return story;
}

// Function to display the student ID
function displayStudentId() {
    const studentIdElement = document.getElementById('studentId');
    studentIdElement.textContent = "Your Student ID: XYZ123";
}

// Event listeners for each button
document.getElementById('noun1Btn').addEventListener('click', function() {
    document.getElementById('chosenWords').textContent = getRandomWord(nouns1);
});

document.getElementById('verbBtn').addEventListener('click', function() {
    document.getElementById('chosenWords').textContent = getRandomWord(verbs);
});

document.getElementById('adjectiveBtn').addEventListener('click', function() {
    document.getElementById('chosenWords').textContent = getRandomWord(adjectives);
});

document.getElementById('noun2Btn').addEventListener('click', function() {
    document.getElementById('chosenWords').textContent = getRandomWord(nouns2);
});

document.getElementById('settingBtn').addEventListener('click', function() {
    document.getElementById('chosenWords').textContent = getRandomWord(settings);
});

document.getElementById('showStoryBtn').addEventListener('click', function() {
    document.getElementById('story').textContent = generateRandomStory();
});

document.getElementById('randomStoryBtn').addEventListener('click', function() {
    let randomStory = generateRandomStory();
    document.getElementById('story').textContent = randomStory;
});

document.getElementById('generateStudentIdBtn').addEventListener('click', displayStudentId);
