import ListItem from '../ListItem/ListItem';
import './Projects.css';

function Projects() {
    return (
      <div className="projects-container">
        <div className="projects-list">
          <ListItem title='Jeroo'
          subTitle='Capstone Project'
          link='https://jeroo.org/beta'
          content='Jeroo is an online coding educational tool created in 2019 based off the work of our client Brian Dorn. This website was created using Angular and Ocaml and works by having the user write code in their perferred language format. This code is compiled using a home grown Ocaml compiler that allows the user to step through their code line by line and see how it affects the Jeroo board.'
          skills={['TYPESCRIPT', 'ANGULAR', 'MATERIAL', 'BOOTSTRAP', 'GIT']}/>
          <ListItem title='Angular Resume Site'
          subTitle='Personal Site'
          link='https://github.com/tconnole/resume'
          content='This project was my original website that was built in Angular. It has a lot of personality and used a space / aurora gradient design. This site was decommissioned for a new react site.'
          skills={['TYPESCRIPT', 'ANGULAR', 'MATERIAL', 'GIT']}/>
          <ListItem title='React Resume Site'
          subTitle='Personal Site'
          link='https://github.com/tconnole/react-resume'
          content='This is the site you are on right now! This site was created using React and is styled completely by me with no outside libraries. It was designed with a minimalist high contrast design in mind.'
          skills={['TYPESCRIPT', 'REACT','GIT']}/>
          <ListItem title='Leetcode Competition 2023'
          subTitle='Personal Site'
          link='https://github.com/tconnole/leetcode-competition'
          content="This is me and my friend Caelan's new project for 2023. We had a new years resolution to try and complete one random leetcode problem everyday for the whole year. We are currently documenting all of the data and working on a website to track and display this data. This project is all for fun, so the design of the website reflects that, using a nostalgia-esque design."
          skills={['TYPESCRIPT', 'REACT','GIT', 'NX', 'MONGO DB', 'NODEJS']}/>
        </div>
      </div>
    );
  }
  
  export default Projects;