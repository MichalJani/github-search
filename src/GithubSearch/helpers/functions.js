export const dataFormatter = (userArray, repoArray) => {
  const formattedUserArray = userArray.map(user => ({
    id: user.id,
    name: user.login,
    url: user.html_url,
    itemType: 'User'
  }));
  const formattedRepoArray = repoArray.map(repo => ({
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
    itemType: 'Repository'
  }));

  return [...formattedUserArray, ...formattedRepoArray];
};

export const sortAscByName = array =>
  array.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
