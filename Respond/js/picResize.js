function initialize() {

    const modal = $('#modal');

    $('.eventImg').click(function () {
        modal.show();
        $('#img01').attr('src', this.src);
        $('#caption').html(this.alt);
    });

    modal.click(function () {
        modal.fadeOut();
    });
}