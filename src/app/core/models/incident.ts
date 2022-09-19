export interface Incident {
    id?: string;
    name: string;
    color: string;
    description?: string;
    createdBy: string;
    createdAt: string | Date;
    updatedAt?: string | Date;
}