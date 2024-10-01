import { NativeModules } from 'react-native';

const { EncryptionModule } = NativeModules;

export class EncryptionChannel {
  static encryptData = async (value: string, secretKey: string, ivKey: string) => {
    try {
      const encryptedData = await EncryptionModule.encrypt(value, secretKey, ivKey);
      console.log('Encrypted Data:', encryptedData);
      return encryptedData;
    } catch (error) {
      console.error('Error during encryption:', error);
      throw error;
    }
  };

  decryptData = async (value: string, secretKey: string, ivKey: string) => {
    try {
      const decryptedData = await EncryptionModule.decrypt(value, secretKey, ivKey);
      console.log('Decrypted Data:', decryptedData);
      return decryptedData;
    } catch (error) {
      console.error('Error during decryption:', error);
      throw error;
    }
  };
}
