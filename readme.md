# Auth Boilerplate: How to Use

This is a simple node/express app has authentication set up and is intended for use as a boilerplate for future projects that require authentication.

## Technologies Used
* Sequelize models and migration for user model
* Settings for Postgresql
* Passport and Passport-Local for authentication
* Express sessions to keep user logged in
* Connect-Flash for error/success messages
* Bcrypt for hassing passwords

## Routes Included
| Method | Path | Purpose |
| ------ | ------------ | -------------------------------------------------------- |
| GET | / | home page 
| GET | /auth/login | form for logging in
| POST | /auth/login | log user in and redirect to profile page |
| GET | /auth/signup | form for signing up |
| POST | /auth/signup | check if user already exists and redirect to login page, otherwise create new user and redirect to profile page |
| GET | /logout | log out the current user and redirect to home page |
| GET | /profile | check if user is logged in and render profile page, otherwise redirect to login page |

## User Model
| Column Name | Type | Notes |
| ----------- | ---- | ------------- |
| id | Integer | serial primary key |
| createdAt | Date | auto-generated from sequelize |
| updatedAt | Date | auto-generated from sequelize |
| firstname | String | - |
| lasname | String | - |
| email | String | used for login |
| password | String | hashed w/ bcrypt |
| dob | Date | - |
| admin | Boolean | defaults to false for regular users |
