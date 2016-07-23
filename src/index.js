 /* @flow */

 import express 		from 'express';
 import bodyParser 		from 'body-parser';
 import multer        	from 'multer';
 import morgan        	from 'morgan';
 import getroute		from './routes/getroute';

 const app      = express();
 const upload   = multer();

 app.use(express.static(__dirname+'/../public'));
 app.use(morgan('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended:true}));

 app.set('port', process.env.PORT || 3001);

//sample routes
app.get('/hello', getroute.getsample );
app.get('/add/:x/:y', getroute.add);



var server = app.listen(app.get('port'), ()=>{
	console.log('+---------------------------------------------------+');
	console.log('+   Server listen port : '+server.address().port);
	console.log('+---------------------------------------------------+');
});