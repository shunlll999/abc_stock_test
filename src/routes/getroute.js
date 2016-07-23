import googlefinance 		from 'google-finance';



exports.nasdaqNews = function (req,res){
	
	const symbol 		= 'NASDAQ:'+req.params.symbol;
	googlefinance.companyNews({
	  symbol:symbol
	}, function (err, news) {
		if( err )throw err;

		res.send(news);
	});

}

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

		console.log(quotes);
		res.render('stock', { title:'Get Quotes', data:quotes });
	});

}

