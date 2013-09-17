/*
 * main.js
 * @version 0.0
 * @author Leo Burnett - http://www.leoburnett.com/
 * @requires jQuery Core 1.4.3 - http://www.jquery.com/
 */

if (typeof M7 !== 'object') {
	M7 = {};
}

M7.Carousel = (function () {
        // -- Private Variables --------------------------------------------------------
        var cards = [],
            MyCarousel = '',
            transition = 250,
            idTag = 'M7_AutoID',
            navBar = 'M7_nav',
            navIt = 'M7_navIt',
            navTag = 'M7_item',
            wrapperClass = 'M7_wrapper',
            disabledClass = 'M7_disabled',
            actButton = '.M7_action a',
            navButton = '.M7_navigate a',
            fwdButton = '.M7_fwd a',
            revButton = '.M7_rev a';
            
        
        // -- Private Methods --------------------------------------------------------
	
		/*** carousel ***/
		carousel = function carousel(targetClass) {
            M7Carousel = targetClass;
            
            //build each carousel
            $('.' + M7Carousel).each(function(instance) {
                var items = '',
                    carID = targetClass + '-' + instance,
                    wrapperClassWidth = 0,
                    itemClassWidth = 0,
                    itemCount = 0;  
                $(this).wrap('<div id="' + carID + '" class="' + wrapperClass + '" />');
                
                //build navigation items
                $(this).children().each(function(index) {
                    items += buildNav(this, instance, index);
                    wrapperClassWidth += $(this).width();
                    itemClassWidth = $(this).width();
                    itemCount += 1;
                });
                
                //set the carousel width based on CSS settings
                $(this).width(wrapperClassWidth);
                $('#'+carID).width(itemClassWidth);
                
               //build carousel navigation
                $(this).after('<ol class="' + navIt + '"><li class="M7_rev"><a class="' + disabledClass + '" href="#" title="moveBack">&lt;</a></li><li class="M7_fwd"><a href="#" title="moveNext">&gt;</a></li></ol>');
                $(this).after('<div class="M7_navWrapper"><ol rel="' + itemCount + '" class="' + navBar + '" style="display:none;">' + items + '</ol></div>');
                //$(this).after('<div class="M7_rev"><a class="' + disabledClass + '" href="#" title="moveBack">&lt;</a></div><div rel="' + itemCount + '" class="' + navBar + '" style="display:none;"><ol>' + 
                //    items + '</ol></div><div><a href="#" title="moveNext">&gt;</a></div>');
                //attach events
	            carouselJumpEvent(carID, navButton, 'navJump');
	            carouselNavEvent(carID, fwdButton, 'navFwd');
	            carouselNavEvent(carID, revButton, 'navRev');
                //show navigation
                $('.' + navBar).fadeIn(transition);
            });
		};
		//trim strings - expose indexes
		strTrim = function strTrim(str) {
		    var x = str.indexOf('-'),
                y = str.substr((x+1),str.length);
            return y;
		};
		//bind events
		carouselJumpEvent = function carouselJumpEvent(carID, eventButton, action) {
		    var eventObject = $('#' + carID + ' ol.'+ navBar +' li' + eventButton);
		    eventObject.bind('click.carouselJumpEvent', function (e) {
                var eventType = e.type,
                    el = $(this),
                    clickID = el.attr('id'),
                    moveIndex = strTrim(clickID),
                    activeIndex = strTrim(el.parent().parent().find('.on').attr('id'));
                    //alert(clickID);
                    //console.log(clickID);
                if(eventType === 'click'){
                    if(action === 'navJump'){
                        changeCarousel(el, carID, activeIndex, moveIndex, '');
                    }
                    //el.addClass(disabledClass);
                    return false;
                };
			});
		};
		carouselNavEvent = function carouselNavEvent(carID, eventButton, action) {
		    var eventObject = $('#' + carID + ' ol.'+ navIt +'  li' + eventButton);
		    eventObject.bind('click.carouselNavEvent', function (e) {
                var eventType = e.type,
                    el = $(this),
                    activeIndex = strTrim($('#' + carID + ' ol.'+ navBar).find('.on').attr('id'));
                if(eventType === 'click'){
                    if(action === 'navFwd'){
                        if(!el.hasClass(disabledClass)){
                            moveNext(el, carID, activeIndex, '', 'fwd');
                        }
                    }else if(action === 'navRev'){
                        if(!el.hasClass(disabledClass)){
                            movePrevious(el, carID, activeIndex, '', 'rev');
                        }
                    }
                    el.addClass(disabledClass);
                    return false;
                };
			});
		};
		//navigate to a chosen index
        changeCarousel = function changeCarousel(el, carID, activeIndex, moveIndex, direction) {
            var targetCarousel = $('#' + carID + ' ul.' + M7Carousel + ' > li'),
                targetNav  = $('#' + carID + ' ol li'),
                itemWidth = targetCarousel.width(),
                carIndex = strTrim(carID),
                carLen = targetCarousel.length;
            if(direction == 'rev'){
                targetCarousel.animate({
                    right: '-=' + itemWidth
                }, transition, function() {
                    //callback
                    el.removeClass(disabledClass);
                    configureNav(targetNav, moveIndex, carLen, carIndex);
                });
            }else if(direction == 'fwd'){
                targetCarousel.animate({
                    right: '+=' + itemWidth
                }, transition, function() {
                    //callback
                    el.removeClass(disabledClass);
                    configureNav(targetNav, moveIndex, carLen, carIndex);
                });
            } else {
                if(moveIndex > activeIndex){
                    targetCarousel.animate({
                        right: '+=' + (itemWidth * (moveIndex-activeIndex))
                    }, transition, function() {
                        //callback
                        el.removeClass(disabledClass);
                        configureNav(targetNav, moveIndex, carLen, carIndex);
                    });
                } else if(moveIndex < activeIndex) {
                    targetCarousel.animate({
                        right: '-=' + (itemWidth * (activeIndex-moveIndex))
                    }, transition, function() {
                        //callback
                        el.removeClass(disabledClass);
                        configureNav(targetNav, moveIndex, carLen, carIndex);
                    });
                }
            }
        };
        //iteration forward
        moveNext = function moveNext(el, carID, activeIndex, moveIndex, direction) {
            var next = activeIndex * 1 + 1;
            changeCarousel(el, carID, activeIndex, next, direction);
        };
        //iteration revrese
        movePrevious = function movePrevious(el, carID, activeIndex, moveIndex, direction) {
            var next = activeIndex * 1 - 1;
            changeCarousel(el, carID, activeIndex, next, direction);
        };
        //navigation configuratiuon enable/disable buttons
        configureNav = function configureNav(targetNav, moveIndex, carLen, carIndex) {
            if((moveIndex*1) === 0){
                targetNav.children('#'+revButton).addClass(disabledClass);
            }else if(moveIndex > 0){
                targetNav.children('#'+revButton).removeClass(disabledClass);
            }
            if(moveIndex < (carLen-1)){
                targetNav.children('#'+fwdButton).removeClass(disabledClass);
            }else if(moveIndex == (carLen-1)){
                targetNav.children('#'+fwdButton).addClass(disabledClass);
            }
            targetNav.children('li a').removeClass('on');
            $('#'+navTag + carIndex +'-' +  moveIndex).addClass('on');
        };
        //build the navigation items
		buildNav = function buildNav(element, i, index){
            var item = '',
                selected = '',
                target = $(element).find('h3').text();
            if(index > 0){
                selected = '';
            } else {
                selected = 'on';
            }
            item += '<li class="M7_navigate"><a id="' + navTag + i + '-' + index + '" class="' + selected + '" href="#" title="' + target + '">' + (index+1) + '</a></li>';
            return item;
        };
		
	// -- Public Methods --------------------------------------------------------
	return {
        
		// carousel
		initCarousel: function initCarousel(targetSelectClass) {
			carousel(targetSelectClass);
		}
	};
}());