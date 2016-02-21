/**
 * Created by apals on 21/02/16.
 */
//IngredientsViewController Object constructor
var PanelViewController = function (view, model) {

    var value = $("#number-of-guests-input").val();
    $("#number-of-guests-input").on('keyup change click', function () {
        if (this.value !== value) {
            value = this.value;
            model.setNumberOfGuests(value);
        }
    });

    var partyname = $("#name-of-party-input");
    partyname.change(function () {

        model.setPartyName(partyname.val());
    });

    $("#confirm-dinner-btn").click(function () {
        $('#meals-view').css('display', 'none');
        $('#select-dish').css('display', 'none');
        $('#panel').css('display', 'none');
        $('#detail-view-container').css('display', 'none');


        $("#header-info-view").css('display', 'block');
        //$("#preparations-overview-view").css('display', 'block');
        $("#full-menu-wrapper").css('display', 'block');
        $("#overviewView").css('display', 'block');

    });
};
