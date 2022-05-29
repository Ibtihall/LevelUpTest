import * as React from 'react';
import ProgressBar from '../../components/ProgressBar';
import { useLocation } from 'react-router-dom';
import { Content,ContentA } from '../Dashboard/styles';


export interface LevelUPProps {
  
}
const LevelUP: React.FC<LevelUPProps> = (
  props,
): JSX.Element => {
  const { pathname } = useLocation();
  const experience = pathname.split('/').at(-1);
  return (
    <Content>
      <ContentA>
        <ProgressBar experience={experience ? parseInt(experience,10):0} />
      </ContentA>
    </Content>
  );
};

export default LevelUP;

