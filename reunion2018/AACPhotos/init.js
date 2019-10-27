/**
* Responsive
* 
* author: Thilo Ilg
* version: 1.1.5
* 
**/

/** 
* --- jAlbumGlobals ---
* jAlbumGlobals is responsible for constant parameter of the skin.
* In the process of creating an album the jAlbum parser will overwrite 
* the variables according to the skin with the selected ones in the
* program. jAlbumGlobals also includes global variables which describe
* the state of the skin like if it is embedded, viewed on a mobile device,
* online or in filesystem etc.
*/
var jAlbumGlobals = (function () {

	var styles = ["dark.css", "light.css", "transparent.css"]; // styles

	var mobile = isMobile(); // is the skin viewed on a mobile device
	var online = isOnline(); // is the skin viewed online or in the filesystem
	var jAlbumURL = getURL(); // what's the current url?

	var stylePath = ""; //path points to the styles folder
	var resPath = ""; // path points to the res folder

	var credits = ""; // should skin show credits in footer
	var albumTitle = "Alabama Athletic Club"; // what's the album title?
	var contentPath = ""; // path points to the skin folder
	var imgHoverScaleFactor = "scale(1.1)"; // scale factor of hovering an element

	var folderTitleUp = true; // positioning of folder title, under or above folder
	var folderImgCount = false; // says if folder deep count should be shown
	var maxImgInRow = 10; // restricts the number of elements in a row
	var imgBorderSize = 2; // define border size of element
	var imgBoxSize = 150; // defines size of container of element
	var showFolderName = false; // says if folder name should be displayed
	var textSize = 11; // defines text size of whole page
	var showComments = false; // defines if comments should be shown in slideshow
	var slideBorderSize = 0;
	var slideBorderColor = "#ff000000";
	var style = "dark.css";

	var dataTree = {"path":"AACPhotos","counters":{"total":8,"images":8,"files":8},"objects":[{"path":"theSocialGHS88.jpg","image":{"path":"theSocialGHS88.jpg","width":800,"height":533},"thumb":{"path":"thumbs\/theSocialGHS88.jpg","width":90,"height":60},"fileSize":58215,"name":"theSocialGHS88.jpg","fileDate":"2018-06-28T21:07:52.838Z","category":"image"},{"path":"theSocialGHS88b.jpg","image":{"path":"theSocialGHS88b.jpg","width":800,"height":533},"thumb":{"path":"thumbs\/theSocialGHS88b.jpg","width":90,"height":60},"fileSize":59406,"name":"theSocialGHS88b.jpg","fileDate":"2018-06-28T21:07:52.855Z","category":"image"},{"path":"theSocialGHS88c.jpg","image":{"path":"theSocialGHS88c.jpg","width":800,"height":533},"thumb":{"path":"thumbs\/theSocialGHS88c.jpg","width":90,"height":60},"fileSize":108308,"name":"theSocialGHS88c.jpg","fileDate":"2018-06-28T21:07:52.872Z","category":"image","camera":{"aperture":14.0,"exposureTime":"1.0s","originalDate":"2018-01-27T21:08:29.0Z","cameraModel":"NIKON D3S","focalLength35mm":"15.0mm","resolution":"3585 x 2388","cameraMake":"NIKON CORPORATION","isoEquivalent":800,"flash":"Flash fired, return detected","focalLength":"15.0mm"}},{"path":"theSocialGHS88d.jpg","image":{"path":"theSocialGHS88d.jpg","width":800,"height":533},"thumb":{"path":"thumbs\/theSocialGHS88d.jpg","width":90,"height":60},"fileSize":83395,"name":"theSocialGHS88d.jpg","fileDate":"2018-06-28T21:07:52.890Z","category":"image"},{"path":"theSocialGHS88e.jpg","image":{"path":"theSocialGHS88e.jpg","width":800,"height":534},"thumb":{"path":"thumbs\/theSocialGHS88e.jpg","width":90,"height":60},"fileSize":65153,"name":"theSocialGHS88e.jpg","fileDate":"2018-06-28T21:07:52.908Z","category":"image","camera":{"aperture":4.5,"exposureTime":"0.5s","originalDate":"2017-12-15T06:30:30.0Z","cameraModel":"Canon EOS Rebel T6","resolution":"5184 x 3456","cameraMake":"Canon","isoEquivalent":400,"flash":"Flash did not fire, auto","focalLength":"30.0mm"}},{"path":"theSocialGHS88f.jpg","image":{"path":"theSocialGHS88f.jpg","width":800,"height":534},"thumb":{"path":"thumbs\/theSocialGHS88f.jpg","width":90,"height":60},"fileSize":71198,"name":"theSocialGHS88f.jpg","fileDate":"2018-06-28T21:07:52.925Z","category":"image","camera":{"aperture":4.0,"exposureTime":"0.5s","originalDate":"2017-12-15T05:12:41.0Z","cameraModel":"Canon EOS Rebel T6","resolution":"5184 x 3456","cameraMake":"Canon","isoEquivalent":400,"flash":"Flash did not fire, auto","focalLength":"21.0mm"}},{"path":"theSocialGHS88g.jpg","image":{"path":"theSocialGHS88g.jpg","width":800,"height":533},"thumb":{"path":"thumbs\/theSocialGHS88g.jpg","width":90,"height":60},"fileSize":68038,"name":"theSocialGHS88g.jpg","fileDate":"2018-06-28T21:07:52.941Z","category":"image"},{"path":"theSocialGHS88party.jpg","image":{"path":"theSocialGHS88party.jpg","width":800,"height":533},"thumb":{"path":"thumbs\/theSocialGHS88party.jpg","width":90,"height":60},"fileSize":85107,"name":"theSocialGHS88party.jpg","fileDate":"2018-06-28T21:07:52.959Z","category":"image"}],"name":"AACPhotos","fileDate":"2018-06-28T21:36:58.596Z","title":"Alabama Athletic Club"}; // includes all the album data in a json tree
	var stylePath = ""; 

	var widgetColor = getWidgetColor(); // get suggested color for widget support

	/** check if page viewed on mobile device **/
	function isMobile(){
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
	}

	/** check if page viewed online or from file system **/
	function isOnline(){
		switch(window.location.protocol) {
		   case 'http:':
		   		return true;
		   case 'https:':
		     	return true;
		   case 'file:':
		    	return false;
		}
	}

	/** get current url of page **/
	function getURL(){
		var curr = document.getElementById('jAlbum').src;
		return curr.substring(0, curr.lastIndexOf("/") + 1);
	}

	/** get fidget color according to current style **/
	function getWidgetColor(){
		if(style == styles[0]) return "black";
		else return "white";
	}

	/** returns all the public variables and functions **/
	return {
		mobile: mobile,
		online: online,
		jAlbumURL: jAlbumURL,
		stylePath: stylePath,
		resPath: resPath,
		credits: credits,
		albumTitle: albumTitle,
		contentPath: contentPath,
		imgHoverScaleFactor: imgHoverScaleFactor,
		folderTitleUp: folderTitleUp,
		folderImgCount: folderImgCount,
		maxImgInRow: maxImgInRow,
		imgBorderSize: imgBorderSize,
		imgBoxSize: imgBoxSize,
		showFolderName: showFolderName,
		textSize: textSize,
		showComments: showComments,
		dataTree: dataTree,
		stylePath: stylePath,
		slideBorderSize: slideBorderSize,
		slideBorderColor: slideBorderColor,
		widgetColor: widgetColor
	};

})();

