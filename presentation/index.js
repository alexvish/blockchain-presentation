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
  Image
} from "spectacle";


const Fit1 = styled(Fit)`
  white-space: pre;
`;

const images = {
  sign: require('../assets/sign.png'),
  verify: require('../assets/sign-verify.png'),
  transactions: require('../assets/transChain.png')
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
          <Heading fit="true">Assymetric cryptograpy</Heading>
          <List>
            <ListItem>Public/Private key pair</ListItem>
            <ListItem>Both keys of a pair can be used to encrypt messages</ListItem>
            <ListItem>Encryption with Public Key => secret messages</ListItem>
            <ListItem>Encryptoin wiht Private Key => digital signatures</ListItem>
          </List>
          <Notes>
            <p>Assymetric cryptosystems are build on the notion of two keys: public and private key pair</p>
            <p>Their usage is interchangeable: both keys can be used to encrypt messages.
            Whatever is encrypted with one key of the pair can be decrypted with and only with another key of the pair.</p>
            <p>Please note: Here I might be presenting oversimplified view on the actual picture. </p>
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
          <Image src={images.transactions} />
          <Notes>
            <div style={{'font-size': '20px'}}>
              <p>Each owner transfers the coin to the
                 next by digitally signing a hash of the previous transaction 
                 and the public key of the next owner and adding these 
                 to the end of the coin. Public key here plays role of address to which coin is sent</p>
              <p>Payee can verify signatures to verify the chain of ownership.</p>
              <p>
                The problem here is that payee cannot verify that one of the owners did not double-spent the coin.
                To do that we need to be aware of all transactions in the system: transactoins need to be publically anounced and 
                we need to have common agreement (consensus) on a single history of the order in which transactions occur, so we take
                into account only the earliest transaction for the coin. 
              </p>
              <p>Of course, sigle trusted authority can be used (such as bank), but bitcoin employs different mechanism</p>
            </div>
          </Notes>
        </Slide>
        <Slide>
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
            Payment is done - Sally gets her apples, Bill will eventually get payment. 
          </Text>
          <Notes>
            <div style={{'font-size': '20px'}}>
            <p><b>Speed</b> Try to catch audience: But Bill's software is capable to verify all signatures of panding payments - <br/>
              Sally will spend the same bitcoins in a clothing store nearby.
            </p>
            <p>Sally has to wait in the shop, until transaction is confirmed with 6 blocks. 1 block is generated every 10 minute, so she waits at least 1 hour</p>
            <p><b>Transaction fees</b> If Sally wants transaction to be included in block within next 30 minutes 14.12.2017 she has to pay transaction fee 380 satoshi/byte<br/>
            which gives (median bytes per transaction)-> 226 * 380 = 85 880 satoshi ~ 88.99 DKK<br/>
            For 25DKK (amount of transaction) in fees waiting time is 10-180 minutes</p>
            </div>
          </Notes>
        </Slide>
        
      </Deck>
    );
  }
}
