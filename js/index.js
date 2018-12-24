window.onload = function() {


    $('.start-btn').on('click', function () {
        console.log("you clicked start")
        $(".start-btn").hide();
        $(".container").css("display","block")
        playTrack()
        $("body").addClass("color-change-5x")
    });

}

var playTrack = function() {
    var audio = new Audio('./assets/icecreamloop2.mp3');
    audio.play();
    audio.loop=true;
}