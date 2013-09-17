/*
extended ie only intergration / bi=ug fixes

 * ie.js
 * @version 0.0
 * @author Leo Burnett - http://www.leoburnett.com/
 * @requires jQuery Core 1.4.3 - http://www.jquery.com/
 */
 
 
M7.IE = (function () {
	// -- Private Variables --------------------------------------------------------
           
	// -- Private Methods --------------------------------------------------------
		
	// -- Public Methods --------------------------------------------------------
	return {
        iePngFilter: function iePngFilter() {
		    var i;
            for (i in document.images) {
                if (document.images[i].src) {
                    var imgSrc = document.images[i].src;
                    if (imgSrc.substr(imgSrc.length-4) === '.png' || imgSrc.substr(imgSrc.length-4) === '.PNG') {
                        document.images[i].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='crop',src='" + imgSrc + "')";
                    }
                }
            }
        }
	};
}());

// -- on DOM ready --------------------------------------------------------

$(document).ready(function () {
    //M7.IE.iePngFilter();
});