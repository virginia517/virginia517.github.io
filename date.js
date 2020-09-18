try{
    let options={
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    };

    document.getElementById('currentDate').textContent=newDate().toLocaleDateString("en-Us,options");
}