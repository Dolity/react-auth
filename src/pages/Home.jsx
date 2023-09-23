

function Home(props) {
    return (
        <div className="screen-center" >
            {props.name ? 'Hi ' + props.name : 'You are not logged in'}
        </div>
    );
}


export default Home;


