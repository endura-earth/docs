import { useWebCrypto } from "~/composables/useWebCrypto";

export async function generateEnduraAppLink(
  ciphertext: string,
  salt: string,
  iv: string,
): Promise<string> {
  const key = "Endura984648465dfaefadf";
  const { decrypt } = useWebCrypto();
  const decryptedUrl = await decrypt({ ciphertext, salt, iv }, key);

  return `${decryptedUrl}`;
}
