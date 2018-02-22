$(()=>{
    /******index.js*********************************/
    $(".dropdown").on("click","a",e=>{
        //e.preventDefault();
        var $tar = $(e.target);
      if($tar.next().css("display")=="none"){
        $tar.next().slideDown();
        $tar.children().first().removeClass("glyphicon-plus").addClass("glyphicon-minus");
      }else{
        $tar.next().slideUp();
        $tar.children().first().removeClass("glyphicon-minus").addClass("glyphicon-plus");
      }
        //$tar.next().slideToggle();
    })

    $(".dropdown button").click(e=>{
        e.preventDefault();
        var $tar = $(e.target);
        //$tar.parent().next().slideToggle();
        if($tar.parent().next().css("display")=="none"){
          $tar.parent().next().slideDown();
          $tar.removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }else{
          $tar.parent().next().slideUp();
          $tar.removeClass("glyphicon-minus").addClass("glyphicon-plus");
        }
    })

    $(".un-menu-btn button").click(function(){
        $(this).parent().parent().parent().toggleClass("visible-sidebar");
        if($(".un-hr-bar-l").hasClass("visible-sidebar")){
            $(".hidden-bar-closer").show();
        }else{
            $(".hidden-bar-closer").hide();
        }
    })

    $(".hidden-bar-closer").click(function () {
        $(this).parent().parent().removeClass("visible-sidebar");
        $(this).hide();
    })

    $(".hidden-bar-opener button i").click(function(){
        $(".un-hr-bar-l").toggleClass("visible-sidebar");
        if($(".un-hr-bar-l").hasClass("visible-sidebar")){
            $(".hidden-bar-closer").show();
        }else{
            $(".hidden-bar-closer").hide();
        }
    })

    /*******Top nav fixed******/
    var $navbar = $(".met-nav"),
        $floor = $('.un-onepage'),
        $oTop = $('.un-hr-bar-r .un-dot-nav li:first-child'),
        $oTopBig = $('.btn.met-scroll-top'),
        $oFoot = $('.un-hr-bar-r .un-dot-nav li:last-child'),
        $oNav = $('.un-dot-nav'),
        $oNavLi = $('.un-dot-nav li');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if(parseInt(scrollTop)>0) {
        $navbar.addClass("stricky-fixed slideInDown");
    }else{
        $navbar.removeClass("stricky-fixed slideInDown");
    }

    $(window).scroll(()=>{
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(parseInt(scrollTop)>0) {
            $navbar.addClass("stricky-fixed slideInDown");
        }else{
            $navbar.removeClass("stricky-fixed slideInDown");
        }

        /*****scorlltop>800*$oTopBig显示******/
        if (scrollTop>800){
          $oTopBig.show();
        }else{
          $oTopBig.hide();
        }

        /*****楼层滚动******/
        for(var f of $floor){
            var $f = $(f),
                offsetTop = $f.offset().top,
                i = $floor.index($f),
                $li = $oNav.find('li:eq('+(i+1)+')');
            if(offsetTop<scrollTop+innerHeight/2){
                $li.addClass('active').siblings().removeClass('active');
            }else{
                $li.removeClass('active');
            }
        }
        //offsetTop>=scrollTop&&offsetTop<(scrollTop+innerHeight)

        /*****滚动显示动画******/
        loadAnimation();

        /***数字自动增加***/
        var $econumLi = $('.met-index-econum [class*=blocks] li');
        var $counterEconumber = $('.counter-econumber');

        for(var f of $counterEconumber){
            var $f = $(f);
            if($econumLi.hasClass('invisible')){
                NumAutoPlusAnimation($f, {
                    time: 2000,
                    num: $f.data('to'),
                    regulator: 50
                })

            }
        }

    })
    /*****点击回到当前楼层*******/
    $oNavLi.has('[data-toggle=tooltip]').click(function () {
        var t = $floor.eq($(this).index()-1).offset().top;
        $('html,body').stop().animate({
            'scrollTop':t-50
        },1000);
        $(this).addClass('active').siblings().removeClass('active');
    })
    //回到顶部
    function goToTop() {
      $('html,body').animate({
        "scrollTop": 0
      }, 1000)
    }
    $oTop.click(function(){
        goToTop();
    })
    $oTopBig.click(function () {
        goToTop();
    })
    //到底部
    var scrollHeight = $(document).height();
    $oFoot.click(function(){
        $('html,body').animate({
            "scrollTop":scrollHeight
        },1000)
    })


    /*****封装楼层动画*****/
    function loadAnimation(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        /***封装动画函数****/
        function slideFun(jqObj,className,animationName) {
          for(var f of jqObj){
            var $f = $(f),
              offsetTop = $f.offset().top;
            if(offsetTop>=scrollTop&&offsetTop<(scrollTop+innerHeight*0.7)){
              $f.removeClass(className).addClass(animationName);
            }
          }
        }
        /******index********/
        /**animation-slide-top**/
        var $aniSlideTop = $('.met-index-body h3');
        slideFun($aniSlideTop,'invisible','animation-slide-top');

        var $aniSlideTop2 = $('.met-index-bottomcontact .get_touch .small-title');
        slideFun($aniSlideTop2,'invisible','animation-slide-top');

        /**animation-fade**/
        var $aniFade = $('.met-index-body p.desc');
        slideFun($aniFade,'invisible','animation-fade');

        /**animate**/
        var $animate = $('.met-grid li.shown');
        slideFun($animate,'shown','animate');

        /**animation-slide-bottom**/
        var $aniSlideBottom1 = $('.met-index-about .about_right .wpb_wrapper .dt-about-elem'),
            $aniSlideBottom2 = $('.met-index-econum [class*=blocks] li'),
            $aniSlideBottom3 = $('.met-index-bottomcontact ul .appear-no-repeat'),
            $aniSlideBottom4 = $('.met-index-bottomcontact .get_touch form');
        slideFun($aniSlideBottom1,'invisible','animation-slide-bottom');
        slideFun($aniSlideBottom2,'invisible','animation-slide-bottom');
        slideFun($aniSlideBottom3,'invisible','animation-slide-bottom');
        slideFun($aniSlideBottom4,'invisible','animation-slide-bottom');

        /*******about*************************/
        /**animation-slide-bottom**/
        var $aboutSlideBottom1 = $('.met-show .contactinfo [class*=blocks] li');
        var $aboutSlideBottom2 = $('.met-show .get_touch form');
        var $aboutSlideBottom3 = $('.met-show .map');
        slideFun($aboutSlideBottom1,'invisible','animation-slide-bottom');
        slideFun($aboutSlideBottom2,'invisible','animation-slide-bottom');
        slideFun($aboutSlideBottom3,'invisible','animation-slide-bottom');
    }
    loadAnimation();


    /***数字自动增加函数方法***/
    function NumAutoPlusAnimation(targetEle,options) {
        options = options || {};
        var time = options.time || targetEle.data('time'), //总时间--毫秒为单位
            finalNum = options.num || targetEle.data('value'), //要显示的真实数值
            regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度
            step = finalNum / (time / regulator),/*每30ms增加的数值--*/
            count = 0, //计数器
            initial = 0;
        var timer = setInterval(function () {
            count = count + step;
            if(count >= finalNum){
                clearInterval(timer);
                count = finalNum;
            }

            var t = Math.floor(count);
            if(t == initial) return;

            initial = t;

            targetEle.html(initial);
        },30)
    }

    /***数字自动增加***/
    var $econumLi = $('.met-index-econum [class*=blocks] li');
    var $counterEconumber = $('.counter-econumber');

    for(var f of $counterEconumber){
        var $f = $(f);
        if($econumLi.hasClass('animation-slide-bottom')){
            NumAutoPlusAnimation($f, {
                time: 2000,
                num: $f.data('to'),
                regulator: 50
            })

        }
    }

    /********按钮播放视频***********/
    var videoDiv = $('<div class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready">\n' +
        '        <div class="mfp-container mfp-s-ready mfp-iframe-holder">\n' +
        '            <div class="mfp-content">\n' +
        '                <div class="mfp-iframe-scaler">\n' +
        '                    <button title="关闭" type="button" class="mfp-close">×</button>\n' +
        '                    <video class="mfp-iframe" src="images/index/123456.mp4" controls></video>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>');

    $('.dt-play-video').click(function(){
        $(videoDiv).appendTo($('.video_hidden'));
    });

    /******按钮关闭视频播放*********/
    $('.video_hidden').on('click','.mfp-close',function(){
        $(videoDiv).remove();
    });

    /******登陆注册*******/
    /****登陆****/
    var loginDiv = $('<div class="login-layerbox-overlay"></div>\n' +
        '        <div class="wrapper">\n' +
        '            <div class="card">\n' +
        '                <div class="card__year">\n' +
        '                    <div class="login-container">\n' +
        '                        <button class="brand-close">×</button>\n' +
        '                        <div class="brand">\n' +
        '                            <img class="brand-img" src="images/1490844982.png" alt="DECA">\n' +
        '                            <h2 class="brand-text">会员登录</h2>\n' +
        '                        </div>\n' +
        '                        <form action="#" class="login-layer">\n' +
        '                            <div class="login-content">\n' +
        '                                <div class="form-group">\n' +
        '                                    <input type="text" placeholder="用户名" name="uname" id="uname">\n' +
        '                                </div>\n' +
        '                                <div class="form-group">\n' +
        '                                    <input type="password" placeholder="密码" name="upwd" id="upwd">\n' +
        '                                </div>\n' +
        '                                <button type="button" class="login-btn">登录</button>\n' +
        '                                <div class="form-other">\n' +
        '                                    <a href="javascript:;">立即注册</a> / <a href="javascript:;">忘记密码？</a>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>');

    $('#login').click(function(){
        $(loginDiv).appendTo($('.shoplayer'));
        $('body').css({'overflow':'hidden'});

        /**********3D-login****************/
        var _year = document.querySelector('.card__year');
        var _card = document.querySelector('.card');

        var generateTranslate = function generateTranslate(el, e, value) {
            el.style.transform = 'translate(' + e.clientX * value + 'px, ' + e.clientY * value + 'px)';
        };

        var cumulativeOffset = function cumulativeOffset(element) {
            var top = 0,
                left = 0;
            do {
                top += element.offsetTop || 0;
                left += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);

            return {
                top: top,
                left: left
            };
        };
        document.onmousemove = function (event) {
            //console.log(cumulativeOffset(_card));
            var e = event || window.event;
            var x = (e.clientX - cumulativeOffset(_card).left - 350 / 2) * -1 / 100;
            var y = (e.clientY - cumulativeOffset(_card).top - 350 / 2) * -1 / 100;

            var matrix = [[1, 0, 0, -x * 0.00005], [0, 1, 0, -y * 0.00005], [0, 0, 1, 1], [0, 0, 0, 1]];

            generateTranslate(_year, e, 0.01);

            _card.style.transform = 'matrix3d(' + matrix.toString() + ')';
        };

    })

    /******按钮关闭登陆*******/
    $('.shoplayer').on('click','.brand-close',function(){
        $(loginDiv).remove();
        $('body').css({'overflow':'visible'});
    })

    /****注册******/
    var registerDiv = $('<div class="login-layerbox-overlay"></div>\n' +
        '        <div class="wrapper">\n' +
        '            <div class="card">\n' +
        '                <div class="card__year">\n' +
        '                    <div class="login-container">\n' +
        '                        <button class="brand-close">×</button>\n' +
        '                        <div class="brand">\n' +
        '                            <img class="brand-img" src="images/1490844982.png" alt="DECA">\n' +
        '                            <h2 class="brand-text">会员注册</h2>\n' +
        '                        </div>\n' +
        '                        <form action="#" class="register-layer">\n' +
        '                            <div class="register-content">\n' +
        '                                <div class="form-group">\n' +
        '                                    <input type="text" placeholder="请输入用户名" name="uname1" id="uname1">\n' +
        '                                </div>\n' +
        '                                <div class="form-group">\n' +
        '                                    <input type="password" placeholder="请输入密码" name="upwd1" id="upwd1">\n' +
        '                                </div>\n' +
        '                                <div class="form-group">\n' +
        '                                    <input type="password" placeholder="请再次输入密码" name="upwd2" id="upwd2">\n' +
        '                                </div>\n' +
        '                                <button type="button" class="login-btn">注册</button>\n' +
        '                                <div class="form-other">\n' +
        '                                    <a href="javascript:;">已有账号？马上登陆</a>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </form>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>')

    $('#register').click(function(){
        $(registerDiv).appendTo($('.register-shoplayer'));
        $('body').css({'overflow':'hidden'});

        /**********3D-login****************/
        var _year = document.querySelector('.card__year');
        var _card = document.querySelector('.card');

        var generateTranslate = function generateTranslate(el, e, value) {
            el.style.transform = 'translate(' + e.clientX * value + 'px, ' + e.clientY * value + 'px)';
        };

        var cumulativeOffset = function cumulativeOffset(element) {
            var top = 0,
                left = 0;
            do {
                top += element.offsetTop || 0;
                left += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);

            return {
                top: top,
                left: left
            };
        };
        document.onmousemove = function (event) {
            //console.log(cumulativeOffset(_card));
            var e = event || window.event;
            var x = (e.clientX - cumulativeOffset(_card).left - 350 / 2) * -1 / 100;
            var y = (e.clientY - cumulativeOffset(_card).top - 350 / 2) * -1 / 100;

            var matrix = [[1, 0, 0, -x * 0.00005], [0, 1, 0, -y * 0.00005], [0, 0, 1, 1], [0, 0, 0, 1]];

            generateTranslate(_year, e, 0.01);

            _card.style.transform = 'matrix3d(' + matrix.toString() + ')';
        };

    })

    /******按钮关闭登陆*******/
    $('.register-shoplayer').on('click','.brand-close',function(){
        $(registerDiv).remove();
        $('body').css({'overflow':'visible'});
    })
    /*******about.js*******************/
})