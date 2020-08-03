# Team: FreshlyBuilt 
# PSID: NM394
**PS : To develop AI/ML-based software to identify/analyze:**
      **1. Location of hot spots.
       2. The long-term occurrence of hot spots and changes.**

<img src=https://github.com/pandafy/NM394_FreshlyBuilt/blob/master/Images/logo2.svg height=200px width=550px>

We have developed ATHARVA which is a user friendly Web application that can be used by common people to gain the knowledge about hotspots of India and their changes.

## ATHARVA : Autoregressive Trend analysis & Hypercritical Air pollution Ranging & Visualisation Application

**Features in our application Atharva:**

* District-wise plotting Heatmap for each pollutant analyzation and visualization
* Coordinate basis Hotspots and Coldspots detection
* Graphical Analysis of concentration of pollutants at each hotspot 
* Filters available for querying various pollutants on the map for any week.
* Plotting shifts in HotSpots over a specific period of time
* Analyzing those shifts by plotting backward trajectories and verifying it using meteorological data.
* Two modes for visualization: Dark mode & Daylight




## Steps to setup project(ATHARVA) locally
 
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
 
 
 
 ## Tools and Technologies used 
 
 * Sentinel-5P Pre-Operations Data Hub (data source )
 * HARP (for fetching Sentinel5p data)
 * PYSAL (for spatial relationship to detect hotspots, coldspots)
 * ESDA (for exploratory analysis of spatial data)
 * GEOPANDAAS (to work with geospatial data and geojson data)
 * METEX (for determining trajectories through backtracking analysis of metreological data )
 * NCEP/NCAR (data source for metreological data needed for trajectories)
 * React,Node.js,Express.js,Postgis,PostgreSQL (for our Web Application )
 
