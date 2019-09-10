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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const passport_1 = __importDefault(require("passport"));
const check_1 = require("express-validator/check");
const lodash_1 = __importDefault(require("lodash"));
const user_model_1 = require("../models/user.model");
const cart_model_1 = require("../models/cart.model");
const address_model_1 = require("../models/address.model");
const order_model_1 = require("../models/order.model");
class UserController {
}
/**
 * @section CRUD operations
 */
/**
 * @description findAll gets all the users in the DB
 */
UserController.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.User.find({}, { password: 0 });
        return res.json({ users });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
/**
 * @description findOne gets a single user by its id
 */
UserController.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield user_model_1.User.findOne({ _id: id }, { password: 0, })
            .populate({ path: 'cart', select: '_id, books' })
            .populate('address');
        return res.json({ user });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
/**
 * @description updateOne updates an authenticated user by its id
 * the id is not required in this fucntion but it's used only for
 * code consistensy
 */
UserController.updateOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const body = req.body;
    const user = req.user;
    const updatedFields = lodash_1.default.pick(body, ['email', 'phone', 'points',]);
    if (!user) {
        return res.sendStatus(403);
    }
    try {
        const doc = yield user_model_1.User.
            findByIdAndUpdate(user.id, updatedFields);
        return res.json({ message: "updated successfuly", user: doc });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
/**
 * @description deleteOne deletes an authenticated user by its id
 * the id is not required in this fucntion but it's used only for
 * code consistensy
 */
UserController.deleteOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.sendStatus(403);
    }
    try {
        const doc = yield user_model_1.User.findByIdAndDelete(user.id);
        return res.json({ message: "deleted successfuly", user: doc });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
/**
 * @section Authentication
 */
/**
 * @description login authenticate an exsidting user and generates a jwt
 */
UserController.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    passport_1.default.authenticate('local', { session: false }, (err, user, info) => __awaiter(this, void 0, void 0, function* () {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.json({ info });
        }
        const payload = {
            cart: user.cart,
            email: user.email,
            id: user.id,
        };
        const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY);
        return res.json({ user, token });
    }))(req, res, next);
});
/**
 * @description signup Creates a new user and save to the DB
 */
UserController.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const fields = lodash_1.default.pick(req.body, [
        'email', 'password', 'firstName', 'lastName',
        'phone', 'dateOfBirth',
    ]);
    const addressFields = lodash_1.default.pick(req.body, ['street', 'neighborhood', 'state', 'locallity']);
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        const exsistedUser = yield user_model_1.User.findOne({
            email: fields.email,
        });
        if (exsistedUser) {
            return res.json(400)
                .json({ message: "This email is already in use" });
        }
        const address = yield address_model_1.Address.create(addressFields);
        const user = yield user_model_1.User.create(Object.assign({ address: address.id }, fields));
        return res.json({ message: "Account was created" }).status(201);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
/**
 * @section Cart
 */
UserController.findCart = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = req.user;
    try {
        const cart = yield cart_model_1.Cart.findOne({ user: user.id })
            .populate({
            path: 'books', select: ['_id', 'name', 'priceSdg', 'priceXp', 'author', 'image'], model: 'Book',
            populate: {
                path: 'author',
                select: ['_id', 'firstName', 'lastName'],
            },
        });
        // 'books',
        // ['_id', 'name', 'priceSdg', 'priceXp', 'author'],
        // 'Book'
        return res.json({ cart });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
UserController.addToCart = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const bookId = req.body.bookId;
    const user = req.user;
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    if (!user) {
        return res.sendStatus(403);
    }
    try {
        const cart = yield cart_model_1.Cart.findOne({ user: user.id });
        cart.books.push(bookId);
        yield cart.save();
        return res.json({ message: "Book was added successfuly" });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
UserController.removeFromCart = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const bookId = req.body.bookId;
    const user = req.user;
    const errors = check_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    if (!user) {
        return res.sendStatus(403);
    }
    try {
        const cart = yield cart_model_1.Cart.findOne({ user: user.id });
        cart.books.pull(bookId);
        yield cart.save();
        return res.json({ message: "Book was removed successfuly" });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
UserController.createOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const fields = lodash_1.default.pick(req.body, ["note", "totalPrice", "priceSDG", "priceXP", "booksCount"]);
    const user = req.user;
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }
    if (!user) {
        return res.sendStatus(403);
    }
    try {
        const order = yield order_model_1.Order.create(Object.assign({}, fields, { user: user.id }));
        yield order.save();
        return res.json({ message: "Order was created successfuly" });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
UserController.getOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = req.user;
    try {
        const orders = yield order_model_1.Order.find({});
        return res.json({ orders, user });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.UserController = UserController;
//# sourceMappingURL=users.js.map