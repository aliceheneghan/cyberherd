import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const eventSchema = new Schema({
    name: {bandName: {type:String, required:true}, 
            eventName: {type:String, required:true}},
    date: {type:Date, required:true},
    time: {startTime: {type:Date, required:true}, 
            doorsOpen: {type:Date, required:true}},
    location: {venue: {type:Schema.Types.ObjectId, ref: 'venue'}, 
            venueURL: {type:String},
    tickets: {preSalePrice: {type:String}, 
            doorPrice: {type:String}, 
            ticketURL: {type:String}},
    genre:{type:String, enum:['Acoustic', 'Afrobeat', 'Alternative', 'Electronic', 'Experimental', 'Folk', 'Hardcore', 'Hip-Hop', 'Indie', 'Krautrock', 'Metal', 'Rock', 'Pop', 'Post-Punk', 'Psychedelic', 'Punk', 'Rap', 'Shoegaze', 'Singer Songwriter', 'Stoner', 'Trap'], required:true},
    information: {description: {type:String, required:true},
            eventURL: {type:String}, 
            bandURL:{type:String}},
});

const Event = mongoose.model('event', eventSchema);

export default Event;