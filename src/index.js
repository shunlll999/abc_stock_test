import express 			from 'express';
import bodyParser 		from 'body-parser';
import multer        	from 'multer';
import morgan        	from 'morgan';
import ejs				from 'ejs';
import getroute			from './routes/getroute';

const app      			= express();
const upload   			= multer();
 
app.use('/css', express.static(__dirname+'/../public/css'));
app.use('/js', express.static(__dirname+'/../public/js'));
app.use('/fonts', express.static(__dirname+'/../public/fonts'));
app.use(express.static(__dirname+'/../public/html'));
app.set('port', process.env.PORT || 3001);

app.set('views', __dirname+'/../public/html/views');
app.set('view engine', 'ejs');
app.set('views options', { layout:false });

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

//sample routes
app.get('/nasdaqNews/:symbol', getroute.nasdaqNews);
app.get('/getqoutes/:symbol/:start/:end', getroute.nasdaqQuotes);

var server = app.listen(app.get('port'), ()=>{
	console.log('+---------------------------------------------------+');
	console.log('+   Server listen port : '+server.address().port);
	console.log('+---------------------------------------------------+');
});