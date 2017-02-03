window.addEventListener("resize", colHeight);

function colHeight() {
    if(window.innerWidth < 992){
        $(".col4").css("height", "auto")
    }else if(window.innerWidth > 993 && $(".hiddenLinks").css("display") == "none"){
        $(".col4").css("height", "450px")
    }
}

function initialize(){

    $logo1 = $(".qLUpLeft");
    $logo2 = $(".qLUpRight");
    $logo3 = $(".qLLowLeft");
    $logo4 = $(".qLLowRight");


    $logo1.hover(function () {
        $logo2.hide();
        $logo3.hide();
        $logo4.hide();
    }, function(){
        $logo2.fadeTo("fast", 1);
        $logo3.fadeTo("fast", 1);
        $logo4.fadeTo("fast", 1);
    });

    $logo2.hover(function () {
        $logo1.hide();
        $logo3.hide();
        $logo4.hide();
    }, function(){
        $logo1.fadeTo("fast", 1);
        $logo3.fadeTo("fast", 1);
        $logo4.fadeTo("fast", 1);
    });

    $logo3.hover(function () {
        $logo1.hide();
        $logo2.hide();
        $logo4.hide();
    }, function(){
        $logo1.fadeTo("fast", 1);
        $logo2.fadeTo("fast", 1);
        $logo4.fadeTo("fast", 1);
    });

    $logo4.hover(function () {
        $logo1.hide();
        $logo2.hide();
        $logo3.hide();
    }, function(){
        $logo1.fadeTo("fast", 1);
        $logo2.fadeTo("fast", 1);
        $logo3.fadeTo("fast", 1);
    });

    $(".moreLinks").click(function () {

        $header = $(this);
        $content = $(".hiddenLinks");
        $glyph = $(".glyphicon");
        $col = $(".col4");

        if(window.innerWidth >= 992) {
            function heightAdapt() {
                if ($col.css("height") == "450px") {
                    $col.css("height", "auto");
                } else {
                    $col.css("height", "450px");
                }
            }

            heightAdapt();
        }

        $content.slideToggle(350, function () {

            if($content.css("display") == "block"){
                $("div.glyphicon").replaceWith("<div class='textColorShadowTrans glyphicon glyphicon-arrow-up'></div>");
            }else{
                $("div.glyphicon").replaceWith("<div class='textColorShadowTrans glyphicon glyphicon-arrow-down'></div>");

            }

        });
    });
}
