import { z as zod } from "zod";

const baseRegisterSchema = zod.object({
    email: zod
        .string()
        .trim()
        .toLowerCase()
        .email("Please enter a valid email address")
        .max(255, "Email must not exceed 255 characters"),

    password: zod
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(128, "Password must not exceed 128 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character"
        ),
});

export const patientRegisterSchema = baseRegisterSchema;

export const doctorRegisterSchema = baseRegisterSchema.extend({
    licenseNumber: zod
        .string()
        .trim()
        .min(1, "Licence number is required"),
});

export const loginSchema = baseRegisterSchema;

export const verifyEmailSchema = zod.object({
    password: zod
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(128, "Password must not exceed 128 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character"
        )
});

export type PatientRegisterData = zod.infer<typeof patientRegisterSchema>;
export type DoctorRegisterData = zod.infer<typeof doctorRegisterSchema>;
export type LoginData = zod.infer<typeof loginSchema>;
export type VerifyEmailData = zod.infer<typeof verifyEmailSchema>;