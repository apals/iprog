/**
 * Created by mheine on 21/02/16.
 */
var HeaderViewController = function (view, model) {


    $("#edit-dinner-btn").click(function () {
        console.log("edit dinner dtn")
        $('#meals-view').css('display', 'block');
        $('#select-dish').css('display', 'block');
        $('#panel').css('display', 'block');

        $('#detail-view-container').css('display', 'none');
        $("#header-info-view").css('display', 'none');
        $("#preparations-overview-view").css('display', 'none');

    });
};
