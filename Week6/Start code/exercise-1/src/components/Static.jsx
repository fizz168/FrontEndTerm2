function Static({dataSet}){
    const avg = findAvg(dataSet);
    return(
        <>
        <div>{avg}</div>
  
        </>
    );
}

function findAvg(data) {
    var maxScore = 0;
    var count = 0;
    
    for(item in data) {
        maxScore += item.score;
        count++ ;
    }

    return maxScore / count;

}

export default Static;