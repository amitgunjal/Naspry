<<<<<<< HEAD

$(function(){
    $('[rel="popover"]').popover({
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
});
=======
$(function () {
  $('[data-toggle="popover"]').popover()
})
>>>>>>> amit
