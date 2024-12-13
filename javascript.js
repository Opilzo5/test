document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // إرسال طلب تسجيل الدخول إلى السيرفر
    // يمكنك استخدام هذا المكان لإرسال البيانات إلى السيرفر أو لإجراء العمليات اللازمة عند الضغط على زر تسجيل الدخول
    // في هذا المثال، نقوم بطباعة بيانات تسجيل الدخول في وحدة تحكم المتصفح
    console.log('Username: ' + username);
    console.log('Password: ' + password);
});

document.getElementById('registerButton').addEventListener('click', function() {
    // قم بأي عمليات للتوجيه إلى صفحة التسجيل هنا
});

