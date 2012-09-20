$(document).ready(function() {
    var cookie = $.cookie('nexuid');
    var params;
    var phone;
    if(cookie != ''){
        cookie =     $.parseJSON(cookie);
        console.log(cookie);
        if(cookie != null){
            console.log('not null cookie');
            try{
                params = cookie['campaign_params'];
                params = params.substr(1); 
                phone = cookie['campaign_phone'];
            }catch(err){
                console.log(err);
            }
            
            $('.camp_landing_phone').html(phone);
            $('.panel-box dd').html(phone);

        }
    }
                    params = cookie['campaign_params'];

    $('.view-mode-full').append('<a href="#" onclick="camp_landing_delete_cookie();">Delete campaign cookie</a>');
    var logoLink = $('.logo a').attr('href');
    adjustedLogoLink = logoLink + '?' + params;
    $('.logo a').attr('href', adjustedLogoLink);
    $('.section-footer ul.nexlinks ').each(function(){

        var test = $(this);
        test.children().each(function(e){
            console.log(params);
        var footerLink = $(this).children().attr('href');
        adjustedFooterLink = footerLink + '?' + params;
        $(this).children().attr('href', adjustedFooterLink);

    });


    
});
   
   //show/hide the company name field on generic versions of the form based on the model selected
   $('.company_name.togglable').hide();
   $('.company_control').livequery('change', function(event) { 
                             var modelTypeSelected = $('.company_control').val();
                             if(modelTypeSelected == 'Commercial'){
                                 $('.company_name').show();
                                 console.log('selected com');
                             }else{
                                 
                                 $('.company_name').hide();
                             }
                            return false; 
                         }); 
    
    
});
    function camp_landing_delete_cookie(){
        $.removeCookie('nexuid');
        location.reload();
    }