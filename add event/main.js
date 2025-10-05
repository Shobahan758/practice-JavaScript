
        document.addEventListener("DOMContentLoaded", function() {
            const addButton = document.querySelector("button"); // Add button
            const form = document.querySelector("form");
            const inputRow = document.querySelector(".row"); // First input row to duplicate

            addButton.addEventListener("click", function(e) {
                e.preventDefault();  // Prevent form submission

                // Clone the entire row, including the "Add" button
                const clonedRow = inputRow.cloneNode(true);
                
                // Get the remove button in the cloned row
                const removeButton = clonedRow.querySelector(".remove-btn");
                
                // Add event listener to the "Remove" button in the cloned row
                removeButton.addEventListener("click", function() {
                    clonedRow.remove();  // Remove the cloned row
                });

                // Remove the add button from the cloned row to avoid having multiple "Add" buttons
                const addButtonClone = clonedRow.querySelector("button");
                addButtonClone.remove();

                // Append the cloned row to the form
                form.appendChild(clonedRow);
            });
        });
    