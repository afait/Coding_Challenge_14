//Task 2 - Support Tickets Dynamic Addition

//Create main container
function createSupportTicket(customer, issue, priority) {
    
    let divTicketContainer = document.getElementById('ticketContainer');
    
    //Creation of the ticketcard
    const ticketCard = document.createElement('div');
    ticketCard.setAttribute('class','ticket-card');
    
    //Adding the name of the customer to the card
    const custName = document.createElement('h2');
    custName.setAttribute('class', 'ticket-header');
    custName.textContent = customer;
    ticketCard.append(custName);
    
    //Adding place to describe the found issue
    const issueDesc = document.createElement('p');
    issueDesc.setAttribute('class', 'issue-description');
    issueDesc.textContent = issue;
    ticketCard.append(issueDesc);

    //Adding a place to show the priority

    const priorityLabel = document.createElement('p');

    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;
    
    // Creating a distinction between priorities

    if (priority.toLowerCase() === 'high') {
        ticketCard.classList.add('high-priority');
    } else {
        ticketCard.classList.add('other-priority');
    }
    

    
    //Adding priority to the ticket

    ticketCard.append(priorityLabel);

    //Adding button that lets the user resolve

    const resolveBtn = document.createElement('button');
    resolveBtn.setAttribute('class', 'resolve-btn');
    resolveBtn.textContent = 'Resolve';
    ticketCard.append(resolveBtn); 


    resolveBtn.addEventListener('click', () => {
        ticketCard.remove();
    });
    divTicketContainer.append(ticketCard);
};
document.getElementById('addTicketBtn').addEventListener('click', () => {
    createSupportTicket("Cali Nobles", "No Wifi", "Medium");
    createSupportTicket("Bob Ross", "Broken glass", "High");
})




//Task 3 - Highlighting High Priority Tickets

function highlightHighPriorityTickets(){

    //Selecting all tickets
    const highPriorityTickets = document.querySelectorAll('.ticket-card');
    
    // Make tickets into an array format

    const arrTickets = Array.from(highPriorityTickets);
    arrTickets.forEach((ticket) => {
        styleSingleCard(ticket);
    })
}


function styleSingleCard(currentCard){
  
    const priority = currentCard.querySelector('.priority-label');
    //Styles the various tickets
        
    
    if(priority.textContent.replace('Priority: ', '').toLowerCase() === 'high'){
        
        currentCard.classList.remove('other-priority');
        // Checks the priority and removes the non high priority

    
        currentCard.classList.add('high-priority');
    }
    else{
        currentCard.classList.remove('high-priority');
        currentCard.classList.add('other-priority');
    }
}