/** --- jAlbumInject ---
* jAlbumInject is responsible for copying html code into
* the website. Stylesheet includes will be printed into
* the header, the body will be printed to the position
* of the embed code.
*/
var jAlbumInject = (function () {

	appendToHead(injLink('res/css/normalize.min.css', 'stylesheet')); // normalizes browser specific stylesheet defaults
	appendToHead(injLink('res/css/custom.min.css', 'stylesheet')); // customized desgin of the skin, will be partly overwritten by style.css
	appendToHead(injLink('res/styles.css', 'stylesheet')); // different styles to the skin which change the appearance

	appendToHead(injMeta("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0")); // viewport handles mobile scaling size

	inj('<div id="Responsive" class="jAlbum">'); // Responsive id surrounds all code of the body of the skin
	inj('<div id="fullscreen"></div>'); // element where to add fullscreen
	//inj('<div id="jAlbum-header"></div>'); // header container
	inj('<div id="jAlbum-content"></div>'); // content container
	inj('<div style="clear: both"></div>');

	inj('</div>');

	inj('<script src="' + jAlbumGlobals.jAlbumURL + 'res/libs/jquery-2.1.4.min.js"></script>'); // embets jQuery library
	inj('<script type="text/javascript">$(document).bind("mobileinit", function(){$.extend($.mobile , {autoInitializePage: false})});</script>'); // deactivates jQuery unnecessary mobile feature
	inj('<script src="' + jAlbumGlobals.jAlbumURL + 'res/libs/jquery.mobile-1.4.5.min.js"></script>'); // includes jQuery Mobile
	inj('<script src="' + jAlbumGlobals.jAlbumURL + 'res/libs/jquery.touchswipe.min.js"></script>'); // jQuery touchswipe plugin
	inj('<script src="' + jAlbumGlobals.jAlbumURL + 'res/js/main.js" type="text/javascript"></script>'); // includes skin controller
	
	/** injects html code at embedded position **/
	function inj(html){
		document.write(html);
	}

	/** injects html code in header **/
	function appendToHead(elem){
		document.getElementsByTagName('head').item(0).appendChild(elem);
	}

	/** injects header of embedded page with stylesheet includes **/
	function injLink(path, rel){
		var elem = document.createElement("link");
		elem.href = jAlbumGlobals.jAlbumURL + path;
		elem.rel = rel;

		return elem;
	}

	function injMeta(name, content){
		var elem = document.createElement("meta");
		elem.name = name;
		elem.content = content;

		return elem;
	}

})();


/** --- Widget Support---
* provides JavaScript code for jAlbum widget support
*/
window._jaWidgetBarColor = jAlbumGlobals.widgetColor;

if(!document.getElementById('non-embedded')){ // check if embedded
	window._jaUrl = jAlbumGlobals.jAlbumURL;
	 // get JavaScript code for widget
}
