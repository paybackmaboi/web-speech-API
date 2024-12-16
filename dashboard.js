// Responsive navbars for small screens sizes
function myFunction() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
    } else {
        navbar.classList.add("open");
    }
  }



   // JavaScript code to handle menu interactions and display the corresponding sections
   function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// Function to speak text
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}


  
  // Get all navbar links
  var navLinks = document.querySelectorAll('#navbar ul li a');
  
  navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          // Remove 'active' class from all links
          navLinks.forEach(function(item) {
              item.classList.remove('active');
          });
          
          // Add 'active' class to the clicked link
          this.classList.add('active');
      });
  });



 

 window.onload = function() {   
    var logoutUrl =  "{{ route('welcome') }}"; 
    // Speech recognition setup
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // Set properties
    recognition.lang = 'en-US'; // Language
    // Don't show partial results
    recognition.interimResults = false;
     // Keep listening until stopped
    recognition.continuous = true; 
    
    // Start speech recognition when page loads
    recognition.start();
    
    // Listen for results
    recognition.onresult = function(event) {
        const transcript = event.results[event.resultIndex][0].transcript.trim().toLowerCase();
        console.log('Voice recognized:', transcript);
        
       
        if (transcript.includes('open student menu')) {
            document.getElementById("studentMenu").click();
            speakText('Student menu is opened.');
        } 
        else if (transcript.includes('open violation menu')) {
            document.getElementById("violationMenu").click();
            speakText('Violation menu is opened.');
        } 
        else if (transcript.includes('open academic menu')) {
            document.getElementById("academic_Year_Content").click();
            speakText('Academic year menu is opened.');
        }
         else if (transcript.includes('open dashboard menu')) {
            document.getElementById("dashBoardMenu").click();
            speakText('Dashboard is opened.');
        } 
        else if (transcript.includes('open program menu')) {
            document.getElementById("programMenu").click();
            speakText('Program menu is opened.');
        } 
        else if (transcript.includes('open section menu')) {
            document.getElementById("section_Content").click();
            speakText('section menu is now in.');
        } 
        else if (transcript.includes('hello')) {
            window.location.href = logoutUrl;
            speakText('Logging out.');
        }
        
        else if (transcript.includes('what is your name')) {
            speakText('my name is oscar.');
        } 
        else if (transcript.includes('what do you do for a living')) {
            speakText('i work as a programmer.');
        } 
        else if (transcript.includes('who is oscar')) {
            let messages = [
                "I am on a journey to become the best version of myself.",
                "Embracing challenges, learning from my mistakes, and celebrating my strengths.",
                "It is a continuous process of self-discovery and growth.",
                "I am excited to see what I can achieve as I strive for excellence in everything I do."
            ];
            
            speakMessagesSequentially(messages);
        }
        else {
            speakText('');
        }
    };


    function speakMessagesSequentially(messages) {
        // Stop if no more messages
        if (messages.length === 0) return; 
    
        let utterance = new SpeechSynthesisUtterance(messages.shift()); 
        utterance.onend = function () {
            // Once the current message finishes, move to the next one
            speakMessagesSequentially(messages);
        };
         // Speak the current message
        window.speechSynthesis.speak(utterance); 
    }




    // Handle recognition errors
    recognition.onerror = function(event) {
        console.error('Speech recognition error detected:', event.error);
    };

    // Start recognition again after it stops
    recognition.onend = function() {
        recognition.start(); // Restart the recognition
    };

    // Function to provide audio feedback (Speech synthesis)
    function speakText(text) {
        const synth = window.speechSynthesis;
        if (!synth.speaking) {
            const utterThis = new SpeechSynthesisUtterance(text);
            synth.speak(utterThis);
        } else {
            console.log('Speech synthesis is already speaking. Queuing the next message.');
        }
    }
};






  
  
  // Toggle the dashboard content visibility
  document.getElementById('dashBoardMenu').addEventListener('click', function() {
    speak("Dashboard section is open");
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var section_content = document.getElementById('sectionContent');
    var academic_Year_Content = document.getElementById('academicYearContent');
    
    // Hide other content
    studentTable.style.display = 'none';
    violationContent.style.display = 'none';
    programContent.style.display = 'none';
    section_content.style.display = 'none';
    academic_Year_Content.style.display = 'none';
    
  
  
    // Toggle visibility of dashboard content
    if (dashBoard.style.display === 'none' || !dashBoard.style.display) {
        dashBoard.style.display = 'grid';
    } else {
        dashBoard.style.display = 'none';
    }
  });
  



  // Function to toggle student content
  document.getElementById('studentMenu').addEventListener('click', function() {
    speak("Student table is open");
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var academic_year =document.getElementById('academicYearContent');
    var section_content = document.getElementById('sectionContent');
  
    // Hide other content
    dashBoard.style.display = 'none';
    violationContent.style.display = 'none';
    programContent.style.display = 'none';
    academic_year.style.display = 'none';
    section_content.style.display = 'none';
    
    // Toggle visibility of student content
    if (studentTable.style.display === 'none' || !studentTable.style.display) {
        studentTable.style.display = 'block';
    } else {
        studentTable.style.display = 'none';
    }
  });
  

