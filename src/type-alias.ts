//type alias

export type ID = string | number; //string atau number(type alias untuk union type)

export type Category = {
    id: ID;
    name: string;
    description?: string; // tidak wajib diisi ada optional property
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
    description?: string;
}
