/**
 * ajax-request-tester.js
 *
 * Form processing for the AJAX request tester
 *
 * jQuery 2.x
 *
 * @category  None
 * @package   No packages/namespaces used
 * @author    Rick Morice <rick@floor9design.com>
 * @copyright floor9design.com
 * @license   GPL 3.0 (http://www.gnu.org/copyleft/gpl.html)
 * @version   0.9
 * @link      http://floor9design.com/
 * @see       ../ajax-request-tester.html
 * @since     File available since Release 0.9
 *
 */

/**
 * ShowLoader
 *
 * Shows the loading icon in the specified jQuery element
 *
 * @param string jQueryElement a jQuery element to replace - eg: #someDiv
 */
function showLoader(jQueryElement) {
    $(jQueryElement).html('<p class="loader"><img src="img/loading.gif" alt="Loading data"></p>');
}

/**
 * updateRequest
 *
 * Updates the response section with the supplied AJAX url
 */
function updateRequest(){
    showLoader("#response");
    $url = ($("#url").val());

     $.ajax({
         url: $url,
         type: "GET",
         //data: $post_data,
         //    success: function (result) {
         //    $("#response").html(result);
         //},
         success: function (result) {
                 $("#response").html(result);
             },
         error: function () {
             $("#response").html('<p>:(</p>');
             $("#feedback").html('<p>There was a problem.</p>');
         },
         complete: function () {
             $("#feedback").html('<p>Request successfully completed.</p>');
         }
     });
}


/**
 * Document ready items
 *
 * Items that get run when page is loaded
 */
$( document ).ready(function() {

    /* catches a URL submission */
    $("body").on("submit", "#ajaxSubmit", function(event) {
        event.preventDefault();
        updateRequest();
    });

});