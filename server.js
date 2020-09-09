const express = require('express');
const app = express();


// kuhu tuleb paring "/"
// function ананимная функция
//ответ который получает responce
//request данные которые отправляются с сервера

 app.get("/", function(request, responce){
    //console.log(request);
    responce.send('<h1>Hello World!</h1>');
}); 

app.get("/about", function(request, responce){
    //console.log(request);
    responce.send('<h1>Hello my friend!</h1>');
});

app.get("/contact", function(request, responce){
    //console.log(request);
    responce.send('<h1>test@test.ee</h1>');
});
//3000 это порт
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});