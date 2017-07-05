
  $( document ).ready(function() {
    
    var selected_button 
    $(".btn-group").on('click', function(e){
      e.preventDefault();
       console.log(e.target.value)
       selected_button = e.target.value;
    })

    $('#apply').on('click',function(e){
      e.preventDefault();

      console.log($(".bed_2"));
      $('.card').hide();
      $(selected_button).show();
    })

    $('#cancle').on('click',function(e){

    })
});
