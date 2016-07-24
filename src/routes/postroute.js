import googlefinance 		from 'google-finance';
import utils				from '../utils/utils';
import knexDB				from '../knexDB';

exports.nasdaqQuotes = function (req,res){
	
	const SYMBOL 		= 'NASDAQ:'+req.params.symbol;
	const FROM 			= (req.params.start != 0)?req.params.start:null;
	const TO 			= (req.params.end != 0)?req.params.end:null;

	googlefinance.historical({
	  symbol:SYMBOL,
	  from:FROM,
	  to:TO
	}, function (err, quotes) {
		if( err )throw err;

		var dataQuotes = [];
		for( var index in quotes ){
    		var seperateFormatDate = quotes[index].date;
    		var formatDate = String(seperateFormatDate).split(" ");
    		var newDateFormat = formatDate[3]+"-"+utils.changeMonthNameToInt(formatDate[1])+"-"+formatDate[2];
    		dataQuotes.push({ 
    			d:newDateFormat,
    			volume:quotes[index].volume,
    			open:quotes[index].open,
    			high:quotes[index].high,
    			low:quotes[index].low,
    			close:quotes[index].close,
    			symbol:quotes[index].symbol,
    		});
		}
		
		res.json(dataQuotes);

	});

}

exports.saveStock = function (req,res){
	var stocks = req.body.stock;
	knexDB.insert(stocks, function(symbol){
		console.log("Save "+symbol+" complete");
		res.send({success:true, result:String(symbol).split(":")[1]});
	});
}

exports.getSaved = function(req, res){
	knexDB.getSymbolSaved( function( symbols ){
		res.json({ success:true, result:symbols });
	});
}

exports.getFinanceDataSaved = function(req, res){
	var symbol = 'NASDAQ:'+req.body.symbol;
	knexDB.getQuoteBySymbol(symbol, function(data){
		res.json(data);
	});
}
