var ko       = require('knockout'),
	wildDice = require('./wildDice.js');

require('./bindings/frontend.js');
require('./bindings/scoring.js');

ko.applyBindings( wildDice );
