import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Images
import BrandLogo from "../../../assets/img/brain.webp";

// Icons
import { GoArrowLeft } from "react-icons/go";

// Redux
import { getResendOtp, getVerifyOtpAction } from '../../../redux/action/auth/getVerifyOtpAction';

// Toast
import { showSuccessToast } from '../../../helper/ToastHelper';

export const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const emailParam = new URLSearchParams(location.search).get('email');
  const [Email, setEmail] = useState(emailParam || "");
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(60);

  // Set Waktu Berjalan
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Input Otp
  const handleChange = (index, value) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;

    // Fokus ke input berikutnya jika input terisi dan belum mencapai input terakhir
    if (value && index < otpInputs.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    // Fokus ke input sebelumnya jika nilai dihapus dan bukan input pertama
    if (!value && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }

    setOtpInputs(newOtpInputs);
  };

  // Resend-Otp
  const handleResend = async () => {
    const resendData = await dispatch(getResendOtp({
      email: Email,
    }));
    if (resendData) {
      showSuccessToast("OTP berhasil dikirim ulang");
      setSeconds(60);
    }
  };

  // Verify-Otp
  const handleSave = async () => {
    const otpData = await dispatch(getVerifyOtpAction({
      email: Email,
      otp: otpInputs.join(''),
    }))
    if (otpData) {
      showSuccessToast("Registrasi Berhasil");
      setTimeout(() => {
        navigate("/login")
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full rounded-lg md:mt-0 mx-auto md:max-w-md">
        <div className="flex flex-col lg:w-[30rem] mx-auto w-[22rem]">
          <div className="absolute lg:top-[120px] md:top-[320px] cursor-pointer top-[100px]">
            <GoArrowLeft
              size={25}
              className="items-center"
              onClick={() => {
                navigate("/register");
              }}
            />
          </div>
          <span className="items-center py-4 text-3xl font-bold text-primary">
            Masukkan OTP
          </span>

          {/* Masukkan Kode OTP */}
          <div className="flex flex-col gap-2">
            <span className="py-6 text-lg text-center">
              Ketik 6 digit kode yang dikirim ke{" "}
              <span className="font-bold">{Email}</span>
            </span>

            {/* Lingkaran Otp */}
            <div className="flex items-center justify-center gap-4">
              {otpInputs.map((value, index) => (
                <div
                  key={index}
                  className="w-[50px] h-[50px] border-2 rounded-xl"
                >
                  <input
                    id={`otp-input-${index}`}
                    placeholder=""
                    className="w-full h-full font-semibold text-center border rounded-xl border-primary"
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>

            {seconds > 0 ? (
              <span className="py-6 text-lg text-center">
                Kirim ulang OTP dalam{" "}
                <span className="text-primary font-bold">{seconds}</span> detik
              </span>
            ) : (
              <span
                className="py-6 text-xl text-center text-red-500 font-bold cursor-pointer"
                onClick={handleResend}
              >
                Kirim Ulang OTP
              </span>
            )}
          </div>

          {/* Button Simpan */}
          <div className="flex flex-col py-4">
            <button
              type="button"
              className="py-3 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
              onClick={handleSave}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center justify-center w-2/5 h-screen bg-primary hidden md:flex">
        <div className="flex items-center justify-center gap-6">
          <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
          <span className="font-sans text-6xl text-center text-white">
            Bingwa
          </span>
        </div>
      </div>
    </div>
  );
};
