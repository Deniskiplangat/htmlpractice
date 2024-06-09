// window.onload = function() {
//     // Get the value from localStorage
//     var value = localStorage.getItem('myValue');
    
//     // Display the value on the page
//     var output = document.getElementById('value-output');
//     output.innerText = value;
//   };

window.onload = function(){
    //get value from local storage

    var name = localStorage.getItem('myname')
    var lname = localStorage.getItem('myLastName')
    var countryname = localStorage.getItem('myCountryName')
    var countyname = localStorage.getItem('myCountyName')
    var divv = localStorage.getItem('myDiv')
    
    console.log(divv)
    //display value on the page
    // const divdata = document.querySelector('div')

    // divdata.appendChild(divv)
    var outputname = document.getElementById('name')

    

    

    var outputlastname = document.getElementById('lname')
    outputlastname.innerText = lname

    var outputcountryname = document.getElementById('country')
    outputcountryname.innerText = countryname

    var outputcountyname = document.getElementById('county')
    outputcountyname.innerText = countyname

    
    const personData = [name,lname,countryname,countyname]

    console.log(personData)
}
