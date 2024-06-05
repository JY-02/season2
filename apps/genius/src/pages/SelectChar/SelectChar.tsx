import React, { useState } from 'react';
import * as Styles from './SelectCharStyle';
import { Link } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';

const SelectChar: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const goToCharacterPage = (character: string) => {
    setSelectedCharacter(character);
  };

  return (
    <Styles.AppContainer>
      
      <Styles.CharacterContainer
        id="character1"
        className={selectedCharacter === 'alKong' ? 'selected' : ''}
        onClick={() => goToCharacterPage('alKong')}
      >
        <Link to="/AlkongTutorial">
          <Styles.CharacterImage src='./src/assets/images/alkongcharacter.png' alt="알콩이 이미지" />
          <Styles.AlKongButton
            onClick={() => goToCharacterPage('alKong')}
            isAlKong={selectedCharacter === 'alKong'}
          >
            알콩이와 동화만들기
          </Styles.AlKongButton>
        </Link>
      </Styles.CharacterContainer>
      <Styles.CharacterContainer
        id="character2"
        className={selectedCharacter === 'dalKong' ? 'selected' : ''}
        onClick={() => goToCharacterPage('dalKong')}
      >
        <Link to="/DalkongTutorial">
          <Styles.CharacterImage src='./src/assets/images/dalkongcharacter.png' alt="달콩이 이미지" />
          <Styles.DalKongButton
            onClick={() => goToCharacterPage('dalKong')}
            isAlKong={selectedCharacter === 'dalKong'}
          >
            달콩이와 동화만들기
          </Styles.DalKongButton>
        </Link>
        <Navbar2 />
      </Styles.CharacterContainer>
    </Styles.AppContainer>
  );
};

export default SelectChar;
