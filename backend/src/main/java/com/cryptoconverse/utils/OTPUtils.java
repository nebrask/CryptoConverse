package com.cryptoconverse.utils;

import java.util.Random;

public class OTPUtils {
    public static String generateOTP() {
        int otpLength = 6;
        Random random = new Random();

        StringBuilder otp = new StringBuilder(otpLength);

        for(int i = 0; i < otpLength; i++) {
            otp.append(random.nextInt(10));
        }

        return otp.toString();
    }
}
