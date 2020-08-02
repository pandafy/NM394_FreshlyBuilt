# NM394_FreshlyBuilt

## Steps to setup project locally
 
### Linux

* npm install
* npm run clientinstall
* Install postgresql using apt
* Install postgis using apt
* Create new user and database
* Switch postgresql cli mode then, grant superuser privileges to your newly created user. (ALTER USER your_username WITH SUPERUSER;)
* Start postgres by running: systemctl start postgresql
* Replace user, password,database with the user,password,database  (name) created above.
* Run knex migrate:latest
* Run knex seed:run
* npm run dev
