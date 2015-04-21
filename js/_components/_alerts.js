chopstick.alerts =
{
    settings:
    {
        alertbox: $('.js-alert-box')
    },

    init: function()
    {
        settings = this.settings;
        chopstick.alerts.closeAlertBox();
    },

    closeAlertBox: function ()
    {
        settings.alertbox.on('click', function(e)
        {
            e.preventDefault();
            $(this).closest(settings.alertbox).fadeOut(300);
        });
    }
};