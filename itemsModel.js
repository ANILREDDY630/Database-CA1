import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            requried: true,
        },

    },
    { timestamps: true}
);
const menuitems = mongoose.model("menuitems", itemsSchema);
export default menuitems;