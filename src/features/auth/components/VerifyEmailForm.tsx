import { useForm } from "react-hook-form";
import { useVerifyEmail } from "../hooks/useVerifyEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyEmailSchema, type VerifyEmailData } from "../schemas/auth.schema";
import { IconMail } from "../../../components/Icons";

function VerifyEmailForm() {

    const { error, isLoading, VerifyEmail } = useVerifyEmail();
    const {
        reset,
        handleSubmit,
        formState: { errors },
        register: registerField,
    } = useForm<VerifyEmailData>({
        resolver: zodResolver(verifyEmailSchema),
    });

    return (
        <form
            onSubmit={handleSubmit((data) => VerifyEmail(data, reset))}
            className="flex w-full max-w-[440px] flex-col gap-5 rounded-xl bg-card p-5 shadow sm:p-6 md:p-8 font-inter"
        >
            <div className="flex flex-col gap-2">
                <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
                    <IconMail className="h-6 w-6 text-primary" />
                </div>

                <h1 className="text-2xl font-bold leading-8 text-text">
                    Verify your email
                </h1>

                <p className="text-sm leading-6 text-text-muted">
                    Enter your password to continue and complete your account verification.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="password"
                    className="text-sm font-semibold text-text"
                >
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...registerField("password")}
                    aria-invalid={!!errors.password}
                    className="h-12 w-full rounded-lg border border-border bg-white px-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
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
                type="submit"
                disabled={isLoading}
                className="h-12 w-full rounded-lg bg-primary px-4 text-sm font-semibold text-white transition hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isLoading ? "Verifying email..." : "Verify email"}
            </button>

            <p className="text-center text-xs leading-5 text-text-muted">
                Make sure you use the password associated with your account.
            </p>
        </form>
    )
}

export default VerifyEmailForm