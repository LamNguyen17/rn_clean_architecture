package com.react_architechture;

import android.util.Base64
import javax.crypto.*
import javax.crypto.spec.IvParameterSpec
import javax.crypto.spec.SecretKeySpec

class AesHelper {
    private companion object {
        const val ALGORITHM = "AES"
        const val TRANSFORMATION = "AES/CBC/PKCS5PADDING"
    }

    private fun generateSecretKey(secretKey: String): SecretKeySpec {
        return SecretKeySpec(secretKey.toByteArray(), ALGORITHM)
    }

    private fun generateIvKey(ivKey: String): IvParameterSpec {
        return IvParameterSpec(ivKey.toByteArray())
    }

    fun encrypt(value: String, privateKey: String, ivKey: String): String {
        val ivSpec = generateIvKey(ivKey)
        val secretKey = generateSecretKey(privateKey)
        val cipher = Cipher.getInstance(TRANSFORMATION)
        cipher.init(Cipher.ENCRYPT_MODE, secretKey, ivSpec)
        val encryptedBytes = cipher.doFinal(value.toByteArray())
        return Base64.encodeToString(encryptedBytes, Base64.DEFAULT)
    }

    fun decrypt(value: String, privateKey: String, ivKey: String): String {
        val ivSpec = generateIvKey(ivKey)
        val secretKey = generateSecretKey(privateKey)
        val decodedBytes = Base64.decode(value, Base64.DEFAULT)
        val cipher = Cipher.getInstance(TRANSFORMATION)
        cipher.init(Cipher.DECRYPT_MODE, secretKey, ivSpec)
        val decryptedBytes = cipher.doFinal(decodedBytes)
        return String(decryptedBytes, Charsets.UTF_8)
    }

}