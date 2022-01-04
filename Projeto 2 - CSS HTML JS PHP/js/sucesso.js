const read = document.getElementById('read');
const create = document.getElementById('create');
const form = document.getElementById('form');
formData = new FormData(form);
class HTTP {
    async get(url) {
        const response = await fetch(url);
    }
}
// create.onclick = function () {
//     form.action = '../index1.html';
//     form.submit();
// };
// create.addEventListener('submit', function () {
//     // const request = new XMLHttpRequest();
//     // request.open('post', 'listar.php');

//     // form.action = 'listar.php';
//     form.action = './index1.html';
//     form.submit();
// });

// form.submit();
