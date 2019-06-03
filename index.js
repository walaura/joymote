const ks = require('sendkeys-js');
const { listConnectedJoyCons } = require('switch-joy-con');

const con = listConnectedJoyCons()[0].open();
const { a, b, x, y, dpadUp, dpadDown, dpadLeft, dpadRight } = con.buttons;

con.on('change', () => {
	if ([a, b, x, dpadUp, dpadDown, dpadRight].includes(true)) {
		ks.send('space');
	}
	if ([y, dpadLeft].includes(true)) {
		ks.send('left');
	}
});
