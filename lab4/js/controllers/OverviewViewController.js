/**
 * Created by mheine on 21/02/16.
 */
var OverviewViewController = function (view, model) {


    $("#print-recipe-btn").click(function () {
        $('#meals-view').css('display', 'none');
        $('#select-dish').css('display', 'none');
        $('#panel').css('display', 'none');

        $('#detail-view-container').css('display', 'none');
        $("#preparations-overview-view").css('display', 'block');
        $("#full-menu-wrapper").css('display', 'none');
        $("#overviewView").css('display', 'none');

    });
};
