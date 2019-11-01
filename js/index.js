/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// $(document).ready(function(){
//     var baseURL = "https://soa.smext.faa.gov/asws/";
//         var service = "api/airport/status/";
//         var parameter = "IND"

//         $.get(baseURL + service + parameter, function(result){
//             //do something when success
//             var response = JSON.parse(result);
//             var div = $("#airpot");
//             div.append("<p>airport name=" + response.Name + "</p>");
//             div.append("<p>airport city=" + response.City + "</p>");
//             div.append("<p>airport state=" + response.State + "</p>");
//             div.append("<p>airport status=" + response.Status + "</p>");
//         }, "json");
// });
$.support.cors = true;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        var corsServer = "http://0.0.0.0:8080/"
        var baseURL = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=8hHc3UQOZrngAha0gKQkBHa2YkB2ZZjU";
        var key = "8hHc3UQOZrngAha0gKQkBHa2YkB2ZZjU";
        var url = baseURL
        console.log(url);

        $.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors){
                options.url = corsServer + options.url;
                console.log(options.url);
            }
        });

        $.ajax({
            url: url,
            type: 'GET',
            dataTyps:'json',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            Accept: "application/json",
            crossDomain:true,
            success: function(response){
                console.log("Success");
                console.log(response);
                // var response = JSON.parse(result);

                var i;
                for (i = 0; i < 5; i++) {

                $("#science").append(response.results[i].title);
                $("#science").append(response.results[i].byline);
                $("#science").append('<a href= "response.results[i].url">'+response.results[i].url+'</a>');
                $("#science").append(response.results[i].published_date);
              }

            },
            error: function(xhr, status, error){
                console.log("Error");
                console.log(xhr.statusText);
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
            }


        });

        // $.get(baseURL + service + parameter, function(result){
        //     //do something when success
        //     var response = JSON.parse(result);
        //     var div = $("#airpot");
        //     div.append("<p>airport name=" + response.Name + "</p>");
        //     div.append("<p>airport city=" + response.City + "</p>");
        //     div.append("<p>airport state=" + response.State + "</p>");
        //     div.append("<p>airport status=" + response.Status + "</p>");
        // }, "json");


    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();