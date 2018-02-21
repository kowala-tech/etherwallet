'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    kUSD: "kUSD",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN kUSD",
    Kovan: "KOVAN kUSD",
    Rinkeby: "RINKEBY kUSD",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    POA: "POA",
    TOMO: "TOMO",
    ELLA: "ELLA",
    Custom: "CUSTOM kUSD"
};
nodes.ensNodeTypes = [nodes.nodeTypes.kUSD, nodes.nodeTypes.Ropsten];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.kUSD, nodes.nodeTypes.Ropsten];
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
        'type': nodes.nodeTypes.kUSD,
        'eip155': true,
        'chainId': 234589643825,
        'tokenList': [],
        'service': 'testnet.kowalatech.io',
        'lib': new nodes.customNode('http://rpcnode.testnet.kowala.io', '30503')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
