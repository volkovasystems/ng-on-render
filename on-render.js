try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "onRender",
		[
			"angular",
			"jquery"
		],
		function construct( ){
			var onRender = function onRender( $timeout, element, handler ){
				$timeout( function subHandler( ){
					$( element ).ready( handler );
				}, 0 );
			};
			base.onRender = onRender;
			return onRender;
		} );
} )( base );