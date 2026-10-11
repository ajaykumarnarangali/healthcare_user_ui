import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
    const [role, setRole] = useState<"patient" | "doctor">("patient");

    return (
        <form className="flex w-full max-w-[440px] flex-col gap-4 rounded-xl bg-card p-5 shadow sm:p-6 md:p-8 font-inter">
            <div>
                <h1 className="mb-1 text-xl font-bold leading-7 text-text sm:text-2xl sm:leading-8">
                    Create your account
                </h1>
                <p className="text-xs text-text-muted sm:text-sm">
                    {role === "patient"
                        ? "Register as a patient to book appointments and manage your healthcare."
                        : "Register as a doctor to create your professional account."}
                </p>
            </div>

            <div className="mt-1 grid grid-cols-2 gap-1 rounded-lg border border-border bg-[#f0f4f8] p-1">
                <button
                    type="button"
                    onClick={() => setRole("patient")}
                    aria-pressed={role === "patient"}
                    className={`h-10 rounded-md text-sm font-semibold transition-colors ${role === "patient"
                            ? "bg-primary text-white shadow-sm"
                            : "text-text-muted hover:bg-white"
                        }`}
                >
                    Patient
                </button>
                <button
                    type="button"
                    onClick={() => setRole("doctor")}
                    aria-pressed={role === "doctor"}
                    className={`h-10 rounded-md text-sm font-semibold transition-colors ${role === "doctor"
                            ? "bg-primary text-white shadow-sm"
                            : "text-text-muted hover:bg-white"
                        }`}
                >
                    Doctor
                </button>
            </div>

            <div className="mt-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase text-text-muted sm:text-[13px]">
                    Email address
                </label>
                <input
                    type="email"
                    placeholder="your@email.com"
                    className="h-11 w-full rounded-lg border placeholder:text-[13px] border-border bg-white px-3 text-sm outline-none focus:outline-0 focus:ring-0 sm:text-base"
                    required
                />
            </div>

            {role === "doctor" && (
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase text-text-muted sm:text-[13px]">
                        Medical licence number
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your medical licence number"
                        className="h-11 w-full rounded-lg border placeholder:text-[13px] border-border bg-white px-3 text-sm outline-none focus:outline-0 focus:ring-0 sm:text-base"
                        required
                    />
                </div>
            )}

            <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                    <label className="text-xs font-semibold uppercase text-text-muted sm:text-[13px]">
                        Password
                    </label>
                </div>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="h-11 w-full rounded-lg border placeholder:text-[13px] border-border bg-white px-3 text-sm outline-none focus:outline-0 focus:ring-0 sm:text-base"
                    required
                />
            </div>

            <button
                className="mt-1 h-11 w-full rounded-lg bg-primary text-sm font-semibold text-white sm:text-base"
                type="submit"
            >
                Create account
            </button>

            <div className="mt-2 flex flex-wrap justify-center text-xs text-text-muted sm:text-sm">
                Already have an account?
                <Link
                    to="/login"
                    className="ps-1 font-semibold text-[#1A5276]"
                >
                    Sign In
                </Link>
            </div>
        </form>
    );
}

export default RegisterForm;