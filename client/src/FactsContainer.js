function FactsContainer(props) {

    // console.log(props.facts.dayFacts.data.Births ? props.facts.dayFacts.data.Births : 'nope')
    return (
        <div>
            <h2>facts</h2>
            <h3>births</h3>
                {props.facts.dayFacts.data ? props.facts.dayFacts.data.Births[Math.floor(Math.random() * props.facts.dayFacts.data.Births.length)].text : null}
 
            <h3>deaths</h3>
           
                
                {props.facts.dayFacts.data ? props.facts.dayFacts.data.Deaths[Math.floor(Math.random() * props.facts.dayFacts.data.Deaths.length)].text : null}
                
 
            <h3>events</h3>
           
            
                {props.facts.dayFacts.data ? props.facts.dayFacts.data.Events[Math.floor(Math.random() * props.facts.dayFacts.data.Events.length)].text : null}
                
 
        </div>
    )
}

export default FactsContainer