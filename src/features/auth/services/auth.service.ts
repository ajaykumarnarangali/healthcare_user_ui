import { api } from "../../../services/api";
import type { PatientRegisterData, DoctorRegisterData, VerifyEmailData, LoginData } from "../schemas/auth.schema";
import type { VerifyEmailQuery } from "../types/auth.types";

export async function registerPatient(payload: PatientRegisterData) {
    const response = await api.post("/auth/patient/register", payload, {
        requiresAuth: false,
    });

    return response.data;
}

export async function registerDoctor(payload: DoctorRegisterData) {
    const response = await api.post("/auth/doctor/register", payload, {
        requiresAuth: false,
    });

    return response.data;
}

export async function verifyEmail(data: VerifyEmailData, query: VerifyEmailQuery) {
    const response = await api.post("/auth/verify-email", data, {
        params: query,
        requiresAuth: false,
    });

    return response.data;
}

export async function loginUser(data: LoginData) {
    const response = await api.post("/auth/login", data, {
        requiresAuth: false,
    });

    return response.data;
}

export async function refreshToken() {
    const response = await api.post("/auth/refresh", {}, {
        requiresAuth: false,
    });

    return response.data;
}

export async function getCurrentUser() {
    const response = await api.get("/auth/me");
    return response.data;
}

export async function signOut() {
    const response = await api.post("/auth/signout", {}, { withCredentials: true });
    return response.data
}