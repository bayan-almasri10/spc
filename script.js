// document.addEventListener('DOMContentLoaded', function () {
//     const toggleCheckbox = document.getElementById('toggleCheckbox');
//     const toggleButton = document.getElementById('toggleButton');
//     const elementToToggle = document.getElementById('elementToToggle1');

//     toggleButton.addEventListener('click', function () {
//     toggleCheckbox.checked = !toggleCheckbox.checked;

//     elementToToggle.classList.toggle('box', !toggleCheckbox.checked);
//     });
// });




function toggleElement(elementId) {
    var element = document.getElementById(elementId);

    if (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'grid';
        } else {
            element.style.display = 'none';
        }
    } else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
}

// function toggleElement(elementId) {
//     var element = document.getElementById("section3");

//     if (element) {
//         if (element.style.display === 'none' || element.style.display === '') {
//             element.style.display = 'block';
//         } else {
//             element.style.display = 'none';
//         }
//     } else {
//         console.error('Element with ID ' + elementId + ' not found.');
//     }
// }

// function showHideElements(sectionSelector) {
//     let section = document.querySelector(sectionSelector);

//     if (section) {
//         if (section.style.display === "none" || section.style.display === "") {
//             section.style.display = "block";
//         } else {
//             section.style.display = "none";
//         }
//     } else {
//         console.error(`Element with selector '${sectionSelector}' not found.`);
//     }
// }