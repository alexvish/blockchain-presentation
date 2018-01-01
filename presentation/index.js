// Import React
import React from "react";
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Layout,
  Fit,
  Fill,
  Appear,
  S,
  Image,
  Markdown
} from "spectacle";


const Fit1 = styled(Fit)`
  white-space: pre;
`;

const images = {
  sign: require('../assets/sign.png'),
  verify: require('../assets/sign-verify.png'),
  coin: require('../assets/coin.gif'),
  doublespend: require('../assets/double-spending.png'),
  blockchain: require('../assets/blockchain.png'),
  transaction: require('../assets/transaction.png'),
  transaction1: require('../assets/transaction1.png'),
  address: require('../assets/address.png')
}

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#000044",
  secondary: "#f9c117",
  tertiary: "white",
  quarternary: "#00001f"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} progress="bar" transitionDuration={500} theme={theme}>
        <Slide>
          <Heading>Blockchain</Heading>
          <Text textColor="secondary">get enlightenment by blockchain studies</Text>
          <Notes>
            <p>Recently I started to learn about blockchain</p>
            <p>The best way to learn is to teach someone else.</p>
            <p>So, we have this presentation</p>
          </Notes>
        </Slide>
        <Slide>
          <Heading fit="true">Basics: cryptograpy primitives</Heading>
          <Notes>
            <p>We will start with exploring basic cryptograpy primitives that are used to build cryptocurrency.<br/>
            They are: 

            <ul>
              <li>cryptographic hashes</li>
              <li>public/private key pairs</li>
            </ul>
            </p> 
          </Notes>
        </Slide>
        <Slide>
          <Heading height="1.5em">Crypto Hash</Heading>
          <Layout>
            <Fit1><Text textColor="grey" textSize="0.7em">Hash Algorithm</Text></Fit1><Fill><Text textColor="grey" textSize="0.7em">Message</Text></Fill>
          </Layout>
          <Layout>
            <Fit1>SHA-256(</Fit1><Fill> 'Hello, blockchain enthusiasts!' </Fill><Fit1> )=</Fit1>
          </Layout>
          <Layout>
            <Fill><Text textColor="grey" textSize="0.7em">Hash Sum</Text></Fill>
          </Layout>
          <Layout>
            <Fill><Text textColor="secondary" textSize="0.75em"> e2c6c2f78c1e90cbde86e6c44c36ca9288eb1a13da0f62b18c2b22ce0b0d523d </Text></Fill>
          </Layout>
          <Notes>
            <div style={{'font-size': '20px'}}>
            <p>It is a mathematical algorithm that maps data of arbitrary size to a bit string of a fixed size 
            which is designed to also be a one-way function, that is, a function which is infeasible to invert.</p>
            <p>Important properties of crypto hash are:
              <ul>
                <li>it is deterministic so the same message always results in the same hash</li>
                <li>it is quick to compute the hash value for any given message</li>
                <li>it is infeasible to generate a message from its hash value except by trying all possible messages</li>
                <li>a small change to a message should change the hash value so extensively that the 
                      new hash value appears uncorrelated with the old hash value</li>
                <li>it is infeasible to find two different messages with the same hash value</li>
              </ul>
            </p>
            <p>
            Number of possible values for sha-256 is 2<sup>256</sup> ~= 1.15*10<sup>77</sup>. 
            </p>
            </div>
          </Notes>
        </Slide>
       <Slide>
          <Heading height="1.5em">Beautiful Hash</Heading>
          <Layout>
            <Fit1><Text textColor="grey" textSize="0.7em">Hash Algorithm</Text></Fit1><Fill><Text textColor="grey" textSize="0.7em">Message</Text></Fill><Fit1><Text textColor="grey" textSize="0.7em">Nonce              </Text></Fit1>
          </Layout>
          <Layout>
            <Fit1>SHA-256(</Fit1><Fill> 'Hello, blockchain enthusiasts!' </Fill><Fit1> + 'fe34f059'  )=</Fit1>
          </Layout>
          <Layout>
            <Fill><Text textColor="grey" textSize="0.7em">Hash Sum</Text></Fill>
          </Layout>
          <Layout>
            <Fill><Text textColor="secondary" textSize="0.75em"> <S type="bold">00000</S> d1f4ad4c0bad96121901051b10b03df2ace7d52408b5ccc6e494d0536c8 </Text></Fill>
          </Layout>
          <Notes>
            <div style={{'font-size': '20px'}}>
            <p>The task of calculating a beautiful hash is to find a nonce value that when hashed with message, hash conforms to some property, such as begins with pre-defined number of zero bits</p>
            <p>When using cryptographically strong hash algorithms, the only way to find nonce is scanning through all possible values</p>
            <p>The complexity of scanning for nonce value is exponential to number of zero bits</p>
            <p>Nonce value can be verified with single hash calculation</p>
            <p>Hash, that you see on the slide requiered 20 zero bits was generated after 947 904 unsuccessful attempts with random strings, wich took about 10 seconds on my laptop</p>
            </div>
          </Notes>
        </Slide>

       <Slide>
          <Heading fit="true">Asymetric cryptograpy</Heading>
          <List>
            <ListItem>Public/Private key pair</ListItem>
            <ListItem>Both keys of a pair can be used to encrypt messages</ListItem>
            <ListItem>Encryption with Public Key => secret messages</ListItem>
            <ListItem>Encryptoin with Private Key => digital signatures</ListItem>
          </List>
          <Notes>
            <p>Asymetric cryptosystems are build on the notion of two keys: public and private key pair</p>
            <p>Their usage is interchangeable: both keys can be used to encrypt messages.
            Whatever is encrypted with one key of the pair can be decrypted with and only with another key of the pair.</p>
            <p>
            Please note: Here presented a simplified view, that is more applicable to RSA-type of asymetric cryptograpy<br/>
            In case of RSA public and private keys are integer exponents, so the algorithm of encryption with public and private keys
            is the same. In case of Eliptic Curve Cryptograpy, that is used with Bitcoin, private key is some integer multiplicator
            and public key is a point on plaine over a finite field (there are two types of Curves can be used, so two types of fields).
            So algorithms of encryption/decription for ECC are different, depending on type of key used.
            </p>
          </Notes>
        </Slide>

       <Slide>
          <Heading fit="true">Digital Signatures</Heading>
          <Text textColor="secondary">Sign</Text>
          <Image src={images.sign}/>
          <Notes>
            <p>Signing a message means to encrypt with private key it's hash</p>
          </Notes>
        </Slide>
        <Slide>
          <Heading fit="true">Digital Signatures</Heading>
          <Text textColor="secondary">Verify</Text>
          <Image src={images.verify} />
          <Notes>
            <p>Verification is calculating hash of message and decrypting signature with public key. If both values match signature is verified.</p>
          </Notes>
        </Slide>
        <Slide transitionIn={["slide"]} transitionOut={["fade"]}>
          <Heading fit="true">Bitcoin and blockchain</Heading>
          <Notes>
            <p>We have reviewed basic cryptograpy primitives</p>
            <p>Now its time to move to cryptocurrncies</p>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading fit="true">Electronic coin</Heading>
          <Text textColor="secondary">Coin is a chain of digital signatures</Text>
          <Image src={images.coin} />
          <Text textColor="secondary">Transfer: owner signs hash of previous transaction and next owner's public key</Text>
          <Notes>
            <div style={{'font-size': '20px'}}>
              <p>Electronic coin is defined as a chain of digital signatures. 
                 Each owner transfers the coin to the
                 next by digitally signing a hash of the previous transaction 
                 and the public key of the next owner and adding these 
                 to the end of the coin. </p>
              <p>
                Transaction are addressable by hash, each owner is adressable by Public Key. There is no coin identifier per se.
              </p>
              <p>
                Privacy is protected by keeping public keys anonymous: they still ok to be used for digital signature verification, but they are not linked to person or legal entity.
              </p>
              <p>
                The whole chain of ownership can be verified by checking digital signatures, down to initial owner of coin. 
              </p>
            </div>
          </Notes>
        </Slide>
        <Slide  transition={["fade"]}>
          <Heading fit="true">Double spending</Heading>
          <Image src={images.doublespend} />
          <Notes>
            <div style={{'font-size': '20px'}}>
              <p>The problem with electronic coin is that we need a way to verify that non of the previous owners has double spent the coin.</p>
              <p>Double spending introduce alternative chain of signatures as shown on picture. Both chains of ownership can be verified.</p>
              <p>A common solution is to introduce central trusted authority, that checks every transaction for double spending. 
              After each transaction a coin must be returned to the company running authority, and this company effectively issue a new trusted coin after checking the transaction.
              The problem here is the fate of entire money system depends on a single company, running authority</p>
              <p>If we have a way to tell, which of the two transactions, that intruduce double-spending is the earliest one we can ignore other transactions. 
              For that we need a system in which all transactions are publically anounced and participants of the system agree on a single history of order in which transactions were recieved.</p>
            </div>
          </Notes>
        </Slide>
        <Slide  transition={["fade"]}>
          <Heading>Blockchain</Heading>
          <Image src={images.blockchain} />
          <Notes>
            <div style={{'font-size': '18px'}}>
              <p>
                Blockchain is an implementation of distributed timestamped database that provides common consensus on history of order of transactions. 
              </p>
              <p>
                Let us review how block is constructed by miners. <br />
                First - transactions, that will be included into the block are pulled from unconfirmed transaction pool. 
                Each transaction is checked for over-spending, double-spending (using previous blocks). 
                And then a hash tree (Merkel tree) is formed out of valid transactions. <br />
                Then block header is formed out of root of hash tree, current timestamp, and a hash of previous block header. <br />
                Finally, miner tries to find the nonce value, such as that header hashes to a beautiful hash.
              </p>
              <p>
                The same process is done by all Nodes (note that the set of transactions is different for each Node). Dificulty of finding nonce
                value is dynamically adjasted, so that the next block can be found in approximately 10 minutes, using hashing power
                of the whole network.
              </p>
              <p>
                Once block is found by one of the Nodes it is broadcasted to all other Nodes. 
                When new block is recieved, Node checks block and its transactions, and if validated ok, Node starts 
                the process again, trying to form next block, on top of the one recieved, effectively voting for the recieved block.
              </p>
              <p>
                Node always consider the longest chain to be correct.
                If two or more blocks found at the same time node should continue to work on block that is arrived first, but should save
                others in case next prof-of-work is found on other branch. When one of the branches become longer nodes that are working
                on other branches switch to the longer one.
              </p>
              <p>
                There is no incentive for Node to vote for incorrect block or for the block that contains incorrect transaction,
                because other Nodes will not vote for it and they will be able to build longer chain more quickly.
              </p>
            </div>
          </Notes>
        </Slide>
        <Slide  transition={["fade"]}>
          <Heading>Incentive</Heading>
          <List>
            <ListItem>Coinbase transaction - transaction with no inputs, that generate coins for miner</ListItem>
            <ListItem>Fees collected from transactions, included in block. When forming next block, miner is free to pick those 
            transactions that offer greater fee</ListItem>
          </List>
          <Notes>
            <div style={{'font-size': '20px'}}>
              <p>The first transaction of each block is a coinbase transaction. Input of this transaction is "coinbase" which can 
              contain arbitrary data</p>
              <p>Fee: when sum of transaction inputs is more then sum of transaction outputs the reminder is collectable by miner<br/>
              As block size currently is about 1M, the important metric for miner is fee per transaction byte</p>
              <p>The incentive may help encourage nodes to stay honest. If a greedy attacker is able to
