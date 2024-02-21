const scroll_tigre = document.getElementById('scroll_tigre');
const tigre = document.getElementById('tigre');

const scroll_cavalo = document.getElementById('scroll_cavalo');
const cavalo = document.getElementById('cavalo');

const scroll_lobo = document.getElementById('scroll_lobo');
const lobo = document.getElementById('lobo');



scroll_tigre.addEventListener("click", function(e) {
    e.preventDefault()
    tigre.scrollIntoView({behavior:'smooth'})
    
});
scroll_cavalo.addEventListener("click", function(e) {
    e.preventDefault()
    cavalo.scrollIntoView({behavior:'smooth'})
    
});
scroll_lobo.addEventListener("click", function(e) {
    e.preventDefault()
    lobo.scrollIntoView({behavior:'smooth'})
    
});