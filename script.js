var countdownDate =  new Date("Nov 18 2020 00:00:00").getTime();
var x=setInterval(function()
{
    console.log("hi");
    var now=new Date().getTime();
    var distance=countdownDate-now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".counter-text").innerHTML= 
    `
    <div class="row text-center">
    <div class="days col">`+ days + `d </div>
    <div class="days col">`
    + hours + `h
    </div>
    <div class="days col">  `
    + minutes + `m 
    </div>
    <div class="days col">`
     + seconds + 
     `s </div>
     </div>
     `;

},1000);
var timeline = anime.timeline({
    easing:'easeInOutExpo',
    duration:1000,
    loop: true,
});
timeline.add({
    targets:'.counter-text',
    scale: 2,
    easing:'easeInOutExpo',
    delay:500,
    loop:true,
    direction:'alternate'


});