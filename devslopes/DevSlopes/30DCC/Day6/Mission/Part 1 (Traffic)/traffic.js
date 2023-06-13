// Write coniditonal logic with comparison and logical operators that reflect the traffic light scenerios in the U.S
var statusGreen = 'Green';
var statusYellow = 'Yellow';
var statusRed = 'Red';
let status = 'Yellow'
var emergencyVehicle = false;
var isInIntersection = true;

if (!isInIntersection){
    console.log('You can drive');
}
else if (status === statusGreen
 && !emergencyVehicle){
 console.log('You can drive');
}
else if (status === statusYellow && !emergencyVehicle){
    console.log('Prepare to stop');
}
else if (status === statusRed|| emergencyVehicle){
    console.log('Do not drive.');
}

