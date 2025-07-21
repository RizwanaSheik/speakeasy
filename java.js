document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from submitting normally

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Dummy authentication (Replace this with actual backend validation)
            if (email === "user@example.com" && password === "password123") {
                localStorage.setItem("isLoggedIn", "true"); // Store login status
                window.location.href = "home.html"; // Redirect to home page
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }

    // Restrict access to home page
    if (window.location.pathname.includes("home.html")) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            alert("You must be logged in to access this page.");
            window.location.href = "index.html"; // Redirect back to login page
        }
    }
});
function selectLanguage(language) {
    // Redirect to the corresponding page
    window.location.href = language.toLowerCase() + ".html";
}
function selectLanguage(language) {
    // Redirect to the corresponding page
    window.location.href = language + ".html";
}

// Display an alert when entering a learning section
document.addEventListener("DOMContentLoaded", function () {
    let pageTitle = document.title;
    
    if (pageTitle.includes("Reading Mode")) {
        alert("Welcome to the Reading Section!");
    } else if (pageTitle.includes("Writing Mode")) {
        alert("Welcome to the Writing Section!");
    } else if (pageTitle.includes("Listening Mode")) {
        alert("Welcome to the Listening Section!");
    } else if (pageTitle.includes("Speaking Mode")) {
        alert("Welcome to the Speaking Section!");
    }
});
function selectLanguage(language) {
    window.location.href = language + ".html";
}

// Function to handle language selection in Listening Mode
function openModule(language) {
    alert("You selected " + language + " listening module!");
    // You can redirect to an actual listening page or play an audio lesson.
    // Example: window.location.href = language.toLowerCase() + "-listening.html";
}

// Alert message when entering Listening Mode
document.addEventListener("DOMContentLoaded", function () {
    let pageTitle = document.title;
    if (pageTitle.includes("Listening Mode")) {
        alert("Welcome to the Listening Section! Select a language to begin.");
    }
});
,script>
        function goBack() {
            window.location.href = "home.html"; // Redirect back to home page
        }
    </script>
    // Redirects to the respective language speaking practice page
function openSpeakingPractice(language) {
    window.location.href = language.toLowerCase() + "-speaking.html";
}

// Speech Recognition Function
function startSpeechRecognition(expectedWord) {
    let resultDisplay = document.getElementById("result");

    // Check if Speech Recognition is supported
    if (!('webkitSpeechRecognition' in window)) {
        alert("Speech Recognition is not supported in your browser. Try using Chrome.");
        return;
    }

    let recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US'; // Change language based on selected language
    recognition.start();

    recognition.onresult = function(event) {
        let spokenText = event.results[0][0].transcript.toLowerCase();
        let expectedText = expectedWord.toLowerCase();

        if (spokenText === expectedText) {
            resultDisplay.innerHTML = "✅ Correct! (" + spokenText + ")";
        } else {
            resultDisplay.innerHTML = "❌ Incorrect! You said: (" + spokenText + ")";
        }
    };

    recognition.onerror = function(event) {
        resultDisplay.innerHTML = "Error: " + event.error;
    };
}
function addNote() {
    let noteText = prompt("Enter your note:");
    if (noteText) {
        let listItem = document.createElement('li');
        listItem.textContent = noteText;
        document.getElementById('notesList').appendChild(listItem);
    }
}

function checkAnswers() {
    let correctAnswers = ["b", "b", "b", "b", "b", "b", "b", "b"];
    let score = 0;
    for (let i = 1; i <= 8; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === correctAnswers[i - 1]) {
            score++;
        }
    }
    document.getElementById('result').textContent = `You scored ${score}/8`;
}