//   //Function to toogle academic_year content
//   document.getElementById('academic_Year_Content').addEventListener('click',function(){
//     speak("Academic year Menu active");
//     var dashBoard = document.getElementById('dashBoard');
//     var studentTable = document.getElementById('studentTable');
//     var violationContent = document.getElementById('violationContent');
//     var programContent = document.getElementById('programContent');
//     var academic_year =document.getElementById('academicYearContent');
//     var section_content = document.getElementById('sectionContent');
   
//     dashBoard.style.display = 'none';
//     studentTable.style.display ='none';
//     violationContent.style.display ='none';
//     programContent.style.display ='none';
//     section_content.style.display = 'none';
  
//     if(academic_year.style.display === 'none' || !academic_year.style.display){
//       academic_year.style.display = 'block';
//     }
//     else{
//       academic_year.style.display = 'none';
//     }
//   });
  





  
  //Function to toogle section content
  document.getElementById('section_Content').addEventListener('click',function(){
    speak("Section table is opened");
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var academic_year = document.getElementById('academicYearContent');
    var section_content = document.getElementById('sectionContent');
  
    //hide other content
    dashBoard.style.display = 'none';
    studentTable.style.display = 'none';
    programContent.style.display = 'none';
    academic_year.style.display = 'none';
    violationContent.style.display = 'none';
    
    //toogle visibility of section content
    if(section_content.style.display === 'none'|| !section_content.style.display){
      section_content.style.display = 'block';
    }
    else{
      section_content.style.display = 'none';
    }
  });
  



  // Function to toggle violation content
  document.getElementById('violationMenu').addEventListener('click', function() {
    speak("Violation table is opened");
    var dashBoard = document.getElementById('dashBoard');
    var studentTable = document.getElementById('studentTable');
    var violationContent = document.getElementById('violationContent');
    var programContent = document.getElementById('programContent');
    var academic_year = document.getElementById('academicYearContent');
    var section_content = document.getElementById('sectionContent');
  
    // Hide other content
    dashBoard.style.display = 'none';
    studentTable.style.display = 'none';
    programContent.style.display = 'none';
    academic_year.style.display = 'none';
    section_content.style.display = 'none';
  
    // Toggle visibility of violation content
    if (violationContent.style.display === 'none' || !violationContent.style.display) {
        violationContent.style.display = 'block';
    } else {
        violationContent.style.display = 'none';
    }
  });

  
// Use the correct ID in the openModal function//viot
function toggleModal() {
    const container = document.getElementById('violationFormContainer');
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

 // Close the modal when the modal's background is clicked
//  window.addEventListener('click', function(event) {
//     if (event.target == document.getElementById('programModal')) {
//         document.getElementById('programModal').style.display = 'none'; // Hide the modal
//     }
// });










//Progrma logic

  document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle program content when the program menu is clicked
    document.getElementById('programMenu').addEventListener('click', function() {
        speak("program table is open");
        var dashBoard = document.getElementById('dashBoard');
        var studentTable = document.getElementById('studentTable');
        var violationContent = document.getElementById('violationContent');
        var programContent = document.getElementById('programContent');
        var academic_year = document.getElementById('academicYearContent');
        var section_content = document.getElementById('sectionContent');

        // Hide other content
        dashBoard.style.display = 'none';
        studentTable.style.display = 'none';
        academic_year.style.display = 'none';
        violationContent.style.display = 'none';
        section_content.style.display = 'none';

        // Toggle visibility of program content
        if (programContent.style.display === 'none' || !programContent.style.display) {
            programContent.style.display = 'block';
        } else {
            programContent.style.display = 'none';
        }
    });

    // Show the modal when 'Add New' button is clicked
    document.getElementById('addNew').addEventListener('click', function () {
        document.getElementById('programModal').style.display = 'block';
    });

    // Close the modal when the modal's background is clicked
    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('programModal')) {
            document.getElementById('programModal').style.display = 'none'; 
        }
    });

    // Handle form submission using fetch API
    document.getElementById('programForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

        let formData = new FormData(this);
        let url = document.getElementById('storeProgramRoute').getAttribute('data-url'); // Get the URL

        fetch(url, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value // CSRF token for Laravel
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Create a new row for the program table
                let newRow = `<tr>
                    <td>${data.program.id}</td>
                    <td>${data.program.pcode}</td>
                    <td>${data.program.description}</td>
                    <td>${data.program.type}</td>
                    <td>
                        <button class="btn btn-edit">Edit</button>
                        <button class="btn btn-info">Info</button>
                    </td>
                </tr>`;

                // Append new row to the program table
                document.querySelector('#programTable tbody').insertAdjacentHTML('beforeend', newRow);
                // Close the modal
                document.getElementById('programModal').style.display = 'none';
               
            } else {
                alert('Failed to add program.');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});






