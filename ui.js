class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    var creationDate=user.created_at;
    var needed =creationDate.slice(0, 10);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3 dp">
            <img class="img-fluid mb-2 rounded-circle" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Name: ${user.name}</li>
              <li class="list-group-item"> ${user.bio}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${needed}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Follwers</h3>
      <div id="followers"></div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showFollowers(followers) {
    let output = '';
    followers.forEach(function(follower) {
      output += `
        <span>
        <a href="${follower.html_url}" target="_blank">
            <img class="img-thumbnail mb-2 rounded-circle" src="${follower.avatar_url}">
        </a>
        </span>
      `;
    });

    // Output repos
    document.getElementById('followers').innerHTML = output;
  }

 //To Show Follower
 showRepos(repos) {
   let output = '';

   repos.forEach(function(repo) {
     var repod = repo.description;
     if(repod==null){
       repod="No Description";
     }
     output += `
       <div class="card card-body mb-2">
         <div class="row">
           <div class="col-md-3">
             <a href="${repo.html_url}" target="_blank">${repo.name}</a>
           </div>
           <div class="col-md-9">
           <p style="font-weight:bold; color:white;">${repod}</p>
           </div>
         </div>
       </div>
     `;
   });

   // Output repos
   document.getElementById('repos').innerHTML = output;
 }

  //To show alert when user not found
 showAlert(message,className){
   //Clear any remainign Alert
   this.clearAlert();
   //Create Div (Naya div banaya h idhar)
   const div = document.createElement('div');
   //Add Classes (Alert type yani red color ka div)
   div.className = className;
   //Add Text (Usme yeh text append kardia)
   div.appendChild(document.createTextNode(message));
   //Get parent (Jaha par isko display karna h )
   const container = document.querySelector('.searchContainer');
   //Get Search Box
   const search = document.querySelector('.search');
   //Insert Alert
   container.insertBefore(div,search);

   //timer to remove alert
   setTimeout(()=>{
     //This is called after 3 seconds
     this.clearAlert();
   },3000);
 }

  //To clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }

  //To clear profile
  clearProfile() {
    this.profile.innerHTML=``;
  }
}
