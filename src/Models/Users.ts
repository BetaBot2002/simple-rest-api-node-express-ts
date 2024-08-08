import { model, Schema } from "mongoose"
interface IUsers {
    name: string,
    email: string,
    password: string,
    age?: number,
    proffesion?: string
}

const userSchema: Schema = new Schema<IUsers>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    proffesion: {
        type: String
    }
})

const Users = model<IUsers>('Users', userSchema)

export {
    Users,
    IUsers
}
