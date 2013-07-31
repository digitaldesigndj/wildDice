module.exports = {
	number_of_cells: 9,
	init: function(){
		self = this;
		self.setupCells();
		self.rollAll();
		$('button').on('click', function(){
			self.rollAll();
		});
	},
	setupCells: function(){
		self = this;
		for (var i=0;i<self.number_of_cells;i++){
			$('.dice').append( $('<div/>').addClass("cell") );
		}
	},
	rollAll: function(){
		$('.dice').each(function( i, v ){
			move( v )
				.translate(-20).ease('in').then()
					.translate(40).ease('in-out').then()
						.translate(-20).ease('out')
					.pop()
				.pop()
			.end();
			window.setTimeout(function(){ self.rollSingle( v ); }, 450);
		});
	},
	rollSingle: function( element ){
		result = Math.floor( Math.random() * 7 ) + 1;
		matrix = [0,0,0,0,0,0,0,0,0];
		switch ( result ) {
			case 1:
				matrix = [0,0,0,0,1,0,0,0,0];
				break;
			case 2:
				matrix = [1,0,0,0,0,0,0,0,1];
				break;
			case 3:
				matrix = [1,0,0,0,1,0,0,0,1];
				break;
			case 4:
				matrix = [1,0,1,0,0,0,1,0,1];
				break;
			case 5:
				matrix = [1,0,1,0,1,0,1,0,1];
				break;
			case 6:
				matrix = [1,0,1,1,0,1,1,0,1];
				break;
			default:
				matrix = [1,1,1,1,1,1,1,1,1];
		}
		$( element ).each(function( i, v ){
			$( element ).find('.cell').each(function( i, v ){
				if( matrix[i] ){
					$(v).css({'background-color':'black'});
				}else{
					$(v).css({'background-color':'white'});
				}
			});
		});
	}

}