jQuery(document).ready(function($){
    window.onscroll = function(){
        if (window.pageYOffset > 140) {
            $(".cabecalho").addClass("active");
        } else{
            $(".cabecalho").remoceClass("active");
        }
        
    }
});