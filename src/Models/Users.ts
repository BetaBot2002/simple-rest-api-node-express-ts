import { model, Schema } from "mongoose"
import { IUsers } from "../Interfaces/IUsers.js"


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
    Users
}
