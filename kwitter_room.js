
//ADD YOUR FIREBASE LINKS HERE

function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("outputIsAwesome").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey  = childSnapshot.key;
        Room_names = childKey;
        });
    });
}

getData();
