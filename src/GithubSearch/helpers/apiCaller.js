import axios from 'axios';

export const apiCaller = async URL => {
  const GITHUB_API = 'https://api.github.com';

  try {
    const res = await axios.get(`${GITHUB_API}/${URL}`);

    return res.data;
  } catch (err) {
    if (err) console.error('Error fetching data', err);
  }
};
