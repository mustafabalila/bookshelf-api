import { Router } from 'express';
import passport from "passport";
import { AuthorController } from '../controllers/author';
import { authorValidtors } from '../middlewares/validator';

const router = Router();

/**
 * @api {get} /authors List all authors
 * @apiGroup Authors
 * @apiSuccess {Object[]} authors list
 * @apiSuccess {String} authors._id Authors id
 * @apiSuccess {String} author.firstName Author firstName
 * @apiSuccess {String} author.lastName Author lastName
 * @apiSampleRequest http://localhost:8000/api/authors/
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "_id": 564643,
 *      "fistName": "Tom",
 *      "lastName": "Keen"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/', AuthorController.findAll);

/**
 * @api {post} /authors/create creates a new author
 * @apiGroup Authors
 * @apiParam {String} firstName Author firstName
 * @apiParam {String} lastName Author lastName
 * @apiParam {String} about Author about
 * @apiSuccess {String} author._id author's id
 * @apiSuccess {String} author.firstName author's firstName
 * @apiSuccess {String} author.lastName author's lastName
 * @apiSuccess {String} about author's about
 * @apiParamExample {json} Input
 *     {
 *      "firstName": "Tom",
 *      "lastName": "Keen",
 *      "about": "English man, was born on an island in 1990"
 *     }
 * @apiSampleRequest http://localhost:8000/api/authors/signup
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *     {
 *      "firstName": "Tom",
 *      "lastName": "Keen",
 *      "about": "English man, was born on an island in 1990",
 *      "books": []
 *     }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/create', AuthorController.create);

/**
 * @api {get} /authors/:id Get a single author
 * @apiGroup Authors
 * @apiParam {id} id Author's _id
 * @apiSuccess {String} authors._id Author's _id
 * @apiSuccess {String} authors.firstName author's firstName
 * @apiSuccess {String} authors.lastName author's lastName
 * @apiSuccess {String} authors.about author's about
 * @apiSuccess {Object[]} authors.books author's books
 * @apiSuccessExample {json} Success
 *   HTTP/1.1 200 OK
 *    {
 *      "_id": 564643,
 *      "firstName": "Tom",
 *      "lastName": "Keen",
 *      "about": "English man, was born on an island in 1990",
 *      "books": []
 *    }
 * @apiSampleRequest http://localhost:8000/api/authors/:id
 * @apiErrorExample {json} User not found
 *    HTTP/1.1 404 Not Found
 * @apiErrorExample {json} Find error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/:id', AuthorController.findOne);

   /**
    * @api {put} /authors/id updates an author by its id
    * @apiGroup Authors
    * @apiParam {String} id Author's _id
    * @apiParam {String} firstName Author's firstName
    * @apiParam {String} lasName Author's lasName
    * @apiParamExample {json} Input
    *    {
    *      "id": "3598564339h90khv",
    *      "firstName": "Raymond",
    *      "lastName": "Redington",
    *    }
    * @apiSuccess {String} authors._id Author's _id
    * @apiSuccess {String} authors.firstName author's firstName
    * @apiSuccess {String} authors.lastName author's lastName
    * @apiSuccess {String} authors.about author's about
    * @apiSuccess {Object[]} authors.books author's books
    * @apiSampleRequest http://localhost:8000/api/authors/:id
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "_id": 564643,
    *      "firstName": "Raymond",
    *      "lastName": "Redington",
    *      "about": "English man, was born on an island in 1990",
    *      "books": []
    *    }
    * @apiErrorExample {json} Update error
    *    HTTP/1.1 500 Internal Server Error
    */
router.put('/:id', passport.authenticate('jwt', { session: false }), AuthorController.updateOne);

   /**
    * @api {delete} /authors/id deletes an authenticated user
    * @apiGroup Authors
    * @apiParam {String} id Author's _id
    * @apiSuccess {String} authors._id Author's _id
    * @apiSuccess {String} authors.firstName author's firstName
    * @apiSuccess {String} authors.lastName author's lastName
    * @apiSuccess {String} authors.about author's about
    * @apiSuccess {Object[]} authors.books author's books
    * @apiSampleRequest http://localhost:8000/api/authors/:id
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "_id": 564643,
    *      "firstName": "Raymond",
    *      "lastName": "Redington",
    *      "about": "English man, was born on an island in 1990",
    *      "books": []
    *    }
    * @apiErrorExample {json} Update error
    *    HTTP/1.1 500 Internal Server Error
    */
router.delete('/:id', passport.authenticate('jwt', { session: false }), AuthorController.deleteOne);

export default router;
