import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, LogIn } from "lucide-react";

import AuthBrandingPanel from "../components/layout/AuthBrandingPanel";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo";
import PageTransition from "../components/common/PageTransition";
import { loginFormSchema } from "../utils/validationSchemas";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { rememberMe: false },
  });

  const onSubmit = async (data) => {
    setServerError("");
    try {
      await login({ email: data.email, password: data.password });
      const redirectTo = location.state?.from?.pathname || "/dashboard";
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setServerError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <PageTransition>
      <div className="flex min-h-screen bg-surface-subtle dark:bg-surface-dark">
        <AuthBrandingPanel
          title="Welcome back to smarter investing."
          subtitle="Log in to access your portfolio, live insights, and personalized risk analysis."
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
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Sign in</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                Enter your credentials to access your dashboard.
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

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 text-primary-500 focus:ring-primary-500"
                      {...register("rememberMe")}
                    />
                    Remember me
                  </label>
                  <a href="#" className="font-medium text-primary-600 dark:text-primary-400 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  isLoading={isSubmitting}
                  icon={LogIn}
                >
                  Sign in
                </Button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                Don't have an account?{" "}
                <Link to="/register" className="font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                  Create one
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
