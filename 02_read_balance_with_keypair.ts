import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import "dotenv/config";

const keyPair = process.env.KEYPAIR || null;

if (!keyPair) {
  console.log("Please provide a keypair");
  console.log("❌ failed");
  process.exit(1);
}

const connection = new Connection(clusterApiUrl("devnet"));
const address = getKeypairFromEnvironment("KEYPAIR");

const balance = await connection.getBalance(address.publicKey);
const solanaBalance = balance / LAMPORTS_PER_SOL;

console.log(`The balance of ${address.publicKey}  = ${solanaBalance} SOL`);
console.log("✅ The Balance is Show Now!");