assemble more Hashing power than all the honest nodes, he would have to choose between using it
to defraud people by stealing back his payments, or using it to generate new coins/collect fees. He ought to
find it more profitable to play by the rules, such rules that favour him with more new coins than
everyone else combined, than to undermine the system and the validity of his own wealth.</p>
            </div>
          </Notes>
        </Slide>
        <Slide  transition={["fade"]}>
          <Heading fit="true">Bitcoin transaction</Heading>
          <Image src={images.transaction} />
          <Notes>
            <div style={{'font-size': '20px'}}>
              <p>It is not convenient to operate coins, as defined previously, because vale of the coin cannot be split and combined.</p>
              <p>Bitcoin transaction can have multiple inputs and outputs</p>
              <p>In Bitcoin system there is no such thing as an accout balance: balance is determined by all transaction outputs that person can control</p>
              <p>When there is a need to spent more than any of outputs under control provides, transaction has to have multiple inputs.</p>
              <p>Also, amount spendable through transaction inputs does not exactly match the desired amount of bitcoin transfer, 
              change is returned to owner who inserts additional output (that he can control) to the transaction.</p>
            </div>
          </Notes>
        </Slide>
        <Slide  transition={["fade"]}>
          <Heading fit="true">Bitcoin transaction</Heading>
          <Image src={images.transaction1} />
          <Notes>
            <div style={{'font-size': '20px'}}>
              <p>
                What exactly are bitcoint transaction inputs and outputs?<br />
                Input:
                <ul>
                  <li>Input reference to the output of some previous transaction, through <code>PreviousTX</code> and <code>Index</code> fileds.</li>
                  <li>Input does not specify an amount: it is considered that whole amount specified in output is totally spent via transactoin</li>
                  <li>Input provides a proof that prev tx output is controlled by transaction initiator. 
                  Usually it is digital signature of the simplified version of the whole transaction.</li>
                </ul>
                Output:
                <ul>
                  <li>Each output specifies value spendable through this output</li>
                  <li>Output specify a condition on which output can be spent</li>
                </ul>
                Transaction is considered invalid if the total output exceeds the total amount of outputs referenced through inputs. <br />
                If the total amount of inputs exceeds the total amount of outputs, then the rest is collectable by miner, who includes
                transaction in block.
              </p>

              <p>There are two types of confirmation conditions now: Pay-To-PubkeyHash and Pay-to-Script-Hash</p>
              <p>Pay-To-PubkeyHash is sending transaction to a bitcoin address - I will explain  method in a moment and I will show that it i

              </p>
              <p>

              P2PH is represented on this slide.<br/>
              Verification is:
              <ol>
                <li>Put signature, then pubkey then, script from the previous transaction to stack, and scan stack bottom-to-top</li>
                <li>OP_DUP - Duplicate pubkey and put it between pubkey and OP_HASH160</li>
                <li>OP_HASH160 - replace last pubkey with hash</li>
                <li>OP_EQUALVERIFY - compare hash values and removes them from stack</li>
                <li>OP_CHECKSIG - verify signature against simplified version of transaction</li>
              </ol>
              </p>
              <p>P2SH addresses were created with the motivation of moving "the responsibility for 
              supplying the conditions to redeem a transaction from the sender of the funds to the redeemer. 
              They allow the sender to fund an arbitrary transaction, no matter how complicated, using a 20-byte hash" <a href="https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki" target="_blank">See BIP: 16</a>
              <br/>
              P2SH transactions lie in the foundation of Ligntling protocol
              </p>
            </div>
          </Notes>
        </Slide>
        <Slide  transition={["fade"]}>
          <Heading fit="true">Bitcoin address</Heading>
          <Image src={images.address} />
          <Notes>
            <div style={{'font-size': '20px'}}>
              <p>As your remember, transaction of primitive coin is defined as digitally signed message that contains Public key of next owner. And Public Key plays a role of an owner address.</p>
              <p>Instead of Public Keys in open form, bitcoin system uses adresses that are derivable from keys by applying HASH-160 function.</p>
              <p>Hash of Public Key is easily derivable from address</p>
              <p>With bitcoin transaction, hash of next owner's Public Key is signed (it goes to output of transaction). 
              In order to spend an output, the owner must provide Public Key in open form, and verification makes sure that:
              <ol>
                <li>Public Key's hash value is the same as specified in output. (So, owner's public key is identified)</li>
                <li>Digital signature of transaction is correct. Public Key in open form is used to verify signature.</li>
              </ol>
              </p>
              <p>
                This verification steps are programmed in 'scriptPubKey' field of output (spending condition), and processed on stack machine:
                <ol>
                <li>Put signature, then pubkey then, script from the previous transaction to stack, and scan stack bottom-to-top</li>
                <li>OP_DUP - Duplicate pubkey and put it between pubkey and OP_HASH160</li>
                <li>OP_HASH160 - replace last pubkey with hash</li>
                <li>OP_EQUALVERIFY - compare hash values and removes them from stack</li>
                <li>OP_CHECKSIG - verify signature against simplified version of transaction</li>
                </ol>
              </p>
            </div>
          </Notes>
        </Slide>
        <Slide  transition={["fade"]}>
          <Heading fit="true">What has not been covered in this presentation</Heading>
          <List>
            <ListItem>Eliptic Curve Cryptograpy - bitcoin system uses secp256k1 curve as defined in Standards for Efficient Cryptography (SEC)</ListItem>
            <ListItem>Key Management and Wallets - in particular Deterministic Wallets where keys are derived from initial seed (that is kept secret)</ListItem>
            <ListItem>Newer features introduced with Pay-to-Script-Hash <a href="https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki" target="_blank">See BIP: 0016</a></ListItem>
          </List>
          <Notes>
            <div style={{'font-size': '20px'}}>
              Many things were not covered in this presentation, and I leave them to your own research.
              <ol>
                <li>ECC provide some features that are not found in other asymetric crypto systems. For example, 
                  Hierarchical Deterministic Wallets are based on unique features of ECC for deriving keys. <br />
                  But it is really a huge topic, prepare to spend weeks on that.
                </li>
                <li>Public/Private key pairs that are used in bitcoin transactions are intended for one time usage.
                  Key generation, management, backups, etc is provided by software called wallet. Newer "HD wallets" provide 
                  Hierarchical key management, and secure address generation even without exposing Private Keys. For example
                  you can generate bitcoin address to pay to you with software, deployed on insecure web server, without need
                  to deploy any of your private keys, so coins are not spendable if webserver is hacked.
                </li>
                <li>
                  P2SH addresses were created with the motivation of moving "the responsibility for 
                  supplying the conditions to redeem a transaction from the sender of the funds to the redeemer. 
                  They allow the sender to fund an arbitrary transaction, no matter how complicated, using a 20-byte hash".
                  Basically, you can create transaction output without specifying to whom you are sending bitcoins: anyone who 
                  knows certain secret can spend bitcoins from that output. <br />
                  That lies in foundation of Hash-Time-Locked-Contracts, that are basis of Lightning Network.
                </li>
              </ol>
            </div>
          </Notes>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading>Discussion</Heading>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading fit="true">Can you spot any problems?</Heading>
          <Text textColor="secondary" textSize="1em">
            Bill is a fruit vendor. 
            Sally wants to buy some apples for 25 DKK. 
            Sally wishes to use Bitcoin to pay Bill for the apples. 
            Bill presents Sally his payment address, for example as a quickresponse code
            Sally uses a Bitcoin wallet on her smartphone to scan the code. 
            She is presented a screen where she can enter an amount to send to Bill's address.
            She types 25DKK and presses send. 
            A moment later Bill's tablet notifies him that there is an incoming payment pending.
          </Text>
          <Notes>
            <div style={{'font-size': '20px'}}>
            <p>This text taken from <a href="https://bitcoin.stackexchange.com/questions/12427/can-someone-explain-how-the-bitcoin-blockchain-works" target="_blank">bitcoin.stackexchange.com</a> <br/>
            It is more illustration of expectations, rather then state of affairs</p>
            <p><b>Speed </b>
              <i>Try to catch audience: </i> Bill's software is capable to verify signatures of pending transaction; Sally went home with apples, Bill will eventually recieve his payment, when transaction gets confirmed blockchain.
              <br/>
              <i>And then shock them: </i> In reality Sally went to book shop around the corner and spent the same bitcoins on book titled
              <a href="https://goo.gl/uVpJWQ" target="_blank">"Steal this Book"</a>.
            </p>
            <p>Sally has to wait in the shop, until transaction is confirmed with 6 blocks. 1 block is generated every 10 minute, so she waits at least 1 hour</p>
            <p><b>Transaction fees</b> If Sally wants transaction to be included in block within next 30 minutes (as of 14.12.2017) she has to pay transaction fee 380 satoshi/byte<br/>
            which gives (median bytes per transaction)-> 226 * 380 = 85 880 satoshi ~ 88.99 DKK<br/>
            For 25DKK (amount of transaction) in fees waiting time is 10-180 minutes</p>
            </div>
          </Notes>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading fit="true">Other Limitations</Heading>
          <List>
            <ListItem>Block chain: max 7 tps (Visa: peak: 4000)</ListItem>
            <ListItem><a href="https://motherboard.vice.com/en_us/article/aek3za/bitcoin-could-consume-as-much-electricity-as-denmark-by-2020"
              target="_blank">Bitcoin Could Consume as Much Electricity as Denmark by 2020</a></ListItem>
          </List>
          <Notes>
            <p><a href="https://themerkle.com/crypto-vs-visa-can-denarius-compete-when-it-comes-to-transactions-per-second/"
                 target="_blank">Bitcoin vs visa</a></p>
            <p>Electricity: situation can be not that bad, if <a href="https://hackernoon.com/the-bitcoin-vs-visa-electricity-consumption-fallacy-8cf194987a50"
            target="_blank">compared to Visa</a></p>
          </Notes>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading fit="true">Notable Developments</Heading>
          <List>
            <ListItem>Etherium - smart contracts</ListItem>
            <ListItem>Lightning Network - micro-payments and payment channels</ListItem>
            <ListItem>IOTA - Distriuted Ledger, based on DAG, oriented to Machine Economy</ListItem>
            <ListItem>RIPPLE - Consensus protocol, not based on prof-of-work. Provides fast transactions, used right now mainly in currency trading</ListItem>
          </List>
          <Notes>
            <p>The most interesting if these is Etherium. Probably, my next presentatoin will be about etherium and smart contracts</p>
            <p>IOTA recently recieved a lot of criticism, based on poor implementation. The question is whether we see adoption from device makers.</p>
          </Notes>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading fit="true">Bitcoin is more than technology</Heading>
          <Text textColor="secondary" textSize="1em">
            Bitcoin is Internet Trust Machine
          </Text>
          <Notes>
            <p>When started 9 years ago bitcoin was just a bit of technology.<br /> 
            Now it is more than technology, it was even coined as "Internet Trust Machine" in one publication.</p>
            <p>Two things ICOs and Private Blockchains. Both start with marketing and whitepapers. 
              <ul>
                <li>ICOs: I believe that many companies that go into ICO are capable to develop product, they claim to do. 
                But between the lines of whitepaper, there is a promise that they will develop entirely new market for their product.
                This is where they fail.</li>
                <li>Private Blockchains: Big company come up with white paper that they will develop X using Blockchain technology. 
                They have choosen "Big Name Blockchain". <br />
                Their trust machine has not even started.
                </li>
              </ul>

            </p>

          </Notes>
        </Slide>

        <Slide transition={["zoom"]}>
          <Heading fit="true">Thank you</Heading>
          <Notes>
            <p>This slide speaks for itself.</p>
            <p>Closing note, for those who plan to speculate cryptocurrncies.<br/>
            Please, check with:
            <ol>
              <li>Your wife</li>
              <li>Your mother</li>
              <li>Your company</li>
              <li>Your tribe</li>
              <li>Your goverment</li>
            </ol>
            If everyone of these ok - why not?

            </p>
          </Notes>
        </Slide>
        
      </Deck>
    );
  }
}
