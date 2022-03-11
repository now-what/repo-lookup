class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        console.log(repoData.full_name);
        console.log(repoData.description);
        this.display(repoData.full_name, repoData.description, repoData.organization.avatar_url);
      });
    });
  }

  display(fullName, description, image) {
    document.querySelector("#repo-name").innerText = fullName;
    document.querySelector("#repo-description").innerText = description;
    document.getElementById("repo-avatar").src = image;
  }
}

module.exports = GithubView;