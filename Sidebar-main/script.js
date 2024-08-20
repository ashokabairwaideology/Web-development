var list = document.querySelectorAll('.navLink');

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', () => {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('active');
            }
            list[i].classList.add('active');
        });
    }

    var toggleBtn = document.querySelector('.toggleBtn'),
        sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('activeBar');
    });
