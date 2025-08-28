export async function downloadFile(): Promise<void> {
  await new Promise<void>(resolve => setTimeout(resolve, 3000));
  console.log("\nBai 25: File downloaded");
}