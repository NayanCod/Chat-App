import Conversation from "../models/conversation_model.js";
import Message from "../models/message_model.js";

export const sendMessage = async(req, res) => {
    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId = req.user._id; // current logged in user;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, recieverId]}
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            });
            const newMessage = new Message({
                senderId,
                recieverId,
                message,
            })

            if(newMessage){
                conversation.messages.push(newMessage._id);
                res.staus(201).json({message: "Message sent successfully", newMessage});
            }

            await Promise.all([conversation.save(), newMessage.save()])
        }
    } catch (error) {
        console.log("Error in sending message controller", error);
        res.status(500).json({message: "Internal server error"});
        
    }
    
};

export const getMessage = async(req, res) => {
    try {
        const {id: chatUser} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, chatUser]},
        }).populate("messages");
        if(!conversation){
            return res.status(201).json([]);
        }
        const messages = conversation.messages;
        res.status(201).json(messages);
    } catch (error) {
        console.log("Error in getting message controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}