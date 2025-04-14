const style = document.createElement("style"); //<style></style>
style.textContent = `
        body{
            font-family : Arial, sans-serif;
            text-align: center;
            padding: 20px;

            background-color: #f0f8ff
        }
    `;

document.head.appendChild(style);

function getPincodeData() {
    //take the pincode value in a variable
    const pin = document.getElementById("pincode").value;

    // console.log(pin);

    const resultDiv = document.getElementById("result");

    //check if pincode is valid
    if (pin.length !== 6 || isNaN(pin)) {
        resultDiv.innerHTML = "Please enter a valid 6-digit PIN code";
        return;
    }

    //network call to the api
    const API = `https://api.postalpincode.in/pincode/${pin}`;

    // console.log(API);

    fetch(API)
        .then((resp) => resp.json())
        .then((data) => {
            const info = data[0];

            // console.log(info);

            if (info.Status === "Success") {
                const postOffice = info.PostOffice;
                // console.log(postOffice);

                let output = `<h3>Results for PIN ${pin}</h3>`;

                postOffice.forEach((office) => {
                    output += `
                    <p> Post Office: ${office.Name}</p>
                    <p> District: ${office.District}</p>
                    <p> State: ${office.State}</p>
                    <hr/>
                    `;
                });

                resultDiv.innerHTML = output;
            } else {
                resultDiv.innerHTML = info.Message;
            }
        })
        .catch((error) => {
            resultDiv.innerHTML =
                "Error in the data for this PIN Code. Try again later.";
            console.log(error);
        });

    // console.log(prom);

    //take the result and place it inside the ui
}
