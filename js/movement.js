//获取音频标签
var myaudio = document.getElementById('myaudio');

//获取歌曲信息接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getSongInfo.php',{song:'mo'},function(res){
    // console.log(res);

    //json对象转json字符串
    var resStr = JSON.stringify(res)
    // iwen.wiki 主域名的，换成 wwtliu.com 这个主域名
    var newStr = resStr.replace(/iwen.wiki/g, 'wwtliu.com');
    //json字符串转json对象转
    res1 = JSON.parse(newStr);
    console.log(res1)

    var url = res1.songInfo.song_source;
    $(myaudio).attr('src',url);
    // 使用音频api
		myaudio.oncanplay = function(){
			// console.log('歌曲总时间:'+myaudio.duration);

			$('.zongtime').html(ftime(myaudio.duration))

			// 点击播放和暂停
			$(".songInfo_bottom_left").click(function(){
				// 判断当前音频/视频的播放状态
				if(myaudio.paused){
					// console.log('当前是暂停');
					myaudio.play();
					$(".songInfo_bottom_left img").attr('src','../images/indexImg/pause.png')
				}else{
					// console.log('当前是播放');
					myaudio.pause();
					$(".songInfo_bottom_left img").attr('src','../images/indexImg/play-btn_03.png')
				}
			})
        }
        // 获取当前音频/视频播放时间
        myaudio.ontimeupdate = function(){
            // console.log(myaudio.currentTime)
            $(".bftime").html(ftime(myaudio.currentTime))
            // 进度条
            // 计算当前播放时间和总时长的比值
            var bizhi = myaudio.currentTime / myaudio.duration;
            // console.log(bizhi)
            $(".up_progress").css('width',bizhi*100+'%');
        }


        function ftime(time){
            var muintes = Math.floor(time/60);
            var second = parseInt(time%60);
            muintes = muintes<10 ?'0'+muintes : muintes;
            second = second<10 ?'0'+second : second;
            return muintes+':'+second;
        }

    $('<span class="songInfo_top_left">'+
            '<h3>'+res1.songInfo.song_title+'</h3>'+
            '<p><img src="../images/indexImg/musicIcon_03.png" alt=""></p>'+
        '</span>'+
        '<span class="songInfo_top_right">'+
            '<p>'+res1.songInfo.play_num+'</p>'+
            '<p>播放</p>'+
        '</span>').appendTo('.songInfo_top');


    $('<div class="songInfo_content_left"><img src="http://wwtliu.com/sxtstu/blueberrypai/'+res1.songInfo.song_pic+'" alt=""></div>'+
        '<div class="songInfo_content_right">'+
            '<p>介绍：&nbsp;&nbsp;&nbsp;'+res1.songInfo.song_intro_cont+'</p>'+
        '</div>').appendTo('.songInfo_content');


})

//获取文章接口
$.get('http://wwtliu.com/sxtstu/blueberrypai/getInterestingInfo.php',function(res){
    console.log(res);
     
    //添加文章主体内容
    $('<h2>'+res.interestingInfo.interest_title+'</h2>'+
        '<div class="article_info">'+
            '<span class="browse"><img src="../images/indexImg/eye_03.png" alt="">'+
                '<p>'+res.interestingInfo.eye_num+'</p>'+
            '</span>'+
            '<span class="weixin"><img src="../images/indexImg/56.png" alt="">'+
                '<p>'+res.interestingInfo.wei_chat_num+'</p>'+
            '</span>'+
            '<span class="CreateTime">创建时间 ：<p>'+res.interestingInfo.interest_create_time+'</p></span>'+
        '</div>'+
        '<hr>'+
        '<div class="articleAll">'+
            '<p>'+res.interestingInfo.interest_cont+'</p>'+
        '</div>'+
        '<img src="../images/image/singer/movement1.png" alt="">'+
        '<img src="../images/image/singer/movement2.png" alt="">'+
        '<img src="../images/image/singer/movement3.png" alt="">'+
        '<div class="tag">'+
            '<img src="../images/indexImg/labelIcon_03.png" alt="">'+
        '</div>').appendTo('.article');
         
        //添加tag内容
        var str = '';
        for(var i = 0;i <res.labels.length;i++){
            // console.log(i);
            str += '<div class="lvyou">'+res.labels[i]+'</div>';
        }
        $(str).appendTo('.tag');

        //添加相关内容
        var str1 = '';
        for(var a = 0; a < res.related_read.length; a++){
            str1 += '<li>'+
                        '<img src="http://wwtliu.com/sxtstu/blueberrypai/'+res.related_read[a].related_read_pic+'" alt="">'+
                        '<P>'+res.related_read[a].related_read_summary+'</P>'+
                    '</li>';
        }
        $(str1).appendTo('.correlation_ul');

        //赞的人数
        $('<span>'+res.zan_num+'</span>').appendTo('.way_zan');

        //赞过的人
        var str2 = '';
        for(var b = 0;b < res.who_zan.length;b++){
            str2 +='<li>'+
                        '<img src="http://wwtliu.com/sxtstu/blueberrypai/'+res.who_zan[b].zan_icon+'" alt="">'+
                        '<p>'+res.who_zan[b].zan_name+'</p>'+
                    '</li>';
        }
        $(str2).appendTo('.over_zan');

        //赞 --> logo图片
        $('<img src="http://wwtliu.com/sxtstu/blueberrypai/'+res.ad_pic+'" alt="">').appendTo('.zan_pic');

        var str3 = '';
        for(var c = 0;c < res.comment.length;c++){

        //小夏同学评论内容
        str3 += '<div class="plq_left">'+
                    '<img src="http://wwtliu.com/sxtstu/blueberrypai/'+res.comment[c].user_icon+'" alt="">'+
                '</div>'+
                '<div class="plq_right">'+
                    '<p class="plq_right_top">'+
                        '<span>'+res.comment[c].user_name+'</span>'+
                        '<span>'+res.comment[c].comment_time+'</span>'+
                    '</p>'+
                    '<p class="plq_right_content">'+res.comment[c].comment_cont+'</p>'+
                    '<p class="plq_right_bottom">'+
                        '<span><img src="../images/indexImg/zan_05.png" alt="">'+res.comment[c].comment_zan+'</span>'+
                        '<span><img src="../images/indexImg/pinglun_05.png" alt="">'+res.comment[c].comment_look+'</span>'+
                    '</p>'+
                '</div>';
        }
        $(str3).appendTo('.plq');

        //帖子人数
        $('<b>'+res.tiezi_num+'</b>').appendTo('.tz');
        //评论人数
        $('<b>'+res.comment_num+'</b>').appendTo('.pinglun');
        //关注人数
        $('<b>'+res.concern_num+'</b>').appendTo('.gz');

        //作者的其他文章
        var str4 = '';
        for(var d = 0;d < res.other_interest.length;d++){
            str4 += '<li>'+res.other_interest[d]+'</li>';
        }
        $(str4).appendTo('.other_articles_ul');

        //热门推荐
        var str5 = '';
        for(var e = 0;e < res.hot_recomment.length;e++){
            str5 += '<li><span></span>'+res.hot_recomment[e]+'</li>';
        }
        $(str5).appendTo('.hot_recommend_ul');
})