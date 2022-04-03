let header=document.createElement("section");
header.innerHTML=`  <div id="sidebar">
<div><p id="close">&#215</p></div>
<div id="prof" style="display:none;">👤 &nbsp; Profile</div>
<div id="orde" style="display:none;">🍽 &nbsp; Manage Orders</div>
<div id="addr" style="display:none;">🏡 &nbsp; Manage Addresses</div>
<div id="paym" style="display:none;">🏦 &nbsp; Manage Payments</div>
<div id="help" style="display:none;">🤓 &nbsp; Help & Support</div>
<div>🧐 &nbsp; About Us</div>
<div>🤩 &nbsp; Party Orders</div>
<div id="lout" style="display:none;">😞 &nbsp; Logout</div>
</div>
<div class="nav-bar">
<div>
    <div id="logo">
        <img src="https://assets.faasos.io/faasos_v2/faasosLogoPurple.svg" alt="logo" />
    </div>
    <div id="locate">
        <p style="display: inline;"></p>
        <i class="fa fa-angle-down"></i>
    </div>
</div>
<div>
    <div id="user">
        <i class="fa fa-user"></i>
        <a href="#" id="username">Hi Vaishali</a>
    </div>
    <div id="bars">
        <i class="fa fa-bars"></i>
    </div>
</div>
</div>`;
document.querySelector("#main-index").append(header);