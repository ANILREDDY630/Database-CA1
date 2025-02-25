import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requried: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);
const restanurent = mongoose.model("restanurent", restaurantSchema);
export default restanurent;