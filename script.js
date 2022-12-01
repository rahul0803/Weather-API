function getApi() {
    const inputLocation = document.getElementById("cityinput");
    const accesskey = document.getElementById("Access");

    if (inputLocation.value !== "" && accesskey.value !== "") {
        const loc = document.getElementById("cityinput").value;
        const token = "NCB8JKE9S4EUUS4ZBUL7T8QZS";

        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=us&key=${token}&contentType=json`;
        console.log(url);
        async function getData(url) {
            const response = await fetch(url);
            data = await response.json();
            console.log(data);
            console.log(data.address);
            console.log(document.getElementsByClassName("txt"));
            document.getElementsByClassName(
                "txt"
            )[0].innerText = `Location:${data.address}`;
            document.getElementsByClassName(
                "txt"
            )[1].innerHTML = `<pre>Lat:${data.latitude}              Long:${data.longitude}`;
            document.getElementsByClassName(
                "txt"
            )[2].innerText = `TimeZone:${data.timezone}`;
            document.getElementsByClassName(
                "txt"
            )[3].innerText = `WindSpeed:${data.currentConditions.windspeed}`;
            document.getElementsByClassName(
                "txt"
            )[4].innerText = `Pressure:${data.currentConditions.pressure}`;
            document.getElementsByClassName(
                "txt"
            )[5].innerText = `Humidity:${data.currentConditions.humidity}`;
            document.getElementsByClassName(
                "txt"
            )[6].innerText = `Wind Direction:${data.currentConditions.winddir}`;
            document.getElementsByClassName(
                "txt"
            )[7].innerText = `UV Index:${data.currentConditions.uvindex}`;
            document.getElementsByClassName(
                "txt"
            )[8].innerText = `Feels Like:${data.currentConditions.feelslike}`;
        }
        getData(url);
    } else if (inputLocation.value == "") {
        alert("Please Enter a Valid Location");
    } else if (accesskey.value == "") {
        alert("Please Enter Valid Token");
    }
}

