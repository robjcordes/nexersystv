var $ = jQuery.noConflict();
$(document).ready(function() {
    $("#nex_request_form").validationEngine('attach'); // set up form validation.
    $('#nex_request_form .submit').hover(function(){
        $(this).toggleClass('down');
    });
    $('#nex_request_form .submit').click(function(event){
        var country = $('#nex_request form #nex_request_country').val();
        nexReqForm.updateAction(country, nexReqForm.urlType);
        //nexReqForm.showTestAlerts();
        //return false;
    });

    nexReqForm = {
        /*
         * Instructions:  Enter complete urls in the arrays below for Home, Commercial and Pro models.
         * Any other url will be treated as 'general'.
         *
         */
        homeUrls : [
    	'http://nexersysnow.com/node/7', 
        'http://nexersysnow.localhost:8888/node/7',
        'http://nexersysnow.principlepointdev.com/node/7',

    	],
    commercialUrls : [
        //'http://nexersysnow.com/node/6',
        'http://nexersysnow.localhost:8888/node/6',
        'http://nexersysnow.principlepointdev.com/node/6',

		],
    proUrls : [
        'http://nexersysnow.com/node/8',
        'http://nexersysnow.localhost:8888/node/8',
        'http://nexersysnow.principlepointdev.com/node/8',
		],
    hiddenCommInput : "<input type='hidden' name='xnQsjsdp' value='dhOYVrEbdmJthYo*kRl79w$$'><input type='hidden' name='xmIwtLD' value='xxtEl*Hx2ByNU*uyPq3OMHBogz4VdScW'><input type='hidden' name='actionType' value='TGVhZHM='><input type='hidden' name='returnURL' value='http://www.nexersys.com/thank-you'>",
    hiddenHomeInput : "<input type='hidden' name='xnQsjsdp' value='f1LzxolSe-0$'><input type='hidden' name='xmIwtLD' value='82AfV3HJwjp71g4ILMIYL*GCpUdN*P5O'><input type='hidden' name='actionType' value='TGVhZHM='><input type='hidden' name='returnURL' value='http://www.nexersys.com/thank-you'>",
    formNameHome : "WebToLeads452985000001485047",
    formNameComm : "WebToLeads582065000000070015",
    showTestAlerts : function(){
        var formValues = 'form name: ' + $('#nex_request_form').attr('name')
            + '\n URL Type: ' + nexReqForm.urlType
            + '\n Model Type: ' + nexReqForm.modelType
            + '\n Country: ' + $('#nex_request form #nex_request_country').val()
            + '\n Questions: ' + $('#nex_request form #questions').val()
            + '\n model input name: ' + $('#nex_request form #model_type').attr('name')
            + '\n country input name: ' + $('#nex_request form #nex_request_country').attr('name')
            + '\n questions input name: ' + $('#nex_request form #questions').attr('name')
        ;
        $('#nex_request form input').each(function(){
            formValues += '\n ' + $(this).val();
        });
        alert(formValues);
    },
    checkUrlType : function(){
                       var url = $(location).attr('href');
                       if($.inArray(url, this.homeUrls) != -1){
                           this.urlType = 'Home';
                       }else if($.inArray(url, this.commercialUrls) != -1){
                           this.urlType = 'Commercial';
                       }else if($.inArray(url, this.proUrls) != -1){
                           this.urlType = 'Pro';
                       }else{
                           this.urlType = 'general';
                       }
                       console.log(url);
                       console.log(this.urlType);
                   },
    prepareForm : function(crmType){
        //change form names, change insert hidden input fields etc. here before submitting form
        if(crmType == 'zohoHome'){
            $('#nex_request form').attr('name', this.formNameHome);
            $('#nex_request table').prepend(this.hiddenHomeInput);
            $('#nex_request #model_type').attr('name', 'LEADCF15');
            $('#nex_request #nex_request_country').attr('name', 'LEADCF23');
            $('#nex_request #questions').attr('name', 'LEADCF28');
        }else{
            //if not Home, format input fields for Commercial crm
            $('#nex_request form').attr('name', this.formNameComm);
            $('#nex_request table').prepend(this.hiddenCommInput);
            $('#nex_request #model_type').attr('name', 'LEADCF3');
            $('#nex_request #nex_request_country').attr('name', 'LEADCF11');
            $('#nex_request #questions').attr('name', 'LEADCF10');
        }

    },
    updateAction : function(country, urlType){
                       this.modelType = $('#nex_request #model_type').val();
                       if(this.urlType == 'general'){
                           if((this.modelType == 'Home' || this.modelType == 'Pro') && country == 'United States'){
                               //zohoHome
                               this.prepareForm('zohoHome');
                           }else{
                               //zohoCommercial
                               this.prepareForm('zohoComm');
                           }
                       }else if(this.urlType == 'Home' || this.urlType == 'Pro'){
                           if(country == 'United States'){
                               //zohoHome
                               this.prepareForm('zohoHome');
                           }else{
                               //zohoCommercial
                               this.prepareForm('zohoComm');
                           }
                       }else if(this.urlType == 'Commercial'){
                           //zohoCommercial
                               this.prepareForm('zohoComm');
                       }
                            var currentTime = new Date();
                            var month = currentTime.getMonth() + 1;
                            var day = currentTime.getDate();
                            var year = currentTime.getFullYear();
                            var hours = currentTime.getHours();

                            var minutes = currentTime.getMinutes();
                            if (minutes < 10){
                                minutes = '0' + minutes;
                            }
                            if(month < 10){
                                month = '0' + month;
                            }
                            if(hours < 10){
                                hours = '0' + hours;
                            }
                            if(hours > 12){
                                hours = hours - 12;
                                var ampm = 'PM';
                            }else{
                                hours = 'AM';
                            }
                            //console.log(' hours: ' + hours + ' minutes ');
                            var dateString = month + '/' + day + '/' + year;
                            console.log('hours: ' + hours);
                            $('.datestr').val(dateString);
                            $('.hours').val(hours);
                            $('.minutes').val(minutes);
                            $('.ampm').val(ampm);
                   },
    formatForm : function(){
                     if(this.urlType == 'Home'){
                         $('.zip_code').addClass('hidden');
                         $('.model_type').addClass('hidden');
                         $('[name=LEADCF3]').addClass('hidden').val('Home');
                         $('#nex_request .left-top img').attr('src', '/sites/all/themes/nexersystv/form/img/nex-bro-home.png');
                     }else if(this.urlType == 'Commercial'){
                         $('.model_type').addClass('hidden');
                         $('[name=LEADCF3]').addClass('hidden').val('Commercial');
                         $('#nex_request .left-top img').attr('src', '/sites/all/themes/nexersystv/form/img/nex-bro-comm.png');
                     }else if(this.urlType == 'Pro'){
                         $('.zip_code').addClass('hidden');
                         $('.model_type').addClass('hidden');
                         $('[name=LEADCF3]').addClass('hidden').val('Pro');
                         $('#nex_request .left-top img').attr('src', '/sites/all/themes/nexersystv/form/img/nex-bro-pro.png');
                     }else{
                         $('.zip_code').addClass('hidden');
                         $('#nex_request .left-top img').attr('src', '/sites/all/themes/nexersystv/form/img/nex-bro-home.png');
                     }
                 }
    }
    nexReqForm.checkUrlType();
    nexReqForm.formatForm();
});
