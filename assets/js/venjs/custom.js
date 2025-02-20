! function(e) {
    "use strict";

    function t() {
        e(window).scrollTop() > 40 && l > 767 ? e(a).fadeIn() : e(a).fadeOut()
    }

    function i() {
        e(s).delay(100).fadeOut("slow")
    }
    var l = e(window).innerWidth(),
        o = e(window).innerHeight(),
        a = e(".site-backtop"),
        s = e(".site-loading");
    if (e(".site-backtop").on("click", function(t) {
            t.preventDefault(), e("body, html").animate({
                scrollTop: 0
            }, 800)
        }), 
        // e(".site-header .header-nav li.sub > a").on("click", function(t) {
        //     if (1200 > l) {
        //         t.preventDefault();
        //         var i = e(this).parent("li"),
        //             o = e(this).siblings("ul");
        //         i.hasClass("active") ? (o.hide(), i.removeClass("active")) : (o.show(), i.addClass("active"))
        //     }
        // }), e(".site-header .header-toggle").on("click", function(t) {
        //     t.preventDefault();
        //     var i = e(".site-header"),
        //         l = e(".site-header .header-nav");
        //     l.is(":visible") ? i.removeClass("nav-open") : i.addClass("nav-open")
        // }), 
        e("[data-background]").each(function() {
            var t = e(this).data("background");
            t && e(this).css("background-image", "url(" + t + ")")
        }), e(".popup-photo").length && e(".popup-photo").magnificPopup({
            type: "image"
        }), e(".popup-gallery").length && e(".popup-gallery").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            }
        }), e(".popup-video").length && e(".popup-video").magnificPopup({
            type: "iframe"
        }), e("input.datepicker").length) {
        var r = e("input.datepicker").outerWidth();
        e("input.datepicker").datepicker(), e("body").append("<style>.ui-datepicker{width:auto; min-width: " + r + "px !important;}</style>")
    }
    if (e(".video-full").length && e(".video-full").fitVids(), e(".widget-slider").length && e(".widget-slider .widget-carousel").owlCarousel({
            items: 1,
            nav: !0,
            navText: ["", ""],
            dots: !0,
            autoHeight: !0,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            onInitialized: function() {
                e(".site-header").addClass("header-over"), e(".widget-rooms-carousel.top-over").length && e(".widget-slider").addClass("has-rooms")
            }
        }), e(".widget-gallery-grid").length && e(".widget-gallery-grid .gallery-item a").imagesLoaded({
            background: !0
        }, function() {
            var t = e(".widget-gallery-grid .row");
            t.on("arrangeComplete", function() {
                e(".widget-gallery-grid").magnificPopup({
                    delegate: ".isotope-item:visible a",
                    type: "image",
                    gallery: {
                        enabled: !0
                    }
                })
            }), t.isotope({
                itemSelector: ".isotope-item"
            }), e(".widget-filter-top ul li a").on("click", function(i) {
                i.preventDefault();
                var l = e(this).attr("data-filter");
                t.isotope({
                    filter: l
                }), e(".widget-filter-top ul li").removeClass("active"), e(this).parent("li").addClass("active")
            })
        }), e(".widget-gallery-carousel").length && e(".widget-gallery-carousel .widget-carousel").owlCarousel({
            center: !0,
            loop: !0,
            nav: !0,
            navText: ["", ""],
            dots: !1,
            mouseDrag: !1,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        }), e(".widget-rooms-carousel").length && e(".widget-rooms-carousel .widget-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }), e(".widget-rooms-detail").length) {
        var n = e(".widget-rooms-detail .room-slider .owl-carousel"),
            g = e(".widget-rooms-detail .room-thumbnails .owl-carousel");
        n.owlCarousel({
            items: 1,
            nav: !0,
            navText: ["", ""],
            dots: !1,
            mouseDrag: !1
        }).on("changed.owl.carousel", function(e) {
            g.trigger("to.owl.carousel", [e.item.index, 250, !0])
        }), g.owlCarousel({
            margin: 20,
            dots: !1,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        }).on("click", ".owl-item a", function(t) {
            t.preventDefault(), n.trigger("to.owl.carousel", [e(this).parent().index(), 250, !0])
        })
    }
    if (e(".widget-blog-list").length && e(".widget-blog-list .media-gallery .media-carousel").owlCarousel({
            items: 1,
            navText: ["", ""]
        }), e(".widget-blog-carousel").length && (e(".widget-blog-carousel .widget-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },
            onRefreshed: function() {
                var t = e(".widget-blog-carousel .widget-carousel .blog-item"),
                    i = 0;
                t.removeAttr("style"), t.each(function() {
                    e(this).height() > i && (i = e(this).height())
                }), t.css("height", i)
            }
        }), e(".widget-blog-carousel .media-gallery .media-carousel").owlCarousel({
            items: 1,
            mouseDrag: !1,
            navText: ["", ""]
        })), e(".widget-blog-single").length && e(".widget-blog-single .media-gallery .media-carousel").owlCarousel({
            items: 1,
            nav: !0,
            dots: !1,
            navText: ["", ""],
            mouseDrag: !1,
            autoplay: !0
        }), e(".widget-testimonials-carousel").length && e(".widget-testimonials-carousel .widget-carousel").owlCarousel({
            margin: 40,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), e(".widget-features-carousel").length && e(".widget-features-carousel .widget-carousel").owlCarousel({
            margin: 40,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        }), e(".widget-team-carousel").length && e(".widget-team-carousel .widget-carousel").owlCarousel({
            margin: 50,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }), e(".widget-google-map").length) try {
        e(".widget-google-map .map-google").width("100%").height("100%").gmap3({
            map: {
                options: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: !0,
                    zoomControl: !0,
                    center: [51.5209564, .157134],
                    zoom: 15,
                    scrollwheel: !1,
                    styles: [{
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#040404"
                        }, {
                            lightness: 17
                        }]
                    }]
                }
            },
            marker: {
                latLng: [51.5209564, .157134],
                options: {
                    icon: "assets/img/map-marker.png"
                }
            }
        })
    } catch (d) {
        console.log(d)
    }
    e(window).scroll(function() {
        t()
    }), e(window).load(function() {
        i()
    }), e(window).resize(function() {
        l = e(window).innerWidth(), o = e(window).innerHeight()
    })
}(jQuery);