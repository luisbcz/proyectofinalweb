
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("openModal").addEventListener("click", function() {
                var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
                modal.show();
            });

            document.getElementById("closeModal").addEventListener("click", function() {
                var modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
                modal.hide();
            });
        });
 