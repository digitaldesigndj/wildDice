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
	// check length here, if not 5 turn off scoring
	// console.log( array );
	return array;
}, wildDice );

wildDice.turns_left = ko.dependentObservable( function(){
	return 12 - this.turn() + this.yacht_number();
}, wildDice );

wildDice.turns_tillgameover = ko.dependentObservable( function(){
	var game_over_turns = 12;
	if( this.yacht_number() === 0 ){
		game_over_turns = 13;
	}
	return game_over_turns;
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

wildDice.bonus = ko.dependentObservable( function(){
	var self       = this,
		total      = 0,
		have_bonus = false;
	if( !have_bonus && !self.ones_active() && !self.twos_active() && !self.threes_active() && !self.fours_active() && !self.fives_active() && !self.sixes_active() ){
		total = self.top_total();
		console.log( "TOTAL: "+ total );
		if( total >= 63 ){
			self.score( self.score() + 35 );
			have_bonus = true;
		}
	}
	return have_bonus;
}, wildDice );