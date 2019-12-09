$("#submit").on("click", function(event) {
    event.preventDefault();

    var tRow = $("<tr>");

    var train = $("#Train-name-input").val().trim();
    var destination = $("#Destination-input").val().trim();
    var trainTime = $("#First-Train-Time-input").val().trim();
    var frequency = $("#Frequency-input").val().trim();

    console.log(train);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);

});

database.ref().on("child_added", function (childSnapshot) {

    // Store everything into a variable.
    var train = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().firstTrainTime;
    var frequency = childSnapshot.val().frequency;

tRow.append("<td>" + train  + destination + trainTime + frequency + "</td>", "<td>" + "</td>");
    $("tbody").append(tRow);


// MOMENT - Class Code //

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));  

});