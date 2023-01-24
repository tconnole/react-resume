import { useEffect, useRef, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import './Experience.css';

function Visibility(ref: any) {
    const [isVisible, setIsVisible] = useState(false);
    const [ratio, setRatio] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
        setRatio(entry.intersectionRatio);
        }
        );

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    });

    return ratio;
}

function Experience() {
    const years = [2015, 2017, 2019, 2020];
    const ref2015 = useRef(null);
    const ref2017 = useRef(null);
    const ref2019 = useRef(null);
    const ref2020 = useRef(null);

    const getRef = (year: number) => {
        switch(year) {
                    case 2015:
                        return ref2015;
                    case 2017:
                        return ref2017
                    case 2019:
                        return ref2019;
                    case 2020:
                        return ref2020
        }
    }
    const content2015 = (
        <div ref={ref2015} style={{paddingBottom: '3rem'}}>
            <h2 className='year-header'>2015</h2>
            <ListItem title='Started College University of Nebraska at Omaha' subTitle='Bachelors in Computer Science' skills={[]}/>
        </div>
        );

    const content2017 = (
        <div ref={ref2017} style={{paddingBottom: '3rem'}}>
            <h2 className='year-header'>2017</h2>
            <ListItem 
                title='Started Systems Engineering Internship'
                subTitle='Union Pacific - Omaha, NE'
                content='TODO'
                skills={['PYTHON', 'SSH', 'CYPRESS', 'WINDOWS ADMINSTRATION', 'SOFTWARE INSTALLATION', 'HARDWARE INSTALLATION']}
            />
        </div>
    );

    const content2019 = (
        <div ref={ref2019} style={{paddingBottom: '3rem'}}>
            <h2 className='year-header'>2019</h2>
            <div className='item-list'>
                <ListItem title='Graduated at University of Nebraska at Omaha' subTitle='Bachelors in Computer Science' skills={[]}/>
                <ListItem 
                title='Software Engineer (SEMS III)'
                subTitle='Teksystems, subcontractor for Northrop Grumman - Bellevue, NE'
                content='TODO'
                skills={['PYTHON', 'SSH', 'JAVASCRIPT', 'JAVA', 'ATLASSIAN', 'AGILE', 'GIT', 'VisualWeather']}
            />
            </div>
        </div>
    );

    const content2020 = (
        <div ref={ref2020}>
            <h2 className='year-header'>2020</h2>
            <div className='item-list'>
                <ListItem 
                title='Associate Software Engineer (RECAP)'
                subTitle='Northrop Grumman - Bellevue, NE'
                content='TODO'
                skills={['JAVA', 'PYTHON', 'TYPESCRIPT', 'ANGULAR', 'MATERIAL', 'ORACBLE DB', 'GRADLE', 'DOCKER', 'GIT', 'CYPRESS', 'JASMINE', 'VSCODE']}/>
                <ListItem 
                title='Principle Software Engineer (DARC)'
                subTitle='Northrop Grumman - REMOTE'
                content='TODO'
                skills={['TYPESCRIPT', 'REACT', 'MUI', 'NX', 'KEYCLOAK', 'GRAPHQL', 'KSQL', 'DOCKER', 'GIT', 'STORYBOOK', 'THREEJS', 'VSCODE', 'ADOBE ILLUSTRATOR']}/>
            </div>
        </div>
    );

    return (
      <div className="experience-container">
        <div className="year-menu">
            {years.map(year =>
            <div key={year} style={{opacity: `${Visibility(getRef(year)) + 0.2}`}}>
                <h3>{year}</h3>
            </div>)}
            <div className='year-spacer'></div>
            <h3 className='present' style={{opacity: `${Visibility(getRef(years[years.length - 1])) + 0.2}`}}>PRESENT</h3>
        </div>
        <div className="experience-body">
            {content2015}
            {content2017}
            {content2019}
            {content2020}
        </div>
      </div>
    );
  }
  
  export default Experience;