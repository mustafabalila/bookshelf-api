export class Book {
    name: string;
    priceSdg: number;
    priceXp: number;
    author: any;
    description: string;
    note: string;
    pages: number;
    status: string;
    category: string;
    image: File;

}
export class Author {
    // tslint:disable-next-line:variable-name
    _id: string;
    firstName: string;
    lastName: string;
    about: string;
    books?: any[];
}
