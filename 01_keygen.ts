import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`This is The public key: ${keypair.publicKey.toBase58()}`);
console.log(`This is SecretKey : ${keypair.secretKey}`);
