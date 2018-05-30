// Logo 

Vue.component('app-header', {
  //What is accepted
  props: ['text', 'texttwo', 'textthree'],
  //How it will appear
  template: '<header><nav class="mainnav"><div class="drpdwn"><form action="index.html"><input class="drpbtn" type="submit" value="Home"></form><div class="drpdwn-cntent"><a href="#">FESC Expertise</a><a href="#">Technology Commercialization</a><a href="#">Annual Reports, Publications and Presentations</a><a href="#">Advisory Board</a><a href="#">Supplementary Information</a></div></div><div class="drpdwn"><form action="research.html"><input class="drpbtn" type="submit" value="FESC Research"></form><div class="drpdwn-cntent"><a href="#">Research Archives</a></div></div><div class="drpdwn"><form action="energyindustry.html"><input class="drpbtn" type="submit" value="Energy Industry"></form><div class="drpdwn-cntent"><a href="#">Florida Energy Facts</a><a href="#">Energy Efficiency</a><a href="#">Energy Crops</a><a href="#">Waste to Energy</a><a href="#">Smart Grid & Power</a><a href="#">Energy Storage</a><a href="#">Network & Security</a><a href="#">Water Purification</a><a href="#">Consulates & Law</a><a href="#">Engineering Consulting</a><a href="#">Associations & Organizations</a><a href="#">Energy Financing & Funding</a><a href="#">FL University Spin-off</a><a href="#">Other</a></div></div><a href="charts.html">Data and Charts</a><a href="contact.html">Contact Us</a></nav><div class="top"><div class="headerimg"><span class="open" onclick="openNav()"><i class="fas fa-bars"></i></span><img src="images/logo.png" alt="logo"><article class="center"><form name="research" onsubmit="search()"><label>Search:<input class="topsearch" type="text" name="searchbar"></label></form></article></div><div class="logotext"><div class="beggining"><h1>{{ text }}</h1></div><div class="below"><h2>{{ texttwo }}</h2><h3>{{ textthree }}</h3></div></div></div><div id="reducedNav" class="reducednav"><a href="#" class="closebtn" onclick="closeNav()">&times;</a><a href="index.html">Home</a><div class="leftmargin"><a href="#">FESC Expertise</a><a href="#">Technology Commercialization</a><a href="#">Annual Reports, Publications and Presentations</a><a href="#">Advisory Board</a><a href="#">Supplementary Information</a></div><a href="research.html">FESC Research</a><div class="leftmargin"><a href="#">Research Archives</a></div><a href="energyindustry.html">Energy Industry</a><div class="leftmargin"><a href="#">Florida Energy Facts</a><a href="#">Energy Efficiency</a><a href="#">Energy Crops</a><a href="#">Waste to Energy</a><a href="#">Smart Grid & Power</a><a href="#">Energy Storage</a><a href="#">Network & Security</a><a href="#">Water Purification</a><a href="#">Consulates & Law</a><a href="#">Engineering Consulting</a><a href="#">Associations & Organizations</a><a href="#">Energy Financing & Funding</a><a href="#">FL University Spin-off</a><a href="#">Other</a></div><a href="charts.html">Data and Charts</a><a href="contact.html">Contact Us</a></div></header>'
})

//Vue.component('app-second-header', {
//  props: ['text'],
//  template: '<h2>{{text}}</h2>'
//})
//
//Vue.component('app-third-header', {
//  props: ['text'],
//  template: '<h3>{{text}}</h3>'
//})
