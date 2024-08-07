$(document).ready(function() {
    $('#long-url').on('input', function () {
        var longUrl = $(this).val();
        
        // Clear previous shortened URL
        $('#shortened-url').text('');
        $('#copy-btn').hide();

        // Check if the long URL is not empty
        if (longUrl.trim() !== '') {
            // Perform AJAX request to shorten URL
            $.ajax({
                url: "https://api-ssl.bitly.com/v4/shorten", // Replace with actual API endpoint
                method: "POST",
                contentType: "application/json",
                headers: {
                    "Authorization": "Bearer a5b08a8f80f1d226d04102a89e7006b87bdb1123" // Replace with your API key
                },
                data: JSON.stringify({
                    long_url: longUrl
                }),
                success: function(response) {
                    var shortenedUrl = response.link; // Adjust based on actual response structure
                    $('#shortened-url').text(shortenedUrl).addClass('shown');
                    $('#copy-btn').show();
                },
                
                error: function(jqXHR, textStatus, errorThrown) {
                    $('#shortened-url').text("Failed to shorten URL. Please try again later.");
                }
            });
        }
    });
    $('#copy-btn').click(function () {
        var shortenedUrl = $('#shortened-url').text();
        navigator.clipboard.writeText(shortenedUrl).then(function() {
            alert('Shortened URL copied to clipboard!');
        }, function(err) {
            alert('Failed to copy URL.');
        });
    });


});

