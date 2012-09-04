$(document).ready(function() {
    var cookie = $.cookie('nexersystv_campaign');
    if(cookie != ''){
        cookie =     $.parseJSON(cookie);
        phone = cookie['campaign_phone'];

    $('.camp_landing_phone').html(phone);
    $('.panel-box dd').html(phone);
    }
    $('.view-mode-full').append('<a href="#" onclick="camp_landing_delete_cookie();">Delete campaign cookie</a>');

});
    function camp_landing_delete_cookie(){
        $.removeCookie('nexersystv_campaign');
    }