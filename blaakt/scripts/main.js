"use strict";$(document).ready(function(){var o=new WOW({boxClass:"wow",animateClass:"animated",offset:2,mobile:!1,live:!0,callback:function(o){},scrollContainer:null});o.init(),$(".nav-about").on("click",function(){$.smoothScroll({scrollTarget:".content-section-a"})}),$(".nav-music").on("click",function(){$.smoothScroll({scrollTarget:".content-section-music"})}),$(".nav-contact").on("click",function(){$.smoothScroll({scrollTarget:".content-section-c"})})});