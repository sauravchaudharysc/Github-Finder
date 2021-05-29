//Initialise Github
const github = new Github;

//Initialise UI Class
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Event Listener For Search User
searchUser.addEventListener('keyup',(e) =>{
  //Get Input text
  const userText = e.target.value;
  if(userText!==''){
    //Make http call
    github.getUser(userText).then (data => {
      if(data.profile.message ==='Not Found'){
        ui.clearProfile();
        ui.showAlert('User not found','alert alert-danger');
        console.log("Sorry");
      }else{
        //Show Profile
        ui.showProfile(data.profile);
      // Show Repos
      ui.showRepos(data.repos);
      //Show Followers
      ui.showFollowers(data.follower);
      }
    })
  }else{
    //Clear Profile
    ui.clearProfile();
  }
});
