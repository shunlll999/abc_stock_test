import express 			from 'express';
import bodyParser 		from 'body-parser';
import morgan        	from 'morgan';
import ejs				from 'ejs';
import getroute			from './routes/getroute';
import postroute		from './routes/postroute';
import knexDB			from './knexDB';

const app      			= express();
 
app.use('/css', express.static(__dirname+'/../public/css'));
app.use('/js', express.static(__dirname+'/../public/js'));
app.use('/fonts', express.static(__dirname+'/../public/fonts'));
app.use('/font-awesome', express.static(__dirname+'/../public/font-awesome'));
app.use(express.static(__dirname+'/../public/html'));
app.set('port', process.env.PORT || 3001);

app.set('views', __dirname+'/../public/html/views');
app.set('view engine', 'ejs');
app.set('views options', { layout:false });

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

knexDB.createTable();
//sample routes
app.get('/nasdaqNews/:symbol', getroute.nasdaqNews);
app.get('/getqoutes/:symbol/:start/:end', getroute.nasdaqQuotes);

app.post('/findquotes/:symbol/:start/:end', postroute.nasdaqQuotes);
app.post('/savestock', postroute.saveStock);
app.post('/getsavedquotes', postroute.getSaved);
app.post('/getsavedquotesbysymbol', postroute.getFinanceDataSaved);



var server = app.listen(app.get('port'), ()=>{
	console.log('+---------------------------------------------------+');
	console.log('+   Server listen port : '+server.address().port);
	console.log('+---------------------------------------------------+');
});