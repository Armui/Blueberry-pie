$.get('http://wwtliu.com/sxtstu/blueberrypai/getListeningInfo.php',function(res){
    // console.log(res);

    // iwen.wiki 主域名的，换成 wwtliu.com 这个主域名
    var newStr = res.replace(/iwen.wiki/g, 'wwtliu.com');
    //json字符串转json对象转
    res1 = JSON.parse(newStr);
    console.log(res1)

    var str ='';
    for(var i = 0;i < res1.writer.length;i++){
        str +='<a href="#">'+res1.writer[i]+'</a>'
    }
    $(str).appendTo('.sing_name');

    var str1 = '';
    for(var j = 0;j < res1.listening.length;j++){
        str1 +='<div class="card">'+
                    '<div class="card_header">'+
                        '<span class="touxiang"><img src="'+res1.listening[j].head_pic+'" alt=""></span>'+
                        '<span class="card_name">'+
                            '<p>'+res1.listening[j].title+'</p>'+
                            '<em>'+res1.listening[j].writer+'</em>'+
                        '</span>'+
                        '<i>'+res1.listening[j].label+'</i>'+
                    '</div>'+
                    '<img src="'+res1.listening[j].img+'" alt="">'+
                    '<div class="card_foot">'+
                        '<p>'+res1.listening[j].series+'</p>'+
                        '<span class="ts-cardfoot-icon">'+
                            '<b class="ts-cardicon1"></b><i>'+res1.listening[j].like+'</i>'+
                            '<b class="ts-cardicon2"></b><i>'+res1.listening[j].message+'</i>'+
                        '</span>'+
                    '</div>'+
                '</div>';
    }
    $(str1).appendTo('.hear_content');

    var cardimg = $('.card img').length;
    var count = 0;
    $('.card img').each(function(x){
        $(this).get(0).onload = function(){
            count++;
            if(count == cardimg){
                pbl();
            }
        }
    });

    //瀑布流函数
    function pbl(){
        //获取一个card元素的宽度
       var oneCard = $('.card').outerWidth(true);
       //获取当前视口的宽度
       var clientW = $(document).outerWidth(true);
       //一排可以放几列
       var num = Math.floor(clientW/oneCard);
       //让hear_content居中显示
       $('.hear_content').css('width',num*oneCard);


       //第一排正常摆放，要把第一排元素的高保存起来
       var heightArr =[];
       for(var a = 0;a < num;a++){
        heightArr.push($('.card').eq(a).outerHeight(true));
       }
       console.log(heightArr);

       //从第二排开始找第一排最矮的，在它下面摆新元素
       for(var k = num;k < $('.card').length;k++){
        // 找第一排中最矮的，其实是找heightArr数组中最小值
        var minvalue = Math.min.apply(null,heightArr);
        console.log(minvalue);
        // 这个最小值在heightArr中的下标,其实是找最矮的列
        var minindex = heightArr.indexOf(minvalue);

        // 在这一列下面摆一个div
        $(".card").eq(k).css({
            'position':'absolute',
            'top':minvalue,
            'left':minindex*oneCard
        })
        console.log(minindex,heightArr,$(".card").eq(minindex).offset().left);
        // 更新高度
		heightArr[minindex] = heightArr[minindex]+$('.card').eq(k).outerHeight(true);

       }

       // 动态更新外层box的高度
		var maxheight = Math.max.apply(null,heightArr)
		$(".hear_content").css('height',maxheight);
    }
})