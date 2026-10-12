import { useState } from "react";
import type { RegisterData, userRoles } from "../types/auth.types";

export function useRegister() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [role, setRole] = useState<userRoles>("patient");

    const register = async (data: RegisterData) => {

        console.log(data)
        setIsLoading(true);
        setError(null);

        try {
            // Call registration service here
        } catch (err: unknown) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Registration failed"
            );
        } finally {
            setIsLoading(false);
        }
    };

    return {
        role,
        error,
        setRole,
        register,
        isLoading,
    };
}