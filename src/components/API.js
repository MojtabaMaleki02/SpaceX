import React from "react";

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://api.spacexdata.com/v2/launches")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (

			<div className = "App bg-[url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')] min-h-screen">
			<h1>  </h1> {
				items.map((item) => (
                    
				<div key = { item.id } >
					
                <li className='user inline-flex m-[15px]' key={item.flight_number}>
                  <div className='bg-indigo-500 relative rounded-md h-[500px] w-[500px] flex flex-col space-y-12 hover:bg-blue-200 transition duration-500 hover:scale-105'
                  style={{  
                    backgroundImage: 'url("' + item.links.mission_patch  + '")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                  >

                      
                      <div className="content-center text-3xl bg-orange-600 rounded-t-md">{item.mission_name}</div>
                      <div className="bg-yellow-200 rounded-3xl content-center">
                        <div>
                        Rocket Name: {item.rocket.rocket_name} 
                        
                        </div>
                        <div>
                        Launch Year: {item.launch_year}
                        </div>
                        
                      </div>


                      <div className=" content-center bg-yellow-200">
                        {item.details}
                      </div>     
                      <a href={item.links.video_link} className="bg-red-400 text-red-50 absolute bottom-0 ml-[160px] text-xl rounded-t-lg" target="blank">Click to see the Video :)</a>
 
                  </div>
                </li>
			
			
                

				</div>))}
			</div>

		);
	}
}

export default App;
