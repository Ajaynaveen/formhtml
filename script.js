
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('myForm');
            const table = document.getElementById('dataTable');

            form.addEventListener('submit', function (event) {
                event.preventDefault();

           
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const address = document.getElementById('address').value;
                const pincode = document.getElementById('pincode').value;
                const gender = document.getElementById('gender').value;
                const foods = [...document.querySelectorAll('input[name="food"]:checked')].map(food => food.value).join(', ');
                const state = document.getElementById('state').value;
                const country = document.getElementById('country').value;

                
                addDataToTable(table, firstName, lastName, address, pincode, gender, foods, state, country);

             
                form.reset();
            });

           
            function addDataToTable(table, firstName, lastName, address, pincode, gender, foods, state, country) {
                const newRow = table.insertRow(-1);
                newRow.innerHTML = `
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${address}</td>
                    <td>${pincode}</td>
                    <td>${gender}</td>
                    <td>${foods}</td>
                    <td>${state}</td>
                    <td>${country}</td>
                `;
            }
        });
  