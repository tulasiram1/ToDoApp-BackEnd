const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');








const port = process.env.PORT || 8080;

app.listen(port, () => { console.log(`app is running on ${port}`); });


const url = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE);

mongoose.connect(url).then(() => {
    console.log('connection success');
}).catch((err) => { console.log(err); });


