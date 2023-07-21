export enum CustommerType { // nilainya sudah pasti
    REGULAR = "REGULAR",    
    GOLD = "GOLD",
    PLATINUM = "PLATINUM",
}

export type Custommer = {
    id: number;
    name: string;
    type: CustommerType;
}