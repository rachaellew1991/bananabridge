/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* flip page */
var pages = [
    { id: '1', color: 'red' },
    { id: '2', color: 'blue' },
    { id: '3', color: 'green' },
    { id: '4', color: 'orange' },
    { id: '5', color: 'maroon' },
    { id: '6', color: 'pink' },
    { id: '7', color: 'purple' },
    { id: '8', color: 'red' },
    { id: '9', color: 'blue' },
    { id: '10', color: 'green' }
];

var idx = 0,
    is_turning = false;

$('.btns button').click(function(){
  turn($(this).attr('class'));
});

function turn(direction) {
    
    if (is_turning)
        return;
    
    if (direction != 'next' && direction != 'prev')
        return;
    
    var is_next = (direction == 'next'),
      new_left_data = is_next ? pages[idx + 2] : pages[idx - 2],
        new_right_data = is_next ? pages[idx + 3] : pages[idx - 1];
    
    if (!new_left_data && !new_right_data)
        return;
    
    is_turning = true;

    var $cur_left = $('.book .current.left.page'),
        $cur_right = $('.book .current.right.page'),
      $new_left = $('<div class="left page ' + direction + '" />'),
        $new_right = $('<div class="right page ' + direction + '" />');
    
    if (new_left_data) {
        $new_left.addClass(new_left_data.color);
        $new_left.html(new_left_data.id);
    }
    
    if (new_right_data) {
        $new_right.addClass(new_right_data.color); 
        $new_right.html(new_right_data.id);
    }  
    
    $('.book').append($new_left);
    $('.book').append($new_right);
    
    $cur_left.addClass('to_remove');
    $cur_right.addClass('to_remove');
    
    setTimeout(function(){
        if (is_next) {
            $cur_right.addClass('turn');
            $new_left.addClass('turn');
        }
        else {
            $cur_left.addClass('turn');
            $new_right.addClass('turn');
        }
        
        $new_left.addClass('current');
        $new_right.addClass('current');
        
    }, 50);
    
    setTimeout(function(){
        $('.book .page.to_remove').remove();
        $('.book .page').removeClass('turn next prev'); 
        is_turning = false;        
    }, 800);
    
    idx = is_next ? (idx + 2) : (idx - 2);
}






// Sidebar toggle
//
// -------------------
$(document).ready(function() {
    var overlay = $('.sidebar-overlay');

    $('.sidebar-toggle').on('click', function() {
        var sidebar = $('#sidebar');
        sidebar.toggleClass('open');
        if ((sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')) {
            overlay.addClass('active');
        } else {
            overlay.removeClass('active');
        }
    });

    overlay.on('click', function() {
        $(this).removeClass('active');
        $('#sidebar').removeClass('open');
    });

});

// Sidebar constructor
//
// -------------------
$(document).ready(function() {

    var sidebar = $('#sidebar');
    var sidebarHeader = $('#sidebar .sidebar-header');
    var sidebarImg = sidebarHeader.css('background-image');
    var toggleButtons = $('.sidebar-toggle');

    // Hide toggle buttons on default position
    toggleButtons.css('display', 'none');
    $('body').css('display', 'table');


    // Sidebar position
    $('#sidebar-position').change(function() {
        var value = $( this ).val();
        sidebar.removeClass('sidebar-fixed-left sidebar-fixed-right sidebar-stacked').addClass(value).addClass('open');
        if (value == 'sidebar-fixed-left' || value == 'sidebar-fixed-right') {
            $('.sidebar-overlay').addClass('active');
        }
        // Show toggle buttons
        if (value != '') {
            toggleButtons.css('display', 'initial');
            $('body').css('display', 'initial');
        } else {
            // Hide toggle buttons
            toggleButtons.css('display', 'none');
            $('body').css('display', 'table');
        }
    });

    // Sidebar theme
    $('#sidebar-theme').change(function() {
        var value = $( this ).val();
        sidebar.removeClass('sidebar-default sidebar-inverse sidebar-colored sidebar-colored-inverse').addClass(value)
    });

    // Header cover
    $('#sidebar-header').change(function() {
        var value = $(this).val();

        $('.sidebar-header').removeClass('header-cover').addClass(value);

        if (value == 'header-cover') {
            sidebarHeader.css('background-image', sidebarImg)
        } else {
            sidebarHeader.css('background-image', '')
        }
    });
});

/**
 * Created by Kupletsky Sergey on 08.09.14.
 *
 * Add JQuery animation to bootstrap dropdown elements.
 */

(function($) {
    var dropdown = $('.dropdown');

    // Add slidedown animation to dropdown
    dropdown.on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideup animation to dropdown
    dropdown.on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
})(jQuery);



(function(removeClass) {

    jQuery.fn.removeClass = function( value ) {
        if ( value && typeof value.test === "function" ) {
            for ( var i = 0, l = this.length; i < l; i++ ) {
                var elem = this[i];
                if ( elem.nodeType === 1 && elem.className ) {
                    var classNames = elem.className.split( /\s+/ );

                    for ( var n = classNames.length; n--; ) {
                        if ( value.test(classNames[n]) ) {
                            classNames.splice(n, 1);
                        }
                    }
                    elem.className = jQuery.trim( classNames.join(" ") );
                }
            }
        } else {
            removeClass.call(this, value);
        }
        return this;
    }

})(jQuery.fn.removeClass);


