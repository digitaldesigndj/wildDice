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
