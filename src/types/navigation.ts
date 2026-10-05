import type { ComponentType } from 'react';

type IconProps = { size?: number; className?: string; style?: React.CSSProperties };

type DoctorAppSection =
    | 'dashboard'
    | 'appointments'
    | 'schedule'
    | 'independent-practice'
    | 'hospital-assignments'
    | 'leave'
    | 'patients'
    | 'consultations'
    | 'chat'
    | 'notifications'
    | 'earnings'
    | 'profile'
    | 'settings';

type DoctorSidebarItem = {
    id: DoctorAppSection;
    label: string;
    path: string;
    Icon: ComponentType<IconProps>;
    badge?: number;
};

export type DoctorSidebarGroup = {
    label: string;
    items: DoctorSidebarItem[];
};

type PatientAppSection =
    | 'dashboard'
    | 'doctors'
    | 'hospitals'
    | 'appointments'
    | 'payments'
    | 'consultations'
    | 'chat'
    | 'notifications'
    | 'settings'
    | 'profile';

type PatientSidebarItem = {
    id: PatientAppSection;
    label: string;
    path: string;
    Icon: ComponentType<IconProps>;
    badge?: number;
};

export type PatientSidebarGroup = {
    label: string;
    items: PatientSidebarItem[];
};