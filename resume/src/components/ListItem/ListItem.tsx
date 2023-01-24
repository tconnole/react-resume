import './ListItem.css';

export interface TimelineItemProps {
    title: string;
    subTitle: string;
    content?: string;
    link?: string;
    skills: String[];
}

function ListItem(props: TimelineItemProps) {
    return (
        <div className='timeline-item'>
            <div className='marker'></div>
            <div className="timeline-item-container">
                <h3 className='title'>{props.title} {props.link ? <a href={props.link}>{props.link}</a> : <></>}</h3>
                <h5 className='sub-title'>{props.subTitle}</h5>
                { props.content ? 
                    <div className='content'>{props.content}</div> :
                    <></>
                }
                { props.skills.length ?
                    <div className='skills'>
                        {props.skills.map(skill => <div className='skill'>{skill}</div>)}
                    </div> :
                    <></>
                }
            </div>
        </div>
    );
  }
  
  export default ListItem;