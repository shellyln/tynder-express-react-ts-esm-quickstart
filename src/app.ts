
import * as url          from 'url';
import * as path         from 'path';
import express,
       { Request,
         Response,
         NextFunction }  from 'express';
// import createError    from 'http-errors';
import { HttpError }     from 'http-errors';
import cookieParser      from 'cookie-parser';
import logger            from 'morgan';
// import indexRouter    from './routes/index';
import apiRouter         from './routes/api';



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client/build')));

// app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    res.send(404);
    // next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;
