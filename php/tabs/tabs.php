<?php
$tabs = array();

function tabs_header() {
    ?>
<link href="css/tabs.css" rel="stylesheet" type="text/css" />
    <?php
}

function tabs_start() {
    ob_start();
}

function endtab() {
    global $tabs;

    $text = ob_get_clean();
    $tabs[ count( $tabs ) - 1 ][ 'text' ] = $text;

    ob_start();
}

function tab( $title ) {
    global $tabs;

    if ( count( $tabs ) > 0 )
        endtab();
    $tabs []= array(
            title => $title,
            text => ""
    );
}

function tabs_end( ) {
    global $tabs;

    endtab( );
    ob_end_clean( );

    $index = 0;
    if ( $_GET['tabIndex'] )
        $index = $_GET['tabIndex'];

    ?>
<table width="100%" cellspacing="3" cellpadding="3" border="0">
    <tr height="30">
    <?php

    $baseuri = $_SERVER['REQUEST_URI'];
    $baseuri = preg_replace( "/\?.*$/", "", $baseuri );
    $curindex = 0;
            foreach( $tabs as $tab ) {
                $class = "tab";
                if ( $index == $curindex )
                    $class ="tab-active";
                ?>
        <td class="<?php echo($class); ?>">
            <a href="<?php

                echo( $baseuri.taburl().$curindex ); ?>">
                <?php echo( $tab['title'] ); ?>
            </a>
        </td>
        <?php
                    $curindex += 1;
                   }
                       ?>
    </tr>
    <tr height="30"><td class="tab-content" colspan="<?php echo( count( $tabs ) + 1 ); ?>">
            <?php echo( $tabs[$index ]['text'] ); ?>
        </td></tr>
</table>
            <?php
}
?>