export type userRoles = "patient" | "doctor";

export type RegisterData = {
    email: string,
    password: string,
    licenseNumber?: string
}

export type VerifyEmailQuery = {
    token: string;
    userId: string;
};
