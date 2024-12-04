import React, { useState } from 'react';
import "../style/Forgetpass.css";  
const ForgotPasswordWithOTP = () => {
    const [step, setStep] = useState(1); // Tracks the current step
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const sendOtp = (e) => {
        e.preventDefault();
        if (!email) {
            setMessage('Please enter your email.');
            return;
        }

        // Simulate sending OTP
        setTimeout(() => {
            setMessage('An OTP has been sent to your email.');
            setStep(2);
        }, 500);
    };

    const verifyOtp = (e) => {
        e.preventDefault();
        if (otp !== '1234') { // Mock OTP validation
            setMessage('Invalid OTP. Please try again.');
            return;
        }

        setMessage('OTP verified. You can now reset your password.');
        setStep(3);
    };

    const resetPassword = (e) => {
        e.preventDefault();

        if (!newPassword || newPassword.length < 6) {
            setMessage('Password must be at least 6 characters long.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        // Simulate password reset
        setTimeout(() => {
            setMessage('Your password has been successfully reset!');
            setStep(1); // Reset to the initial step
            setEmail('');
            setOtp('');
            setNewPassword('');
            setConfirmPassword('');
        }, 500);
    };

    return (
        <div className='container'>
            <div className='formContainer'>
                <h2 className='heading'>Forgot Password</h2>
                {step === 1 && (
                    <form onSubmit={sendOtp}>
                        <p className='text'>Enter your email to receive an OTP:</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                           className='input'
                            required
                        />
                        <button type="submit" className='button'>Send OTP</button>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={verifyOtp}>
                        <p className='text'>Enter the OTP sent to your email:</p>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                           className='input'
                            required
                        />
                        <button type="submit" className='button'>Verify OTP</button>
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={resetPassword}>
                        <p className='text'>Set a new password:</p>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='input'
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='input'
                            required
                        />
                        <button type="submit" className='button'>Reset Password</button>
                    </form>
                )}
                {message && <p className='message'>{message}</p>}
            </div>
        </div>
    );
};


export default ForgotPasswordWithOTP;
