try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "onRender",
		[
			"angular",
			"jquery",
			"appDetermine",
		],
		function construct( ){
			var onRender = function onRender( element, handler ){
				appDetermine( )
					.run( [
							"$timeout",
							function onRun( $timeout ){
								var timeout = $timeout( function subHandler( ){
									$( element ).ready( handler );
									$timeout.cancel( timeout );
								}, 0 );
							}
						] );
			};
			
			base.onRender = onRender;
			return onRender;
		} );
} )( base );