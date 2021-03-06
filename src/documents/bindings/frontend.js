var ko       = require('knockout'),
	wildDice = require('../wildDice.js');

// Frontend display bindings

// // This formats the credits message
// wildDice.credits_message = ko.dependentObservable( function(){
// 	return "Credits: " + this.credits();
// }, wildDice);

// Dice display bindings
// These keep the proper CSS Class strings applied to each card
wildDice.dice1_class = ko.dependentObservable( function(){
	var diceClass = 'value' + this.dice1_value();
	if( this.dice1_hold() ){
		diceClass += ' hold';
	}
	if( this.dice1_wild() ){
		diceClass += ' wild'
	}
	return diceClass;
}, wildDice );

wildDice.dice1_value.subscribe(function(newValue) {
	// console.log( $( 'dice1' ).find( 'cell' ) );
	diceDots( $('.dice1'), newValue );
});

wildDice.dice2_class = ko.dependentObservable( function(){
	var diceClass = 'value' + this.dice2_value();
	if( this.dice2_hold() ){
		diceClass += ' hold';
	}
	if( this.dice2_wild() ){
		diceClass += ' wild'
	}
	return diceClass;
}, wildDice );

wildDice.dice2_value.subscribe(function(newValue) {
	// console.log( $( 'dice2' ).find( 'cell' ) );
	diceDots( $('.dice2'), newValue );
});

wildDice.dice3_class = ko.dependentObservable( function(){
	var diceClass = 'value' + this.dice3_value();
	if( this.dice3_hold() ){
		diceClass += ' hold';
	}
	if( this.dice3_wild() ){
		diceClass += ' wild'
	}
	return diceClass;
}, wildDice );

wildDice.dice3_value.subscribe(function(newValue) {
	// console.log( $( 'dice3' ).find( 'cell' ) );
	diceDots( $('.dice3'), newValue );
});

wildDice.dice4_class = ko.dependentObservable( function(){
	var diceClass = 'value' + this.dice4_value();
	if( this.dice4_hold() ){
		diceClass += ' hold';
	}
	if( this.dice4_wild() ){
		diceClass += ' wild'
	}
	return diceClass;
}, wildDice );

wildDice.dice4_value.subscribe(function(newValue) {
	// console.log( $( 'dice4' ).find( 'cell' ) );
	diceDots( $('.dice4'), newValue );
});

wildDice.dice5_class = ko.dependentObservable( function(){
	var diceClass = 'value' + this.dice5_value();
	if( this.dice5_hold() ){
		diceClass += ' hold';
	}
	if( this.dice5_wild() ){
		diceClass += ' wild'
	}
	return diceClass;
}, wildDice );

wildDice.dice5_value.subscribe(function(newValue) {
	// console.log( $( 'dice5' ).find( 'cell' ) );
	diceDots( $('.dice5'), newValue );
});

function diceDots( element, number ){
	var matrix = [0,0,0,0,0,0,0,0,0];
	switch ( number ) {
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
