//Horizontal tab & accordion
function tab(selector, width) {
    var w = $(window).width();
    if (navigator.userAgent.search("Chrome") >= 0) {
        var wW = w + 17;
    } else {
        var wW = w;
    }
    $('.' + selector + ' .ui__tabNavLink').each(function(id) {
        $(this).attr('data-nav', id + 1);
    });
    $('.' + selector + ' .ui__tabInner').each(function(id) {
        $(this).attr('data-tab', id + 1);
    });
    if (wW <= width) {
        $('.' + selector + ' .ui__tabNavLink--js').each(function() {
            var id = $(this).attr('data-nav');
            $('.' + selector + ' .ui__tabInner[data-tab=' + id + ']').appendTo($(this).parent());
        });
        $('.' + selector + ' .ui__tabInner--active').slideDown();
        $('.' + selector + ' .ui__tabNavLink--js').off('click');
        $('.' + selector + ' .ui__tabNavLink--js').on('click', function(e) {
            e.stopImmediatePropagation();
            var id = $(this).attr('data-nav');
            if ($(this).next().is(':visible')) {
                $(this).removeClass('ui__tabNavLink--active');
                $(this).next().slideUp();
            } else {
                $(this).closest('.ui__tab').find('.ui__tabNavLink').removeClass('ui__tabNavLink--active');
                $(this).addClass('ui__tabNavLink--active');
                $(this).closest('.ui__tab').find('.ui__tabInner').removeClass('ui__tabInner--active');
                $(this).closest('.ui__tab').find('.ui__tabInner').slideUp();
                $(this).closest('.ui__tab').find('.ui__tabInner[data-tab=' + id + ']').addClass('ui__tabInner--active');
                $(this).next().slideDown();
            }
        });
    } else {
        $('.' + selector + ' .ui__tabInner').each(function() {
            $(this).appendTo($(this).closest('.ui__tab').find('.ui__tabBox'));
        });
        $('.' + selector + ' .ui__tabInner').removeAttr('style');
        $('.' + selector + ' .ui__tabNavLink--js').off('click');
        $('.' + selector + ' .ui__tabNavLink--js').on('click', function(e) {
            e.stopImmediatePropagation();
            var id = $(this).attr('data-nav');
            $(this).closest('.ui__tab').find('.ui__tabNavLink').removeClass('ui__tabNavLink--active');
            $(this).addClass('ui__tabNavLink--active');
            $(this).closest('.ui__tab').find('.ui__tabInner').removeClass('ui__tabInner--active');
            $(this).closest('.ui__tab').find('.ui__tabInner[data-tab=' + id + ']').addClass('ui__tabInner--active');
        });
    }
}
//Horizontal tab & Select tab
function selectTab(selector, width) {
    var w = $(window).width();
    if (navigator.userAgent.search("Chrome") >= 0) {
        var wW = w + 17;
    } else {
        var wW = w;
    }
    $('.' + selector + ' .ui__selectTabNavLink').each(function(id) {
        $(this).attr('data-nav', id + 1);
    });
    $('.' + selector + ' .ui__selectTabInner').each(function(id) {
        $(this).attr('data-tab', id + 1);
    });
    if (wW <= width) {
        if (!$('.' + selector + ' .ui__selectTabNav').parent().hasClass('ui__selectTabDrop')) {
            $('.' + selector + ' .ui__selectTabNav').wrapAll('<div class="ui__selectTabDrop"/>');
            if ($('.' + selector + ' .ui__selectTabNav').prev().length == 0) {
                var activeText = $('.' + selector + ' .ui__selectTabNavLink--active').text();
                var selectHead = $('<p class="ui__selectTabText ui__selectTabText--js"></p>');
                $('.' + selector + ' .ui__selectTabDrop').prepend(selectHead);
                $('.' + selector + ' .ui__selectTabText').text(activeText);
            }
        }
        $(document).on('click', '.' + selector + ' .ui__selectTabText--js', function(e) {
            e.stopImmediatePropagation();
            $(this).toggleClass('ui__selectTabText--active');
            $(this).next().slideToggle();
        });
        $('.' + selector + ' .ui__selectTabNavLink--js').off('click');
        $('.' + selector + ' .ui__selectTabNavLink--js').on('click', function(e) {
            e.stopImmediatePropagation();
            var id = $(this).attr('data-nav');
            $(this).closest('.ui__selectTabDrop').find('.ui__selectTabText').text($(this).text());
            $(this).closest('.ui__selectTab').find('.ui__selectTabNavLink').removeClass('ui__selectTabNavLink--active');
            $(this).addClass('ui__selectTabNavLink--active');
            $(this).closest('.ui__selectTab').find('.ui__selectTabInner').removeClass('ui__selectTabInner--active');
            $(this).closest('.ui__selectTab').find('.ui__selectTabInner').slideUp();
            $(this).closest('.ui__selectTab').find('.ui__selectTabInner[data-tab=' + id + ']').addClass('ui__selectTabInner--active');
            $(this).closest('.ui__selectTabNav').slideUp();
            $(this).closest('.ui__selectTabDrop').find('.ui__selectTabText').removeClass('ui__selectTabText--active');
        });
    } else {
        $('.' + selector + ' .ui__selectTabNav').removeAttr('style');
        $('.' + selector + ' .ui__selectTabText').remove();
        $('.' + selector + ' .ui__selectTabNav').unwrap('.ui__selectTabDrop');
        $('.' + selector + ' .ui__selectTabInner').removeAttr('style');
        $('.' + selector + ' .ui__selectTabNavLink--js').off('click');
        $('.' + selector + ' .ui__selectTabNavLink--js').on('click', function(e) {
            e.stopImmediatePropagation();
            var id = $(this).attr('data-nav');
            $(this).closest('.ui__selectTab').find('.ui__selectTabNavLink').removeClass('ui__selectTabNavLink--active');
            $(this).addClass('ui__selectTabNavLink--active');
            $(this).closest('.ui__selectTab').find('.ui__selectTabInner').removeClass('ui__selectTabInner--active');
            $(this).closest('.ui__selectTab').find('.ui__selectTabInner[data-tab=' + id + ']').addClass('ui__selectTabInner--active');
        });
    }
}
//Vertical Tab
function verticalTab(selector, width) {
    var w = $(window).width();
    if (navigator.userAgent.search("Chrome") >= 0) {
        var wW = w + 17;
    } else {
        var wW = w;
    }
    $('.' + selector + ' .ui__verticalTabNavLink').each(function(id) {
        $(this).attr('data-nav', id + 1);
    });
    $('.' + selector + ' .ui__verticalTabInner').each(function(id) {
        $(this).attr('data-tab', id + 1);
    });
    if (wW <= width) {
        $('.' + selector + ' .ui__verticalTabNavLink--js').each(function() {
            var id = $(this).attr('data-nav');
            $('.' + selector + ' .ui__verticalTabInner[data-tab=' + id + ']').appendTo($(this).parent());
        });
        $('.' + selector + ' .ui__verticalTabInner--active').slideDown();
        $('.' + selector + ' .ui__verticalTabNavLink--js').off('click');
        $('.' + selector + ' .ui__verticalTabNavLink--js').on('click', function(e) {
            e.stopImmediatePropagation();
            var id = $(this).attr('data-nav');
            if ($(this).next().is(':visible')) {
                $(this).removeClass('ui__verticalTabNavLink--active');
                $(this).next().slideUp();
            } else {
                $(this).closest('.ui__verticalTab').find('.ui__verticalTabNavLink').removeClass('ui__verticalTabNavLink--active');
                $(this).addClass('ui__verticalTabNavLink--active');
                $(this).closest('.ui__verticalTab').find('.ui__verticalTabInner').removeClass('ui__verticalTabInner--active');
                $(this).closest('.ui__verticalTab').find('.ui__verticalTabInner').slideUp();
                $(this).closest('.ui__verticalTab').find('.ui__verticalTabInner[data-tab=' + id + ']').addClass('ui__verticalTabInner--active');
                $(this).next().slideDown();
            }
        });
    } else {
        $('.' + selector + ' .ui__verticalTabInner').each(function() {
            $(this).appendTo($(this).closest('.ui__verticalTab').find('.ui__verticalTabBox'));
        });
        $('.' + selector + ' .ui__verticalTabInner').removeAttr('style');
        $('.' + selector + ' .ui__verticalTabNavLink--js').off('click');
        $('.' + selector + ' .ui__verticalTabNavLink--js').on('click', function(e) {
            e.stopImmediatePropagation();
            var id = $(this).attr('data-nav');
            $(this).closest('.ui__verticalTab').find('.ui__verticalTabNavLink').removeClass('ui__verticalTabNavLink--active');
            $(this).addClass('ui__verticalTabNavLink--active');
            $(this).closest('.ui__verticalTab').find('.ui__verticalTabInner').removeClass('ui__verticalTabInner--active');
            $(this).closest('.ui__verticalTab').find('.ui__verticalTabInner[data-tab=' + id + ']').addClass('ui__verticalTabInner--active');
        });
    }
}
//Vertical Slider Tab
function sliderTab(selector) {
    $('.' + selector + ' .ui__sliderTabNavLink').each(function(id) {
        $(this).attr('data-nav', id + 1);
    });
    $('.' + selector + ' .ui__sliderTabInner').each(function(id) {
        $(this).attr('data-tab', id + 1);
    });
    $('.' + selector + ' .ui__sliderButtonIcon--js').on('click', function() {
        $(this).closest('.ui__sliderBox').toggleClass('ui__sliderBox--active');
        $(this).parent().toggleClass('ui__sliderButton--active');
    });
    $('.' + selector + ' .ui__sliderTabNavLink--js').on('click', function() {
        var id = $(this).attr('data-nav');
        $(this).closest('.ui__sliderTab').find('.ui__sliderTabNavLink').removeClass('ui__sliderTabNavLink--active');
        $(this).addClass('ui__sliderTabNavLink--active');
        $(this).closest('.ui__sliderTab').find('.ui__sliderTabInner').removeClass('ui__sliderTabInner--active');
        $(this).closest('.ui__sliderTab').find('.ui__sliderTabInner[data-tab=' + id + ']').addClass('ui__sliderTabInner--active');
    });
    $(document).mouseup(function(e) {
        var container = $(".ui__sliderBox");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.' + selector + ' .ui__sliderButton').removeClass('ui__sliderButton--active');
            $('.' + selector + ' .ui__sliderBox').removeClass('ui__sliderBox--active');
        }
    });
}
//accordion || accordion with collapse || accordion with slider
//For slider you must call the slick carousel library
function accordion(selector, collapse, slider) {
    $('.' + selector + ' .ui__accordionTabLink').first().addClass('ui__accordionTabLink--active');
    $('.' + selector + ' .ui__accordionBox').first().css('display', 'block');
    if (slider === true) {
        $('.' + selector + ' .ui__accordionSlider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        });
    }
    $('.' + selector + ' .ui__accordionTabLink--js').on('click', function() {
        if (collapse === true) {
            $(this).toggleClass('ui__accordionTabLink--active');
            $(this).next().slideToggle();
            if (slider === true) {
                $(this).next().find('.ui__accordionSlider').slick('unslick');
                $(this).next().find('.ui__accordionSlider').slick({
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                });
            }
        } else {
            if ($(this).next().is(':visible')) {
                $(this).removeClass('ui__accordionTabLink--active');
                $(this).next().slideUp();
            } else {
                $('.' + selector + ' .ui__accordionTabLink').removeClass('ui__accordionTabLink--active');
                $(this).addClass('ui__accordionTabLink--active');
                $('.' + selector + ' .ui__accordionBox').slideUp();
                $(this).next().slideDown();
                if (slider === true) {
                    $(this).next().find('.ui__accordionSlider').slick('unslick');
                    $(this).next().find('.ui__accordionSlider').slick({
                        dots: false,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true
                    });
                }
            }
        }
    });
}
//Slideraccordion & accordion
function sliderAccordion(selector, width, item) {
    var w = $(window).width();
    if (navigator.userAgent.search("Chrome") >= 0) {
        var wW = w + 17;
    } else {
        var wW = w;
    }
    if (wW <= width) {
        $('.' + selector + ' .ui__HoriAccordionBody--active').css('width', '').slideDown();
        $('.' + selector + ' .ui__HoriAccordionHead--js').off('click');
        $('.' + selector + ' .ui__HoriAccordionHead--js').on('click', function() {
            if ($(this).next().is(':visible')) {
                $(this).removeClass('ui__HoriAccordionHead--active');
                $(this).next().removeClass('ui__HoriAccordionBody--active').slideUp();
            } else {
                $('.' + selector + ' .ui__HoriAccordionHead').removeClass('ui__HoriAccordionHead--active');
                $(this).addClass('ui__HoriAccordionHead--active');
                $('.' + selector + ' .ui__HoriAccordionBody').removeClass('ui__HoriAccordionBody--active').slideUp();
                $(this).next().addClass('ui__HoriAccordionBody--active').slideDown();
            }
        });
    } else {
        var itemCount = $('.' + selector + ' .ui__HoriAccordionHead').innerWidth() * item;
        var boxWidth = $('.' + selector).width() - itemCount;
        $('.' + selector + ' .ui__HoriAccordionBody').css('display', '');
        $('.' + selector + ' .ui__HoriAccordionBody--active').css('width', boxWidth - item);
        $('.' + selector + ' .ui__HoriAccordionHead--js').off('click');
        $('.' + selector + ' .ui__HoriAccordionHead--js').on('click', function() {
            $('.' + selector + ' .ui__HoriAccordionHead').removeClass('ui__HoriAccordionHead--active');
            $(this).addClass('ui__HoriAccordionHead--active');
            $('.' + selector + ' .ui__HoriAccordionBody').css('width', '').removeClass('ui__HoriAccordionBody--active');
            $(this).next().width(boxWidth - item).addClass('ui__HoriAccordionBody--active');
        });
    }
}
$(document).ready(function() {
    //Vertical Slider Tab
    sliderTab('sliderTab'); //sliderTab('classSelector');
    //accordion
    accordion('accordion'); //accordion('classSelector');
    //accordion with collapse
    accordion('accordioncollapse', true); //accordion('classSelector',collapse);
    //accordion with slider
    accordion('accordionslider', false, true); //accordion('classSelector',collapse,slider);
    //Window
    $(window).trigger('resize');
});
$(window).on('resize', function() {
    //Horizontal tab & accordion
    tab('horiTabAcc', 767); //tab('classSelector',width);
    //Horizontal tab & Select tab 
    selectTab('selectTab', 767); //selectTab('classSelector',width);
    //Vertical Tab
    verticalTab('verticalTab', 767); //verticalTab('classSelector',width);
    //Slideraccordion & accordion
    sliderAccordion('horiAccordion', 767, 4); //sliderAccordion('classSelector',width,item);
});