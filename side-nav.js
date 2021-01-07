$(window).load(function(){      
            var scroll_pos = 0;
	    var top_offset = $(window).height() / 2;
	    var art_pos = $("#art-section").offset().top - 1;
	    var yearbook_pos = $("#yearbook").offset().top - top_offset;
	    var id_pos = $("#industrial-design").offset().top - top_offset;
	    var other_pos = $("#other").offset().top - top_offset;

            $(document).scroll(function() { 

                scroll_pos = $(this).scrollTop();

                if(scroll_pos >= art_pos && scroll_pos < yearbook_pos) {
                    $("#nav-art").css('color', '#363636');
                } else {
                    $("#nav-art").css('color', '#c4c4c4');
                }

                if(scroll_pos >= yearbook_pos && scroll_pos < id_pos) {
                    $("#nav-yearbook").css('color', '#363636');
                } else {
                    $("#nav-yearbook").css('color', '#c4c4c4');
                }

                if(scroll_pos >= id_pos && scroll_pos < other_pos) {
                    $("#nav-id").css('color', '#363636');
                } else {
                    $("#nav-id").css('color', '#c4c4c4');
                }

                if(scroll_pos >= other_pos) {
                    $("#nav-other").css('color', '#363636');
                } else {
                    $("#nav-other").css('color', '#c4c4c4');
                }


            });


        });