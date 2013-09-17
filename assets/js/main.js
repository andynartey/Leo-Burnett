/*

 * main.js
 * @version 0.0
 * @author Leo Burnett - http://www.leoburnett.com/
 * @requires jQuery Core 1.4.3 - http://www.jquery.com/
 
if (typeof M7 !== 'object') {
	M7 = {};
}
 */
M7.PE = (function () {
    // -- Private Variables --------------------------------------------------------
    var activeLinkClass = 'ActiveLink',
        activeContentClass = 'ConsoleShow',
        activeCaseClass = 'CaseShow',
        socialAttributes = 'width=940, height=600, resizable=yes, scrollbars=yes, menubar=yes',
		jsReady = false,
		wrapperX = 0,
        navWrapperX = 0,
        navWrapperY = 0,
        navLoadOpacity = 0.01,
        navInOpacity = 1,
        navOutOpacity = 0.5,
        navMouseTime = 1000;

    var videostring = '';

    // -- Private Methods --------------------------------------------------------

    // CONSOLE
    consoleEvent = function consoleEvent(targetSelectClass, elementSelector, action, navTarget) {
        elementSelector.bind('click.consoleEvent mouseenter.consoleEvent mouseleave.consoleEvent ', function (e) {
            var eventType = e.type,
				    currentElement = $(this);
            if (eventType === 'click') {
                if (action === 'toggle') {
                    consoleToggle(targetSelectClass, elementSelector, currentElement, true, navTarget);
                    return false;
                } else if (action === 'closeConsole') {
                    consoleAllClose(targetSelectClass, true);
                    return false;
                }
            } else if (eventType === 'mouseenter') {
                $(this).animate({ opacity: navInOpacity });
            } else if (eventType === 'mouseleave') {
                if (!currentElement.hasClass(targetSelectClass + activeLinkClass)) {
                    $(this).animate({ opacity: navOutOpacity });
                }
            }
        });
    };
    consoleToggle = function consoleToggle(targetSelectClass, elementSelector, currentElement, closeAll, navTarget) {
        if (currentElement.hasClass(targetSelectClass + activeLinkClass)) {
            //close element - already selected
            elementClose(targetSelectClass, currentElement, navTarget);
        } else {
            //close all element
            if (closeAll === true) {
                consoleAllClose(targetSelectClass, false);
            }
            //open element
            consoleOpen(targetSelectClass, currentElement, navTarget);
        }
    };
    consoleOpen = function consoleOpen(targetSelectClass, currentElement, navTarget) {
        currentElement.addClass(targetSelectClass + activeLinkClass);
        $(currentElement.attr('href')).delay(200).animate({ height: 'toggle', opacity: 'toggle' }, 600, function () { /*callBack*/ }).addClass(targetSelectClass + activeContentClass);
        //Replace the above line with the below - after review.
        //$(currentElement.attr('href')).delay(200).animate({height: 'toggle', opacity: 'toggle'}, 600, function() {/*callBack*/M7.PE.googleMap()}).addClass(targetSelectClass + activeContentClass);
        //set the background pointer position
        /*
        if(M7.PE.supportsVideo()){
        navTarget.animate({
        'background-position' : navWrapperX + "px " + navWrapperY +"px",
        duration: 'fast',
        easing: 'easeOutElastic'
        }).addClass('M7_navLocked');
                
        }else{
        navTarget.css({
        'background-position' : navWrapperX + "px " + navWrapperY +"px"
        }).addClass('M7_navLocked');
        }*/
    };
    elementClose = function elementClose(targetSelectClass, currentElement, navTarget) {
        navTarget.removeClass('M7_navLocked');
        $(currentElement.attr('href')).fadeOut(500).removeClass(targetSelectClass + activeContentClass);
        currentElement.removeClass(targetSelectClass + activeLinkClass);
    };
    consoleAllClose = function consoleAllClose(targetSelectClass, remote) {
        if (remote) { $('.M7_navLocked').animate({ opacity: navLoadOpacity }); }
        $('.M7_navLocked').removeClass('M7_navLocked');
        $('.' + targetSelectClass + activeContentClass).animate({ height: 'toggle' }, 250, function () { /*callBack*/ }).removeClass(targetSelectClass + activeContentClass);
        $('.' + targetSelectClass + activeLinkClass).animate({ opacity: navOutOpacity }).removeClass(targetSelectClass + activeLinkClass);
    };
    consoleNavAnim = function consoleNavAnim(targetSelectClass, elementSelector, navTarget) {
        var navLink = navTarget.find('li a');
        elementSelector.bind('mouseenter.consoleNavAnim mouseleave.consoleNavAnim mousemove.consoleNavAnim', function (e) {
            var eventType = e.type,
				    currentElement = $(this);
            if (eventType === 'mouseenter') {
                navTarget.stop(true, true);
                //clearInterval(elementSelector.mouseExitTimeout);
                navTarget.animate({
                    opacity: navInOpacity
                });

            } else if (eventType === 'mouseleave') {
                //elementSelector.mouseExitTimeout = setTimeout(function(){
                if (!navTarget.hasClass('M7_navLocked')) {
                    navTarget.animate({
                        opacity: navLoadOpacity
                    });
                } else {
                    navTarget.animate({
                        opacity: navOutOpacity
                    });
                }
                //}.context(this), navMouseTime);
            } /*else if (eventType === 'mousemove'){
                    navWrapperX = (e.pageX - wrapperX) - 94; //(e.pageX - this.offsetLeft);
                    navWrapperY = -120; //(e.pageY - this.offsetTop);
				    if(!navTarget.hasClass('M7_navLocked')){
                         navTarget.css({
                            'backgroundPosition' : navWrapperX + "px " + navWrapperY +"px"
	                    });
	                }
				}*/
        });
    };
    consoleNavElements = function consoleNavElements(navTarget, navObject) {
        navTarget.animate({
            opacity: navLoadOpacity
        });
    };
    consoleNavPointer = function consoleNavPointer(elementSelector) {
        elementSelector.bind('mousemove.consoleNavPointer ', function (e) {
            wrapperX = this.offsetLeft;
        });
    };


    // SHOWREEL - applies the overlay for all HTML5 videos
    initShowReelEvents = function initShowReelEvents(element) {
        var isStack = element.parent().hasClass('stack'),
                videoContainer = element.find('.showReelVideo'),
                videoShow = element.find('.PE_mouseInShow'),
                videoHide = element.find('.PE_mouseInHide'),
                embed = element.find('.PE_embed'),
                embedClose = element.find('.PE_close'),
                videoId = element.find('video').attr('id'),
                newWindowButton = element.find('.PE_newWindow');

        // setup the view
        videoContainer.css({
            visibility: 'hidden'
        });
        videoShow.addClass('M7_pannel');
        videoHide.hide().addClass('M7_pannel');
        //video overlay event
        videoMouseIn(videoShow, videoHide, isStack, videoId);
        videoMouseOut(videoShow, videoHide, isStack, videoId);
        //video play event
        playVideoClick(element);
        //casestudy view event
        viewCaseClick(element);
        //embed events
        embedFacilityClick(embed);
        embedFacilityClose(embedClose);
        //bind new window events
        newWindowButton.each(function () {
            M7.PE.newWindow($(this), 'social', '', true);
        });

    };
    videoMouseIn = function videoMouseIn(videoShow, videoHide, isStack, videoId) {


        //here bind a different event speed if it is iOS - hide elements


        videoShow.bind('mouseenter.videoShow', function () {
            if (isStack) {

                if (VideoJS.isIOS()) {
                    videoHide.find('div').show();
                    videoHide.show();

                    videoHide.find('h2').show();


                }
                else {
                    clearInterval($('#' + videoId).mouseEnterTimeout);
                    videoHide.find('h2').fadeIn('slow');
                    //videoShow.hide();
                    videoHide.fadeIn();


                    $('#' + videoId).mouseEnterTimeout = setTimeout(function () {
                        videoHide.find('div').fadeIn('slow', function () { /* callback */ });
                    } .context($('#' + videoId)), 750);
                }
            }
            else {

                if (VideoJS.isIOS()) {

                    videoHide.show();
                    videoShow.fadeOut(0);
                }
                else {

                    videoHide.fadeIn(700);
                    videoShow.fadeOut(200);
                }
            }
        });
    };
    videoMouseOut = function videoMouseOut(videoShow, videoHide, isStack, videoId) {

        //here bind a different event speed if it is iOS  - hide elements



        videoHide.bind('mouseleave.videoHide', function () {
            if (isStack) {
                if (!videoHide.children('div').hasClass('M7_locked')) {
                    clearInterval($('#' + videoId).mouseMoveTimeout);
                    videoHide.find('h2').stop(true, true).fadeOut('slow');
                    videoHide.find('div').stop(true, true).fadeOut('slow', function () {
                        videoHide.stop(true, true).fadeOut();
                    });
                }
            } else {
                videoHide.delay(200).fadeOut(800);
                videoShow.delay(800).fadeIn(800);
            }
        });
    };
    playVideoClick = function playVideoClick(element) {
        var videoContainer = $(element).find('.showReelVideo'),
                videoOptions = $(element).find('.PE_showReelOptions'),
                videoPlay = $(element).find('.PE_playVideo');




        // alert(' the id');

        //for iOs devices load the video element
        if (VideoJS.isIOS()) {

            //alert('is');

            var videoInject = UrlCleaner(videoPlay.attr('href'));

            // alert(videoInject);

            var loaderItem = $(videoInject).find('.PE_loader');

            if (!$(videoInject).hasClass('M7_loaded')) {
                // alert('loading');

                var contentUrl = UrlCleaner(loaderItem.attr('href'));

                // alert(contentUrl);


                $(videoPlay).addClass('M7_loading');

                // alert('after');

                $(videoInject).load(contentUrl, function () {

                    var videoHtml = $(this);

                    //check HTML5 video support
                    if (M7.PE.supportsVideo()) {

                        //alert('binding');

                        //bind the video
                        videoId = bindVideo(videoHtml);

                        //bind the social links
                        var newWindowButton = $('#' + videoId).parent().find('.PE_newWindow');
                        newWindowButton.each(function (i) {
                            M7.PE.newWindow($(this), 'social', '', true);
                        });
                        //play the video
                        //xmlVideoPlay(videoId);

                        $(videoInject).addClass('M7_loaded');
                        $(videoPlay).removeClass('M7_loading');
                        //
                        //  alert('ended');
                        /*

                        videoPlay.bind('click.videoPlay', function (e) {
                        //xmlVideoPlay(videoId);
                        alert('played');

                        });*/

                    }

                });
            }
            else {
                // alert('already loaded');
            }

            // return false;

        }


        //bind the video play click
        videoPlay.bind('click.videoPlay', function (e) {
            var button = $(this),
                    videoInject = UrlCleaner(button.attr('href')),

            // 

                    loaderItem = $(videoInject).find('.PE_loader'),
                    videoId = '';



            //load video html
            // the video is not loaded
            /**/
            if (!$(videoInject).hasClass('M7_loaded')) {
                var contentUrl = UrlCleaner(loaderItem.attr('href'));

                //alert(contentUrl + 'kl');

                button.addClass('M7_loading');
                $(videoInject).load(contentUrl, function () {
                    var videoHtml = $(this);
                    //check HTML5 video support
                    if (M7.PE.supportsVideo()) {
                        //bind the video
                        videoId = bindVideo(videoHtml);
                        //bind the social links
                        var newWindowButton = $('#' + videoId).parent().find('.PE_newWindow');
                        newWindowButton.each(function (i) {
                            M7.PE.newWindow($(this), 'social', '', true);
                        });
                        //play the video
                        xmlVideoPlay(videoId);
                    } else {
                        //flash backup - pass to actionscript
                        videoId = $(videoInject).find('object').attr('id');

                        var datastring = $(videoInject).find('object').attr('data');

                        //alert(datastring);
                        // var now = new Date();


                        // var outStr =  now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
                        //alert(outStr);

                        var randomnumber = Math.floor(Math.random() * 100000000);

                        $(videoInject).find('object').attr('data', datastring + randomnumber);

                        //alert($(videoInject).find('object').attr('data'));

                        $(videoInject).find('object').find('param[name=movie]').attr('value', datastring + randomnumber);

                       // 'param[name=movie]'




                        //alert(videoId);
                        // TODO FIX ME - requires 0.5 second delay????
                        flashLoadTimeout = setTimeout(function () {
                            sendToFlash(videoId);
                        } .context(this), 500);
                    }
                    //add a loded class
                    $(videoInject).addClass('M7_loaded');
                    button.removeClass('M7_loading');
                });

            } else { //video is loaded
                //play the video
                if (M7.PE.supportsVideo()) {
                    videoId = $(videoInject).find('video').attr('id');
                    // alert('vid' + videoId);
                    xmlVideoPlay(videoId);
                } else {



                    videoId = $(videoInject).find('object').attr('id');

                    /* var datastring = $(videoInject).find('object').attr('data');*/




                    /* alert(datastring);
                    var outStr = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

                    $(videoInject).find('object').attr('data') = datastring + outStr;*/

                    sendToFlash(videoId);
                }
            }
            //show the video
            xmlVideoShow(videoContainer, videoOptions);
            return false;
        });
    };

    function loadIOsVideos(element) {

        var videoContainer = $(element).find('.showReelVideo'),
        videoOptions = $(element).find('.PE_showReelOptions'),
        videoPlay = $(element).find('.PE_playVideo');

        // alert($(videoContainer).attr('id'));

        //alert($(element).attr('id'));
        var button = videoPlay; // element; //$(this);


        var videoInject = UrlCleaner(button.attr('href'));
        var loaderItem = $(videoInject).find('.PE_loader');
        var videoId = '';
        // alert('stop');


        // alert(videoContainer.attr('id'));

        //load video html
        // the video is not loaded

        if (!$(videoInject).hasClass('M7_loaded')) {


            var contentUrl = UrlCleaner(loaderItem.attr('href'));
            button.addClass('M7_loading');
            $(videoInject).load(contentUrl, function () {
                /*  var videoHtml = $(this);
                //check HTML5 video support
                if (M7.PE.supportsVideo()) {
                //bind the video
                videoId = bindVideo(videoHtml);
                //bind the social links
                var newWindowButton = $('#' + videoId).parent().find('.PE_newWindow');
                newWindowButton.each(function (i) {
                M7.PE.newWindow($(this), 'social', '', true);
                });
                //play the video
                // xmlVideoPlay(videoId);
                } else {
                //flash backup - pass to actionscript
                videoId = $(videoInject).find('object').attr('id');
                //alert(videoId);
                // TODO FIX ME - requires 0.5 second delay????
                flashLoadTimeout = setTimeout(function () {
                sendToFlash(videoId);
                } .context(this), 500);
                }*/
                //add a loded class
                $(videoInject).addClass('M7_loaded');
                button.removeClass('M7_loading');
            });

        } else { //video is loaded
            //play the video
            if (M7.PE.supportsVideo()) {
                videoId = $(videoInject).find('video').attr('id');
                // alert('vid' + videoId);
                //  xmlVideoPlay(videoId);
            } else {
                videoId = $(videoInject).find('object').attr('id');
                sendToFlash(videoId);
            }
        }
        //show the video
        //  xmlVideoShow(videoContainer, videoOptions);


        videoPlay.bind('click', function (event) {

            var videoHtml = $(this);
            //   alert($(videoInject).attr('id') + 'k');
            videoId = $(videoInject).find('video').attr('id');
            // alert(videoId + 'ol');
            // alert($(gh).attr('id') + 'lsdf')

            /*var button = $(this),
            videoInject = UrlCleaner(button.attr('href')),
            loaderItem = $(videoInject).find('.PE_loader'),
            videoId = '';*/

            //videoId = $(videoInject).find('video').attr('id');
            xmlVideoShow(videoContainer, videoOptions);

            xmlVideoPlay(videoId);


        });


        // return false;

    }



    bindVideo = function bindVideo(videoHtml) {
        var embedClose = videoHtml.find('.PE_close'),
                videoId = videoHtml.find('video').attr('id');
        //build the video.js config based on video.xml data
        var videoConfig = '';
        //videostring = ''

        /*$.ajax({
        type: 'GET',
        url: '/assets/xml/video.xml',
        dataType: "xml",
        error: function () { alert('video XML load has failed'); },
        success: function (xml) {
        /alert($(xml).find('video[id=' + videoId + ']').children().each(function (i));
        $(xml).find('video[id=' + videoId + ']').children().each(

        function (i) {
        videoConfig += $(this).attr('title') + ': "' + $(this).text() + '",';
        //alert($(this).attr('title') + ': "' + $(this).text() + '",');
        }
        );

        }


        });*/


        VideoJS.setup(videoId, videoConfig);

        //bind the close button
        embedFacilityClose(embedClose);
        return videoId;
    };








    xmlVideoShow = function xmlVideoShow(videoContainer, videoOptions) {
        videoContainer.css({
            visibility: 'visible'
        });
        videoOptions.fadeOut(500);
    };
    xmlVideoPlay = function xmlVideoPlay(videoId) {
        //pause all videos
        videoPauseAll();
        //alert(videoId);
        //play the chosen video
        document.getElementById(videoId).player.play();
    };
    videoPauseAll = function videoPauseAll() {
        if (M7.PE.supportsVideo()) {
            var video = null;
            $('video').each(function () {
                video = $(this).attr('id');
                document.getElementById(video).player.pause();
            });
        } else {
            $('object').each(function () {
                video = $(this).attr('id');
                //document.getElementById(video).sendToActionScript_pause();
                sendToActionScript_pause(thisMovie(video));
            });
        }
    };
    sendToFlash = function sendToFlash(video) {
        videoPauseAll();
        //window.getElementById(video).sendToActionScript();
        sendToActionScript(thisMovie(video));
    };
    embedFacilityClick = function embedFacilityClick(embed) {
        embed.bind('click.embed', function () {

            var target = $(this).attr('href');
            var substr = target.split('/');
            $(substr[substr.length - 1]).fadeIn('fast');

            return false;
        });
    };
    embedFacilityClose = function embedFacilityClose(embedClose) {
        embedClose.bind('click.embedClose', function () {


            var target = $(this).attr('href');
            var substr = target.split('/');


            $(substr[substr.length - 1]).fadeOut(500);
            //show the controls
            $('.M7_extendedControls').removeClass('M7_hiddenControlls');
            return false;
        });
    };

    // STACK //
    viewCaseClick = function viewCaseClick(e) {
        var caseToggleButton = e.find('a.PE_viewCase');
        caseToggleButton.parent().show();

        caseToggleButton.bind('click.caseToggleButton', function () {
            var loadUrl = UrlCleaner(caseToggleButton.attr('href')),
			        loaderItem = $(loadUrl).find('.PE_loader'),
                    clicked = $(this);

            //pause all videos
            videoPauseAll();

            //close other stacks
            /*  var closes = $('.M7_active');
            var activelink = $(closes).find('.PE_viewCase')

            alert(activelink.length);
            //activeLink.click();

            for (var i = 0; i < activelink.length; i++) {

            //activelink[i].click();

            }*/




            //alert(loaderItem.attr('href'));
            //alert('location.href = ' + location.href);

            if (!clicked.hasClass('M7_loaded')) {
                clicked.addClass('M7_loading');
                contentLoader(loadUrl, loaderItem, clicked);
                var displayOffset = $('.disp_ltd').length === 0 ? $('.PE_ConsoleEvents').height() : 0,
                        destination = $(clicked).offset().top;

                var loaderTimeout = setTimeout(function () {

                    //fix for it for different browsers
                    var elementToScroll = 'html';

                    if ($.browser.webkit) { elementToScroll = 'body'; }



                    $(elementToScroll).animate({ "scrollTop": (destination - displayOffset) }, 500, function () {
                        clicked.removeClass('M7_loading').addClass('M7_loaded');
                    });


                    /*$('html').animate({ "scrollTop": (destination - displayOffset) }, 500, function () {
                    clicked.removeClass('M7_loading').addClass('M7_loaded');
                    });*/
                } .context(this), 500);

            } else {
                toggleStack(clicked);
            }
            return false;
        });
    };
    //loads content of the clicked stack
    contentLoader = function contentLoader(element, content, clicked) {
        var contentUrl = UrlCleaner(content.attr('href'));




        $(element).load(contentUrl, function () {
            $(element).addClass('.M7_loaded');
            bindCloseButton($(element).find('a.PE_closeCase'));
            //bind videos
            var videosLoaded = $(element).find('.PE_showReel');
            videosLoaded.each(function () {
                initShowReelEvents($(this));
            });
            //bind mouse fade
            var mouseToggle = $(element).find('.PE_mouseFade');
            mouseToggle.each(function () {
                mouseToggleOpacity($(this));
            });
            toggleStack(clicked);
        });
    };
    // toggles the stack
    toggleStack = function toggleStack(e) {
        // alert('toggle');





        setText(e);
        e.parent().toggleClass('M7_active');
        e.parent().parent().parent().toggleClass('M7_locked').trigger('mouseleave');
        $(UrlCleaner(e.attr('href'))).animate({ height: 'toggle' }, 1000, function () { /*callBack*/ }).toggleClass(activeCaseClass);
    };
    // sets the link text
    setText = function setText(e) {
        if (!e.parent().hasClass('M7_active')) {
            e.find('span').text('Close case study');
        } else {
            e.find('span').text('Open case study');
        }
    };
    // bind the stack close button
    bindCloseButton = function bindCloseButton(closeCaseButton) {
        closeCaseButton.bind('click.closeCaseButton', function () {



            var activeLink = $(this).parent().parent().parent().find('.PE_viewCase'),
                    elementClicked = UrlCleaner(activeLink.attr("href")),
                    destination = $(elementClicked).offset().top,
                    displayOffset = $('.disp_ltd').length === 0 ? 677 : 535;

            var elementToScroll = 'html';

            if ($.browser.webkit) { elementToScroll = 'body'; }




            $(elementToScroll).animate({ "scrollTop": destination - displayOffset }, 500, function () {
                videoPauseAll();
                activeLink.click();
            });
            return false;
        });
    };
    // Mouse in actions
    mouseToggleOpacity = function mouseToggleOpacity(element) {
        element.bind('mouseenter.element mouseleave.element', function (e) {
            var eventType = e.type,
                    currentElement = $(this);
            if (eventType === 'mouseenter') {
                currentElement.animate({ opacity: '0.5' }, 200);
            } else {
                currentElement.animate({ opacity: '1.0' }, 200);
            }
        });
    };
    // URL Builder
    UrlBuilder = function UrlBuilder(targetHREF) {
        return 'http://' + location.host + targetHREF;
    };
    UrlCleaner = function UrlCleaner(targetHREF) {
        return targetHREF.replace(location.href, '');
    };
    // new window
    popWindow = function popWindow(target, title, attributes) {
        target.bind('click.target', function () {
            var url = target.attr('href');
            window.open(url, title, attributes);
            return false;
        });
    };

    // -- Public Methods --------------------------------------------------------
    return {
        // initalise components //
        // console
        initConsole: function initConsole(targetSelectClass) {
            $('.' + targetSelectClass).find('.popOut').prepend('<a href="#" class="M7_close">close</a>');
            var selectObject = $('.' + targetSelectClass + ' li a'),
			    closeObject = $('.' + targetSelectClass + ' a.M7_close'),
			    navObject = $('.' + targetSelectClass + ' #navigation .navWrapper li.contact'),
			    navTarget = $('.' + targetSelectClass + ' #navigation .navHighlight'),
			    pointerObject = $('body > .wrapper');

            consoleEvent(targetSelectClass, selectObject, 'toggle', navTarget);
            consoleEvent(targetSelectClass, closeObject, 'closeConsole', navTarget);
            consoleNavAnim(targetSelectClass, navObject, navTarget);
            consoleNavPointer(pointerObject);
            consoleNavElements(navTarget, navObject);
        },
        // show reel
        initShowReel: function initShowReel(elementClass) {
            $('.' + elementClass).each(function () {
                initShowReelEvents($(this));
            });
        },

        // ******** public utilities ******* //
        // viewport content loader
        inViewContentLoader: function inViewContentLoader() {


            $('.PE_loadContent').one('inview', function (event, visible) {

                var element = $(this);

                if (visible) {
                    var contentUrl = UrlBuilder(element.find('a').attr('href')),
                        contentTitle = 'Loading ' + element.find('a').attr('rel') + '...';

                    element.children().html('<span class="contentLoader"><h2>' + contentTitle + '</h2><img src="assets/image/contentLoadingCard.gif" class="loaderImage" alt="Content is loading please wait" /></span>');


                    //slight pause before loading content
                    // var loaderTimeout = setTimeout(function(){
                    element.load(contentUrl, function () {
                        var element = $(this),
                                isShowreel = element.find('.PE_showReel').length,
                                isCarousel = element.find('.PE_Carousel').length;


                        if (isShowreel === 1) {
                            //bind showreel events
                            initShowReelEvents(element.find('.PE_showReel'));

                        } else if (isCarousel === 1) {

                            //bind mouse fade
                            var mouseToggle = $(element).find('.PE_mouseFade');
                            mouseToggle.each(function () {
                                mouseToggleOpacity($(this));
                            });

                            var thecar = element.find('.PE_Carousel');

                            //bind any new window links
                            var carNewWindow = $(thecar).find('.PE_newWindow');
                            carNewWindow.each(function () {
                                M7.PE.newWindow($(this), '', '', true);
                            });

                            //bind carousel
                            M7.Carousel.initCarousel('PE_Carousel');

                        } else {
                            var newWindowButton = $(element).find('.PE_newWindow');
                            newWindowButton.each(function () {
                                M7.PE.newWindow($(this), '', '', true);
                            });
                        }
                        //bind colorbox events
                        M7.PE.colorBox('PE_ColorBox');
                    });
                    //}.context(this), 1000);
                }
            });
        },
        // image preloader for faster more reliable image display
        imagePreLoader: function imagePreLoader() {
            var i = 0;
            imgObj = new Image();
            // set image list
            images = new Array();
            images[0] = '/assets/image/sprite_caseStudyActions.png';
            images[1] = '/assets/image/sprite_console.png';
            images[2] = 'assets/image/contentLoadingCard.gif';

            //
            if (VideoJS.isIOS()) {

                images[3] = 'assets/image/mcdonalds/title-overlay.png';
                images[4] = 'assets/image/homebase/title-overlay.png';
                images[5] = 'assets/image/kelloggs/title-overlay.png';
                images[6] = 'assets/image/daz/title-overlay.png';
                images[7] = 'assets/image/dft/title-overlay.png';
                images[8] = 'assets/image/shelter/title-overlay.png';



            }


            // start preloading
            for (i = 0; i <= images.length - 1; i++) {
                imgObj.src = images[i];
            }
        },
        // loader function for (non-HTML5) flash video player
        actionScriptReady: function actionScriptReady() {
            M7.PE.jsReady = true;
        },
        // pops a new window
        newWindow: function newWindow(target, type, attributes, dynamic) {
            if (dynamic === true) {
                popWindow(target, type, socialAttributes);
            } else {
                $('.' + target).each(function (i) {
                    //alert('load bind');
                    if (type === 'social') {
                        attributes = socialAttributes;
                    }
                    popWindow($(this), type, attributes);
                });
            }

        },
        // opens  target in a color
        colorBox: function colorBox(clicked) {
            $('.' + clicked).colorbox({ width: "90%", height: "90%", iframe: true });
        },
        // EXTENDED VIDEO.JS FUNCTIONALITY //
        // embed overlay
        videoEmbed: function videoEmbed(parent, clicked) {
            var videoPlayer = $(parent).attr('id');
            $('#' + videoPlayer).parent().find(' .' + clicked).fadeIn();
            //hide the control bar
            $('.M7_extendedControls').addClass('M7_hiddenControlls');
        },
        // close the video - return to holding image
        videoClose: function videoClose(parent, fromFlash) {
            if (fromFlash === true) {
                videoPlayer = parent;
            } else {
                videoPlayer = $(parent).attr('id');
            }

            /*
            $('#'+videoPlayer).parent().parent().parent().css({
            visibility: 'hidden'
            });
            */
            $('#' + videoPlayer).parent().parent().parent().parent().find('.showReelOptions').fadeIn('fast');
            //return false;
        },
        // HTML5 feature test //
        supportsVideo: function supportsVideo() {
            return !!document.createElement('video').canPlayType;
        }
        //google map on contact page
        //googleMap: function googleMap() {
        //if (GBrowserIsCompatible()) {
        //var map = new GMap2(document.getElementById("map_canvas")),
        //point = new GLatLng(51.4920, -0.2030);
        //map.setCenter(new GLatLng(51.4920, -0.2030), 15);
        //map.setUIToDefault();
        //map.setMapType(G_NORMAL_MAP);
        //var marker = new GMarker(point);
        //map.addOverlay(marker);
        //GEvent.addListener(marker, "click", function() {marker.openInfoWindowHtml('<h3>Leo Burnett</h3><br/><address>Warwick Bldg, Avonmore Road<br/>London W14 8HQ<br/><br/><strong>020 7751 1800</strong></address><br/><br/><a href="http://maps.google.com/maps?saddr=&daddr=' + point.toUrlValue() + '" target ="_blank">leoburnett.co.uk<\/a>');});
        //}
        //}
    };
} ());

