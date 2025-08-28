export async function waitFiveSeconds(): Promise<void> {
  await new Promise<void>(resolve => setTimeout(resolve, 5000));
  console.log("\nBai 26: 5 seconds passed!");
}