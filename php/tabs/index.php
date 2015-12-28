<link rel="stylesheet" href="tabs.css" type='text/css'/>
<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function taburl(){return $taburl ="?tabIndex=";}
require_once 'tabs.php';
tabs_header(); ?>
<div style="width:100%;">
<?php tabs_start(); ?>
<?php tab( "Location" ); ?>

<?php tab( "Position" ); ?>
<?php tab( "Item Type" ); ?>
<?php tabs_end(); ?>
</div>