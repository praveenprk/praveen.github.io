// Select all "The Journey" or "Professional Experience" items
const journey = document.getElementById("my_journey");
const who = document.getElementById("the_who");

const what_1 = document.getElementById("what_1");
const the_what_1 = document.getElementById("the_what_1");

const my_journey_2 = document.getElementById("my_journey_2");
const the_who_2 = document.getElementById("the_who_2");

const show = (elem) => elem.style.display = "block";
const hide = (elem) => elem.style.display = "none";


journey.addEventListener("mouseover", () => {
    // who.style.display = "block";
    show(who);
});

journey.addEventListener("mouseout", () => {
    // who.style.display = "none";
    hide(who);
});

what_1.addEventListener("mouseover", () => {
    // the_what_1.style.display = "block";
    show(the_what_1);
});

what_1.addEventListener("mouseout", () => {
    // the_what_1.style.display = "none";
    hide(the_what_1);
});

my_journey_2.addEventListener("mouseover", () => {
    show(the_who_2);
})