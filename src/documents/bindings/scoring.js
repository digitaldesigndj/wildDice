var ko       = require('knockout'),
	wildDice = require('../wildDice.js');

// Scoring Bindings

wildDice.dice_array = ko.dependentObservable( function(){
	var array = [];
	if( this.dice1_value() !== 7 ){
		array.push( this.dice1_value() );
	}
	if( this.dice2_value() !== 7 ){
		array.push( this.dice2_value() );
	}
	if( this.dice3_value() !== 7 ){
		array.push( this.dice3_value() );
	}
	if( this.dice4_value() !== 7 ){
		array.push( this.dice4_value() );
	}
	if( this.dice5_value() !== 7 ){
		array.push( this.dice5_value() );
	}
	array.sort( function( a, b ){ return a - b } );
	console.log( array );
	return array;
}, wildDice );

wildDice.game_over = ko.dependentObservable( function(){
	self = this;
	var game_over_turns = 12;
	if( self.yacht_number() === 0 ){
		game_over_turns = 13;
	}
	if( ( ( self.turn() + 1 /* Don't count first yacht */ ) - self.yacht_number() ) === game_over_turns ){
		alert( "Game Over, Score: " + self.score() );
	}
	if( self.turn() === 13 && self.roll_number() === 3 && self.yacht_number() === 0 ){
		// run the Yacht Check for score
		self.yacht();
		alert( "Game Over, Score: " + self.score() );
	}
}, wildDice );
