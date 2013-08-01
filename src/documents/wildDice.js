var $     = require('jquery-browserify'),
	ko    = require('knockout');

module.exports = {
	message: ko.observable( 'Welcome' ),
	score: ko.observable( 0 ),
	new_game_visible: ko.observable( true ),
	roll_visible: ko.observable( false ),
	turn: ko.observable( 0 ),
	roll_number: ko.observable( 0 ),
	can_select_score: ko.observable( false ),
	can_roll: ko.observable( false ),

	dice1_value: ko.observable(),
	dice1_wild: ko.observable( false ),
	dice1_hold:  ko.observable( false ),
	dice1_hold_toggle: function(){
		if( !this.dice1_wild() ){
			this.dice1_hold( !this.dice1_hold() );
		}else{
			if( this.dice1_value() === 6 || this.dice1_value() === 7 ){
				this.dice1_value( 1 );
			}else{
				this.dice1_value( this.dice1_value() + 1 );
			}
		}
	},

	dice2_value: ko.observable(),
	dice2_wild: ko.observable( false ),
	dice2_hold:  ko.observable( false ),
	dice2_hold_toggle: function(){
		if( !this.dice2_wild() ){
			this.dice2_hold( !this.dice2_hold() );
		}else{
			if( this.dice2_value() === 6 || this.dice2_value() === 7 ){
				this.dice2_value( 1 );
			}else{
				this.dice2_value( this.dice2_value() + 1 );
			}
		}
	},

	dice3_value: ko.observable(),
	dice3_wild: ko.observable( false ),
	dice3_hold:  ko.observable( false ),
	dice3_hold_toggle: function(){
		if( !this.dice3_wild() ){
			this.dice3_hold( !this.dice3_hold() );
		}else{
			if( this.dice3_value() === 6 || this.dice3_value() === 7 ){
				this.dice3_value( 1 );
			}else{
				this.dice3_value( this.dice3_value() + 1 );
			}
		}
	},

	dice4_value: ko.observable(),
	dice4_wild: ko.observable( false ),
	dice4_hold:  ko.observable( false ),
	dice4_hold_toggle: function(){
		if( !this.dice4_wild() ){
			this.dice4_hold( !this.dice4_hold() );
		}else{
			if( this.dice4_value() === 6 || this.dice4_value() === 7 ){
				this.dice4_value( 1 );
			}else{
				this.dice4_value( this.dice4_value() + 1 );
			}
		}
	},

	dice5_value: ko.observable(),
	dice5_wild: ko.observable( false ),
	dice5_hold:  ko.observable( false ),
	dice5_hold_toggle: function(){
		if( !this.dice5_wild() ){
			this.dice5_hold( !this.dice5_hold() );
		}else{
			if( this.dice5_value() === 6 || this.dice5_value() === 7 ){
				this.dice5_value( 1 );
			}else{
				this.dice5_value( this.dice5_value() + 1 );
			}
		}
	},
	roll: function(){
		// console.log("ROLLING");
		self = this;
		self.can_select_score( true );
		if( self.roll_number() === 3 ){
			return;
		}
		if( self.roll_number() === 2 ){
			self.can_select_score( true );
			self.roll_visible( false );
		}
		self.roll_number( self.roll_number() + 1 );
		if( !self.dice1_hold() ){
			var value = self.getRandom();
			if( value === 7 ){
				self.dice1_wild( true );
				self.dice1_hold( true );
			}
			self.dice1_value( value );
		}
		if( !self.dice2_hold() ){
			var value = self.getRandom();
			if( value === 7 ){
				self.dice2_wild( true );
				self.dice2_hold( true );
			}
			self.dice2_value( value );
		}
		if( !self.dice3_hold() ){
			var value = self.getRandom();
			if( value === 7 ){
				self.dice3_wild( true );
				self.dice3_hold( true );
			}
			self.dice3_value( value );
		}
		if( !self.dice4_hold() ){
			var value = self.getRandom();
			if( value === 7 ){
				self.dice4_wild( true );
				self.dice4_hold( true );
			}
			self.dice4_value( value );
		}
		if( !self.dice5_hold() ){
			var value = self.getRandom();
			if( value === 7 ){
				self.dice5_wild( true );
				self.dice5_hold( true );
			}
			self.dice5_value( value );
		}
	},
	new_game: function(){
		self = this;
		self.roll_visible( true );
		self.new_game_visible( false );
		self.turn( 0 );
	},
	scoring: function(){
		
	},
	ones_active: ko.observable( true ),
	ones: function(){
		self = this;
		if( self.ones_active() && self.can_select_score() ){
			var scored = false;
			$.each( self.dice_array(), function( i, v ){
				if( v === 1 ){
					scored = true;
					self.score( self.score() + v );
				}
			});
			if( scored ){
				self.ones_active( false );
				self.new_turn();
			}
		}
	},
	twos_active: ko.observable( true ),
	twos: function(){
		self = this;
		if( self.twos_active() && self.can_select_score() ){
			var scored = false;
			$.each( self.dice_array(), function( i, v ){
				if( v === 2 ){
					scored = true;
					self.score( self.score() + v );
				}
			});
			if( scored ){
				self.twos_active( false );
				self.new_turn();
			}
		}
	},
	threes_active: ko.observable( true ),
	threes: function(){
		self = this;
		if( self.threes_active() && self.can_select_score() ){
			var scored = false;
			$.each( self.dice_array(), function( i, v ){
				if( v === 3 ){
					scored = true;
					self.score( self.score() + v );
				}
			});
			if( scored ){
				self.threes_active( false );
				self.new_turn();
			}
		}
	},
	fours_active: ko.observable( true ),
	fours: function(){
		self = this;
		if( self.fours_active() && self.can_select_score() ){
			var scored = false;
			$.each( self.dice_array(), function( i, v ){
				if( v === 4 ){
					scored = true;
					self.score( self.score() + v );
				}
			});
			if( scored ){
				self.fours_active( false );
				self.new_turn();
			}
		}
	},
	fives_active: ko.observable( true ),
	fives: function(){
		self = this;
		if( self.fives_active() && self.can_select_score() ){
			var scored = false;
			$.each( self.dice_array(), function( i, v ){
				if( v === 5 ){
					scored = true;
					self.score( self.score() + v );
				}
			});
			if( scored ){
				self.fives_active( false );
				self.new_turn();
			}
		}
	},
	sixes_active: ko.observable( true ),
	sixes: function(){
		self = this;
		if( self.sixes_active() && self.can_select_score() ){
			var scored = false;
			$.each( self.dice_array(), function( i, v ){
				if( v === 6 ){
					scored = true;
					self.score( self.score() + v );
				}
			});
			if( scored ){
				self.sixes_active( false );
				self.new_turn();
			}
		}
	},
	fullhouse_active: ko.observable( true ),
	fullhouse: function(){
		self = this;
		if( self.fullhouse_active() && self.can_select_score() ){
			var have_3_kind = false,
				have_2_kind = false;
			$.each( self.dice_array(), function( i, v ){
				if( 3 === self.countInArray( self.dice_array(), v ) ){
					have_3_kind = true;
				}
				if( 2 === self.countInArray( self.dice_array(), v ) ){
					have_2_kind = true;
				}
			});
			if( have_2_kind && have_3_kind ){
				self.score( self.score() + 25 );
				self.fullhouse_active( false );
				self.new_turn();
			}
		}
	},
	smstraight_active: ko.observable( true ),
	smstraight: function(){
		self = this;
		if( self.smstraight_active() && self.can_select_score() ){
			self.score( self.score() + 30 );
			self.smstraight_active( false );
			self.new_turn();
		}
	},
	lgstraigt_active: ko.observable( true ),
	lgstraigt: function(){
		self = this;
		if( self.lgstraigt_active() && self.can_select_score() ){
			self.score( self.score() + 40 );
			self.lgstraigt_active( false );
			self.new_turn();
		}
	},
	chance_active: ko.observable( true ),
	chance: function(){
		self = this;
		if( self.chance_active() && self.can_select_score() ){
			self.score( self.score() + self.sumAllDice() );
			self.chance_active( false );
			self.new_turn();
		}
	},
	kind3_active: ko.observable( true ),
	kind3: function(){
		self = this;
		if( self.kind3_active() && self.can_select_score() ){
			var have_3_kind = false;
			$.each( self.dice_array(), function( i, v ){
				if( 3 === self.countInArray( self.dice_array(), v ) ){
					have_3_kind = true;
				}
			});
			if( have_3_kind ){
				self.score( self.score() + self.sumAllDice() );
				self.kind3_active( false );
				self.new_turn();
			}
		}
	},
	kind4_active: ko.observable( true ),
	kind4: function(){
		self = this;
		if( self.kind4_active() && self.can_select_score() ){
			var have_4_kind = false;
			$.each( self.dice_array(), function( i, v ){
				if( 4 === self.countInArray( self.dice_array(), v ) ){
					have_4_kind = true;
				}
			});
			if( have_4_kind ){
				self.score( self.score() + self.sumAllDice() );
				self.kind4_active( false );
				self.new_turn();
			}
		}
	},
	yacht_active: ko.observable( true ),
	yacht_number: ko.observable( 0 ),
	yacht: function(){
		self = this;
		if( self.can_select_score() ){
			var first_die = 0;
			console.log( self.dice_array()[0] );
			console.log( self.countInArray( self.dice_array(), self.dice_array()[0] ) );
			if( 5 === self.countInArray( self.dice_array(), self.dice_array()[0] ) ){
				self.yacht_number( self.yacht_number() + 1 );
				self.score( self.score() + ( self.yacht_number() * 50 ) );
				self.new_turn();
			}
		}
	},
	getRandom: function(){
		return Math.floor( Math.random() * 7 ) + 1;
	},
	new_turn: function(){
		self = this;
		self.turn( self.turn() + 1 );
		self.can_select_score( false );
		self.roll_visible( true );

		self.dice1_hold( false );
		self.dice2_hold( false );
		self.dice3_hold( false );
		self.dice4_hold( false );
		self.dice5_hold( false );

		self.dice1_wild( false );
		self.dice2_wild( false );
		self.dice3_wild( false );
		self.dice4_wild( false );
		self.dice5_wild( false );
		self.roll_number( 0 );
		console.log('new turn');
	},
	countInArray: function( array, what ){
		var count = 0;
		for( var i = 0; i < array.length; i++ ){
			if( array[i] === what ){
				count++;
			}
		}
		return count;
	},
	sumAllDice: function(){
		var sum = 0;
		$.each( self.dice_array(), function( i, v ){
			sum += v;
		});
		return sum;
	}
};
