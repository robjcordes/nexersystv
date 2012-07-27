<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */
 
function nexersystv_preprocess_page(&$vars) {
    
    if(arg(1) == 3){
        drupal_add_js(path_to_theme().'/js/nexersystv-form.js');
    }
        if(arg(1) == 8 || arg(1) == 9 || arg(1) == 10 || arg(1) == 11){
        //drupal_add_js(path_to_theme().'/form/js/nexersysform.js');
        //drupal_add_js(path_to_theme().'/form/js/jquery.validationEngine.js');
        //drupal_add_js(path_to_theme().'/form/js/jquery.validationEngine-en.js');
        //drupal_add_css(path_to_theme() . '/form/css/validationEngine.jquery.css');
    }
    //drupal_add_css('sites/all/themes/nexersystv/form/css/nex_request.css');
}
drupal_add_js('/' . path_to_theme().'/js/nexersystv-pardot.js'
        , array('type' => 'external', 'scope' => 'footer', 'weight' => 5)
  );

    

