$(function(){
    //�Զ��ֲ��������ű仯������
    var $banner=$(".sn_banner");
    var width=$banner.width();
    var $imgBox=$banner.find("ul:first");
    var $pointBox=$banner.find("ul:last");
    var $points=$pointBox.find("li");

    var animatefunction=function(){
        $imgBox.animate({transform:"translateX("+(-index*width)+"px)"},200,function(){
            if(index>=9){
                index=1;
                $imgBox.css({transform:"translateX("+(-index*width)+"px)"});
            }else if(index<=0){
                index=8;
                $imgBox.css({transform:"translateX("+(-index*width)+"px)"});
            }
            //    ��仯
            $points.removeClass("now").eq(index-1).addClass("now");
        });
    }

    var index=1;
    var timer=setInterval(function(){
        index++;
        animatefunction();
    },3000);

//    ����
//    �󻬣���һ��
    $banner.on("swipeLeft",function(){
        //index++;
        //animatefunction();
        console.log("next");
    });
    $banner.on("swipeRight",function(){
        //index--;
        //animatefunction();
        console.log("prev");
    });
});