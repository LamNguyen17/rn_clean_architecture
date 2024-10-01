package com.react_architechture

import android.util.Log
import com.facebook.react.bridge.*
import kotlinx.coroutines.*

class EncryptionModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    private var aesHelper: AesHelper = AesHelper()
    // Create a CoroutineScope for managing coroutines.
    private val activityScope = CoroutineScope(Dispatchers.Main + SupervisorJob())

    private companion object {
        const val INVALID_ARGUMENT = "invalid_argument"
    }

    override fun getName(): String {
        return "EncryptionModule"
    }

    // Use invalidate() to handle cleanup instead of onCatalystInstanceDestroy
    override fun invalidate() {
        super.invalidate()
        // Cancel the CoroutineScope to avoid memory leaks
        activityScope.cancel()
        Log.d("EncryptionModule", "invalidate called, resources cleaned up.")
    }

    @ReactMethod
    fun encrypt(value: String, secretKey: String, ivKey: String, promise: Promise) {
        if (value != null && secretKey != null && ivKey != null) {
            activityScope.launch {
                val encryptedData = withContext(Dispatchers.IO) {
                    aesHelper.encrypt(value, secretKey, ivKey)
                }
                promise.resolve(encryptedData)
            }
        } else {
            promise.reject(INVALID_ARGUMENT, "Data to encrypt is null")
        }
    }

    @ReactMethod
    fun decrypt(value: String, secretKey: String, ivKey: String, promise: Promise) {
        if (value != null && secretKey != null && ivKey != null) {
            activityScope.launch {
                val decryptedValue = withContext(Dispatchers.IO) {
                    aesHelper.decrypt(value, secretKey, ivKey)
                }
                promise.resolve(decryptedValue)
            }
        } else {
            promise.reject(INVALID_ARGUMENT, "Data to decrypt is null")
        }
    }

}