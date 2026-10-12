import { useState } from "react";
import { toast } from "sonner";
import type { UseFormReset } from "react-hook-form";
import type { RegisterData, userRoles } from "../types/auth.types";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import { registerDoctor, registerPatient } from "../services/auth.service";

export function useRegister() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [role, setRole] = useState<userRoles>("patient");

    const register = async (data: RegisterData, reset: UseFormReset<RegisterData>) => {
        setIsLoading(true);
        setError(null);

        try {
            let res: any;
            if (role === "doctor") {
                res = await registerDoctor({
                    email: data.email,
                    password: data.password,
                    licenseNumber: data.licenseNumber,
                });
            } else {
                res = await registerPatient({
                    email: data.email,
                    password: data.password,
                });
            }
            toast.success(res.message);
            if (res.success) {
                reset();
            }
        } catch (err: unknown) {
            let message = getApiErrorMessage(err);
            setError(message);
            toast.error(message);
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