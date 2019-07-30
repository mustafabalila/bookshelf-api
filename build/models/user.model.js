"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const cart_model_1 = require("./cart.model");
// tslint:disable: object-literal-sort-keys
const userScheam = new mongoose_1.Schema({
    // user shcema
    username: {
        type: String,
        min: 5,
        required: true,
        match: /[a-zA-Z0-9_]/,
    },
    points: {
        type: Number,
        default: 0,
        required: true,
        min: 0,
    },
    privilages: {
        type: Array,
        default: [],
    },
    password: {
        type: String,
        required: true,
    },
    cart: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Cart',
    },
});
const comparePassword = function (password, cb) {
    bcryptjs_1.default.compare(password, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};
userScheam.methods.comparePassword = comparePassword;
userScheam.pre("save", function (next) {
    const user = this;
    if (!user.isModified()) {
        return next();
    }
    bcryptjs_1.default.hash(user.password, 8, (err, hash) => __awaiter(this, void 0, void 0, function* () {
        const cart = yield cart_model_1.Cart.create({ user: user.id });
        user.cart = cart.id;
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    }));
});
exports.User = mongoose_1.model("User", userScheam);
//# sourceMappingURL=user.model.js.map