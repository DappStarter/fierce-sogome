require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rifle rural unknown hope civil army general'; 
let testAccounts = [
"0x42ee29fb5699fa3f17fb7c67645ede2a69da654bc78313e6bc4ebda22dcda9fc",
"0x1e6b897a3920b65bfe97a2a8e6df14b141c7c883bf938e6741e486215e6ebedc",
"0xd7299d5f9893de3143786b210fc9ec9b7dd7ab4f2c9e55676ea12f2f8d6d876c",
"0x3012835229737243eccef8325d3800e27ea5e48e9aa463dd59a084fb1dd65c3e",
"0x4188a042c57bf54e7da38ebae3f3413fd88fc83cd227f9fb2d0ab74ba64eaa36",
"0x9d13abcfa503c118d3640560b3b8cb952edd53059c8589d541c6e9ced6103e5d",
"0x3185a30f7091d444a00307f932586ebbcf5fbcf79fa20e9fdc96fcf7893f22ad",
"0xb2779d71ca4fa231e9a43dd395ed12bef5e7dc7ea312456476967c180af0954d",
"0xccc67a0b29c4a803db116921cb1aba761b8b3ef23b8569d8486eef11efc73c64",
"0x779e613530201892eed9cb960f0dbccb28e8d50dc4228d8f232e4b80713efb4b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
