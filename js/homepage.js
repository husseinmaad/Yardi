$(document).ready(function() {

    var selected_button;

    $(".btn-group").on('click', function(e) {
        e.preventDefault();
        console.log(e.target.value)
        // $('.btn-group .active').removeClass('active')
        // $(e.target).addClass('active')
        selected_button = e.target.value;

        var cards = $(selected_button);
        console.log(cards)
        // 
        var newContent = '<div class="row">';
        for (var i = 0; i < cards.length; i++) {
            newContent += '<div class = "col-sm-4 col-lg-4 col-md-4 ' + selected_button + ' animated fadeInLeft">'
            newContent += $(cards[i]).html();
            newContent += '</div>';
        }
        newContent += '</div>';
        $('#content .row').hide();
        $(newContent).appendTo('#content');
        $('.navbar-fixed-bottom').show();
    })

    $('#apply').on('click', function(e) {
        e.preventDefault();
    })

    $('#cancle').on('click', function(e) {

    })




    $(function() {
        $('#datetimepicker1').datepicker();
    });
  
  
    $("#slider-range").slider({
        range: true,
        min: 400,
        max: 4000,
        values: [400, 4000],
        slide: function(event, ui) {
            $("#amount").text(ui.values[0]);
            $("#amount2").text(ui.values[1]);
            $('#test').val(ui.values[1])
        }
    });

    $("#slider-range1").slider({
        range: true,
        min: 400,
        max: 4000,
        values: [400, 4000],
        slide: function(event, ui) {
            // $( "#amo1" ).text( ui.values[ 0 ] );
            // $( "#amo2" ).text( ui.values[ 1 ] );

        }
    });

    $("#amount").change(function() {

        $("#slider-range").slider('values', 0, $(this).val());
    });

    $("#amount2").change(function() {
        $("#slider-range").slider('values', 1, $(this).val());
    });


    $('nav').fadeTo(100, 0.9)

    $("span").mouseup(function() {
        var components = $('.container').find('.row').find('.card')
        var min = Number($("#amount").text());
        var max = Number($("#amount2").text());
        var arr_card = []
        filter_check(components);
        for (var i = 0; i < components.length; i++) {

            var priceElement = $(components[i]).find('bdi')
            var currency = Number(priceElement[0].innerText.replace(/[^0-9\.]+/g, ""));

            if (currency >= min && currency <= max) {
                arr_card.push(components[i]);
            }
        }
        for (var i = 0; i < arr_card.length; i++) {
            $(arr_card[i]).show();
        }
    });

    more_less_check();

    more_filter();
});
// End of Document

var filter_check = function(input) {
    for (var i = 0; i < input.length; i++) {
        $(input[i]).hide()
    }
}

// change the more <=> less 
var more_less_check = function() {
    var icon = '<i class="fa fa-chevron-down" aria-hidden="true"></i>'
    $('#more-link').on('click', function() {
        var link = $('#more-link')
        if ($('#more-link')[0].innerText == " More") {

            $('.less').append(link.html('<i class="fa fa-chevron-up" aria-hidden="true"></i>' + " Less"))

        } else {
            var temp2 = $('#carpet').parent()[0]
            $(temp2).append(link.html('<i class="fa fa-chevron-down" aria-hidden="true"></i>' + " More"))


        }
    })
}

// More Filter link
var more_filter = function() {
    $('#filter-link').on('click', function() {
        $('#title-filter').removeClass("hidden")
        $('#title-filter').show();
        $('#filter-link').hide();
        $('#reset-link').removeClass("reset-link-before-change");
        $('#reset-link').addClass("reset-link-after-change");
        $('#content').css({
            'margin-bottom': '320px'
        });
    });
}

// Reset all the homepage
var resetAll = function() {
    location.reload();
}

// Google Map

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}