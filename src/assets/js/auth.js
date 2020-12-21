jQuery(function () {

    $(document).on('click', '#signup', function (e) {
        e.preventDefault();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var password_ = $('#password_').val();

        if (!username || !email || !password || !password_) {
            alert("Please fill all fields!");
        }
        else if (password != password_) {
            alert("Passwords don't match!");
        }
        else {
            alert(`Successful Sign Up!\n\nusername: ${username}\nemail: ${email}\npassword: ${password}\nconfirm password: ${password_}`);
            $("form").submit();
        }

    });

    $(document).on('click', '.toggle-password', function () {
        var index = $('.toggle-password').index(this);

        if ($('.password').eq(index).attr("type") == "password") {
            $('.password').eq(index).attr("type", "text")
            $('.toggle-password').eq(index).removeClass('fa-eye').addClass('fa-eye-slash')
        } else {
            $('.password').eq(index).attr("type", "password")
            $('.toggle-password').eq(index).removeClass('fa-eye-slash').addClass('fa-eye')
        }
    });



});