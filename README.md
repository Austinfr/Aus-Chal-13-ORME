# Austin week 13 challenge Object-Relational Mapping

## Description

using sequelize as a way to model and work with data that is uploaded to a local database. It's done in the example of a digital warehouse that has products with categories and tags. The database is set up so it shows the use of relationships between data objects and how to work with them.

## TOC/Links

- [Goal](#goal)
- [Installation](#installation)
- [Usage](#usage)
- [Video guide](#video)
- [Contribution](#contribution)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## Goal

This app should provide the following functionality

- functionality for get requests: ![insomnia demo 1](./examples/13-orm-homework-demo-01.gif)

- functionality for getting specific data: ![insomnia demo 1](./examples/13-orm-homework-demo-02.gif)

- functionality for the post put and delete routes: ![insomnia demo 1](./examples/13-orm-homework-demo-03.gif)

## Installation

You need to install node js, a package manager and mysql

## Usage

After installing all the necessary software you can run, npm i, while in the local repo folder. After installing the packages make sure to create a environment variables file(.env), and create a DB_NAME variable set to 'ecommerce_db' and add DB_NAME and DB_PASSWORD variables with the name and password of the local database. Then you can start setting up the database by logging in and running source db/schema.sql, quitting out and then running npm run seed to populate the database. Once you're ready you can run npm start in order to host a local server you can interact through different endpoint requests. You can achieve this through programs like [insomnia](https://insomnia.rest/)

## Video

Here is a link for a video walkthrough

## Contribution

send any feedback to me through one of my contacts

## Testing

You can see what requests will return what data. Try deleting a category, product or tag that doesn't exist. See if you can get all the data you added and how that can return in a different request.

## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


## Questions

If there are any questions you can contact me at wustinah20@gmail.com or refer to https://github.com/austinfr 
