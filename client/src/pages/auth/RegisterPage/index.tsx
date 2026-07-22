import { useState } from "react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import AuthCardLayout from "../components/AuthCardLayout";
import AuthSocialButtons from "../components/AuthSocialButtons";
import AuthInput from "../components/AuthInput";
import Button from "../../../components/ui/Button";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleGoogleRegister = () => {
    // Simulasi klik Google Auth (Akan terhubung ke backend OAuth nanti)
    alert("Fitur Google Register akan terhubung ketika Backend/API siap.");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Konfirmasi kata sandi tidak cocok!");
      return;
    }
    console.log("Submit Register:", formData);
  };

  return (
    <AuthCardLayout
      title="Buat Akun Baru"
      subtitle="Bergabunglah untuk mendapatkan akses komentar dan berita olahraga pilihan"
    >
      <div className="flex flex-col gap-4">
        {/* Tombol Google Auth */}
        <AuthSocialButtons
          onGoogleClick={handleGoogleRegister}
          text="Daftar dengan Google"
        />

        {/* Form Register */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AuthInput
            label="Nama Lengkap"
            type="text"
            required
            placeholder="Masukkan nama lengkap Anda"
            icon={<FiUser />}
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />

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
              placeholder="Minimal 8 karakter"
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

          <AuthInput
            label="Konfirmasi Kata Sandi"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Ulangi kata sandi Anda"
            icon={<FiLock />}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />

          {/* Checkbox Syarat & Ketentuan */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              required
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="text-[11px] font-body text-gray-500 dark:text-gray-400 leading-tight text-start cursor-pointer"
            >
              Saya menyetujui{" "}
              <Link
                to="/syarat-ketentuan"
                className="text-primary hover:underline font-bold"
              >
                Syarat & Ketentuan
              </Link>{" "}
              serta{" "}
              <Link
                to="/kebijakan-privasi"
                className="text-primary hover:underline font-bold"
              >
                Kebijakan Privasi
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            variant="primary"
            size="md"
            type="submit"
            className="w-full mt-2"
          >
            Daftar Sekarang
          </Button>
        </form>

        {/* Footer Link ke Login */}
        <p className="text-xs font-body text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-neutral-800">
          Sudah memiliki akun?{" "}
          <Link
            to="/login"
            className="font-bold text-primary hover:underline transition-colors"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </AuthCardLayout>
  );
}
