! function(o) {
	"use strict";
	o.fn.fusion_countdown = function() {
		var t = o(this),
			n = t.data("timer").split("-"),
			e = t.data("gmt-offset"),
			i = t.data("omit-weeks");
		t.countDown({
			gmtOffset: e,
			omitWeeks: i,
			targetDate: {
				year: n[0],
				month: n[1],
				day: n[2],
				hour: n[3],
				min: n[4],
				sec: n[5]
			}
		}), t.css("visibility", "visible")
	}
}(jQuery), jQuery(document).ready(function() {
	jQuery(".fusion-countdown-counter-wrapper").each(function() {
		var t = jQuery(this).attr("id");
		jQuery("#" + t).fusion_countdown()
	})
});