$(document).ready(function () {
    // function readURL(input) {
    //     if (input.files && input.files[0]) {
    //         console.log(input.files[0].size)
    //         if(input.files[0].size > 5000000){
    //              alert("Image file must be < 5Mb")
    //         }
		//
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
    //             $('#imagePreview').hide();
    //             $('#imagePreview').fadeIn(650);
    //         }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    // $("#imageUpload").change(function () {
    //     readURL(this);
    // });
    $('#slide-howitwork').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#slider-howit').owlCarousel({
        loop: true,
        margin: 10,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#comment-carousel').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    $(function () {
        var scntDiv = $('#p_scents');
        var i = $('#p_scents p').length + 1;

        $('#addScnt').on('click', function () {
            $('<p><label for="p_scnts"><input type="file" id="p_scnt" size="20" name="p_scnt_' + i + '" value="" placeholder="Input Value" /></label> <a href="#" id="remScnt">Remove</a></p>').appendTo(scntDiv);
            i++;
            return false;
        });

        $('#remScnt').on('click', function () {
            if (i > 2) {
                $(this).parents('p').remove();
                i--;
            }
            return false;
        });
    });


});