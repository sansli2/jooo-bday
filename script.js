 /* =====================================
   BASIC STATE
===================================== */

let recovered = {
    A: false,
    R: false,
    S: false,
    U: false
};

let currentCase = null;


/* =====================================
   OPEN ARCHIVE
===================================== */

function openArchive() {

    document.getElementById("opening")
        .classList.remove("active");

    document.getElementById("archive")
        .classList.add("active");

    updateProgress();

}


/* =====================================
   OPEN CASE
===================================== */

function openCase(letter) {

    currentCase = letter;

    const modal = document.getElementById("caseModal");
    const content = document.getElementById("caseContent");

    modal.classList.add("open");

    if (letter === "A") {
        showCaseA(content);
    }

    if (letter === "R") {
        showCaseR(content);
    }

    if (letter === "S") {
        showCaseS(content);
    }

    if (letter === "U") {
        showCaseU(content);
    }

}


/* =====================================
   CLOSE CASE
===================================== */

function closeCase() {

    document.getElementById("caseModal")
        .classList.remove("open");

}


/* =====================================
   CASE A
===================================== */

function showCaseA(content) {

    content.innerHTML = 

        <div class="case-heading">
            ARCHIVE 001
        </div>

        <h2 class="case-main-title">
            The Origin Story
        </h2>

        <p class="case-description">
            Four memories. One story.
            <br>
            Put them in the right order.
        </p>

        <img
            class="photo-memory"
            src="images/jo-sleeping.jpg"
            alt="A memory of Jo sleeping"
        >

        <div class="memory-note">
            I started to like her because she slept like a baby. 😂
        </div>

        <br>

        <div class="puzzle-box">

            <p>
                Which came first?
            </p>

            <div class="choice-list">

                <button class="choice" onclick="selectA(1)">
                    Grade 11
                </button>

                <button class="choice" onclick="selectA(2)">
                    Grade 12
                </button>

                <button class="choice" onclick="selectA(3)">
                    University entrance exam / dorm
                </button>

                <button class="choice" onclick="selectA(4)">
                    Same university
                </button>

            </div>

            <p id="aProgress" style="margin-top:20px;">
                Select the memories in order.
            </p>

        </div>

    ;

}


/* A puzzle */

let aStep = 1;

function selectA(number) {

    const progress = document.getElementById("aProgress");

    if (number === aStep) {

        if (aStep < 4) {

            aStep++;

            progress.innerHTML =
                "Correct. Keep going... " +
                aStep +
                "/4";

        } else {

            progress.innerHTML =
                "CASE SOLVED. The first piece is yours.";

            recoverLetter("A");

        }

    } else {

        progress.innerHTML =
            "Not quite. Think about how it actually happened. 😂";

        aStep = 1;

    }

}


/* =====================================
   CASE R
===================================== */

function showCaseR(content) {

    content.innerHTML = `

        <div class="case-heading">
            ARCHIVE 002
        </div>

        <h2 class="case-main-title">
            The Rainy Sambusa File
        </h2>

        <p class="case-description">
            Mission objective:
            <br>
            Find the snack that saved the journey.
        </p>

        <div class="puzzle-box">

            <p>
                Follow the route:
            </p>

            <br>
 <strong>
                UNIVERSITY
                →
                UNISA AND TULU
                →
                NO QUOQOR
                →
                BUS
                →
                ???
            </strong>

            <br><br>

            <p>
                It was raining.
                You were hungry.
                You needed a snack.
            </p>

            <br>

            <p>
                What did you find?
            </p>

            <div class="choice-list">

                <button
                    class="choice"
                    onclick="chooseR('Quoqor')">
                    🍪 Quoqor
                </button>

                <button
                    class="choice"
                    onclick="chooseR('Sambusa')">
                    🥟 Sambusa
                </button>

                <button
                    class="choice"
                    onclick="chooseR('Cake')">
                    🍰 Cake
                </button>

                <button
                    class="choice"
                    onclick="chooseR('Fries')">
                    🍟 Fries
                </button>

            </div>

            <p id="rMessage"
               style="margin-top:20px;">
            </p>

        </div>

    ;

}


function chooseR(answer) {

    const message =
        document.getElementById("rMessage");

    if (answer === "Sambusa") {

        message.innerHTML =
            "CORRECT. 🥟 Quoqor was nowhere to be found.";

        recoverLetter("R");

    } else {

        message.innerHTML =
            "Nope. 😂 Think about what you actually ate that rainy night.";

    }

}


/* =====================================
   CASE S
===================================== */

function showCaseS(content) {

    content.innerHTML = 

        <div class="case-heading">
            ARCHIVE 003
        </div>

        <h2 class="case-main-title">
            The Mystery of Jo
        </h2>

        <p class="case-description">
            This file is different.
            <br>
            This time, the clues are about <strong>you</strong>.
        </p>

        <div class="puzzle-box">

            <p>
                Which of these belong in Jo's archive?
            </p>

            <div class="object-grid">

                <button
                    class="object"
                    onclick="revealS('New things')">
                    🌍
                    <br>
                    Trying new things
                </button>

                <button
                    class="object"
                    onclick="revealS('Event organizer')">
                    🎟️
                    <br>
                    Event organizing
                </button>

                <button
                    class="object"
                    onclick="revealS('Lilies')">
                    🌸
                    <br>
                    Lilies
                </button>

                <button
                    class="object"
                    onclick="revealS('Vintage')">
                    📷
                    <br>
                    Vintage things
                </button>

                <button
                    class="object"
                    onclick="revealS('Butter yellow')">
                    🧈
                    <br>
                    Butter yellow
                </button>

                <button
                    class="object"
                    onclick="revealS('Interior design')">
                    🏠
                    <br>
                    Interior design
                </button>

            </div>

            <div id="sClue"
                 class="clue-output">

                Click the things that feel like Jo.
            </div>

            <button
                class="main-button"
                onclick="solveS()">

                I KNOW HER

            </button>

        </div>

    `;

}


