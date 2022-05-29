import * as React from 'react';
import { useEffect } from 'react';
import { 
  ZoomOutDiv, 
  ZoomInDiv, 
  Content, 
  Label, 
  Progress, 
  ProgressContainer, 
  ProgressDiv, 
  RotateInDiv, 
  StarImg, 
  CountLabel
 } from './styles';
import LevelHighImg from '../../images/LevelHigh.svg';
import LevelLowImg from '../../images/LevelLow.svg';
import BurstImg from '../../images/Burst.svg';
import LevelImg from '../../images/Level.svg';
import StarIcon from '../../images/Star.svg';

export interface ProgressBarProps {
  experience: number;
}
const ProgressBar: React.FC<ProgressBarProps> = (
  props,
): JSX.Element => {
  const { experience } = props
  const [value, setValue] = React.useState(1000);
  const [level, setLevel] = React.useState(1);
  const [neededValue, setNeededValue] = React.useState(0);
  const [progressValue, setProgressValue] = React.useState(0);
  const [isLowLevel, setIsLowLevel] = React.useState(true);
  const [isHighLevel, setIsHighLevel] = React.useState(true);

  const test = (val: number, lev: number) => {
    if (experience < val) {
      setNeededValue(Math.round(val - experience));
      setProgressValue((experience / val) * 100);
      setTimeout(() => setIsLowLevel(false), 1500);
      setTimeout(() => setIsHighLevel(false), 4000);
    } else {
      setValue(Math.round(val * 1.3));
      setLevel(lev + 1);
      test(val * 1.3, lev + 1); 
    }
  };

  useEffect(() => {
    test(value, level);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value,level]);

  return (
    <Content>

      {isLowLevel ?
        <ZoomOutDiv> <img src={LevelLowImg} alt="" /></ZoomOutDiv>
        :
        <>
          <RotateInDiv> <img src={BurstImg} alt="" style={{ width: '100%', height: 774 }} /></RotateInDiv>
          <ZoomInDiv><img src={LevelHighImg} alt="" style={{ width: '50%' }} />
            {!isHighLevel && <img src={LevelImg} alt="" />}</ZoomInDiv>
        </>
      }

      <ProgressContainer>
        <ProgressDiv>
          <Progress style={{ width: `${progressValue}%` }} >
            <StarImg src={StarIcon} alt="" />
            <CountLabel>{experience + '/' + value}</CountLabel>
          </Progress>
        </ProgressDiv>
      </ProgressContainer>
      <Label>{`You Need ${neededValue} points to move to level ${level + 1} `}</Label>
    </Content>
  )
};

export default ProgressBar;