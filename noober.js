// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  //Pull out the rider name
  let nameFirst = ride.passengerDetails.first
  let nameLast = ride.passengerDetails.last 

  //get rider phone number
  let phone = ride.passengerDetails.phoneNumber

  //get address
  let addressPickup = ride.pickupLocation.address
  let cityPickup = ride.pickupLocation.city 
  let statePickup = ride.pickupLocation.state 
  let zipPickup = ride.pickupLocation.zip
  
  //dropoff location
  let addressDrop = ride.dropoffLocation.address
  let cityDrop = ride.dropoffLocation.city 
  let stateDrop = ride.dropoffLocation.state 
  let zipDrop = ride.dropoffLocation.zip

  //get passengers
  let numPass = ride.numberOfPassengers

  //get service level
  let service
  if (ride.purpleRequested) {
    service = `Purple`
  } else if (numPass > 3) {
    service = `XL`
  } else {
    service = `X`
  }


  //output riderinformation
  let output = `Noober ${service} Passenger with ${numPass} riders: ${nameFirst} ${nameLast} - ${phone}. 
  Pickup at ${addressPickup}, ${cityPickup}, ${statePickup} ${zipPickup}. Drop off at ${addressDrop}, ${cityDrop}, ${stateDrop} ${zipPickup}. `
  console.log(output)
  // 🔥 YOUR CODE ENDS HERE 🔥
})
