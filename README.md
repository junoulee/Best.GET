# Best.GET

A full stack web application for consumers who want to shop for tech accessories and electronics.

## Why I Built This

I wanted to build an application that caters to the technological needs of developers.

## Technologies Used

- React.js
- Webpack
- Bootstrap 5
- Node.js
- Express.js
- PostgreSQL
- HTML5
- CSS3
- Heroku
- Figma

## Live Demo

Try the application live at [https://best-p9hlpm9n1-junoulees-projects.vercel.app/#]([https://best-dot-get.herokuapp.com/](https://best-p9hlpm9n1-junoulees-projects.vercel.app/#))

## Preview

![Best.GET](server/public/images/best.get.gif)

## Features

- User can search products with a search term
- User can view a list of search results
- User can view product details
- User can create an account

## Future features

- User can log in
- User can add items to cart
- User can add items to wishlist

### System Requirements

- Node.js 10 or higher
- NPM 6 or higher

### Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/junoulee/Best.GET.git
    cd Best.GET
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```

1. Start PostgreSQL.

    ```shell
    sudo service postgresql start
    ```

1. Create a local .env file from provided example file.

    ```shell
    cp .env.example .env
    ```

1. Update the DATABASE_URL in the .env file. Update 'changeMe' to the name-of-database you wish to create.

    ```shell
    DATABASE_URL=postgres://dev:dev@localhost/changeMe?sslmode=disable
    ```

1. Create a database using the name-of-database set in the .env file.

    ```shell
    createdb name-of-database
    ```

1. Import the example database to PostgreSQL and start the database (http://localhost:8081/).

    ```shell
    npm run db:import
    pgweb --db=name-of-database
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
