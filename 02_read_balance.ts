import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("a3TYtiKepr45haDJUPmBgkmspifkyFpxBjWMgR6JZ5k");
const balance = await connection.getBalance(address);
const solanaBalance = balance / LAMPORTS_PER_SOL;

console.log(`The balance of ${address}  = ${solanaBalance} SOL`);
console.log("✅ The Balance is Show!");
