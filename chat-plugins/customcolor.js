'use strict';

const FS = require('./../lib/fs');
const COLORS_FILE = FS('./../config/colors.json');

exports.commands = {
	customcolor: {

		see: 'view',
		view: function (target, room, user) {
			let rawHexdec = (target.charAt(0) === '#' ?
				target.slice(1).toUpperCase() :
				target.toUpperCase());

			if (rawHexdec.length !== 6 || target.match(/[g-z]/i)) {
				this.sendReplyBox(`<b>${target}</b> is not a valid hex code!`);
			} else if (this.runBroadcast()) {
				let hexdec = `#${rawHexdec}`;
				let msgFormat = `<b>Username via ${hexdec}: <font color="${hexdec}"> ${user} </font></b>`;
				this.sendReplyBox(msgFormat);
			}
		},
		// viewhelp: ["/customcolor view -c [hexcode] - Preview your username via a given hexadecimal code.",
		// 	"/customcolor view -u [username], -c [hexcode] - Preview a username via a given hexadecimal code."],

		permit: 'auth',
		auth: function (target, room, user) {
			this.sendReply('The requested feature is currently in development.');
			// // IN DEVELOPMENT: Check Global & Room Minimum Auth
			// if target
			// COLORS_FILE.readSync('global');
		},

		edit: 'set',
		change: 'set',
		set: function (target, room, user) {
			this.sendReply('The requested feature is currently in development.');
		},

		original: 'default',
		default: function (target, room, user) {
			this.sendReply('The requested feature is currently in development.');
		},
	},
};
