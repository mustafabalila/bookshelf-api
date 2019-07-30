define({ "api": [
  {
    "type": "delete",
    "url": "/authors/id",
    "title": "deletes an authenticated user",
    "group": "Authors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Author's _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors._id",
            "description": "<p>Author's _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.firstName",
            "description": "<p>author's firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.lastName",
            "description": "<p>author's lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.about",
            "description": "<p>author's about</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "authors.books",
            "description": "<p>author's books</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 564643,\n  \"firstName\": \"Raymond\",\n  \"lastName\": \"Redington\",\n  \"about\": \"English man, was born on an island in 1990\",\n  \"books\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/authors/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/authors.ts",
    "groupTitle": "Authors",
    "name": "DeleteAuthorsId"
  },
  {
    "type": "get",
    "url": "/authors",
    "title": "List all authors",
    "group": "Authors",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "authors",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors._id",
            "description": "<p>Authors id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.firstName",
            "description": "<p>Author firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.lastName",
            "description": "<p>Author lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": 564643,\n  \"fistName\": \"Tom\",\n  \"lastName\": \"Keen\"\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/authors/"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/authors.ts",
    "groupTitle": "Authors",
    "name": "GetAuthors"
  },
  {
    "type": "get",
    "url": "/authors/:id",
    "title": "Get a single author",
    "group": "Authors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Author's _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors._id",
            "description": "<p>Author's _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.firstName",
            "description": "<p>author's firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.lastName",
            "description": "<p>author's lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.about",
            "description": "<p>author's about</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "authors.books",
            "description": "<p>author's books</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": 564643,\n   \"firstName\": \"Tom\",\n   \"lastName\": \"Keen\",\n   \"about\": \"English man, was born on an island in 1990\",\n   \"books\": []\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/authors/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/authors.ts",
    "groupTitle": "Authors",
    "name": "GetAuthorsId"
  },
  {
    "type": "post",
    "url": "/authors/create",
    "title": "creates a new author",
    "group": "Authors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Author firstName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Author lastName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>Author about</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"firstName\": \"Tom\",\n \"lastName\": \"Keen\",\n \"about\": \"English man, was born on an island in 1990\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author._id",
            "description": "<p>author's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.firstName",
            "description": "<p>author's firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author.lastName",
            "description": "<p>author's lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>author's about</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n {\n  \"firstName\": \"Tom\",\n  \"lastName\": \"Keen\",\n  \"about\": \"English man, was born on an island in 1990\",\n  \"books\": []\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/authors/signup"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/authors.ts",
    "groupTitle": "Authors",
    "name": "PostAuthorsCreate"
  },
  {
    "type": "put",
    "url": "/authors/id",
    "title": "updates an author by its id",
    "group": "Authors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Author's _id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Author's firstName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lasName",
            "description": "<p>Author's lasName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": \"3598564339h90khv\",\n  \"firstName\": \"Raymond\",\n  \"lastName\": \"Redington\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors._id",
            "description": "<p>Author's _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.firstName",
            "description": "<p>author's firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.lastName",
            "description": "<p>author's lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authors.about",
            "description": "<p>author's about</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "authors.books",
            "description": "<p>author's books</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 564643,\n  \"firstName\": \"Raymond\",\n  \"lastName\": \"Redington\",\n  \"about\": \"English man, was born on an island in 1990\",\n  \"books\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/authors/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/authors.ts",
    "groupTitle": "Authors",
    "name": "PutAuthorsId"
  },
  {
    "type": "delete",
    "url": "/books/:id",
    "title": "Delets a single book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Book's _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book._id",
            "description": "<p>Author's _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.priceSdg",
            "description": "<p>book's priceSdg</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.priceXp",
            "description": "<p>book's priceXp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.name",
            "description": "<p>book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book.book",
            "description": "<p>book's author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n   \"_id\": 564643,\n   \"name\": \"The Cartel\",\n   \"priceSdg\": 120,\n   \"priceXp\": 520,\n   \"author\": {\n                \"id\": \"3598564339h90khv\",\n                \"firstName\": \"Raymond\",\n                \"lastName\": \"Redington\",\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/books/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/books.ts",
    "groupTitle": "Books",
    "name": "DeleteBooksId"
  },
  {
    "type": "get",
    "url": "/books",
    "title": "List all books",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "books",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books._id",
            "description": "<p>Books _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.name",
            "description": "<p>book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "book.priceSdg",
            "description": "<p>book priceSdg</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "book.priceXp",
            "description": "<p>book priceXp</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "book.author",
            "description": "<p>book author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": 564643,\n  \"name\": \"The Cartel\",\n  \"priceSdg\": 120,\n  \"priceXp\": 520,\n  \"author\": \"45678076453tvd8\"\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/books/"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/books.ts",
    "groupTitle": "Books",
    "name": "GetBooks"
  },
  {
    "type": "get",
    "url": "/books/:id",
    "title": "Get a single book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Book's _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book._id",
            "description": "<p>Author's _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.priceSdg",
            "description": "<p>book's priceSdg</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.priceXp",
            "description": "<p>book's priceXp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.name",
            "description": "<p>book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book.book",
            "description": "<p>book's author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n   \"_id\": 564643,\n   \"name\": \"The Cartel\",\n   \"priceSdg\": 120,\n   \"priceXp\": 520,\n   \"author\": {\n                \"id\": \"3598564339h90khv\",\n                \"firstName\": \"Raymond\",\n                \"lastName\": \"Redington\",\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/books/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/books.ts",
    "groupTitle": "Books",
    "name": "GetBooksId"
  },
  {
    "type": "post",
    "url": "/books/create",
    "title": "creates a new author",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "priceSdg",
            "description": "<p>Book priceSdg</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "priceXp",
            "description": "<p>Book priceXp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n\"_id\": 564643,\n\"name\": \"The Cartel\",\n\"priceSdg\": 120,\n\"priceXp\": 520,\n\"author\": \"45678076453tvd8\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book._id",
            "description": "<p>book's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.priceSdg",
            "description": "<p>book's priceSdg</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.priceXp",
            "description": "<p>book's priceXp</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "author",
            "description": "<p>book's author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n  {\n  \"_id\": 564643,\n  \"name\": \"The Cartel\",\n  \"priceSdg\": 120,\n  \"priceXp\": 520,\n  \"author\": \"45678076453tvd8\"\n  }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/books/create"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/books.ts",
    "groupTitle": "Books",
    "name": "PostBooksCreate"
  },
  {
    "type": "put",
    "url": "/books/:id",
    "title": "updates a single book",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Book's _id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"name\": \"The Mombasa Cartel\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book._id",
            "description": "<p>Author's _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.priceSdg",
            "description": "<p>book's priceSdg</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.priceXp",
            "description": "<p>book's priceXp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "book.name",
            "description": "<p>book's name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "book.book",
            "description": "<p>book's author</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   {\n   \"_id\": 564643,\n   \"name\": \"The Mombasa Cartel\",\n   \"priceSdg\": 120,\n   \"priceXp\": 520,\n   \"author\": {\n                \"id\": \"3598564339h90khv\",\n                \"firstName\": \"Raymond\",\n                \"lastName\": \"Redington\",\n           }\n   }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/books/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/books.ts",
    "groupTitle": "Books",
    "name": "PutBooksId"
  },
  {
    "type": "delete",
    "url": "/users/id",
    "title": "deletes an authenticated user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>User score</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 1,\n  \"Username\": \"Tom\",\n  \"score\": 200,\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "DeleteUsersId"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all users",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.score",
            "description": "<p>User's score</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": 564643,\n  \"username\": \"Tom\",\n  \"score\": 150\n}]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get a single user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.score",
            "description": "<p>User's score</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": 564643,\n   \"username\": \"Tom\",\n   \"score\": 150\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "GetUsersId"
  },
  {
    "type": "get",
    "url": "/users/:id/cart",
    "title": "Get an authenticated user cart",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>User _id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "UUId",
            "optional": false,
            "field": "cart._id",
            "description": "<p>cart _id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cart.books",
            "description": "<p>Cart's books</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Cart's price</p>"
          },
          {
            "group": "Success 200",
            "type": "UUID",
            "optional": false,
            "field": "user",
            "description": "<p>Cart's user _id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n {\n   \"_id\": 564643,\n   \"books\":  [],\n   \"price\": 150,\n   \"user\": \"44rfghgg75erf89643\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/:id/cart"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "User not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "GetUsersIdCart"
  },
  {
    "type": "post",
    "url": "/users/add_to_cart",
    "title": "adds a book to a user cart",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>bookId _id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"bookId\": \"33736328e8e7e7\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Book was added successfuly\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Authentication error",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "PostUsersAdd_to_cart"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Authenicates a user",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.score",
            "description": "<p>User's score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>authentication token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n{\n   \"user\": {\n   \"_id\": 564643,\n   \"username\": \"Tom\",\n   \"score\": 150\n   },\n   \"token\": \"fdggjhhyruufderr47itred.fdggjhhyruufderr47itred.fdggjhhyruufderr47itred=\"\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"username\": \"Tom\",\n \"password\": \"*******\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/login"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "PostUsersLogin"
  },
  {
    "type": "post",
    "url": "/users/remove_from_cart",
    "title": "removes a book to a user cart",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>bookId _id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"bookId\": \"33736328e8e7e7\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Book was removed successfuly\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Authentication error",
          "content": "HTTP/1.1 403 Forbidden",
          "type": "json"
        },
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "PostUsersRemove_from_cart"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "creates a new user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n \"username\": \"Tom\",\n \"password\": \"*******\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.score",
            "description": "<p>User's score</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>authentication token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": " HTTP/1.1 200 OK\n{\n   \"user\": {\n   \"_id\": 564643,\n   \"username\": \"Tom\",\n   \"score\": 150\n   },\n   \"token\": \"fdggjhhyruufderr47itred.fdggjhhyruufderr47itred.fdggjhhyruufderr47itred=\"\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/signup"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "PostUsersSignup"
  },
  {
    "type": "put",
    "url": "/users/id",
    "title": "updates an authenticated user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User _id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"_id\": \"3598564339h90khv\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>User score</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 1,\n  \"Username\": \"Tom\",\n  \"score\": 200,\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8000/api/users/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/users.ts",
    "groupTitle": "Users",
    "name": "PutUsersId"
  }
] });
