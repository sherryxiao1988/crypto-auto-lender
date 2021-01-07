const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/snpHo7c29zbp460Csa46'));

const traillingZerosNum = 1;
const pattern = /1008$/;

var lastAddress;

//while(true) {
//  const account = web3.eth.accounts.create();

//  lastAddress = account.address;
//  if(lastAddress && lastAddress.slice(-traillingZerosNum) === '0'.repeat(traillingZerosNum)) {
//    console.log('Found valid address!');
//    console.log('account is: ', account);
//    break;
//  }
//}


while(true) {
  const account = web3.eth.accounts.create();

  lastAddress = account.address;
  const result = pattern.exec(lastAddress);
  if(result) {
    console.log('Found valid address!');
    console.log('account is: ', account);
    break;
  }
}
