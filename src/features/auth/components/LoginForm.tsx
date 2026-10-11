import { Link } from "react-router-dom"


function LoginForm() {
    return (
        <form className="flex w-full max-w-[440px] flex-col gap-4 rounded-xl bg-card p-5 shadow sm:p-6 md:p-8 font-inter">
            <div>
                <h1 className="mb-1 text-xl font-bold leading-7 text-text sm:text-2xl sm:leading-8">
                    Welcome back
                </h1>
                <p className="text-xs text-text-muted sm:text-sm">
                    Sign in to your user account
                </p>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-text-muted sm:text-[13px]">
                    Email address
                </label>
                <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-11 w-full rounded-lg border placeholder:text-[13px] border-border bg-white px-3 text-sm outline-none focus:outline-0 focus:ring-0 sm:text-base"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                    <label className="text-xs font-semibold uppercase text-text-muted sm:text-[13px]">
                        Password
                    </label>
                    <Link
                        to="/forgot-password"
                        className="shrink-0 text-xs text-[#1A5276] sm:text-[13px]"
                    >
                        Forgot password?
                    </Link>
                </div>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="h-11 w-full rounded-lg border placeholder:text-[13px] border-border bg-white px-3 text-sm outline-none focus:outline-0 focus:ring-0 sm:text-base"
                />
            </div>

            <button
                className="mt-1 h-11 w-full rounded-lg bg-primary text-sm font-semibold text-white sm:text-base"
                type="submit"
            >
                Sign In
            </button>

            <div className="mt-2 flex flex-wrap justify-center text-xs text-text-muted sm:text-sm">
                Don't have an account?
                <Link
                    className="ps-1 font-semibold text-[#1A5276]"
                    to="/register"
                >
                    Create an account
                </Link>
            </div>
        </form>
    );
}

export default LoginForm