const journey = document.getElementById("my_journey");
const who = document.getElementById("the_who");

const what_1 = document.getElementById("what_1");
const the_what_1 = document.getElementById("the_what_1");

const what_2 = document.getElementById("what_2");
const the_what_2 = document.getElementById("the_what_2");

const what_3 = document.getElementById("what_3");
const the_what_3 = document.getElementById("the_what_3");

const my_journey_2 = document.getElementById("my_journey_2");
const the_who_2 = document.getElementById("the_who_2");

const fun_1 = document.getElementById("fun_1");
const fun_2 = document.getElementById("fun_2");
const fun_3 = document.getElementById("fun_3");

const the_fun_1 = document.getElementById("the_fun_1");
const the_fun_2 = document.getElementById("the_fun_2");
const the_fun_3 = document.getElementById("the_fun_3");

const show = (elem) => elem.style.display = "block";
const hide = (elem) => elem.style.display = "none";

/* const toggleVisibility = () => {
    if()
} */

window.addEventListener("load", () => {
    console.log(`onload`);
    [
        who, 
        the_what_1,
        the_what_2,
        the_what_3,
        the_who_2,
        the_fun_1,
        the_fun_2,
        the_fun_3
    ].map((e) => {
        e.style.display = "none";
    });
});

journey.addEventListener("mouseover", () => {
    show(who);
});

journey.addEventListener("mouseout", () => {
    hide(who);
});

my_journey_2.addEventListener("mouseover", () => {
    show(the_who_2);
})

my_journey_2.addEventListener("mouseout", () => {
    hide(the_who_2);
})

what_1.addEventListener("mouseover", () => {
    show(the_what_1);
});

what_1.addEventListener("mouseout", () => {
    hide(the_what_1);
});

what_2.addEventListener("mouseover", () => {
    show(the_what_2);
});

what_2.addEventListener("mouseout", () => {
    hide(the_what_2);
});

what_3.addEventListener("mouseover", () => {
    show(the_what_3);
});

what_3.addEventListener("mouseout", () => {
    hide(the_what_3);
});

fun_1.addEventListener("mouseover", () => {
    show(the_fun_1);
});

fun_1.addEventListener("mouseout", () => {
    hide(the_fun_1);
});

fun_2.addEventListener("mouseover", () => {
    show(the_fun_2);
});

fun_2.addEventListener("mouseout", () => {
    hide(the_fun_2);
});

fun_3.addEventListener("mouseover", () => {
    show(the_fun_3);
});

fun_3.addEventListener("mouseout", () => {
    hide(the_fun_3);
});