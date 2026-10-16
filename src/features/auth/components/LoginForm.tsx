import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginData } from "../schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";

function LoginForm() {

    const { error, isLoading, login } = useLogin();
    const {
        reset,
        handleSubmit,
        formState: { errors },
        register: registerField,
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    });
    return (
        <form
            onSubmit={handleSubmit((data) => login(data, reset))}
            className="flex w-full max-w-[440px] flex-col gap-4 rounded-xl bg-card p-5 shadow sm:p-6 md:p-8 font-inter"
        >
            <div>
                <h1 className="mb-1 text-xl font-bold leading-7 text-text sm:text-2xl sm:leading-8">
                    Welcome back
                </h1>
                <p className="text-xs text-text-muted sm:text-sm">
                    Sign in to your user account
                </p>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase text-text-muted sm:text-[13px]">
                    Email address
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...registerField("email")}
                    aria-invalid={!!errors.email}
                    className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 sm:text-base"
                />
                {errors.email && (
                    <p className="text-xs text-red-600" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                    <label htmlFor="password" className="text-xs font-semibold uppercase text-text-muted sm:text-[13px]">
                        Password
                    </label>
                    <Link to="/forgot-password" className="shrink-0 text-xs text-[#1A5276] sm:text-[13px]">
                        Forgot password?
                    </Link>
                </div>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...registerField("password")}
                    aria-invalid={!!errors.password}
                    className="h-11 w-full rounded-lg border border-border bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 sm:text-base"
                />
                {errors.password && (
                    <p className="text-xs text-red-600" role="alert">
                        {errors.password.message}
                    </p>
                )}
            </div>

            {error && (
                <p className="text-sm text-red-600" role="alert">
                    {error}
                </p>
            )}

            <button
                className="mt-1 h-11 w-full rounded-lg bg-primary text-sm font-semibold text-white sm:text-base disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? "Signing in..." : "Sign In"}
            </button>

            <div className="mt-2 flex flex-wrap justify-center text-xs text-text-muted sm:text-sm">
                Don't have an account?
                <Link className="ps-1 font-semibold text-[#1A5276]" to="/register">
                    Create an account
                </Link>
            </div>
        </form>
    );
}

export default LoginForm