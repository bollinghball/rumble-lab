// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");

let myApiKey = config.SHOPIFY_KEY;
let secretKey = config.MAILCHIMP_KEY;
let listID = config.M_LIST_ID;
let myGLife = config.G_A_KEY;

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#introVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#introVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#introVideo").attr('src', url);
    });
});




// autoPlayYouTubeModal();

// //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
// function autoPlayYouTubeModal() {
//     var trigger = $("body").find('[data-toggle="modal"]');
//     trigger.click(function () {
//         var theModal = $(this).data("target"),
//             videoSRC = $(this).attr("data-theVideo"),
//             videoSRCauto = videoSRC + "?autoplay=1";
//         $(theModal + ' iframe').attr('src', videoSRCauto);
//         $(theModal + ' button.close').click(function () {
//             $(theModal + ' iframe').attr('src', videoSRC);
//         });
//     });
// }