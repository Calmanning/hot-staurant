console.log("reservations are connected.");

$("#reserveForm").on("submit", event=>{
    event.preventDefault()
    console.log("form submitted")
    const userData = {
        id:$('#resId').val(),
        name:$('#resName').val(),
        email:$('#resEmail').val(),
        phone:$('#resPhone').val(),
    }

    console.log('user data:')
    console.log(userData)

    $.post('/reserve',userData).then(data =>{
        console.log('API Resopnse');
        console.log(data);
        // if (data.hasTable){
        //     alert("you can has table.")
        // }else{
        //     alert("sorry, buddy. You gotta wait.")
        // }
        window.location.href ="/";
    })
})