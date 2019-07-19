import React from "react"; 

class Form extends React.Component {

	render() {

		return (

			<form onSubmit={this.props.getWeather}>


			<ul>
			<input type="text" name="city" placeholder ="City..." class="simple" />
			</ul>
			
			<ul>
			<input type="text" name="country" placeholder ="Country..." class="simple"/>
			</ul>
		
			
			<button> Get Weather! </button>
			


			</form>



		);
	}
};

export default Form;

