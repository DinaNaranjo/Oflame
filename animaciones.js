$(document).ready(function() {
    $('#stats h3').each(function() {
        var $this = $(this);
        var number = parseFloat($this.text().replace(/\D/g, ''));
        jQuery({ Counter: 0 }).animate({ Counter: number }, {
            duration: 2000, // Aumenta la duración a 2000 milisegundos (2 segundos)
            easing: 'swing',
            step: function() {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
});
