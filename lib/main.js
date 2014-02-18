var data = require( 'sdk/self' ).data;
var pageMod = require( 'sdk/page-mod' );
var simpleStorage = require("sdk/simple-storage");

pageMod.PageMod( {
	include: ["*"],
	
	// contentStyle is built dynamically here to include absolute URLs
	// for the images referenced by jquery.ime.css.
	// This workaround is needed because we can't use relative URLs 
	// in contentStyleFile or contentStyle.
	

	// Inject the required scripts into the page
	contentScriptFile: [
		
		data.url( 'triger.js' )		
		
	]
} );

