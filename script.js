document.getElementById('createEventForm')
.addEventListener('submit', function(event) {
    event.preventDefault();

   
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value;

    
    const eventItem = document.createElement('li');

    const eventTitle = document.createElement('h3');
    eventTitle.textContent = eventName;

    const eventDetails = document.createElement('p');
    eventDetails.textContent = `${eventDate} at ${eventTime}, ${eventLocation}`;

    eventItem.appendChild(eventTitle);
    eventItem.appendChild(eventDetails);

    
    document.getElementById('events').appendChild(eventItem);

  
    document.getElementById('createEventForm').reset();
});
