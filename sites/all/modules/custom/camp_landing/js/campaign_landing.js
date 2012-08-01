var $ = jQuery.noConflict();
$(document).ready(function() {
    $("#campaign-landing-form").validationEngine('attach'); // set up form validation.
    $('#campaign-landing-form .submit').hover(function(){
        $(this).toggleClass('down');
    });
    $('#campaign-landing-form .form-submit').click(function(event){
        //nexReqForm.showTestAlerts();
        //return false;
    });

/*formNameHome : "WebToLeads452985000001485047",
    formNameComm : "WebToLeads582065000000070015",
    */
 	$("#campaign-landing-form").validationEngine('attach'); //This needs to be here since we're adding form elements after the page has been rendered and initially validated, just re-validating.
});
