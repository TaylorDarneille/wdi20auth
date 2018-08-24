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

## How to Use:

#### 1. Clone repo under a new name.
``` git clone <repo_link_here> <new_custom_project_name> ```

#### 2. Install node modules from ```package.json```
```npm install ```

#### 3. Customize
* Change the title in the head of layout.ejs
* Change the logo in the navbar partial
* Change the despription and repo link in package.json
* Remove the boilerplate readme content

#### 4. Create a new database for the project
``` createdb <new_db_name>```

#### 5. Open ```config.json``` and change the following:
* Change database name to match your new database
* Set username/password if necessary
* If not using postgres, change the dialect accordingly (**Note:** If you're using a different database, you'll need to install the appropriate node modules to support and uninstall pg and pg/hstore.)

#### 6. Change models and migrations if necessary
For example, if you don't need the ```admin``` column, you will want to delete it from both the migration and model for the user. Likewise, if you need to add something, add in both files.

#### 7. Run the migrations to set up the tables in your database
```sequelize db:migrate```

#### 8. Add a ```.env``` file with a SESSION_SECRET key
.env file is already set to be ignored in .gitignore file.

#### 9. Run the server to make sure the previous steps worked as expected.
If you ahve nodemon installed globally:
```nodemon```
Otherwise:
```node index.js```

#### 10. Create a new remote repository on github, then disconnect your local repo from the boilerplate remote repo and connect it to your new remote repo.
```
git remote remove origin
git remote add origin <new_repo_link>
git add .
git commit -m "initial commit of new project"
gir push origin master
```

#### Next Steps:
Assuming that the set up steps went smoothly, now you can add new models/migrations for your new app, and generally just start developing it as if you had started from scratch!
