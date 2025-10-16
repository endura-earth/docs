import { useWebCrypto } from "~/composables/useWebCrypto";

export async function generateEnduraAppLink(
  ciphertext: string,
  salt: string,
  iv: string,
): Promise<string> {
  const config = useRuntimeConfig();
  const key = config.public.enduraGuideKey as string;
  const { decrypt } = useWebCrypto();
  const decryptedUrl = await decrypt({ ciphertext, salt, iv }, key);

  return `${decryptedUrl}`;
}
