import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const eventSchema = new Schema({
    name: {bandName: {type:String, required:true}, 
            eventName: {type:String, required:true}},
    date: {type:Date, required:true},
    time: {startTime: {type:Number, required:true}, 
            doorsOpen: {type:Number, required:true}},
    location: {venue: {type: mongoose.Schema.Types.ObjectId, ref: "venue"}, 
            eventURL: {type:String, required:true}, 
            venueURL: {type:String, required:true}},
    tickets: {preSalePrice: {type:String, required:true}, 
            doorPrice: {type:String, required:true}, 
            ticketURL: {type:String}},
    genre:[],
    information: {description: {type:String, requred:true}, 
    bandURL:{type:String}},
});

const Event = mongoose.model('events', eventSchema);

export default Event;