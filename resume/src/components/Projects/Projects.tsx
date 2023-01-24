import ListItem from '../ListItem/ListItem';
import './Projects.css';

function Projects() {
    return (
      <div className="projects-container">
        <div className="projects-list">
          <ListItem title='Jeroo'
          subTitle='Capstone Project'
          link='https://jeroo.org/beta'
          content='TODO'
          skills={['TYPESCRIPT', 'ANGULAR', 'MATERIAL', 'BOOTSTRAP', 'GIT']}/>
          <ListItem title='Angular Resume Site'
          subTitle='Personal Site'
          link='https://github.com/tconnole/resume'
          content='TODO'
          skills={['TYPESCRIPT', 'ANGULAR', 'MATERIAL', 'GIT']}/>
          <ListItem title='React Resume Site'
          subTitle='Personal Site'
          link='https://github.com/tconnole/react-resume'
          content='TODO'
          skills={['TYPESCRIPT', 'REACT','GIT']}/>
          <ListItem title='Leetcode Competition 2023'
          subTitle='Personal Site'
          link='https://github.com/tconnole/leetcode-competition'
          content='TODO'
          skills={['TYPESCRIPT', 'REACT','GIT', 'NX', 'MONGO DB', 'NODEJS']}/>
        </div>
      </div>
    );
  }
  
  export default Projects;