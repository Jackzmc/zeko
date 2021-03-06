const {stripIndents} = require('common-tags');
exports.run = async (client,msg,args) => {
	msg.channel.send("Ping?").then(m => {
		m.edit(stripIndents`Pong! Roundtrip: \`\`${(msg.createdTimestamp - m.createdTimestamp) * -1}ms\`\` Heartbeat: \`\`${Math.round(client.ping)}ms\`\``)
	});
};

exports.config = {
	usageIfNotSet: false,
};

exports.help = {
	name: 'ping',
	description: 'Shows bot latency',
	usage:'ping'
};
 