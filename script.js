// function showHideElements() {
//     let section = document.querySelector(".section");

//     if (section) {
//         if (section.style.display === "none" || section.style.display === "") {
//             section.style.display = "flex";
//         } else {
//             section.style.display = "none";
//         }
//     } else {
//         console.error("Element with class 'section' not found.");
//     }
// }

function showHideElements(sectionSelector) {
    let section = document.querySelector(sectionSelector);

    if (section) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    } else {
        console.error(`Element with selector '${sectionSelector}' not found.`);
    }
}















// let section = document.querySelector(".section");
// let isShow = true;

// function showHideElements() {
//     if (isShow) {
//         section.style.display = "none";
//         isShow = false;
//     } else {
//         section.style.display = "block";
//         isShow = true;
//     }
// }



// function showHideElements(){
//     section.classList.toggle("hide");
// }