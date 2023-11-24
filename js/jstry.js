$(document).ready(function(){
    var sectionArray = ["#start", "#01", "#02", "#03"];

    // Устанавливаем hr элементам класс inactive, кроме первого
    //$('.navhr').not(':first').addClass('inactive');

    $(document).scroll(function(){
        var scrollPos = $(document).scrollTop() + 88; // Плюс 88, чтобы учесть fixed позицию элемента
        var currentSection = '';

        // Определение текущей секции
        $(sectionArray).each(function(index, section){
            var sectionOffset = $(section).offset().top;
            var sectionHeight = $(section).outerHeight();

            if(scrollPos >= sectionOffset && scrollPos < (sectionOffset + sectionHeight)){
                currentSection = section;
                return false; // Прерываем цикл, если найдена текущая секция
            }
        });

        

        if(currentSection !== '')
        {
            // Установка активного и неактивного состояния для навигации
            $('.navhr').addClass('inactive');

            $('.nav-link[href="' + currentSection + '"]').next('.navhr').removeClass('inactive');

            $('.nav-link:not([href="' + currentSection + '"])').next('.navhr').addClass('inactive');
        }
    });

    // Обработчик клика по элементам навигации
    $('.nav-link').on('click', function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var targetOffset = $(target).offset().top - 88; 

        $('html, body').animate({
            scrollTop: targetOffset
        }, 500);
    });
});
