$(document).ready(function() {
    let display = $('#display');
    let currentInput = '';
    let operator = '';
    let result = 0;

    $('.btn').click(function() {
        let value = $(this).val();

        if ($(this).attr('id') === 'clear') {
            display.val('');
            currentInput = '';
            operator = '';
            result = 0;
        } else if ($(this).attr('id') === 'equals') {
            try {
                currentInput = eval(currentInput.replace('%', '/100'));
                display.val(currentInput);
            } catch (e) {
                display.val('Error');
            }
        } else {
            if ($(this).hasClass('operator')) {
                operator = value;
            }
            currentInput += value;
            display.val(currentInput);
        }
    });

    $('#theme-toggle').change(function() {
        if ($(this).is(':checked')) {
            $('body').removeClass('light').addClass('dark');
        } else {
            $('body').removeClass('dark').addClass('light');
        }
    });

    // Initialize with light theme
    $('body').addClass('light');
});
