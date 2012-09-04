<?php print $doctype; ?>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?>>
<head<?php print $rdf->profile; ?>>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>  
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
 
<body<?php print $attributes;?>>
    

    
    

    <div class="container_12">
               
  <?php print $page_top; ?>
    
  <?php print $page; ?>

</div>
  <?php print $page_bottom; ?>
</body>
</html>