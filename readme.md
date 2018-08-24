# Auth Boilerplate: How to Use

This is a simple node/express app has authentication set up and is intended for use as a boilerplate for future projects that require authentication.

## Routes
| Method | Path | Purpose |
| ------ | ------------ | -------------------------------------------------------- |
| GET | / | home page 
| GET | /auth/login | form for logging in
| POST | /auth/login | log user in and redirect to profile page |
| GET | /auth/signup | form for signing up |
| POST | /auth/signup | check if user already exists and redirect to login page, otherwise create new user and redirect to profile page |
| GET | /logout | log out the current user and redirect to home page |
| GET | /profile | check if user is logged in and render profile page, otherwise redirect to login page |

TODO: add table structure and how to set up your own postrgres database
TODO: add technologies used