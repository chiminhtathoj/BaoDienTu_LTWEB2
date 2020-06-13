const express = require('express');
const app = express();


app.use(express.urlencoded({
    extended: true
  }));
app.use(express.static('public'));
require('./middlewares/view.mdw')(app);
app.use('/News',require('./routers/news.route'));
const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});
