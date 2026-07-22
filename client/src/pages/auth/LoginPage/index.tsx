import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import AuthCardLayout from "../components/AuthCardLayout";
import AuthSocialButtons from "../components/AuthSocialButtons";
import AuthInput from "../components/AuthInput";
import Button from "../../../components/ui/Button";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleGoogleLogin = () => {
    // Simulasi klik Google Auth (Akan terhubung ke backend OAuth nanti)
    alert("Fitur Google Login akan terhubung ketika Backend/API siap.");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submit Login:", { ...formData, rememberMe });
  };

  return (
    <AuthCardLayout
      title="Selamat Datang Kembali"
      subtitle="Masuk ke akun Anda untuk melanjutkan membaca dan berinteraksi"
    >
      <div className="flex flex-col gap-4">
        {/* Tombol Google Auth */}
        <AuthSocialButtons
          onGoogleClick={handleGoogleLogin}
          text="Masuk dengan Google"
        />

        {/* Form Login */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AuthInput
            label="Alamat Email"
            type="email"
            required
            placeholder="nama@email.com"
            icon={<FiMail />}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <div className="relative">
            <AuthInput
              label="Kata Sandi"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Masukkan kata sandi Anda"
              icon={<FiLock />}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[34px] text-gray-400 hover:text-primary text-sm"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Opsi Remember Me & Lupa Password */}
          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600 dark:text-gray-400">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
              <span>Ingat saya</span>
            </label>

            <Link
              to="/lupa-password"
              className="text-primary hover:underline font-semibold transition-colors"
            >
              Lupa Kata Sandi?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            variant="primary"
            size="md"
            type="submit"
            className="w-full mt-2"
          >
            Masuk ke Akun
          </Button>
        </form>

        {/* Footer Link ke Register */}
        <p className="text-xs font-body text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-neutral-800">
          Belum memiliki akun?{" "}
          <Link
            to="/register"
            className="font-bold text-primary hover:underline transition-colors"
          >
            Daftar sekarang
          </Link>
        </p>
      </div>
    </AuthCardLayout>
  );
}
