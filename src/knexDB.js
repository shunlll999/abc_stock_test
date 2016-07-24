import utils			from './utils/utils';

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./src/data/mydb.db"
  }
});

exports.createTable = function(){
	// Create a table
	knex.schema.createTableIfNotExists('stock', function(table) {
	  table.string('d');
	  table.integer('volume');
	  table.decimal('open');
	  table.decimal('high');
	  table.decimal('low');
	  table.decimal('close');
	  table.string('symbol');
	}).then(function(rows) {
	  	console.log("Table Created");
	});
}


exports.insert = function(stock ,callback){

	var countStock = 0
	var newStock = [];

	console.log(stock[0].symbol);

	knex('stock').where('symbol', stock[0].symbol).then(function(data){
		if( data.length == 0 ){
			for( var index in stock ){
				knex('stock').insert({d:stock[index].d, volume:stock[index].volume, open:stock[index].open ,high:stock[index].high, low:stock[index].low, close:stock[index].close, symbol:stock[index].symbol}).then(function() {
				  	console.log("insert row "+stock[index].d+" complete!");
				  	if( countStock <  stock.length-1 ){
				  		countStock++;
				  	}else{
				  		callback(stock[0].symbol);
				  	}
				});
			}
		}else{
			console.log( 'already have the quotes' );
		}
	});

}

exports.getQuoteBySymbol = function( symbol, callback ){
	knex('stock').where({
		  symbol: symbol
	}).then(function(data){
		callback(data);
	});
}

exports.getSymbolSaved = function ( callback ){
	knex.select().from('stock').then(function(data){
		var symbol = utils.meargeSymbol(data);
		callback(symbol);
	});
}











