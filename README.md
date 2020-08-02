# NM394_FreshlyBuilt

<img src=https://github.com/pandafy/NM394_FreshlyBuilt/blob/master/Images/logo2.svg height=100px width=350px>

## Steps to setup project locally
 
### For Linux OS:

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

### 1st mentoring & evaluation round:
 
 * Fetched the sentinel-5p data 
 * Performed data mining and data preprocessing
 * Plotted Hotspots district-wise using spatial auto-correlation
 
### 2nd mentoring round:
 
 * Analysed the movement of Hotspots
 * Plotted backward trajectory 
 


