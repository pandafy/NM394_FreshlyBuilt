# Team: FreshlyBuilt 
# PSID: NM394

<img src=https://github.com/pandafy/NM394_FreshlyBuilt/blob/master/Images/logo2.svg height=200px width=550px>

## Steps to setup project locally
 
### For Linux OS:

1. **NPM install**
```
* npm install
* npm run clientinstall
```
2. **Install Postgres & Postgis using apt**

* Create new user and database
* Switch postgresql cli mode then, grant superuser privileges to your newly created user. (ALTER USER your_username WITH SUPERUSER;)
* Start postgres by running: `systemctl start postgresql`
* Replace `user`, `password`, `database` with the `user`, `password`, `database`  (name) created above.

3. **Run knex migrate:latest**

```
knex seed:run
npm run dev
```

## Updates for each mentoring & evaluation round

### 1st mentoring & evaluation round:
 
 * Fetched the sentinel-5p data 
 * Performed data mining and data preprocessing
 * Plotted Hotspots district-wise using spatial auto-correlation
 
### 2nd mentoring round:
 
 * Analysed the movement of Hotspots
 * Plotted backward trajectory by using metrelogical data set 
 * Depicted the shifts in hotspot over a period of time .


