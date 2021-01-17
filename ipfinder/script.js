async function ipData(datas){
    let x = await fetch(`http://ip-api.com/json/${datas}`);
    let data=await x.json()
    console.log(data)
    displayData(data);
    }

    function displayData(data){  

        document.getElementById("ip").innerText=data.query;

        document.getElementById("name").innerText=data.country;

        document.getElementById("city").innerText=data.city;

        document.getElementById("orgname").innerText=data.org;

        document.getElementById("code").innerText=data.countryCode;

        document.getElementById("lat").innerText=data.lat;

        document.getElementById("lon").innerText=data.lon;

        document.getElementById("region").innerText=data.region;

        document.getElementById("regionName").innerText=data.regionName;

        document.getElementById("timezone").innerText=data.timezone;

        document.getElementById("zip").innerText=data.zip;



    }
    //Dom-fucntion

function createElement(ele){
    return document.createElement(ele)
}

function setAttribute(ele,attr,value){
    return ele.setAttribute(attr,value)
}

function appendChild(ele,child){
    return ele.appendChild(child)
}

function append(ele){
    return document.body.append(ele)
}