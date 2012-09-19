<?php
// this is nexersystv.com
/*
 * this file is only used as a callback src for a 1px gif displayed on nexersys.com.  It must have the param ?uid_stamp= in the request.
 */
define('DRUPAL_ROOT', getcwd());

require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

if($_GET['uid_stamp']){
    $campaign_array['uid_stamp'] = $_GET['uid_stamp'];
    setcookie('nexuid', json_encode($campaign_array), time() + (3600 * 12), '/');
}