exports.changeMonthNameToInt = function ( month ){

	var myMounthIndex = 0;
	var months = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	for( var monthIndex in months ){
		if( month === months[monthIndex] ){
			myMounthIndex = monthIndex;
		}
	}
	return (Number(myMounthIndex)+1);

}

exports.meargeSymbol = function( source ){

	var group = [];
	var current = {};
	var cnt = 0;
	for (var i = 0; i < source.length; i++) {
	    if (source[i].symbol != current.symbol) {
	        if (cnt > 0) {
	            group.push(String(current.symbol).split(":")[1]);
	        }
	        current = source[i];
	        cnt = 1;
	    } else {
	        cnt++;
	    }
	}
	if (cnt > 0) {
	    group.push(String(current.symbol).split(":")[1]);
	}

	return group;

}