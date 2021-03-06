! function(d) {
	"use strict";
	d.fn.fusion_draw_circles = function() {
		var e = d(this),
			t = e.children(".counter-circle").attr("data-countdown"),
			i = e.children(".counter-circle").attr("data-filledcolor"),
			r = e.children(".counter-circle").attr("data-unfilledcolor"),
			c = e.children(".counter-circle").attr("data-scale"),
			a = e.children(".counter-circle").attr("data-size"),
			n = e.children(".counter-circle").attr("data-speed"),
			o = e.children(".counter-circle").attr("data-strokesize"),
			s = e.children(".counter-circle").attr("data-percent-original");
		c && (c = d("body").css("color")), t ? (e.children(".counter-circle").attr("data-percent", 100), e.children(".counter-circle").easyPieChart({
			barColor: i,
			trackColor: r,
			scaleColor: c,
			scaleLength: 5,
			lineCap: "round",
			lineWidth: o,
			size: a,
			rotate: 0,
			animate: {
				duration: n,
				enabled: !0
			}
		}), e.children(".counter-circle").data("easyPieChart").enableAnimation(), e.children(".counter-circle").data("easyPieChart").update(s)) : e.children(".counter-circle").easyPieChart({
			barColor: i,
			trackColor: r,
			scaleColor: c,
			scaleLength: 5,
			lineCap: "round",
			lineWidth: o,
			size: a,
			rotate: 0,
			animate: {
				duration: n,
				enabled: !0
			}
		})
	}, d.fn.fusion_recalc_circles = function(e) {
		var t, i, r = d(this);
		r.is(":hidden") || (r.attr("data-currentsize", r.width()), r.removeAttr("style"), r.children().removeAttr("style"), r.data("currentsize"), t = r.data("originalsize"), (i = r.parent().width()) < r.data("currentsize") ? (r.css({
			width: i,
			height: i,
			"line-height": i + "px"
		}), r.find(".fusion-counter-circle").each(function() {
			d(this).css({
				width: i,
				height: i,
				"line-height": i + "px",
				"font-size": 50 * i / 220
			}), d(this).data("size", i), d(this).data("strokesize", i / 220 * 11), e || d(this).data("animate", !1), d(this).attr("data-size", i), d(this).attr("data-strokesize", i / 220 * 11)
		})) : (r.css({
			width: t,
			height: t,
			"line-height": t + "px"
		}), r.find(".fusion-counter-circle").each(function() {
			d(this).css({
				width: t,
				height: t,
				"line-height": t + "px",
				"font-size": 50 * t / 220
			}), d(this).data("size", t), d(this).data("strokesize", t / 220 * 11), e || d(this).data("animate", !1), d(this).attr("data-size", t), d(this).attr("data-strokesize", t / 220 * 11)
		})))
	}, d.fn.fusion_redraw_circles = function() {
		var e = d(this);
		e.is(":hidden") || (e.fusion_recalc_circles(!1), e.find("canvas").remove(), e.find(".counter-circle").removeData("easyPieChart"), e.fusion_draw_circles())
	}
}(jQuery), jQuery(window).load(function() {
	jQuery(".counter-circle-wrapper").not(".fusion-accordian .counter-circle-wrapper, .fusion-tabs .counter-circle-wrapper, .fusion-modal .counter-circle-wrapper").each(function() {
		var e = getWaypointOffset(jQuery(this));
		jQuery(this).waypoint(function() {
			jQuery(this).fusion_recalc_circles(!0), jQuery(this).fusion_draw_circles()
		}, {
			triggerOnce: !0,
			offset: e
		})
	}), jQuery(".counter-circle-wrapper").not(".fusion-modal .counter-circle-wrapper").each(function() {
		var r = jQuery(window).width(),
			c = jQuery(window).height(),
			e = getWaypointOffset(jQuery(this));
		"top-out-of-view" === e && (e = getAdminbarHeight() + ("function" == typeof getStickyHeaderHeight ? getStickyHeaderHeight() : "0")), jQuery(this).waypoint(function() {
			var i = jQuery(this);
			jQuery(window).on("resize", function(e, t) {
				void 0 !== t && "modal-open" === t || (jQuery(window).width() != r || jQuery(window).width() != r && jQuery(window).height() != c) && i.fusion_redraw_circles()
			})
		}, {
			triggerOnce: !0,
			offset: e
		})
	}), jQuery(".fusion-accordian .counter-circle-wrapper, .fusion-tabs .counter-circle-wrapper, .fusion-modal .counter-circle-wrapper").on("appear", function() {
		jQuery(this).fusion_draw_circles()
	})
});