// //Function to toogle academic_year content
// document.getElementById('academic_Year_Content').addEventListener('click',function(){
//     speak("academic Menu is open");
//     var dashBoard = document.getElementById('dashBoard');
//     var studentTable = document.getElementById('studentTable');
//     var violationContent = document.getElementById('violationContent');
//     var programContent = document.getElementById('programContent');
//     var academic_year =document.getElementById('academicYearContent');
//     var section_content = document.getElementById('sectionContent');
   
//     dashBoard.style.display = 'none';
//     studentTable.style.display ='none';
//     violationContent.style.display ='none';
//     programContent.style.display ='none';
//     section_content.style.display = 'none';
  
//     if(academic_year.style.display === 'none' || !academic_year.style.display){
//       academic_year.style.display = 'block';
//     }
//     else{
//       academic_year.style.display = 'none';
//     }
//   });

// // Modal logic for Academic Year section
// const academicYearModal = document.getElementById("academicYearModal");
// const createNewBtn = document.getElementById("createNew"); // Button to open the modal
// const closeAcademicYearSpan = document.getElementsByClassName("form-close")[0]; // Close button for the modal
// const saveAcademicYearBtn = document.getElementById("saveAcademicYear"); // Save button for the modal

// // Show Academic Year modal when button is clicked
// createNewBtn.onclick = function() {
//     speak("create new academic year");
//     academicYearModal.style.display = "block"; // Show Academic Year modal
// }

// // Close the modal when close button is clicked
// closeAcademicYearSpan.onclick = function() {
//     speak("cancellation");
//     academicYearModal.style.display = "none"; // Hide the modal
// }

// // Close the modal when clicking outside of it
// window.onclick = function(event) {
//     if (event.target == academicYearModal) {
//         academicYearModal.style.display = "none"; // Hide the modal if clicked outside
//     }
// }

// // Event listener for saving an academic year
// saveAcademicYearBtn.addEventListener('click', function() {
//     const ayCode = document.getElementById('ayCode').value;
//     const semester = document.getElementById('semester').value;
//     const status = document.getElementById('status').value;

//     // Ensure all fields are filled before saving
//     if (ayCode && semester && status) {
//         const academicYearTableBody = document.querySelector('#academicYearTable tbody');
//         const newRow = document.createElement('tr'); // Create a new row
//         const rowCount = academicYearTableBody.rows.length + 1; // Get current row count

//         // Populate the new row with data including action buttons
//         newRow.innerHTML = `
//             <td data-label="#">${rowCount}</td>
//             <td data-label="AY Code">${ayCode}</td>
//             <td data-label="Semester">${semester}</td>
//             <td data-label="Status">${status}</td>
//             <td data-label="Actions">
//                 <div class="action-buttons">
//                     <button class="btn btn-edit">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
//                         Edit
//                     </button>
//                     <button class="btn btn-info">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
//                         Info
//                     </button>
//                 </div>
//             </td>
//         `;

//         // Add the new row to the table
//         academicYearTableBody.appendChild(newRow);

