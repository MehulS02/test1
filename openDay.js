const api_url="D:/CARDIFF/Test1CardiffUni/OpenDay.json";

var object_content;

function toStartWith(){
    console.log('Starting');

    fetch('./OpenDay.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        object_content = data;
        document.getElementById("heading_div").innerHTML = (data.description);
        var topics = data.topics;
        for(var i=0;i<topics.length;i++){
            var option = document.createElement('option');
            option.setAttribute('value',topics[i].name);
            option.innerHTML=topics[i].name;
            document.getElementById("names").appendChild(option);
        }
    })
}

function myFunction() {
    document.getElementById('demo').innerHTML = "";
    var x = document.getElementById("names").value;
    //document.getElementById("demo").innerHTML = "You selected: " + x;

    for(var i=0;i<object_content.topics.length;i++){
        if (object_content.topics[i].name == x){
            
            var programs = object_content.topics[i].programs;
            for(var j=0;j<programs.length;j++){
                //document.getElementById("demo").innerHTML = "";
                var program = programs[j];
                var div_element = document.createElement('div');
                var header = document.createElement('h3')
                header.innerHTML = (program.title)
                var result_string = 'Program Title: '+program.title+'\n';
                result_string += 'Description: '+program.description_short+'\n';
                if (program.school == true){
                    result_string += 'Is a school: Yes\n';
                }
                else{
                    result_string += 'Is a school: No\n';
                }

                result_string += 'Room: '+program.room+'\n';
                result_string += 'Floor: '+program.floor+'\n\n';
                result_string += 'Location: '+program.location.title+'\n';
                result_string += 'Location Description: '+program.location.description+'\n';
                result_string += 'Address: '+program.location.address+'\n';
                result_string += 'Postcode: '+program.location.postcode+'\n';
                result_string += 'Website: '+program.location.website+'\n';

                if (program.location.accessible == 1){
                    result_string += 'Is it Accessible: Yes\n';
                }
                else{
                    result_string += 'Is it Accessible: No\n';
                }

                if (program.location.parking == 1){
                    result_string += 'Parking available: Yes\n';
                }
                else{
                    result_string += 'Parking available: No\n';
                }

                if (program.location.bike_parking == 1){
                    result_string += 'Bike parking available: Yes\n';
                }
                else{
                    result_string += 'Bike parking available: No\n';
                }
                div_element.appendChild(header)
                div_element.innerText = result_string;
                document.getElementById("demo").appendChild(div_element);
                var line_break = document.createElement('br');
                document.getElementById("demo").appendChild(line_break);
            }
            
        }
    }
    
}

/*document.getElementById("jsonfileinput").addEventListener("change", function() {
    var file_to_read = document.getElementById("jsonfileinput").files[0];
    var fileread = new FileReader();
    fileread.onload = function(e) {
      var content = e.target.result;
      var intern = JSON.parse(content); // parse json 
      console.log(intern); // You can index every object
    };
    fileread.readAsText(file_to_read);
  });*/