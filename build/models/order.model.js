"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// tslint:disable: object-literal-sort-keys
const orderSchema = new mongoose_1.Schema({
    booksCount: {
        type: Number,
        min: 0,
        default: 0,
        required: true,
    },
    priceSDG: {
        type: Number,
        min: 0,
        default: 0,
        required: true,
    },
    priceXP: {
        type: Number,
        min: 0,
        default: 0,
        required: true,
    },
    note: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        default: 'processing',
        enum: ['going', 'processing', 'finished'],
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    deliverer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Deliverer',
    },
    totalPrice: {
        type: Number,
        min: 0,
        required: true,
    },
});
exports.Order = mongoose_1.model("Order", orderSchema);
//# sourceMappingURL=order.model.js.map