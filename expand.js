    $(document).ready(function() {
        $("#expand").on('click', function(e){
            $( "ul" ).each(function( index ) {
                $( this ).addClass('collapse in');
                $( this ).attr('aria-expanded', 'true');
                $( this ).attr('style', 'none');
            });
        });
    });