function submitForm() {


    const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          accept: 'application/json',
          'content-type': 'application/*+json',
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJteHBueWxzbmt5bTV4c3k3ZGttNyIsIm14LXdzaWQiOiIzM0MyQ0I2OS00MEZELTREQTItQjA1OS1BQjUzNjkzN0I5RDciLCJleHAiOjE3OTMzMTg0MDB9.LGEBAXuZuyTVtPBziDPMvCcwt6x0iurwO3AXKC1tEbc'
        },
        body: '{"contactType":0,"companyName":'+document.getElementById("companyName").value+',"firstName":'+document.getElementById("firstName").value+',"lastName":'+document.getElementById("lastName").value+',"website":'+document.getElementById("website").value+',"phones":[{"number":'+document.getElementById("phone").value+'}],"emails": [{"address":'+document.getElementById("email").value+'}]}'
      };
      
      fetch('https://api.maximizer.com/ferret/v1/contacts', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    // var body = {
    //     "contactType":0,
    //     "companyName": document.getElementById("companyName").value,
    //     "firstName": document.getElementById("firstName").value,
    //     "lastName": document.getElementById("lastName").value,
    //     "website": document.getElementById("website").value,
    //     "phones": [{"number":document.getElementById("phone").value}], //document.getElementById("phone").value,
    //     "emails": [{"address":document.getElementById("email").value}] //document.getElementById("email").value
    // };

    // var xhr = new XMLHttpRequest();

    // xhr.addEventListener("readystatechange", function () {
    //     if (xhr.status === 201) {
    //         var data = JSON.parse(xhr.response);

    //         // 

    //         var body1 = {
    //             "legacyContactKey": data.legacyKey,
    //             "cost": document.getElementById("salary").value,
    //             "name": document.getElementById("position").value,
    //             "startDate": document.getElementById("date").value,
    //             "description": document.getElementById("comments").value,
    //             "status": 0
    //         };

    //         var xhr1 = new XMLHttpRequest();

    //         xhr1.addEventListener("readystatechange", function () {
    //             var data1 = JSON.parse(xhr.response);
    //             if (xhr1.status === 201) {
    //                 swal("Success!", "Data submitted successfully","success");
    //             } else {
    //                 swal("Alert!", data1.message + ".","warning");
    //             }
    //         });

    //         xhr1.open("POST", "https://api.maximizer.com/ferret/v1/opportunities");
    //         xhr1.setRequestHeader("accept", "application/json");
    //         xhr1.setRequestHeader("Content-Type", "application/json");
    //         xhr1.setRequestHeader("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJteHBueWxzbmt5bTV4c3k3ZGttNyIsIm14LXdzaWQiOiIzM0MyQ0I2OS00MEZELTREQTItQjA1OS1BQjUzNjkzN0I5RDciLCJleHAiOjE3OTMzMTg0MDB9.LGEBAXuZuyTVtPBziDPMvCcwt6x0iurwO3AXKC1tEbc");
    //         xhr1.send(JSON.stringify(body1));

    //     } else {
    //         var data = JSON.parse(xhr.response);
    //         swal("Alert!", data.message + ".",);
    //     }
    // });

    // xhr.open("POST", "https://api.maximizer.com/ferret/v1/contacts");
    // xhr.setRequestHeader("accept", "application/json");
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.setRequestHeader("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJteHBueWxzbmt5bTV4c3k3ZGttNyIsIm14LXdzaWQiOiIzM0MyQ0I2OS00MEZELTREQTItQjA1OS1BQjUzNjkzN0I5RDciLCJleHAiOjE3OTMzMTg0MDB9.LGEBAXuZuyTVtPBziDPMvCcwt6x0iurwO3AXKC1tEbc");
    // xhr.send(JSON.stringify(body));
}


