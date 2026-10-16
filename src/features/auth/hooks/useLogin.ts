import { useState } from "react";
import type { UseFormReset } from "react-hook-form";
import { type LoginData } from "../schemas/auth.schema";

export function useLogin() {

    const [error, setError] = useState<null | string>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function login(data: LoginData, reset: UseFormReset<LoginData>) {

    }

    return {
        error,
        isLoading,
        login,
    };
}