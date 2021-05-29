class Github{
  constructor(){
    this.client_id = '2dafb6448fb948a24442';
    this.client_secret = '90e44cc0db5d9f9097c473e048c3829cf061dd60';
    this.repos_count =5;
    this.repos_sort = 'created: asc';
    this.followers_count=10;
  }

  async getUser(user) {
  const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  const repoResponse =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  const followerResponse =  await fetch(`https://api.github.com/users/${user}/followers?per_page=${this.followers_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  const profile = await profileResponse.json();
  const repos = await repoResponse.json();
  const follower = await followerResponse.json();
    return {
      profile,
      repos,
      follower
    }
  }
}
