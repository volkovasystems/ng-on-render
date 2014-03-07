try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "onRender",
		[
			"angular",
			"jquery"
		],
		function construct( ){
			var onRender = function onRender( $timeout, element, handler ){
				var timeout = $timeout( function subHandler( ){
					$( element ).ready( handler );
					$timeout.cancel( timeout );
				}, 0 );
			};
			base.onRender = onRender;
			return onRender;
		} );
} )( base );