const crypto = require("crypto");

const message = 'Hello, blockchain enthusiasts!';

console.log(crypto.createHash('sha256').update(new Buffer(message,'UTF-8')).digest('hex'));

function randomString() {
    len = 8;
    return crypto.randomBytes(Math.ceil(len/2)).toString('hex').slice(0,len);
}

let attempt = 1;
let nonce;
while(true) {
    nonce = randomString();
    let hashValue = crypto.createHash('sha256').update(new Buffer(message + nonce,'UTF-8')).digest('hex');
    if (hashValue.startsWith('00000')) {
        console.log("nonce: ", nonce );
        console.log('hash:', hashValue);
        console.log('attempts: ', attempt);
        break;
    }
    attempt++;
} 