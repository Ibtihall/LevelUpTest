import * as React from 'react';
import { Button, Content, ContentA, Input } from './styles';
import { PAGES } from '../../routes';
import { useNavigate } from 'react-router-dom';


export interface DashboardProps {
  
}
const Dashboard: React.FC<DashboardProps> = (
  props,
): JSX.Element => {
  const navigate = useNavigate();
  const [experience,setExperience]=React.useState<number>();
  
  return (
    <Content>
      <ContentA>
        <Input 
          type="text" 
          value={experience} 
          placeholder="Enter the experience points" 
          onChange={(e:any)=> setExperience(e.target.value)}/>
        <Button onClick={()=> {navigate(`${PAGES.LEVELPAGE}/${experience}`)}}>Click</Button>
      </ContentA>
    </Content>
  );
};

export default Dashboard;

