var request = new XMLHttpRequest(); //created request
//open connection
request.open('GET' ,'https://restcountries.eu/rest/v2/all' , true);
//sending request
request.send();
//load request
request.onload = function(){
    var data = JSON.parse(this.response);
    //console.log(data);
    for(var i = 0 ; i < data.length ; i++)
    {
        console.log(i + 1 , data[i].name);
    }
}