//         // Hide the modal after saving
//         academicYearModal.style.display = "none";
//     } else {
//         alert('Please fill in all fields.');
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle academic year content
    document.getElementById('academic_Year_Content').addEventListener('click', function() {
        speak("academic table is open");
        const contentElements = {
            dashBoard: document.getElementById('dashBoard'),
            studentTable: document.getElementById('studentTable'),
            violationContent: document.getElementById('violationContent'),
            programContent: document.getElementById('programContent'),
            academicYear: document.getElementById('academicYearContent'),
            sectionContent: document.getElementById('sectionContent')
        };

        // Hide all other content
        Object.values(contentElements).forEach(element => {
            if (element !== contentElements.academicYear) {
                element.style.display = 'none';
            }
        });

        // Toggle academic year content
        contentElements.academicYear.style.display = 
            contentElements.academicYear.style.display === 'none' || 
            !contentElements.academicYear.style.display ? 'block' : 'none';
    });

    // Modal Elements
    const academicYearModal = document.getElementById("academicYearModal");
    const createNewBtn = document.getElementById("createNew");
    const closeAcademicYearSpan = academicYearModal.querySelector(".form-close");
    const academicYearForm = document.getElementById("academicYearForm");

    // Show modal when Create New is clicked
    createNewBtn.addEventListener('click', function() {
        academicYearModal.style.display = "block";
        academicYearForm.reset(); // Reset form when opening
    });

    // Close modal when X is clicked
    closeAcademicYearSpan.addEventListener('click', function() {
        academicYearModal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === academicYearModal) {
            academicYearModal.style.display = "none";
        }
    });

    // Handle form submission
    academicYearForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(this);
        
        fetch(this.action, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value,
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Add new row to table
                const tbody = document.querySelector('#academicYearTable tbody');
                const newRow = `
                    <tr data-id="${data.academicYear.id}">
                        <td>${tbody.children.length + 1}</td>
                        <td>${data.academicYear.aycode}</td>
                        <td>${data.academicYear.semester}</td>
                        <td>${data.academicYear.status}</td>
                        <td>
                            <div class="action-buttons">
                                <button class="btn btn-edit" onclick="editAcademicYear(this)">Edit</button>
                                <button class="btn btn-delete" onclick="deleteAcademicYear(this)">Delete</button>
                            </div>
                        </td>
                    </tr>`;
                
                tbody.insertAdjacentHTML('beforeend', newRow);
                
                // Reset form and close modal
                this.reset();
                academicYearModal.style.display = 'none';
                
                // Show success message
                alert('Academic Year added successfully!');
            } else {
                alert('Failed to add academic year.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while saving the academic year.');
        });
    });
});

// Edit Academic Year function
function editAcademicYear(button) {
    const row = button.closest('tr');
    const id = row.dataset.id;
    const aycode = row.cells[1].textContent;
    const semester = row.cells[2].textContent;
    const status = row.cells[3].textContent;

    // Populate the form
    const form = document.getElementById('academicYearForm');
    form.querySelector('#ayCode').value = aycode;
    form.querySelector('#semester').value = semester;
    form.querySelector('#status').value = status;

    // Show the modal
    document.getElementById('academicYearModal').style.display = 'block';
}

// Delete Academic Year function
function deleteAcademicYear(button) {
    if (confirm('Are you sure you want to delete this academic year?')) {
        const row = button.closest('tr');
        const id = row.dataset.id;

        fetch(`/academic-year/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                row.remove();
                alert('Academic Year deleted successfully!');
            } else {
                alert('Failed to delete academic year.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while deleting the academic year.');
        });
    }
}

// Function to speak text (if you're using text-to-speech)
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }
}






// Open modal to add new program
document.getElementById('addNew').addEventListener('click', () => {
    document.getElementById('programForm').reset();
    document.getElementById('programId').value = ''; 
    document.getElementById('programModal').style.display = 'block'; 
});

// Close modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('programModal').style.display = 'none';
});


// Edit a program row
function editProgram(button) {
    const row = button.closest('tr');  
    const programId = row.getAttribute('data-id'); 
    const pcode = row.cells[1].innerText;  
    const description = row.cells[2].innerText;  
    const type = row.cells[3].innerText; 
    // Fill the form with existing data
    document.getElementById('programId').value = programId;
    document.getElementById('pcode').value = pcode;
    document.getElementById('description').value = description;
    document.getElementById('type').value = type;

    // Open the modal for editing
    document.getElementById('programModal').style.display = 'block';
}

// Handle form submission (Add/Edit Program)
document.getElementById('programForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const programId = document.getElementById('programId').value;
    const pcode = document.getElementById('pcode').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;

    // Validate if all fields are filled
    if (!pcode || !description || !type) {
        alert('Please fill all fields');
        return;
    }

    if (programId) {
        // Update existing program
        const row = document.querySelector(`tr[data-id="${programId}"]`);
        if (row) { 
            row.cells[1].innerText = pcode;
            row.cells[2].innerText = description;
            row.cells[3].innerText = type;
        } else {
            console.error(`Row with data-id="${programId}" not found`);
        }
    } else {
        // Add new program
        const table = document.getElementById('programTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const uniqueId = Date.now();
        newRow.setAttribute('data-id', uniqueId); 
        newRow.innerHTML = `
            <td>${table.rows.length}</td>
            <td>${pcode}</td>
            <td>${description}</td>
            <td>${type}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-edit" onclick="editProgram(this)">Edit</button>
                    <button class="btn btn-delete" onclick="deleteProgram(this)">Delete</button>
                </div>
            </td>
        `;
    }

    // Close the modal and reset the form
    document.getElementById('programModal').style.display = 'none';
    document.getElementById('programForm').reset(); 
});


// Delete a program row
function deleteProgram(button) {
    const row = button.closest('tr'); 
   
        row.remove(); 
    
}

// Delete function
function deleteRow(button) {
    if (confirm("Are you sure you want to delete this row?")) {
        const row = button.closest('tr');
        row.remove();
    }
}















