$(document).ready(function() {
var cookie = $.cookie('nexersystv_campaign');
if(cookie != ''){
    cookie =     $.parseJSON(cookie);
    phone = cookie['campaign_phone'];
    $('.camp_landing_phone').html(phone);

}
    

});