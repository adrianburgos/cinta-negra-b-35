import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        emergencyContact: {
            type: String
        }
    },
    { timestamps: true }
);

export default userSchema;