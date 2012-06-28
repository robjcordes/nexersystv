// JavaScript Document

jQuery(document).ready(

        function(){
            	var frmvalidator  = new Validator("myform");

  frmvalidator.EnableMsgsTogether();
  
  frmvalidator.addValidation("FirstName","req");
  frmvalidator.addValidation("FirstName","maxlen=30","Max length for FirstName is 30");
  frmvalidator.addValidation("FirstName","alpha_s","Please Enter Your First Name");
  frmvalidator.addValidation("LastName","req");
  frmvalidator.addValidation("LastName","maxlen=30","Max length for LastName is 30");
  frmvalidator.addValidation("LastName","alpha_s","Please Enter Your Last Name");
  frmvalidator.addValidation("Phone","req");
  frmvalidator.addValidation("Phone","regexp=^([0-9]( |-)?)?(\\(?[0-9]{3}\\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$","A Valid Phone Number is Required.");
  frmvalidator.addValidation("Email","maxlen=50");
  frmvalidator.addValidation("Email","req");
  frmvalidator.addValidation("Email","email","Please Enter Your Email");
//  frmvalidator.addValidation("LEADCF51","maxlen=50");
  frmvalidator.addValidation("Description","maxlen=300");

        }
        );