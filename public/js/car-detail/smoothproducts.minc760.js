!function (d) { d.fn.extend({ deleteSmoothProducts: function () { d(document.body).off("click", ".sp-lightbox"), d(document.body).off("click", "#sp-prev"), d(document.body).off("click", "#sp-next"), d(document.body).off("click", ".sp-large a"), d(document.body).off("click", ".sp-noff-touch .sp-zoom"), d(document.body).off("click", ".sp-tb-active a"), d(document.body).off("click", ".sp-thumbs") }, smoothproducts: function () { function e() { d(".sp-selected").removeClass("sp-selected"), d(".sp-lightbox").fadeOut(function () { d(this).remove() }) } function i(s) { return s.match(/url\([\"\']{0,1}(.+)[\"\']{0,1}\)+/i)[1] } d(".sp-loading").hide(), d(".sp-wrap").each(function () { if (d(this).addClass("sp-touch"), 1 < d("a", this).length) { var a, n, i = !!d("a.sp-default", this)[0]; d(this).append('<div class="sp-large"></div><div class="sp-thumbs sp-tb-active"></div>'), d("a", this).each(function (s) { var e = d("img", this).attr("src"), t = d(this).attr("href"), p = ""; (0 === s && !i || d(this).hasClass("sp-default")) && (p = ' class="sp-current"', a = t, n = d("img", this)[0].src), d(this).parents(".sp-wrap").find(".sp-thumbs").append('<a href="' + t + '" style="background-image:url(' + e + ')"' + p + "></a>"), d(this).remove() }), d(".sp-large", this).append('<a href="' + a + '" class="sp-current-big"><img src="' + n + '" alt="" /></a>'), d(".sp-wrap").css("display", "inline-block") } else d(this).append('<div class="sp-large"></div>'), d("a", this).appendTo(d(".sp-large", this)).addClass(".sp-current-big"), d(".sp-wrap").css("display", "inline-block") }), d(document.body).on("click", ".sp-thumbs", function (s) { s.preventDefault() }), d(document.body).on("mouseover", function (s) { d(".sp-wrap").removeClass("sp-touch").addClass("sp-non-touch"), s.preventDefault() }), d(document.body).on("touchstart", function () { d(".sp-wrap").removeClass("sp-non-touch").addClass("sp-touch") }), d(document.body).on("click", ".sp-tb-active a", function (s) { s.preventDefault(), d(this).parent().find(".sp-current").removeClass(), d(this).addClass("sp-current"), d(this).parents(".sp-wrap").find(".sp-thumbs").removeClass("sp-tb-active"), d(this).parents(".sp-wrap").find(".sp-zoom").remove(); var e = d(this).parents(".sp-wrap").find(".sp-large").height(), t = d(this).parents(".sp-wrap").find(".sp-large").width(); d(this).parents(".sp-wrap").find(".sp-large").css({ overflow: "hidden", height: e + "px", width: t + "px" }), d(this).addClass("sp-current").parents(".sp-wrap").find(".sp-large a").remove(); var p = d(this).parent().find(".sp-current").attr("href"), a = i(d(this).parent().find(".sp-current").css("backgroundImage")); d(this).parents(".sp-wrap").find(".sp-large").html('<a href="' + p + '" class="sp-current-big"><img src="' + a + '"/></a>'), d(this).parents(".sp-wrap").find(".sp-large").hide().fadeIn(250, function () { var s = d(this).parents(".sp-wrap").find(".sp-large img").height(); d(this).parents(".sp-wrap").find(".sp-large").animate({ height: s }, "fast", function () { d(".sp-large").css({ height: "auto", width: "auto" }) }), d(this).parents(".sp-wrap").find(".sp-thumbs").addClass("sp-tb-active") }) }), d(document.body).on("mouseenter", ".sp-non-touch .sp-large", function (s) { var e = d("a", this).attr("href"); d(this).append('<div class="sp-zoom"><img src="' + e + '"/></div>'), 
// d(this).find(".sp-zoom").fadeIn(250), 
s.preventDefault() }), d(document.body).on("mouseleave", ".sp-non-touch .sp-large", function (s) { d(this).find(".sp-zoom").fadeOut(250, function () { d(this).remove() }), s.preventDefault() }), d(document.body).on("click", ".sp-non-touch .sp-zoom", function (s) { var e = d(this).html(), t = d(this).parents(".sp-wrap").find(".sp-thumbs a").length, p = d(this).parents(".sp-wrap").find(".sp-thumbs .sp-current").index() + 1; d(this).parents(".sp-wrap").addClass("sp-selected"), d("body").append("<div class='sp-lightbox' data-currenteq='" + p + "'>" + e + "</div>"), 1 < t && (d(".sp-lightbox").append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>"), 1 == p ? d("#sp-prev").css("opacity", ".1") : p == t && d("#sp-next").css("opacity", ".1")), d(".sp-lightbox").fadeIn(), s.preventDefault() }), d(document.body).on("click", ".sp-large a", function (s) { var e = d(this).attr("href"), t = d(this).parents(".sp-wrap").find(".sp-thumbs a").length, p = d(this).parents(".sp-wrap").find(".sp-thumbs .sp-current").index() + 1; d(this).parents(".sp-wrap").addClass("sp-selected"), d("body").append('<div class="sp-lightbox" data-currenteq="' + p + '"><img src="' + e + '"/></div>'), 1 < t && (d(".sp-lightbox").append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>"), 1 == p ? d("#sp-prev").css("opacity", ".1") : p == t && d("#sp-next").css("opacity", ".1")), d(".sp-lightbox").fadeIn(), s.preventDefault() }), d(document.body).on("click", "#sp-next", function (s) { s.stopPropagation(); var e = d(".sp-lightbox").data("currenteq"), t = d(".sp-selected .sp-thumbs a").length; if (t <= e); else { var p = e + 1, a = d(".sp-selected .sp-thumbs").find("a:eq(" + e + ")").attr("href"), n = i(d(".sp-selected .sp-thumbs").find("a:eq(" + e + ")").css("backgroundImage")); e == t - 1 && d("#sp-next").css("opacity", ".1"), d("#sp-prev").css("opacity", "1"), d(".sp-selected .sp-current").removeClass(), d(".sp-selected .sp-thumbs a:eq(" + e + ")").addClass("sp-current"), d(".sp-selected .sp-large").empty().append("<a href=" + a + '><img src="' + n + '"/></a>'), d(".sp-lightbox img").fadeOut(250, function () { d(this).remove(), d(".sp-lightbox").data("currenteq", p).append('<img src="' + a + '"/>'), d(".sp-lightbox img").hide().fadeIn(250) }) } s.preventDefault() }), d(document.body).on("click", "#sp-prev", function (s) { var e; if (s.stopPropagation(), (e = (e = d(".sp-lightbox").data("currenteq")) - 1) <= 0); else { 1 == e && d("#sp-prev").css("opacity", ".1"); var t = e - 1, p = d(".sp-selected .sp-thumbs").find("a:eq(" + t + ")").attr("href"), a = i(d(".sp-selected .sp-thumbs").find("a:eq(" + t + ")").css("backgroundImage")); d("#sp-next").css("opacity", "1"), d(".sp-selected .sp-current").removeClass(), d(".sp-selected .sp-thumbs a:eq(" + t + ")").addClass("sp-current"), d(".sp-selected .sp-large").empty().append("<a href=" + p + '><img src="' + a + '"/></a>'), d(".sp-lightbox img").fadeOut(250, function () { d(this).remove(), d(".sp-lightbox").data("currenteq", e).append('<img src="' + p + '"/>'), d(".sp-lightbox img").hide().fadeIn(250) }) } s.preventDefault() }), d(document.body).on("click", ".sp-lightbox", function () { e() }), d(document).keydown(function (s) { if (27 == s.keyCode) return e(), !1 }), d(".sp-large").mousemove(function (s) { var e = d(this).width(), t = d(this).height(), p = d(this).offset(), a = d(this).find(".sp-zoom").width(), n = d(this).find(".sp-zoom").height(), i = s.pageX - p.left, r = s.pageY - p.top, o = Math.floor(i * (e - a) / e), c = Math.floor(r * (t - n) / t); 
// d(this).find(".sp-zoom").css({ left: o, top: c }) 
}) } }) }(jQuery); 