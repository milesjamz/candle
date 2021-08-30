function FactsContainer(props) {

    // console.log(props.facts.dayFacts.data.Births ? props.facts.dayFacts.data.Births : 'nope')
    return (
        <div>
            <h2>facts</h2>
            <strong>births</strong><p>
                {props.facts.dayFacts.data ? props.facts.dayFacts.data.Births[Math.floor(Math.random() * props.facts.dayFacts.data.Births.length)].text : null}
            </p>
            <strong>deaths</strong><p>
               
                {props.facts.dayFacts.data ? props.facts.dayFacts.data.Deaths[Math.floor(Math.random() * props.facts.dayFacts.data.Deaths.length)].text : null}
                </p>
            <strong>events</strong><p>
            
                {props.facts.dayFacts.data ? props.facts.dayFacts.data.Events[Math.floor(Math.random() * props.facts.dayFacts.data.Events.length)].text : null}
                </p>   
 
        </div>
    )
}

export default FactsContainer