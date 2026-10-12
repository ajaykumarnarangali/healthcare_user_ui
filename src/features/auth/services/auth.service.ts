import { api } from "../../../services/api";
import type { PatientRegisterData, DoctorRegisterData } from "../schemas/auth.schema";

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