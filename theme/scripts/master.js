/*!
 * [Project Name]
 * ABS-CBN Corporation 2017
 */

var ABSCBN = (function() {
	'use strict';

	function init() {
		if($(".main .home").length > 0) {
			home.init();
		}
	}

	return {
		init: init
	};
}());

jQuery(document).ready(function($) { ABSCBN.init(); });
