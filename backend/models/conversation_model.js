import mongoose from "mongoose";
import User from "./user_model.js";
import Message from "./message_model.js";

const coversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    }],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: Message,
            default: [],
        },
    ]
}, {timestamps: true});

const Conversation = mongoose.model('Conversation', coversationSchema);

export default Conversation;