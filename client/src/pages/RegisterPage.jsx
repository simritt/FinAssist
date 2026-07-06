import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User, UserPlus } from "lucide-react";

import AuthBrandingPanel from "../components/layout/AuthBrandingPanel";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import PageTransition from "../components/common/PageTransition";
import { registerFormSchema } from "../utils/validationSchemas";
import { useAuth } from "../context/AuthContext";

export default function RegisterPage() {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(registerFormSchema) });

  const onSubmit = async (data) => {
    setServerError("");
    try {
      await registerUser({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setServerError(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen bg-surface-subtle dark:bg-surface-dark">
        <AuthBrandingPanel
          title="Your investment intelligence platform."
          subtitle="Create an account to start tracking your portfolio, valuations, and risk in one place."
        />

        <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <div className="lg:hidden mb-8 flex justify-center">
              <Logo size="lg" />
            </div>

            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Create your account
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                Start making smarter investment decisions today.
              </p>

              {serverError && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 px-4 py-3 text-sm text-rose-600 dark:text-rose-400"
                >
                  {serverError}
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  label="Full name"
                  icon={User}
                  placeholder="Alex Morgan"
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />
                <Input
                  label="Email address"
                  type="email"
                  icon={Mail}
                  placeholder="you@example.com"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <Input
                  label="Password"
                  type="password"
                  icon={Lock}
                  placeholder="••••••••"
                  error={errors.password?.message}
                  {...register("password")}
                />
                <Input
                  label="Confirm password"
                  type="password"
                  icon={Lock}
                  placeholder="••••••••"
                  error={errors.confirmPassword?.message}
                  {...register("confirmPassword")}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  isLoading={isSubmitting}
                  icon={UserPlus}
                >
                  Create account
                </Button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
