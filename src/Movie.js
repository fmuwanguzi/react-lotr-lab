function Movie(props){
    console.log(props);
    return(
        <div>
            <h1>movie title:{props.title}</h1>
            <p>run time:{props.hours}{props.minutes}</p>
        </div>
      
    );
}

export default Movie;