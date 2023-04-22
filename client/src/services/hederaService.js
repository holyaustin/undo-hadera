import { AccountId, Client, PrivateKey, TransactionReceiptQuery, TransferTransaction } from "@hashgraph/sdk"

export const sendHbar = async (client, fromAddress, toAddress, amount, operatorPrivateKey) => {
  const transferHbarTransaction = new TransferTransaction()
    .addHbarTransfer(fromAddress, -amount)
    .addHbarTransfer(toAddress, amount)
    .freezeWith(client);

  const transferHbarTransactionSigned = await transferHbarTransaction.sign(operatorPrivateKey);
  const transferHbarTransactionResponse = await transferHbarTransactionSigned.execute(client);

  // Get the child receipt or child record to return the Hedera Account ID for the new account that was created
  const transactionReceipt = await new TransactionReceiptQuery()
    .setTransactionId(transferHbarTransactionResponse.transactionId)
    .setIncludeChildren(true)
    .execute(client);

   console.log(`Transaction Status: ${transactionReceipt.status}`);
}