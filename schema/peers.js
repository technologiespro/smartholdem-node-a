'use strict';

module.exports = {
    headers: {
        id: 'peer.headers',
        type: 'object',
        properties: {
            port: {
                type: 'integer',
                minimum: 1,
                maximum: 65535
            },
            os: {
                type: 'string',
                maxLength: 64
            },
            nethash: {
                type: 'string',
                maxLength: 64
            },
            height: {
                type: 'integer',
                minimum: 0
            },
            version: {
                type: 'string',
                maxLength: 11
            },
            blockheader: {
                type: 'object'
            }
        },
        required: ['port', 'nethash', 'version']
    },
    updatePeersList: {
        peers: {
            id: 'peer.updatePeersList.peers',
            type: 'object',
            properties: {
                peers: {
                    type: 'array',
                    uniqueItems: true
                }
            },
            required: ['peers']
        },
        peer: {
            id: 'peer.updatePeersList.peer',
            type: 'object',
            properties: {
                ip: {
                    type: 'string',
                    format: 'ip'
                },
                port: {
                    type: 'integer',
                    minimum: 1,
                    maximum: 65535
                },
                state: {
                    type: 'integer',
                    minimum: 0,
                    maximum: 3
                },
                os: {
                    type: 'string',
                    maxLength: 64
                },
                version: {
                    type: 'string',
                    maxLength: 11
                }
            },
            required: ['ip', 'port']
        }
    },
    getPeers: {
        id: 'peer.getPeers',
        type: 'object',
        properties: {
            port: {
                type: 'integer',
                minimum: 1,
                maximum: 65535
            },
            state: {
                type: 'integer',
                minimum: 0,
                maximum: 3
            },
            os: {
                type: 'string',
                maxLength: 64
            },
            version: {
                type: 'string',
                maxLength: 11
            },
            orderBy: {
                type: 'string'
            },
            limit: {
                type: 'integer',
                minimum: 0,
                maximum: 100
            },
            offset: {
                type: 'integer',
                minimum: 0
            }
        }
    },
    getPeer: {
        id: 'peer.getPeer',
        type: 'object',
        properties: {
            ip: {
                type: 'string',
                format: 'ip'
            },
            port: {
                type: 'integer',
                minimum: 0,
                maximum: 65535
            }
        },
        required: ['ip', 'port']
    }
};
