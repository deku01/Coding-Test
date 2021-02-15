/**************Question 7************************
Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this url via ajax and print its response
 ********************************************/
  
  $.ajax({
    url: 'www.example.com/api/get/1',
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.log(`Error ${error}`);
    }
});