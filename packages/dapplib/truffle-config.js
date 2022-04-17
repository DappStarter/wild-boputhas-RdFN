require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food cheap return still minimum gesture office army gesture'; 
let testAccounts = [
"0x6680deac2558e9148b1cb2db0a0fcca56096b1ef41784acf3a07a32eada30750",
"0x832f85335dc29ed09fdf010bc2e6d0d80a61760b0cc888c0cb80cf44c5fcc8f5",
"0xf08a25fc22a3a1c30463adb773c7f99a60b6b2a465793fb688f0f66f60c813fd",
"0x78801148f09531d33ff535016a1bc889e05cd29279afd77f9ccd6b598efcdd69",
"0xf35ac089e6da7680d0be842b295e77bf86e94c204c4ac3c69bcf7abd1c0746dc",
"0xb95bb73c39ff98e4fa3e229987ac6e9ccd4bd3e6e06ff8022047c38504f5085c",
"0x01ccd556071de9630a2e789b17f2d9a2a2b4e04fb7405b3ba6f6865f9a5891d1",
"0x6aea2d981f76e9b076ad23e481c26b43e617eac1731ce3e59582e3b7ffa3e317",
"0x2a38ca1b297f32f85ab25f817bf486bc2aca47bccb404293597dcb4357dcc33e",
"0xf71aa2cc036ff0a65c891beb96b1f33a34c862e6b9e07c6487485793db093873"
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
            version: '^0.8.0'
        }
    }
};

