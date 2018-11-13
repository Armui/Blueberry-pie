//获取首页接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php', function (res) {
    console.log(res);

    //将需要轮播的内容添加到页面
    for (var i = 0; i < res.banner.length; i++) {
        $('<div class="swiper-slide"><img src="' + res.banner[i].img
            + '" alt="" /><div class="wenzi"><h3>' + res.banner[i].title
            + '</h3><p>' + res.banner[i].content
            + '</p><div></div>').appendTo('.one');
    }

    //swiper轮播
    var mySwiper = new Swiper('.banner_one', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要分页器
        pagination: {
            el: '.banner_fy',
        },
    })
})
//获取乐章接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getIndexMovement.php', function (res) {
    // console.log(res);

    //json对象转json字符串
    var resStr = JSON.stringify(res)
    // iwen.wiki 主域名的，换成 wwtliu.com 这个主域名
    var newStr = resStr.replace(/iwen.wiki/g, 'wwtliu.com');
    //json字符串转json对象转
    res1 = JSON.parse(newStr);
    console.log(res1)


    //将需要轮播的内容添加到页面
    var str = '';
    for (var i = 0; i < res1.movement.length / 4; i++) {
        str += '<div class="swiper-slide movement_conten_neirong">' +
                    '<ul class="movement_conten_ul">';
        for (var j = i * 4; j <= (i + 1) * 4 - 1; j++) {
            str += '<li class="movement_conten_li">' +
                        '<div class="movement_conten_img">' +
                            '<a href="#"><img src="' + res1.movement[j].img + '" alt=""></a>' +
                        '</div>' +
                        '<div class="movement_conten_wenzi">' +
                            '<a href="#" class="movement_conten_wenzi_one">' + res1.movement[j].title + '</a>' +
                            '<a href="#" class="movement_conten_wenzi_two">' + res1.movement[j].writer + '</a>' +
                            '<p>' + res1.movement[j].content + '</p>' +
                        '</div>' +
                    '</li>';
        }
        str +=
                '</ul>' +
            '</div>';
    }
    $(str).appendTo('.two');

    //swiper轮播
     var mySwiper = new Swiper('.movement_two', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要分页器
        pagination: {
            el: '.movement_fy',
        } 
    })
})
//获取听说接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getIndexListening.php',function(res){
    // console.log(res);

    //json对象转json字符串
    var resStr = JSON.stringify(res)
    // iwen.wiki 主域名的，换成 wwtliu.com 这个主域名
    var newStr = resStr.replace(/iwen.wiki/g, 'wwtliu.com');
    //json字符串转json对象转
    res1 = JSON.parse(newStr);
    console.log(res1)

    //将需要轮播的内容添加到页面
    for(var i = 0;i<res1.listening.length;i++){
        $('<div class="swiper-slide">'+
            '<div class="hear_content_left">'+
                '<div>'+
                    '<div class="hear_content_img">'+
                        '<img src="'+res1.listening[i].img+'" alt="">'+
                    '</div>'+
                    '<div class="hear_content_wenzi">'+
                        '<a href="#">'+
                            '<h4>'+res1.listening[i].title+'</h4>'+
                        '</a>'+
                        '<a href="#">'+
                            '<h3>'+res1.listening[i].writer+'</h3>'+
                        '</a>'+
                        '<a href="#">'+
                            '<p>'+res1.listening[i].content+'</p>'+
                        '</a>'+
                    '</div>'+
                '</div>'+
                '<div>'+
                    '<div class="hear_content_img">'+
                        '<img src="'+res1.listening[i].img+'" alt="">'+
                    '</div>'+
                    '<div class="hear_content_wenzi">'+
                        '<a href="#">'+
                            '<h4>'+res1.listening[i].title+'</h4>'+
                        '</a>'+
                        '<a href="#">'+
                            '<h3>'+res1.listening[i].writer+'</h3>'+
                        '</a>'+
                        '<a href="#">'+
                            '<p>'+res1.listening[i].content+'</p>'+
                        '</a>'+
                    '</div>'+
                '</div>'+
                '<div>'+
                    '<div class="hear_content_wenzi">'+
                        '<a href="#">'+
                            '<h4>'+res1.listening[i].title+'</h4>'+
                        '</a>'+
                        '<a href="#">'+
                            '<h3>'+res1.listening[i].writer+'</h3>'+
                        '</a>'+
                        '<a href="#">'+
                            '<p>'+res1.listening[i].content+'</p>'+
                        '</a>'+
                    '</div>'+
                    '<div class="hear_content_img">'+
                        '<img src="'+res1.listening[i].img+'" alt="">'+
                    '</div>'+
                '</div>'+
                '<div>'+
                    '<div class="hear_content_wenzi">'+
                        '<a href="#">'+
                            '<h4>'+res1.listening[i].title+'</h4>'+
                        '</a>'+
                        '<a href="#">'+
                            '<h3>'+res1.listening[i].writer+'</h3>'+
                        '</a>'+
                        '<a href="#">'+
                            '<p>'+res1.listening[i].content+'</p>'+
                        '</a>'+
                    '</div>'+
                    '<div class="hear_content_img">'+
                        '<img src="'+res1.listening[i].img+'" alt="">'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="hear_content_right">'+
                '<div>'+
                    '<div class="hear_content_right_img">'+
                        '<img src="'+res1.listening[i].img+'" alt="">'+
                    '</div>'+
                    '<div class="hear_content_right_wenzi">'+
                        '<a href="#">'+
                            '<h4>'+res1.listening[i].title+'</h4>'+
                        '</a>'+
                        '<a href="#">'+
                            '<h3>'+res1.listening[i].writer+'</h3>'+
                        '</a>'+
                        '<a href="#">'+
                            '<p>'+res1.listening[i].content+'</p>'+
                        '</a>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>').appendTo('.three');
    }

    //swiper轮播
    var mySwiper = new Swiper('.hear_three', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
    })
})
//获取乐趣接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getIndexInteresting.php',function(res){
    // console.log(res);
    var resStr = JSON.stringify(res);
    var newStr = resStr.replace(/iwen.wiki/g,'wwtliu.com');
    res1 = JSON.parse(newStr);
    console.log(res1);

    //将需要轮播的内容添加到页面
    var str = '';
    for(var i = 0;i < res1.interesting.length/4;i++){
        str += '<div class="swiper-slide pleasure_yeshu">'+
                    '<ul>';
                    for(var j = i * 4; j <= (i + 1) * 4 - 1; j++){
                        str += '<li class="pleasure_li">'+
                                    '<div class="pleasure_pic">'+
                                        '<a href="#"><img src="'+res1.interesting[j].img+'" alt=""></a>'+
                                    '</div>'+
                                    '<div class="pleasure_wenzi">'+
                                        '<a href="#">'+res1.interesting[j].title+'</a>'+
                                        '<a href="#">'+res1.interesting[j].writer+'</a>'+
                                        '<div class="pleasure_time">'+res1.interesting[j].time+'</div>'+
                                        '<p>'+res1.interesting[j].content+'</p>'+
                                    '</div>'+
                                '</li>'
                    }
                    str += '</ul>'+
                '</div>';
    }
    $(str).appendTo('.font');


    //swiper轮播
    var mySwiper = new Swiper('.pleasure_content', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要分页器
        pagination: {
            el: '.pleasure_fy',
        }
    })
})
//获取聊聊接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getIndexChating.php',function(res){
    // console.log(res);
    var resStr = JSON.stringify(res);
    var newStr = resStr.replace(/iwen.wiki/g,'wwtliu.com');
    res1 = JSON.parse(newStr);
    console.log(res1);

    var str = '';
    for(var i = 0;i < res1.chating.length/6;i++){
        // console.log(i);
        str += '<div class="swiper-slide">'+
                    '<ul>'+
                        '<li class="Chat_li">'+
                            '<div class="Chat_pic">'+
                                '<p class="cage">生活1</p>'+
                            '</div>'+
                            '<div class="Chat_wenzi">'+
                                '<a href="#">'+
                                    '<h3>'+res1.chating[i].title+'</h3>'+
                                    '<p>'+res1.chating[i].content+'</p>'+
                                '</a>'+
                            '</div>'+
                        '</li>'+
                        '<li class="Chat_li">'+
                            '<div class="Chat_pic">'+
                                '<p class="cage">生活2</p>'+
                            '</div>'+
                            '<div class="Chat_wenzi">'+
                                '<a href="#">'+
                                    '<h3>'+res1.chating[i].title+'</h3>'+
                                    '<p>'+res1.chating[i].content+'</p>'+
                                '</a>'+
                            '</div>'+
                        '</li>'+
                        '<li class="Chat_li">'+
                            '<div class="Chat_pic">'+
                                '<p class="cage">生活3</p>'+
                            '</div>'+
                            '<div class="Chat_wenzi">'+
                                '<a href="#">'+
                                    '<h3>'+res1.chating[i].title+'</h3>'+
                                    '<p>'+res1.chating[i].content+'</p>'+
                                '</a>'+
                            '</div>'+
                        '</li>'+
                        '<li class="Chat_li">'+
                            '<div class="Chat_pic">'+
                                '<p class="cage">生活4</p>'+
                            '</div>'+
                            '<div class="Chat_wenzi">'+
                                '<a href="#">'+
                                    '<h3>'+res1.chating[i].title+'</h3>'+
                                    '<p>'+res1.chating[i].content+'</p>'+
                                '</a>'+
                            '</div>'+
                        '</li>'+
                        '<li class="Chat_li">'+
                            '<div class="Chat_pic">'+
                                '<p class="cage">生活5</p>'+
                            '</div>'+
                            '<div class="Chat_wenzi">'+
                                '<a href="#">'+
                                    '<h3>'+res1.chating[i].title+'</h3>'+
                                    '<p>'+res1.chating[i].content+'</p>'+
                                '</a>'+
                            '</div>'+
                        '</li>'+
                        '<li class="Chat_li">'+
                            '<div class="Chat_pic">'+
                                '<p class="cage">生活6</p>'+
                            '</div>'+
                            '<div class="Chat_wenzi">'+
                                '<a href="#">'+
                                    '<h3>'+res1.chating[i].title+'</h3>'+
                                    '<p>'+res1.chating[i].content+'</p>'+
                                '</a>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                '</div>'
         }
    $(str).appendTo('.five');

     //swiper轮播
     var mySwiper = new Swiper('.Chat_fanye', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要分页器
        pagination: {
            el: '.Chat_fy',
        }
    })
})
//获取游记接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getIndexTravelnote.php',function(res){
    // console.log(res);

    //json对象转json字符串
    var resStr = JSON.stringify(res)
    // iwen.wiki 主域名的，换成 wwtliu.com 这个主域名
    var newStr = resStr.replace(/iwen.wiki/g, 'wwtliu.com');
    //json字符串转json对象转
    res1 = JSON.parse(newStr);
    console.log(res1)
    

    var str = '';
    for(var i = 0;i < res1.travelnote.length/4;i++){
        str += '<div class="swiper-slide ">'+
                    '<ul>';
                    for(var j = i * 4; j <= (i + 1) * 4 - 1; j++){
                        str += '<li class="travels_li">'+
                                    '<a href="#">'+
                                        '<img src="'+res1.travelnote[j].img+'" alt="">'+
                                        '<p>'+res1.travelnote[j].title+'</p>'+
                                        '<p>'+res1.travelnote[j].writer+'</p>'+
                                    '</a>'+
                                    '<div class="travels_hide">'+
                                        '<p>'+res1.travelnote[j].content+'</p>'+
                                    '</div>'+
                                    '</li>'
                    }
                    str += '</ul>'+
                '</div>';
    }
    $(str).appendTo('.six');

     //swiper轮播
     var mySwiper = new Swiper('.travels_yeshu', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 如果需要分页器
        pagination: {
            el: '.travels_fy',
        }
    })
})
//获取其他接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getIndexOther.php',function(res){
    // console.log(res);

    //json对象转json字符串
    var resStr = JSON.stringify(res)
    // iwen.wiki 主域名的，换成 wwtliu.com 这个主域名
    var newStr = resStr.replace(/iwen.wiki/g, 'wwtliu.com');
    //json字符串转json对象转
    res1 = JSON.parse(newStr);
    console.log(res1)

    var str = '';
    for(var i = 0;i < res1.otherImgs.length/12; i++){
        // console.log(i);
        str += 
                    '<div class="swiper-slide">'+
                        '<ul>';
                        for(var j = 0 ; j < 12; j++){
                            // console.log(j);
                            str += '<li class="other_li"><img src="'+res1.otherImgs[j]+'"></li>'
                        }
                        str +='</ul>'+
                    '</div>'
                ;
    }
        $(str).appendTo('.seven');


     //swiper轮播
     var mySwiper = new Swiper('.other_seven', {
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
    })
})

