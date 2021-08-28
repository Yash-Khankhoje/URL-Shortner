let url = "https://devmohan-urlshortner-backend.herokuapp.com"
let id = ""
function onLoad(){
    let resetURL = new URL(window.location.href)
    id = resetURL.searchParams.get("id");
    let randomString = resetURL.searchParams.get("ac");
    fetch(url + `/activate_account`, {
        method: "POST",
        body: JSON.stringify({
            id, randomString
        }), 
        headers: {
            'Content-type': 'application/json'
        }
        })
        .then((resp) => resp.json())
        .then((data) => {
            let alertDiv = document.createElement('alert');
            alertDiv.setAttribute("role","alert" );
            alertDiv.setAttribute("id","alertDiv" );
            if (data.message === 'Verification success'){
                document.getElementById("activationStatusDiv").innerHTML = '<strong><h3 class="d-flex justify-content-center">Activated Successfully</h3></strong>';
                alertDiv.setAttribute("class","alert alert-success" );
                alertDiv.innerHTML = "<strong> Success! </strong>" + data.message + ". Please Login to start shortening URL";
                deleteAlert(alertDiv);
                document.getElementById("activationDiv").append(alertDiv);
                document.getElementById("activationStatusDiv").innerText = "Activated Successfully";

                window.location.href = "https://suspicious-wozniak-c5a312.netlify.app";
            } 
            else {
                document.getElementById("activationStatusDiv").innerText = "Activation Failed";
                alertDiv.setAttribute("class","alert alert-danger" );
                alertDiv.innerHTML = "<strong> Failure. </strong>" + data.message + ". Activation failed!! Please try registering again.";
                deleteAlert(alertDiv);
                document.getElementById("activationDiv").append(alertDiv);
            }
        })
        .catch((err)=>{
            console.log("User Activation Failed");
        })
}

onLoad()

function deleteAlert(alert){
    setTimeout(function(){
        alert.remove()
    }, 3000)
}
