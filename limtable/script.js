function submitValue() {
    // Get the value entered by the user
    var fname = document.getElementById('name');
    var fnamevalue = fname.value;

    var lname = document.getElementById('lname');
    var lnamevalue = lname.value;

    var cname = document.getElementById('countryname');
    var cnamevalue = cname.value;

    var countyname = document.getElementById('countyname');
    var countynamevalue = countyname.value;


    const newvalue = document.createElement(div)
    newvalue.classList.add('class-1');
    newvalue.innerText = 'hello world'
    
    // Store the value in localStorage
    localStorage.setItem('myname', fnamevalue);
    localStorage.setItem('myLastName', lnamevalue);
    localStorage.setItem('myCountryName', cnamevalue);
    localStorage.setItem('myCountyName', countynamevalue);
    localStorage.setItem('myDiv', newvalue);

    
    // Redirect to the second page
    window.location.href = 'page.html';
  }