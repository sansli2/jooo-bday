/* =========================================
   ARSU — ARCHIVE INTERACTION
========================================= */

// Get elements
const opening = document.getElementById("opening");
const archive = document.getElementById("archive");
const beginBtn = document.getElementById("beginBtn");


// =========================================
// OPEN THE ARCHIVE
// =========================================

beginBtn.addEventListener("click", () => {

    opening.classList.remove("active");
    opening.classList.add("hidden");

    archive.classList.remove("hidden");

    // Start at the top of the archive
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================================
// MEMORY NAVIGATION
// =========================================

const continueButtons = document.querySelectorAll(".continue-btn");

continueButtons.forEach(button => {

    button.addEventListener("click", () => {

        const nextId = button.dataset.next;

        // Hide all archive sections
        const sections = document.querySelectorAll(".archive-section");

        sections.forEach(section => {
            section.classList.add("hidden");
        });

        // Show requested section
        const nextSection = document.getElementById(nextId);

        if (nextSection) {

            nextSection.classList.remove("hidden");

            // Scroll to the newly revealed section
            setTimeout(() => {

                nextSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }

    });

});


// =========================================
// ARSU DISCOVERY
// =========================================

const revealArsu = document.getElementById("revealArsu");
const arsuDiscovery = document.getElementById("arsuDiscovery");
const arsuReveal = document.getElementById("arsuReveal");

if (revealArsu) {

    revealArsu.addEventListener("click", () => {

        arsuDiscovery.classList.add("hidden");

        arsuReveal.classList.remove("hidden");

        setTimeout(() => {

            arsuReveal.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    });

}


// =========================================
// OPEN PASSPORT
// =========================================

const openPassport = document.getElementById("openPassport");
const passportSection = document.getElementById("passportSection");

if (openPassport) {

    openPassport.addEventListener("click", () => {

        arsuReveal.classList.add("hidden");

        passportSection.classList.remove("hidden");

        setTimeout(() => {

            passportSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    });

}


// =========================================
// INITIAL STATE
// =========================================

// Hide the archive when the page first loads
archive.classList.add("hidden");

// Hide every archive section except the introduction
const sections = document.querySelectorAll(".archive-section");

sections.forEach(section => {

    if (section.id !== "intro") {
        section.classList.add("hidden");
    }

});


// =========================================
// SMALL CONSOLE MESSAGE
// =========================================

console.log(
    "ARSU ARCHIVE initialized. Investigation ready."
);
