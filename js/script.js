/*alert ('Bonjour');
for (i=0;i<=10;i++){
if (i%2==0){
    alert (i+' est pair')
} else{
    alert (i+' est impair')
}
}
$(document).ready(function() {
    alert('Test jquery')
    $(".exp").css({'color': 'yellow'})
});*/

const dateNow = document.querySelector('header');

setInterval(function() {
    let date = new Date();
    let annee = date.getFullYear();
    let mois = date.getMonth() + 1;
    let jour = date.getDate();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let now = "Aujourd'hui le " + jour + "/" + mois + "/" + annee + " à " + heure + "h " + minute + "mn " + seconde + "s";
    dateNow.textContent = now;
}, 1000)