// -- on DOM ready --------------------------------------------------------
$(document).ready(function () {
    M7.PE.imagePreLoader();                         //preload images
    M7.PE.initConsole('PE_ConsoleEvents');          //console - navigation and contact overlay


    //if (VideoJS.iOSVersion()) {
        // alert('ialert');
      //  loadIOsVideos('PE_showReel');
        
   // }
   // else {
        M7.PE.initShowReel('PE_showReel');              //showreel and overlay

  //  }



 



    M7.Carousel.initCarousel('PE_Carousel');        //carousel
    //M7.PE.newWindow('PE_newWindow','social', '', false);   //poping new windows
    M7.PE.colorBox('PE_ColorBox');                  //pop colourbox overlay
    M7.PE.actionScriptReady();                      //dom ready varable for non HTML5 flash support
    M7.PE.inViewContentLoader();                    //on screen content loader
});

function isReady() { //dom ready function for non HTML5 flash support
	return M7.PE.jsReady;
}
 function asHome() {
    //alert('Home');
}
 function thisMovie(movieName) {
	if (navigator.appName.indexOf("Microsoft") != -1) {
		//window.alert("IE");
		return window[movieName];
	} else {
		//window.alert("everything else");
		return document[movieName];
	}
}


 function sendToActionScript(swf) {
  swf.jsCall_play();
}
 function sendToActionScript_pause(swf) {
  //thisMovie("leoFlashVideo").jsCall_pause();
  swf.jsCall_pause();
}
 function asReturn(videoId) {
    M7.PE.videoClose(videoId, true);
}
//google maps:
//window.onunload = GUnload;




