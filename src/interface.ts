export interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly nib: string;  //menggunakan readonly interface
    readonly npwp: string;
}