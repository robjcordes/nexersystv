$(document).ready(function() {
    var cookie = $.cookie('nexersystv_campaign');
    if(cookie != ''){
        cookie =     $.parseJSON(cookie);
        phone = cookie['campaign_phone'];
        params = cookie['campaign_params'];
        params = params.substr(1);
        $('.camp_landing_phone').html(phone);
        $('.panel-box dd').html(phone);
    }
    $('.view-mode-full').append('<a href="#" onclick="camp_landing_delete_cookie();">Delete campaign cookie</a>');
    var logoLink = $('.logo a').attr('href');
    adjustedLogoLink = logoLink + '?' + params;
    $('.logo a').attr('href', adjustedLogoLink);
    $('.section-footer ul.nexlinks ').each(function(){

        var test = $(this);
        test.children().each(function(e){
    
        var footerLink = $(this).children().attr('href');
        adjustedFooterLink = footerLink + '?' + params;
        $(this).children().attr('href', adjustedFooterLink);
        //console.log(footerLink);
        //console.log(params);
    });


    
});
    
    
});
    function camp_landing_delete_cookie(){
        $.removeCookie('nexersystv_campaign');
    }