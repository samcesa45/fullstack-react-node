

interface IStatisticsProps {
    good:number,
    neutral:number,
    bad:number
}

const Statistics = ({good,neutral,bad}:IStatisticsProps) => {

    const all = good + bad + neutral
    const average = ((good+neutral+bad))/2
    const positive:number = Number((good  + neutral + bad)/100) * all
  
    const getPositive=()=>{
            if (isNaN(positive)) {
              return ;
            }else{
             return (
              <div>positive {positive}</div>
             ) 
            }
  
    }
    const feedback =()=>{
        if(good > 0 || bad > 0 || neutral > 0){
            return (
                <>
                <div>good {good}</div>
                <div>neutral {neutral}</div>
                <div>bad {bad}</div>
                <div>all {all}</div>
                <div>average {average}</div>
                {getPositive()}
                </>
            )
        }else{
            return (
                <div>No feedback given</div>
            )
            }
    }
  return (
    <div>
        <h1 className="font-bold text-2xl my-4">statistics</h1>
        
        {feedback()}
    </div>
  )
};

export default Statistics;
