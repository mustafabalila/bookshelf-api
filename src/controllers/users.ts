import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import passport from "passport";
import { validationResult } from 'express-validator/check';
import _ from 'lodash';
import { User } from '../models/user.model';
import { Cart } from "../models/cart.model";
import { Address } from "../models/address.model";
import { Order } from "../models/order.model";
export class UserController {

    /**
     * @section CRUD operations
     */

    /**
     * @description findAll gets all the users in the DB
     */
    public static findAll = async (req: Request, res: Response) => {
        try {
            const users = await User.find({}, { password: 0 });
            return res.json({ users });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    /**
     * @description findOne gets a single user by its id
     */
    public static findOne = async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const user = await User.findOne({ _id: id }, { password: 0, })
                .populate({ path: 'cart', select: '_id, books' })
                .populate('address');
            return res.json({ user });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    /**
     * @description updateOne updates an authenticated user by its id
     * the id is not required in this fucntion but it's used only for
     * code consistensy
     */

    public static updateOne = async (req: Request, res: Response) => {
        const body = req.body;
        const user = req.user;
        const updatedFields = _.pick(body, ['email', 'phone', 'points',]);

        if (!user) {
            return res.sendStatus(403);
        }
        try {
            const doc = await User.
                findByIdAndUpdate(user.id, updatedFields);
            return res.json({ message: "updated successfuly", user: doc });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    /**
     * @description deleteOne deletes an authenticated user by its id
     * the id is not required in this fucntion but it's used only for
     * code consistensy
     */
    public static deleteOne = async (req: Request, res: Response) => {
        const user = req.user;
        if (!user) {
            return res.sendStatus(403);
        }
        try {
            const doc = await User.findByIdAndDelete(user.id);
            return res.json({ message: "deleted successfuly", user: doc });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    /**
     * @section Authentication
     */

    /**
     * @description login authenticate an exsidting user and generates a jwt
     */
    public static login = async (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('local',
            { session: false }, async (err, user, info) => {
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
                const token = jwt.sign(payload, process.env.JWT_KEY);
                return res.json({ user, token });
            })(req, res, next);

    }

    /**
     * @description signup Creates a new user and save to the DB
     */
    public static signup = async (req: Request, res: Response) => {
        const fields = _.pick(req.body, [
            'email', 'password', 'firstName', 'lastName',
            'phone', 'dateOfBirth',
        ]);
        const addressFields = _.pick(req.body,
            ['street', 'neighborhood', 'state', 'locallity']);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        try {
            const exsistedUser = await User.findOne({
                email: fields.email,
            });
            if (exsistedUser) {
                return res.json(400)
                    .json({ message: "This email is already in use" });
            }
            const address = await Address.create(addressFields);
            const user = await User.create({ address: address.id, ...fields });
            return res.json({ message: "Account was created" }).status(201);
        } catch (error) {
            return res.status(500).json({ error });
        }

    }

    /**
     * @section Cart
     */


    public static findCart = async (req: Request, res: Response) => {
        const user = req.user;
        try {
            const cart = await Cart.findOne({ user: user.id })
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
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    public static addToCart = async (req: Request, res: Response) => {
        const bookId = req.body.bookId;
        const user = req.user;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (!user) {
            return res.sendStatus(403);
        }
        try {
            const cart = await Cart.findOne({ user: user.id });
            cart.books.push(bookId);
            await cart.save();
            return res.json({ message: "Book was added successfuly" });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    public static removeFromCart = async (req: Request, res: Response) => {
        const bookId = req.body.bookId;
        const user = req.user;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        if (!user) {
            return res.sendStatus(403);
        }
        try {
            const cart = await Cart.findOne({ user: user.id });
            cart.books.pull(bookId);
            await cart.save();
            return res.json({ message: "Book was removed successfuly" });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    public static createOrder = async (req: Request, res: Response) => {
        const fields = _.pick(req.body, ["note", "totalPrice", "priceSDG", "priceXP", "booksCount"]);
        const user = req.user;
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        if (!user) {
            return res.sendStatus(403);
        }
        try {
            const order = await Order.create({...fields, user: user.id });
            await order.save();
            return res.json({ message: "Order was created successfuly" });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    public static getOrder = async (req: Request, res: Response) => {
        const user = req.user;
        
        try {
            const orders = await Order.find({ });
            return res.json({ orders, user });
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}
