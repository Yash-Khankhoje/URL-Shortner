let url = 'https://devmohan-urlshortner-backend.herokuapp.com';

function onLoad(){
    fetch(url + `/get_count`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
        })
        .then((resp) => resp.json())
        .then((data) => {
            if (data.message === "Success"){
                let pastOneDay = document.getElementById("pastOnedayId");
                pastOneDay.innerText = data.oneDayCount;
                let pastThirtyDay = document.getElementById("pastThirtydayId");
                pastThirtyDay.innerText = data.thirtyDayCount;
            }  
        })
        .catch((err)=>{
            console.log("err");
        })
}

onLoad();

function startShortening() {
    window.location.href = "https://suspicious-wozniak-c5a312.netlify.app/urlShortner.html";
}
