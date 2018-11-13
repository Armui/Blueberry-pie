$.get('http://wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php',function(res){
    // console.log(res);

    var resStr = JSON.stringify(res);
    var newStr = resStr.replace(/iwen.wiki/g,'wwtliu.com');
    res1 = JSON.parse(newStr);
    console.log(res1);



    var str = '';
    for(var i = 0;i < res1.chengpinInfo.length;i++){
        if(i%2){
            str += '<div>'+
                    '<div class="Mug_right">'+
                                '<div class="wz">'+
                                    '<p>'+res1.chengpinInfo[i].title+'</p>'+
                                    '<p>'+res1.chengpinInfo[i].content+'</p>'+
                                    '<a href="#">商品详情</a>'+
                                '</div>'+
                            '</div>'+
                    '<div class="Mug_left">'+
                        '<img src="'+res1.chengpinInfo[i].img+'" alt="">'+
                    '</div>'+
                '</div>';
        }else{
            str += '<div>'+
                    '<div class="Mug_left">'+
                        '<img src="'+res1.chengpinInfo[i].img+'" alt="">'+
                    '</div>'+
                    '<div class="Mug_right">'+
                        '<div class="wz">'+
                            '<p>'+res1.chengpinInfo[i].title+'</p>'+
                            '<p>'+res1.chengpinInfo[i].content+'</p>'+
                            '<a href="#">商品详情</a>'+
                        '</div>'+
                    '</div>'+
                '</div>';
        }
        
    }
    $(str).appendTo('.Mug');
})