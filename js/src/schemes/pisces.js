"use strict";$(document).ready(function(){function e(){return n.height()+CONFIG.sidebar.offset}function t(n){return i.css({"margin-top":n})}var n=$(".header-inner"),i=$("#sidebar"),r=window.matchMedia("(min-width: 991px)");t(e()).show(),r.addListener(function(n){n.matches&&t(e())})});