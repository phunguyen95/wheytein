var loading = false
var currentPage = 2;
var maxRecordsPer = 20;
var scrollPoint = 0;
$(function(){

    $wrapper = $(".wrapper");


    if($("div.result").length){
        scrollPoint = $("div.result section:not(.loader)").last().offset().top;
        //if( $("section.result.loading").length > 0 ){
        //    $("section.result.loading").hide( "slow" );
        //}

        // this does work for mobile
        $(window).scroll( scrollHandler );
    }

    $keywordField = $("input#search");
    $btn = $("#submitSearchBtn");
    $crossIcon = $("a.icon-remove");
    $keywordField.keyup(function(){
        if($(this).val().length > 0) {
            if($(window).width() >= 760 ) {
                $btn.fadeIn();
            }
            $crossIcon.show();
        } else {
            $crossIcon.hide();
        }
    });

    $crossIcon.click(function(e){
        e.preventDefault();
        $keywordField.val('').trigger('focus');
        $(this).hide();
    })

    $(".filter input").click(function(){
        
        var val = $(this).val();
        var type = $(this).attr('type');
        var name = $(this).attr('name').replace('-mobile', '');

        if(type == 'radio') {
            setHiddenElement( name , val );
        } else if(type == 'checkbox') {
            if($(this).is(':checked')) {
                setHiddenElement( name , val );
            } else {
                setHiddenElement( name , '' );
            }
        }

        var shortname = $(this).data('shortname');
        $dropdown = $(this).closest("li").find("a.dropdown");
        if(shortname) {
            $dropdown.children("span").text(shortname);
        }

        
        $wrapper.addClass('updating');
        currentPage = 2;
        $searchForm = $("#searchForm");

        $.get($searchForm.attr('action'), $searchForm.serialize(), function(data){
            $("div.result").html(data);
            $wrapper.removeClass('updating');
            $(".matches.mobile-only").text($("div.result .bookmark h5").text());
            $dropdown.trigger('click');
            if ( history.pushState ) {
                history.pushState("x", null, $searchForm.attr('action') + "?" + decodeURIComponent( $searchForm.serialize() ));
            }
        });

    });

    $("div.result").on("click", "a.word-audio-play", function(){
        var id = $(this).attr('data-id');
        var player = $("audio.word-audio[data-id='"+id+"']").get(0);

        if(player.ended) {
            player.currentTime = 0;
            player.play();
            $(this).addClass('playing');
            player.play();
        } else if(player.currentTime > 0) {
            player.pause();
            player.currentTime = 0;
            $(this).removeClass('playing');
        } else {
            player.play();
            $(this).addClass('playing');
        }

        return false;
    });

    $.each($("audio.word-audio"), function(){
        var audioEl = $(this).get(0);
        audioEl.addEventListener('ended', function(){
            $(audioEl).prev("a").removeClass('playing');
        });
    });

});

function setHiddenElement( field , value ){
    $("input#" + field).val( value );
}

function loadNextSetResults(){

    $wrapper.addClass('loading');
    
    pathnameLen = document.location.pathname.split("/").length;
    if( $("section.loader").length > 0 ){   
        $("section.loader").show();
    }else{
        $wrapper.removeClass('loading');
        return;
    }

    data = "page=" + currentPage;
    data += "&keywords="+ $("input[name=keywords]").val();
    data += "&idiom="+ $("#idiom").val();
    data += "&phrase="+ $("#phrase").val();
    data += "&proverb="+ $("#proverb").val();
    data += "&loan="+ $("#loan").val();
    data += "&histLoanWords="+ $("#histLoanWords").val();
    
    sUrl = "/search" ;

    loading = true;
    options = {
        'url'    : sUrl          ,
        'data'    : data          ,
        'method' : 'GET'        
    };


    $.ajax( options ).promise().done( function( data ) {

        if( $("section.loader").length > 0 ){   
            //$("section.result.loading").before( data );
            $("section.loader").remove();
            $("div.result").append( data );

            $wrapper.removeClass('loading');
        }

        data = $.trim( data );

        if( data.length > 1 ){
            scrollPoint = $("div.result section:not(.loader)").last().offset().top;
            //$("section.result.loading").hide( "slow" );

            currentPage = currentPage + 1;
        }else{
            //there is no data coming through so we can kill the loadNextSetResults?
            $(window).off("scroll", scrollHandler);
        }

        loading = false;

        // apply audiojs to new elements
        var audioTags = document.getElementsByClassName("definition-audio");
        for(i=0;i<audioTags.length;i++) {
            if(!$(audioTags[i]).parent().hasClass('audiojs')) {
                audiojs.create(audioTags[i], {
                    css: false
                });
            }
        }
            
        
    });






}

function scrollHandler () {

    //console.log( $(window).scrollTop() );
    //console.log(scrollPoint);
    if  ($(window).scrollTop()  > ( scrollPoint - 1000 )  ){
        if ( currentPage > 0 && ! loading ){
            //$("section.result.loading").show();
            loadNextSetResults();
            //$wrapper.removeClass('loading');
        }

    }
};

