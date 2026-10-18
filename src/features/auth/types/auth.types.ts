export type userRoles = "PATIENT" | "DOCTOR";

export const roleRoutes: Record<userRoles, string> = {
    PATIENT: "/patient/dashboard",
    DOCTOR: "/doctor/dashboard",
};

export type RegisterData = {
    email: string,
    password: string,
    licenseNumber?: string
}

export type LoginData = {
    email: string,
    password: string,
    licenseNumber?: string
}

export type VerifyEmailQuery = {
    token: string;
    userId: string;
};
