$(document).ready(function() {

  var components = $('.container').find('.row').find('.card').parent();

  // Initiate the wow js
  new WOW().init();

  // Bedroom Filter Function
  bedroomFilter();
  // Price Range Slider 
  drawRentFilterSlider();

  // Price Range Slider 
  drawSqftFilterSlider();

  // Rent Amount Change
  rentFilterAmount();
 
  // Date Picker function
  datePicker();

  // Transparent Filter
    $('nav').fadeTo(100, 0.9);

  // Change the More <=> Less
  moreLessCheck();
  
  priceRangeFilter(components);

  mobileFliterHandler();

  moreFilterLink();

  applyBtn();

  applyBtnMobile();

  closeBtnMobile();


});
// End of Document Load

// Price Range Slider 
var drawRentFilterSlider = function() {
  $("#slider-range").slider({
    range: true,
    min: 400,
    max: 4000,
    values: [400, 4000],
    slide: function(event, ui) {
      $("#amount").html(ui.values[0]);
      $("#amount2").html(ui.values[1]);
    }
  });
}


// SQFT Range Slider 
var drawSqftFilterSlider = function() {
  $("#slider-range1").slider({
    range: true,
    min: 400,
    max: 4000,
    values: [400, 4000],
    slide: function(event, ui) {

    }
  });
}

var rentFilterAmount = function() {
  $("#amount").change(function() {

    $("#slider-range").slider('values', 0, $(this).val());
  });

  $("#amount2").change(function() {
    $("#slider-range").slider('values', 1, $(this).val());
  });
}

// Date Picker

var datePicker = function() {
  $(function() {
    $('#datetimepicker1').datepicker();
  });
}

// Bedroom Filter Function
var bedroomFilter = function() {
  var selected_button;

  $(".bedroom").on('click', function(e) {
    e.preventDefault();

    selected_button = e.target.value;

    var cards = $(selected_button);
    var newContent = '<div class="row">';
    for (var i = 0; i < cards.length; i++) {
      newContent += '<div class = "col-sm-4 col-lg-4 col-md-4 ' + selected_button + ' animated fadeInDown">';
      newContent += $(cards[i]).html();
      newContent += '</div>';
    }
    newContent += '</div>';
    $('#content .row').hide();

    $(newContent).appendTo('#content');
    $('.navbar-fixed-bottom').show();
  });
};

// Price range filter function

var priceRangeFilter = function(components) {

  $("span").mouseup(function() {
    var min = Number($("#amount").text());
    var max = Number($("#amount2").text());
    var arr_card = [];
    // filter_check(components);

    for (var i = 0; i < components.length; i++) {

      var priceElement = $(components[i]).find('bdi');
      var currency = Number(priceElement[0].innerText.replace(/[^0-9\.]+/g, ""));

      if (currency >= min && currency <= max) {
        arr_card.push(components[i]);
      }
    }
    var newContent = '<div class="row">';
    for (var i = 0; i < arr_card.length; i++) {
      newContent += arr_card[i].outerHTML
    }
    newContent += '</div>'
    $('#content .row').hide();
    $('#content').html(newContent)
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    newContent = "";
    arr_card = [];
  });
};


// Change the More <=> Less functionality on Click

var moreLessCheck = function() {
  var icon = '<i class="fa fa-chevron-down" aria-hidden="true"></i>'
  $('#more-link').on('click', function() {
    var link = $('#more-link');
    if ($('#more-link')[0].innerText == " More") {

      $('.less').append(link.html('<i class="fa fa-chevron-up" aria-hidden="true"></i>' + " Less"));

    } else {
      var temp2 = $('#carpet').parent()[0];
      $(temp2).append(link.html('<i class="fa fa-chevron-down" aria-hidden="true"></i>' + " More"));


    }
  })
};

// More Filter link

var moreFilterLink = function() {
  $('#filter-link').on('click', function() {
    $('#title-filter').removeClass("hidden");
    $('#title-filter').show();
    $('#filter-link').hide();
    $('#reset-link').removeClass("reset-link-before-change");
    $('#reset-link').addClass("reset-link-after-change");
    $('#content').css({
      'margin-bottom': '320px'
    });
  });
};

// Reset all the homepage

var resetAll = function() {
  location.reload();
};


// Mobile filter handling

var mobileFliterHandler = function() {
  var windowWidth = $(window).width();
  if (windowWidth <= 425) {
    var newFliterName = '<i class="fa fa-filter " aria-hidden="true"></i> FILTER ';
    $('#filter-link').html(newFliterName)

    // change the view btn to see apts btn

    $('.btn-secondary').text('See Apts');
    $('.chat').removeClass('hidden');
    $('#filter-link').on('click', function() {
      $('#fixed-filter').removeClass('hidden-xs');
      $('#close-btn').removeClass('hidden');

      $('#cancel-btn').on('click', function(e) {
        e.preventDefault();
        resetAll();
      });

    });

  } else if (windowWidth <= 770) {
    var newFliterName = '<i class="fa fa-filter " aria-hidden="true"></i> MORE FILTER '
    $('#filter-link').html(newFliterName)
    $('.chat').addClass('hidden');

    $('#filter-link').on('click', function() {
      $('#fixed-filter').removeClass('hidden-xs');

      $('#cancel-btn').on('click', function(e) {
        e.preventDefault();
        resetAll();
      });

    });

  }
};

// Apply Button Desktop

var applyBtn = function() {
  $('#apply-btn').on('click', function(e) {
    e.preventDefault();
    $('#extendFilter').removeClass('panel-collapse collapse in');
    $('#extendFilter').addClass('panel-collapse collapse');
    $('#filter-link').show();
    $('#reset-link').removeClass("reset-link-after-change");
    $('#reset-link').addClass("reset-link-before-change");
    $('#title-filter').hide();
  })
};

// Apply Button Mobile

var applyBtnMobile = function() {
  var windowWidth = $(window).width()
  if (windowWidth <= 425) {
    $('#apply-btn').on('click', function(e) {
      e.preventDefault();
      $('#fixed-filter').addClass('hidden-xs');
      $('#extendFilter').removeClass('panel-collapse collapse in');
      $('#extendFilter').addClass('panel-collapse collapse');
      $('#close-btn').hide();

    })
  }
};

// Close Button Mobile 

var closeBtnMobile = function() {
  $('#close-btn').on('click', function(e) {
    e.preventDefault();
    $('#fixed-filter').addClass('hidden-xs');
    $('#extendFilter').removeClass('panel-collapse collapse in');
    $('#extendFilter').addClass('panel-collapse collapse');
    $('#close-btn').addClass('hidden')
    $('#title-filter').hide();
    $('#filter-link').show();
  });
};