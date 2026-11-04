import { z } from 'zod';

export const createPatientProfileSchema = z.object({
    firstName: z.string()
        .trim()
        .min(1, 'First name is required')
        .max(100, 'First name must not exceed 100 characters'),

    lastName: z.string()
        .trim()
        .max(100, 'Last name must not exceed 100 characters')
        .optional(),

    phone: z.string()
        .trim()
        .min(10, 'Phone number must be at least 10 digits')
        .max(20, 'Phone number must not exceed 20 characters')
        .regex(/^\+?[0-9]+$/, 'Invalid phone number format'),

    dateOfBirth: z.coerce.date({
        error: 'Please enter a valid date of birth',
    }),

    gender: z.enum(['MALE', 'FEMALE', 'OTHER'], {
        error: 'Please select a valid gender',
    }),

    streetAddress: z.string()
        .trim()
        .max(255, 'Street address must not exceed 255 characters')
        .optional(),

    city: z.string()
        .trim()
        .max(100, 'City must not exceed 100 characters')
        .optional(),

    state: z.string()
        .trim()
        .max(100, 'State must not exceed 100 characters')
        .optional(),

    country: z.string()
        .trim()
        .max(100, 'Country must not exceed 100 characters')
        .optional(),

    postalCode: z.string()
        .trim()
        .max(20, 'Postal code must not exceed 20 characters')
        .optional(),
}).strict();

export const updatePatientProfileSchema =
    createPatientProfileSchema.partial().strict();

export type CreatePatientProfileFormData =
    z.infer<typeof createPatientProfileSchema>;

export type UpdatePatientProfileFormData =
    z.infer<typeof updatePatientProfileSchema>;