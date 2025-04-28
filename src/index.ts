import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import http from 'http';
import cors from 'cors';

var router = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app: Express = express();
const server = http.createServer(app);
app.use(
  cors({
    credentials: true,
    origin: process.env.FE_ORIGIN,
  }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', router);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
server.on('error', (error) => {
  console.error('Server error:', error);
});