let sClues = new Set();


function revealS(clue) {

    sClues.add(clue);
 document.getElementById("sClue").innerHTML =
        "Clue recovered: <strong>" +
        clue +
        "</strong><br><br>" +
        sClues.size +
        " / 6 clues found.";

}


function solveS() {

    const message =
        document.getElementById("sClue");

    if (sClues.size === 6) {

        message.innerHTML =
            "CASE SOLVED. You really do know your own archive. 😂";

        recoverLetter("S");

    } else {

        message.innerHTML =
            "You're missing some clues. Keep exploring.";

    }

}


/* =====================================
   CASE U
===================================== */

function showCaseU(content) {

    content.innerHTML = 

        <div class="case-heading">
            ARCHIVE 004
        </div>

        <h2 class="case-main-title">
            The Girl Behind the File
        </h2>

        <p class="case-description">
            The final file isn't about solving a mystery.
            <br>
            It's about noticing the person behind all of it.
        </p>

        <div class="puzzle-box">

            <p>
                Open each object.
            </p>

            <div class="object-grid">

                <button
                    class="object"
                    onclick="revealU('Lily')">
                    🌸
                    <br>
                    Lily
                </button>

                <button
                    class="object"
                    onclick="revealU('Food')">
                    🍴
                    <br>
                    Food
                </button>

                <button
                    class="object"
                    onclick="revealU('Travel')">
                    ✈️
                    <br>
                    Travel
                </button>

                <button
                    class="object"
                    onclick="revealU('Vintage')">
                    📻
                    <br>
                    Vintage
                </button>

                <button
                    class="object"
                    onclick="revealU('Dark green')">
                    🟢
                    <br>
                    Dark green
                </button>

                <button
                    class="object"
                    onclick="revealU('Butter yellow')">
                    🧈
                    <br>
                    Butter yellow
                </button>

            </div>

            <div id="uClue"
                 class="clue-output">

                Something connects all of them.
            </div>

            <button
                class="main-button"
                onclick="solveU()">

                COMPLETE THE FILE

            </button>

        </div>

    ;

}


let uClues = new Set();


function revealU(clue) {

    uClues.add(clue);

    document.getElementById("uClue").innerHTML =
        "Archive item: <strong>" +
        clue +
        "</strong><br><br>" +
        uClues.size +
        " / 6 explored.";

}


function solveU() {

    const message =
        document.getElementById("uClue");

    if (uClues.size === 6) {

        message.innerHTML =
            "It's simple. They all lead back to one person: <strong>JO.</strong>";

        recoverLetter("U");

    } else {

        message.innerHTML =
            "There are still objects you haven't opened.";

    }

}


/* =====================================
   RECOVER LETTER
===================================== */

function recoverLetter(letter) {

    if (recovered[letter]) {
        return;
    }

    recovered[letter] = true;

    closeCase();

    const card =
        document.getElementById("case" + letter);

    card.classList.add("found");

    card.querySelector(".case-status").innerText =
        "✓ RECOVERED";

    updateProgress();

    checkAllLetters();

}


/* =====================================
   PROGRESS
===================================== */

function updateProgress() {
 const count =
        Object.values(recovered)
        .filter(Boolean)
        .length;

    document.getElementById("progressCount")
        .innerText = count;

}


/* =====================================
   CHECK FOUR LETTERS
===================================== */

function checkAllLetters() {

    const complete =
        recovered.A &&
        recovered.R &&
        recovered.S &&
        recovered.U;

    if (complete) {

        document
            .getElementById("arsuReveal")
            .classList.remove("hidden");

        setTimeout(() => {

            document
                .getElementById("arsuReveal")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }, 300);

    }

}


/* =====================================
   ARSU ANSWER
===================================== */

function checkARSU() {

    const input =
        document
            .getElementById("arsuInput")
            .value
            .trim()
            .toUpperCase();

    const message =
        document
            .getElementById("arsuMessage");

    if (input === "ARSU") {

        message.innerHTML =
            "ACCESS GRANTED.";

        setTimeout(() => {

            document
                .getElementById("archive")
                .classList.remove("active");

            document
                .getElementById("passportScreen")
                .classList.add("active");

        }, 900);

    } else {

        message.innerHTML =
            "That's not it. Look at the four pieces again.";

    }

}


/* =====================================
   FINISH DAY 3
===================================== */

function finishDay3() {

    document
        .getElementById("passportScreen")
        .classList.remove("active");

    document
        .getElementById("ending")
        .classList.add("active");

}


/* =====================================
   RESET
===================================== */

function resetJourney() {

    recovered = {
        A: false,
        R: false,
        S: false,
        U: false
    };

    aStep = 1;
    sClues.clear();
    uClues.clear();

    location.reload();

}
