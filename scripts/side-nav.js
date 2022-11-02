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
                    $("#nav-art").css('font-weight', '500');
                } else {
                    $("#nav-art").css('color', '#909090');
                    $("#nav-art").css('font-weight', '300');
                }

                if(scroll_pos >= yearbook_pos && scroll_pos < id_pos) {
                    $("#nav-yearbook").css('color', '#363636');
                    $("#nav-yearbook").css('font-weight', '500');
                } else {
                    $("#nav-yearbook").css('color', '#909090');
                    $("#nav-yearbook").css('font-weight', '300');
                }

                if(scroll_pos >= id_pos && scroll_pos < other_pos) {
                    $("#nav-id").css('color', '#363636');
                    $("#nav-id").css('font-weight', '500');
                } else {
                    $("#nav-id").css('color', '#909090');
                    $("#nav-id").css('font-weight', '300');
                }

                if(scroll_pos >= other_pos) {
                    $("#nav-other").css('color', '#363636');
                    $("#nav-other").css('font-weight', '500');
                } else {
                    $("#nav-other").css('color', '#909090');
                    $("#nav-other").css('font-weight', '300');
                }


            });


        });