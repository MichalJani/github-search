import React, { useContext, useState, useEffect } from 'react';

import { ResultsItem } from '../ResultsItem';

import { GithubContext } from '../../stores';

export const ResultsList = () => {
  const githubContext = useContext(GithubContext);
  const { usersAndRepos } = githubContext;

  const useKeyPress = targetKey => {
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    React.useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);

      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    });

    return keyPressed;
  };

  const [selected, setSelected] = useState(undefined);
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    if (usersAndRepos.length && downPress) {
      setCursor(prevState =>
        prevState < usersAndRepos.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (usersAndRepos.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);
  useEffect(() => {
    if (usersAndRepos.length && enterPress) {
      setSelected(usersAndRepos[cursor]);
    }
  }, [cursor, enterPress]);
  useEffect(() => {
    if (usersAndRepos.length && hovered) {
      setCursor(usersAndRepos.indexOf(hovered));
    }
  }, [hovered]);

  return (
    <div>
      {usersAndRepos.map((item, i) => (
        <ResultsItem
          key={item.id}
          active={i === cursor}
          item={item}
          setSelected={setSelected}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};
