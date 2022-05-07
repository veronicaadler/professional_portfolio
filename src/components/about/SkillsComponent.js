import SkillCards from "../../shared/SkillCardData";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const SkillsComponent = () => {
    return (
        <div id="skills">
            <h1>Skills</h1>
            <CardGroup>
            {SkillCards.map((skill) => {
                return (
                <Card>
                <Card.Img variant="top" src={skill.img} />
                <Card.Body>
                  <Card.Title>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
                )
            })}
            </CardGroup>
        </div>
      );
}
 
export default SkillsComponent;