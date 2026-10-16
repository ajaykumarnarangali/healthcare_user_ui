import { toast } from "sonner";
import { useState } from "react";
import type { UseFormReset } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { verifyEmail } from "../services/auth.service";
import type { VerifyEmailQuery } from "../types/auth.types";
import type { VerifyEmailData } from "../schemas/auth.schema";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";

export function useVerifyEmail() {

    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();


    async function VerifyEmail(data: VerifyEmailData, reset: UseFormReset<VerifyEmailData>) {
        const token = searchParams.get("token");
        const userId = searchParams.get("userId");
        if (!token || !userId) {
            toast.error("Invalid or expired verification link.");
            return;
        }
        const query: VerifyEmailQuery = {
            token,
            userId
        }

        setIsLoading(true);
        setError(null);

        try {
            let res = await verifyEmail(data, query);
            if (res.success) {
                toast.success(res.message);
                reset();
                navigate("/");
            }
        } catch (err: unknown) {
            let message = getApiErrorMessage(err);
            setError(message);
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        error,
        isLoading,
        VerifyEmail
    }
}