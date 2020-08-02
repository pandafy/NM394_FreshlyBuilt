let files=[];
var glob = require( 'glob' )
  , path = require( 'path' );
  glob.sync( '/home/bhoomik/Desktop/SIH-Dataset/*.json' ).forEach( function( file ) {
    var f=require( path.resolve( file ) );
    files.push(f);
  });
// const geodata = require("/home/bhoomik/Downloads/csvjson.json");

exports.seed = function (knex) {


  return knex('GEODATA2').del()
    .then(function () {
      let data=[];
      files.forEach((geodata,index)=>{
        for (var i = 0; i < geodata.length; i++) {
          const tobeadded = {
            "state":geodata[i]["statename"].toLowerCase(),
            "district": geodata[i]["distname"]==="DATA NOT AVAILABLE"?"leh":geodata[i]["distname"].toLowerCase(),
            "CO": geodata[i]["CO_column_number_density"]?geodata[i]["CO_column_number_density"]:0,
            // "CO":index+1,
            "NO2":0,
            "SO2":0,
            "O3":0,
            "MIN_CO":0,
            "MIN_O3":0,
            "MIN_NO2":0,
            "MIN_SO2":0,
            "MEAN_CO":0,
            "MEAN_NO2":0,
            "MEAN_O3":0,
            "MEAN_SO2":0,
            "week":index+1,
            "month":"january",
            "year":2020
          }
          data.push(tobeadded);
        }
        console.log(index)
      })
      return knex('GEODATA2').insert(data);
    });
};