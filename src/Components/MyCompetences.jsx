function MyCompetences(props) {
    return (
        <div className="cardWrapper">
            <div className="CompetenceCard">
                <div className="circle">
                    <h2>{props.title}</h2>
                </div>
                <div className="content">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
};


export default MyCompetences