const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/error', (req, res) => {
    // 故意使用非同步程式碼中的未處理異常，模擬錯誤導致應用程式崩潰
    setTimeout(() => {
        throw new Error('Something went wrong!');
    }, 1000);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});