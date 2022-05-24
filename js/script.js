const bgAlert = document.querySelectorAll(".bg-alert");
const infoWidth = document.querySelectorAll(".info-width");


// infoWidth.addEventListener("click", function(){
//     // bgAlert.style.opacity = "1";
//     bgAlert.forEach(e => e.style.opacity ="1")
// })

infoWidth.forEach(info => {
    info.addEventListener("click", function() {
        bgAlert.forEach(e => e.style.opacity ="1");
    })
})

// infoWidth.forEach(info => {
//     info.addEventListener("click", function() {
//         bgAlert.style.opacity ="1";
//     })
// })