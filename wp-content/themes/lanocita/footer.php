

<footer class="site-footer" role="contentinfo">



</footer>

</div><!-- wrapper -->


<?php wp_footer(); ?>


<script>
document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, установлен ли язык страницы на 'en'
    if (document.documentElement.lang === "en") {
        // Находим все элементы с классом 'woocommerce-Price-currencySymbol'
        var priceSymbols = document.querySelectorAll('.woocommerce-Price-currencySymbol');

        // Перебираем найденные элементы и меняем текст на '€'
        priceSymbols.forEach(function(symbol) {
            symbol.textContent = '€';
        });
    }
});

</script>

</body>
</html>

