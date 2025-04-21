
    const photoInputs = document.querySelectorAll('.photo-input');
    const previewImages = document.querySelectorAll('.preview-image');

    photoInputs.forEach((photoInput, index) => {
        photoInput.addEventListener('change', function() {
        const file = photoInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            previewImages[index].src = e.target.result;
        }
        reader.readAsDataURL(file);
        });
    });
    function openPage() {
        window.location.href = "Add_order.html";
    }
    function toggleSidebar() {
        var sidebar = document.querySelector('.sidebar');
        var users = document.querySelector('.users');
        var spa = document.getElementsByClassName('disp');
        sidebar.classList.toggle('sidebar-closed');
        users.classList.toggle('users-closed');
        for (var i = 0; i < spa.length; i++) {
            spa[i].classList.toggle('span-none');
        }
    }
    function logoutc() {
        var logout = document.querySelector('.logout');
        logout.classList.toggle('logout-closed');
    }
    function logoutc2() {
        var logout = document.querySelector('.log');
        logout.classList.toggle('logout-closed');
    }
    // Get the table and select element
    const table = document.getElementById('myTable');
    const select = document.getElementById('rowCountSelect');

    // Hide all rows except the first one (header row)
    for (let i = 11; i < table.rows.length; i++) {
        table.rows[i].classList.add('hidden');
    }

    // Display the selected number of rows
    select.addEventListener('change', function() {
        const rowCount = parseInt(this.value);
        for (let i = 1; i < table.rows.length; i++) {
        if (i <= rowCount) {
            table.rows[i].classList.remove('hidden');
        } else {
            table.rows[i].classList.add('hidden');
        }
        }
    });

    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable");
        switching = true;
        dir = "asc";
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
        // Remove sorting classes from all th elements
        var headers = document.getElementsByTagName("th");
        for (i = 0; i < headers.length; i++) {
            headers[i].classList.remove("asc");
            headers[i].classList.remove("desc");
        }
        // Add the sorting class to the clicked th element
        var currentHeader = headers[n];
        currentHeader.classList.toggle(dir);
    }