export const useWebCrypto = () => {
  const ALGORITHM = "AES-GCM";
  const KEY_LENGTH = 256;

  // Helper functions for converting between string and ArrayBuffer
  const encode = (text: string) => new TextEncoder().encode(text);
  const decode = (buffer: ArrayBuffer) => new TextDecoder().decode(buffer);

  // Derives a key from a password using PBKDF2.
  const deriveKey = async (password: string, salt: Uint8Array<ArrayBuffer>) => {
    const passwordKey = await window.crypto.subtle.importKey(
      "raw",
      encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveKey"],
    );

    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: 100000, // Higher iterations for better security
        hash: "SHA-256",
      },
      passwordKey,
      { name: ALGORITHM, length: KEY_LENGTH },
      false,
      ["encrypt", "decrypt"],
    );
  };

  // Decrypts an encrypted object using AES-GCM and a password.
  const decrypt = async (
    encryptedData: { ciphertext: string; salt: string; iv: string },
    password: string,
  ) => {
    try {
      const key = await deriveKey(
        password,
        Uint8Array.from(atob(encryptedData.salt), (c) => c.charCodeAt(0)),
      );

      const decrypted = await window.crypto.subtle.decrypt(
        {
          name: ALGORITHM,
          iv: Uint8Array.from(atob(encryptedData.iv), (c) => c.charCodeAt(0)),
        },
        key,
        Uint8Array.from(atob(encryptedData.ciphertext), (c) => c.charCodeAt(0)),
      );

      return decode(decrypted);
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  };

  return { decrypt };
};
