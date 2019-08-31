class Github {
  constructor() {
    this.client_id = 'e24edc7db9839c1a8d0c';
    this.client_secret = '13ac6b155c116248b6bd6b52dbedd6aea0873ad9';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  getUser(user) {
    return new Promise((resolve,reject) => {
      fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        .then(res => res.json())
        .then(profile => resolve({profile}))
        .catch(err => reject(err));
    });
  }
  getRepos(user){
    return new Promise((resolve,reject) => {
      fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
        .then(res => res.json())
        .then(repos => resolve({repos}))
        .catch(err => reject(err));
    });
  }
}