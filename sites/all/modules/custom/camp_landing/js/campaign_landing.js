var $ = jQuery.noConflict();
$(document).ready(function() {
    $("#campaign-landing-form").validationEngine('attach'); // set up form validation.
    $('#campaign-landing-form .submit').hover(function(){
        $(this).toggleClass('down');
    });
    $('#campaign-landing-form .form-submit').click(function(event){
        var country = $('#camp_request form #camp_request_country').val();
        nexReqForm.updateAction(country, nexReqForm.urlType);
        nexReqForm.showTestAlerts();
        //return false;
    });

    nexReqForm = {
        /*
         * Instructions:  Enter complete urls in the arrays below for home, commercial and pro models.
         * Any other url will be treated as 'general'.
         *
         */
        homeUrls : [
    'http://form.localhost:8888/home.php',
	'http://nexersys.com/afmaugust',
	'http://nexersys.com/afmaugust/',
    'http://nexersysdemo.principlepointdev.com/form/home.php',
    'http://nexersysdemo.principlepointdev.com/NexersysBrochureForm/home.php'
    ],
    commercialUrls : [
        'http://form.localhost:8888/comm.php',
        'http://nexersysdemo.principlepointdev.com/form/comm.php',
        'http://nexersysdemo.principlepointdev.com/NexersysBrochureForm/comm.php',
		'http://nexersys.com/fitness-equipment/commercial-gym-equipment', 'http://nexersys.com/fitness-equipment/commercial-gym-equipment/',
		'http://nexersys.com/grf',
		'http://nexersys.com/grf/',
		'http://nexersys.com/club-solutions-june-21/',
		'http://nexersys.com/cs0712newsletterbanner',
		'http://nexersys.com/cs0712newsletterbanner/',
		'http://nexersys.com/ggfa0712video/',
		'http://nexersys.com/cs0712davidpath/',
		'http://nexersys.com/cs0712davidpath',
		'http://nexersys.com/cs0712mistypath/',
		'http://nexersys.com/cs0712mistypath',
		'http://nexersys.com/cs0712nexersyspath/',
		'http://nexersys.com/cs0712nexersyspath',
		'http://nexersys.com/clubsolutions-july-video-lp/',
		'http://nexersys.com/clubsolutions-july-video-lp',
		'http://nexersys.com/cs0712mktgalert',
		'http://nexersys.com/cs0712mktgalert/',
		'http://nexersys.com/door/',
		'http://nexersys.com/door',
		'http://nexersys.com/path/',
		'http://nexersys.com/path',
		'http://nexersys.com/cs0712newslettervideo',
		'http://nexersys.com/cs0712newslettervideo/',
		'http://nexersys.com/clubsolutions-july2012-newsletter2-video/',
		'http://nexersys.com/clubsolutions-july2012-newsletter2-video',
		'http://nexersys.com/clubsolutions-july2012-newsletter2/',
		'http://nexersys.com/clubsolutions-july2012-newsletter2',
		'http://nexersys.com/clubsolutions-july2012-emailblast-video/',
		'http://nexersys.com/clubsolutions-july2012-emailblast-video',
		'http://nexersys.com/clubsolutions-july2012-emailblast',
		'http://nexersys.com/clubsolutions-july2012-emailblast/',
		'http://nexersys.com/club-solutions-august-2012-video-lp/',
		'http://nexersys.com/club-solutions-august-2012-video-lp',
		'http://nexersys.com/product/commercial', 'http://nexersys.com/product/commercial/',

		'http://nexersys.com/commercial-test', 'http://nexersys.com/commercial-test/'

		],
    proUrls : [
        'http://form.localhost:8888/pro.php',
        'http://nexersysdemo.principlepointdev.com/form/pro.php',
        'http://nexersysdemo.principlepointdev.com/NexersysBrochureForm/pro.php'],
    hiddenCommInput : "<input type='hidden' name='xnQsjsdp' value='dhOYVrEbdmJthYo*kRl79w$$'><input type='hidden' name='xmIwtLD' value='xxtEl*Hx2ByNU*uyPq3OMHBogz4VdScW'><input type='hidden' name='actionType' value='TGVhZHM='><input type='hidden' name='returnURL' value='http://www.nexersys.com/thank-you'>",
    hiddenHomeInput : "<input type='hidden' name='xnQsjsdp' value='f1LzxolSe-0$'><input type='hidden' name='xmIwtLD' value='82AfV3HJwjp71g4ILMIYL*GCpUdN*P5O'><input type='hidden' name='actionType' value='TGVhZHM='><input type='hidden' name='returnURL' value='http://www.nexersys.com/thank-you'>",
    formNameHome : "WebToLeads452985000001485047",
    formNameComm : "WebToLeads582065000000070015",
    companyNameInput : "<tr class='company_name'><td class='label'><label for='CompanyName'>Company Name*</label></td><td><input class='nexersys validate[required]' id='CompanyName' type='text' maxlength='255' name='LEADCF24' /></td></tr>",
    showTestAlerts : function(){
        var formValues = 'form name: ' + $('#campaign-landing-form').attr('name')
            + '\n URL Type: ' + nexReqForm.urlType
            + '\n Model Type: ' + nexReqForm.modelType
            + '\n Country: ' + $('#camp_request form #camp_request_country').val()
            + '\n Questions: ' + $('#camp_request form #questions').val()
            + '\n model input name: ' + $('#camp_request form #model_type').attr('name')
            + '\n country input name: ' + $('#camp_request form #camp_request_country').attr('name')
            + '\n questions input name: ' + $('#camp_request form #questions').attr('name')
        ;
        $('#camp_request form input').each(function(){
            formValues += '\n ' + $(this).val();
        });
        alert(formValues);
    },
    checkUrlType : function(){
                       var url = $(location).attr('href');
                       if($.inArray(url, this.homeUrls) != -1){
                           this.urlType = 'home';
                       }else if($.inArray(url, this.commercialUrls) != -1){
                           this.urlType = 'commercial';
                       }else if($.inArray(url, this.proUrls) != -1){
                           this.urlType = 'pro';
                       }else{
                           this.urlType = 'general';
                       }
                   },
    prepareForm : function(crmType){
        //change form names, change insert hidden input fields etc. here before submitting form
        if(crmType == 'zohoHome'){
            $('#camp_request form').attr('name', this.formNameHome);
            $('#camp_request table').prepend(this.hiddenHomeInput);
            $('#camp_request #model_type').attr('name', 'LEADCF15');
            $('#camp_request #CompanyName').attr('name', 'LEADCF29');
            $('#camp_request #camp_request_country').attr('name', 'LEADCF23');
            $('#camp_request #questions').attr('name', 'LEADCF28');
        }else{
            //if not home, format input fields for commercial crm
            $('#camp_request form').attr('name', this.formNameComm);
            $('#camp_request table').prepend(this.hiddenCommInput);
            $('#camp_request #model_type').attr('name', 'LEADCF3');
            $('#camp_request #camp_request_country').attr('name', 'LEADCF11');
            $('#camp_request #questions').attr('name', 'LEADCF10');
        }

    },
    updateAction : function(country, urlType){
                       this.modelType = $('#camp_request #model_type').val();
                       if(this.urlType == 'general'){
                           if((this.modelType == 'home' || this.modelType == 'pro') && country == 'United States'){
                               //zohoHome
                               this.prepareForm('zohoHome');
                           }else{
                               //zohoCommercial
                               this.prepareForm('zohoComm');
                           }
                       }else if(this.urlType == 'home' || this.urlType == 'pro'){
                           if(country == 'United States'){
                               //zohoHome
                               this.prepareForm('zohoHome');
                           }else{
                               //zohoCommercial
                               this.prepareForm('zohoComm');
                           }
                       }else if(this.urlType == 'commercial'){
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
                            //console.log('hours: ' + hours);
                            $('.datestr').val(dateString);
                            $('.hours').val(hours);
                            $('.minutes').val(minutes);
                            $('.ampm').val(ampm);
                   },
    formatForm : function(){
		//console.log(this.urlType);
		$('#campaign-landing-form br').remove();
		var formHTML = $('#campaign-landing-form').html();
		formHTML.replace('<p></p>', '');
		formHTML.replace('<p>', '');
		formHTML.replace('</p>', '');
		formHTML.replace('<p/>', '');
		formHTML.replace('<P>', '');
		formHTML.replace('<P/>', '');
		formHTML.replace('<P></P>', '');
		formHTML.replace('<P/>', '');
                     if(this.urlType == 'home'){
                         $('.model_type').addClass('hidden');
                         $('[name=LEADCF3]').addClass('hidden').val('home');
                         $('#camp_request .left-top img').attr('src', 'http://nexersys.com/wp-content/themes/nexersys/form/img/nex-bro-home.png');
                     }else if(this.urlType == 'commercial'){
						$('#campaign-landing-form textarea').css({'height':'45px'});

						$(this.companyNameInput).insertAfter('#camp_request table tr:eq(2)');
						//if($(location).attr('href') == 'http://nexersys.com/commercial-test/'){
								if($.browser.msie && $.browser.version == 7.0){
									//console.log('ie 7');
									$('#campaign-landing-form .submit').css({'margin-top':'-45px'});
								}else if($.browser.msie && $.browser.version == 8.0){
									//console.log('ie 8');
								}else{
									//console.log('not ie');
								}
						//}
                         //$('.model_type').addClass('hidden');
                         //$('[name=LEADCF3]').addClass('hidden').val('commercial');
                         //$('#camp_request .left-top img').attr('src', 'http://www.nexersys.com/wp-content/themes/nexersys/form/img/nex-bro-comm.png');
                     }else if(this.urlType == 'pro'){
                         //$('.model_type').addClass('hidden');
                         $('[name=LEADCF3]').addClass('hidden').val('pro');
                         //$('#camp_request .left-top img').attr('src', 'http://www.nexersys.com/wp-content/themes/nexersys/form/img/nex-bro-pro.png');
                     }else{
                         //$('#camp_request .left-top img').attr('src', 'http://www.nexersys.com/wp-content/themes/nexersys/form/img/nex-bro-home.png');
						 $('.company_name').addClass('hidden');
					     $('.company_name input').removeClass('validate[required]');
                     }
                 }
    }

    nexReqForm.checkUrlType();
    nexReqForm.formatForm();
	$("#campaign-landing-form").validationEngine('attach'); //This needs to be here since we're adding form elements after the page has been rendered and initially validated, just re-validating.
});
