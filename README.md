# Blog Database

- [Sanity.io](https://www.sanity.io/) (headless database)
- [Node.js](https://www.sanity.io/docs/content-modelling) (content modeling)

## Schemas

- [Index](https://github.com/nandotess/blog-database/blob/main/schemas/schema.js)
- [User](https://github.com/nandotess/blog-database/blob/main/schemas/user.js)
- [Post](https://github.com/nandotess/blog-database/blob/main/schemas/post.js)

## Notes

- The database is in the Sanity.io cloud, on a free tire plan.
- This repository contains all **data modeling** from the [Blog](https://github.com/nandotess/blog) project.
- There are 2 datasets: **development** and **production**.
- The **development** dataset is used on [development site](#) or when running the project on localhost.
- The **production** dataset us used on [production site](#).
- [REST API](https://www.sanity.io/docs/http-api) is used by the **backend** to communicate with the database.
- [GROQ](https://www.sanity.io/docs/groq) is used by the **frontend** to communicate with the database.
- All the datasets are protected by tokens to authenticate. There is one token for the backend (read + write) and one token for the frontend.
