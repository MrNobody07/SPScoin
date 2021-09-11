const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('21c794dfa5422d2b3bd6d93fe59e8ceb9dcbac3c37a2e422402db17967b2f109');
const myWalletAddress = myKey.getPublic('hex');

let SPSCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 17);
tx1.signTransaction(myKey);
SPSCoin.addTransaction(tx1);


console.log('\n Starting the miner...');
SPSCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of raito is', SPSCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?' , SPSCoin.isChainValid());