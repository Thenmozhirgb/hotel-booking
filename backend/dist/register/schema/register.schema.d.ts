export declare class Register {
    name: string;
    email: string;
    phone_number: string;
    password?: string;
    created_at: Date;
}
export declare const RegisterSchema: import("mongoose").Schema<Register, import("mongoose").Model<Register, any, any, any, import("mongoose").Document<unknown, any, Register> & Register & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Register, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Register>> & import("mongoose").FlatRecord<Register> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
