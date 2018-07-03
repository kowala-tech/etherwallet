'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
	kUSD: "KUSD",
	Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [];
nodes.ensSubNodeTypes = [];
nodes.domainsaleNodeTypes = [];
nodes.customNodeObj = {
	'name': 'CUS',
	'blockExplorerTX': '',
	'blockExplorerAddr': '',
	'type': nodes.nodeTypes.Custom,
	'eip155': false,
	'chainId': '',
	'tokenList': [],
	'abiList': [],
	'service': 'Custom',
	'lib': null
};
nodes.nodeList = {
	'kusd_testnet': {
		'name': 'kUSD',
		'blockExplorerTX': '',
		'blockExplorerAddr': '',
		'type': nodes.nodeTypes.kUSD,
		'eip155': false,
		'chainId': 2,
		'tokenList': [],
		'abiList': [],
		'estimateGas': false,
		'service': 'Zygote Testnet',
		'lib': new nodes.customNode('https://secure.rpcnode.zygote.kowala.tech', '30503'),
	},
};

nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
