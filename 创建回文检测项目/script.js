document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');

    function isPalindrome(str) {
        // 移除非字母数字字符并转为小写
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // 比较处理后的字符串与其反转形式
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }

    function checkPalindrome() {
        const inputValue = textInput.value.trim();

        if (!inputValue) {
            alert('Please input a value');
            return;
        }

        const palindrome = isPalindrome(inputValue);

        if (palindrome) {
            resultDiv.innerHTML = `${textInput.value} is a palindrome`;
            resultDiv.style.display = 'block';
        } else {
            resultDiv.innerHTML = `${textInput.value}  is not a palindrome`;
            resultDiv.style.display = 'block';
        }
    }

    checkBtn.addEventListener('click', checkPalindrome);

    // 支持按Enter键检测
    textInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkPalindrome();
        }
    });
});