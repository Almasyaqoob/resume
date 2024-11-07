"use strict";
let ref_section = document.getElementById("ref");
let ref_btn = document.getElementById("ref_btn");
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
let exp_section = document.getElementById("exp");
let exp_btn = document.getElementById("exp_btn");
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
let lan_section = document.getElementById("lan");
let lan_btn = document.getElementById("lan_btn");
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
let expe_section = document.getElementById("expe");
let expe_btn = document.getElementById("expe_btn");
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
let edu_section = document.getElementById("edu");
let edu_btn = document.getElementById("edu_btn");
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener('click', () => {
    window.print();
});
