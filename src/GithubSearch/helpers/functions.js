export const dataFormatter = ({ userData, repoData }) => {
  const formattedUserArray = userData.items.map(user => ({
    id: user.id,
    name: user.login,
    url: user.html_url,
    itemType: 'user',
    details: { avatar_url: user.avatar_url }
  }));
  const formattedRepoArray = repoData.items.map(repo => ({
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
    itemType: 'repo',
    details: {
      owner_name: repo.owner.login,
      owner_avatar_url: repo.owner.avatar_url
    }
  }));

  return [...formattedUserArray, ...formattedRepoArray];
};

export const sortAscByName = array =>
  array.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
