const ks = require('sendkeys-js');
const { listConnectedJoyCons } = require('switch-joy-con');

const con = listConnectedJoyCons()[0].open();
con.on('change', () => {
	const { a, b, x, y, dpadUp, dpadDown, dpadLeft, dpadRight } = con.buttons;
	if ([a, b, x, dpadUp, dpadDown, dpadRight].includes(true)) {
		ks.send('space');
	}
	if ([y, dpadLeft].includes(true)) {
		ks.send('left');
	}
});
