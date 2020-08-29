import 'express-async-errors';
import express from 'express';
import routes from './routes';

import './database';
import globalExceptionTreater from './middlewares/globalExceptionTreater';

const app = express();
app.use(express.json());

app.use(routes);

app.use(globalExceptionTreater);

app.listen(3333, () => {
    console.log('🚀 Server started on port 3333');
});
