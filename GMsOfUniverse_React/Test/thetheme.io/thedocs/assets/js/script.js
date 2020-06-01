'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  page.config({

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: 'UA-73325209-2',

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: true,

  });





  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */

  $.getScript('https://www.googletagmanager.com/gtag/js?id=AW-864788073');
  
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-864788073/SK3PCMCPsZMBEOm8rpwD',
        'event_callback': callback
    });
    return false;
  }
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-864788073');
  
  $('a[href*="https://themeforest.net"]').on('click', function() {
    ga('send', 'event', {
      eventCategory: 'TheDocs - Buy',
      eventAction: 'Click',
      eventLabel: 'Buy',
      transport: 'beacon'
    });
    gtag_report_conversion ();
  });


});


!function(e,t,n,s,u,a){e.formito_form='12m';u=t.createElement(n),u.async=!0,u.src='//script.formito.com/v1/formito.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a)}(window,document,'script');
