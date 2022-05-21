// init Github class
const github =  new Github;
// init Github class
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;

    if (userText !== ''){
        github.getUser(userText)
        .then( data =>{
            if (data.profile.message === 'Not Found'){
                //display error message
                ui.showAlert('user not found', 'alert alert-danger')
            }else{
                //display result
                ui.showProfile(data.profile);

            }
        }) 
    }else{
        //clear the profile
        ui.clearProfile()
    }
})