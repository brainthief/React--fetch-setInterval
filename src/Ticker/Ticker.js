import React from 'react';
import "./Ticker.css";


export default class Ticker extends React.Component {
	

	updateExchangeRatio = () => {
		console.log(this.state.valcur);
		return fetch("https://min-api.cryptocompare.com/data/price?fsym="+this.state.valcur[0]+"&tsyms=USD").then(r => r.json()).then(res => {this.setState({value:  res.USD})});
	}

	constructor(props){
		super(props);
		this.state = {
		value: 0,
		valcur:this.props.pair.toUpperCase().split("_")
		}
		// console.log(this.state.valcur);
		// fetch('core.wookieelabs.com:7003/ticker/${props.pair}').then(r => r.json()).then(res => {this.setState({value:  res.last})});
		// https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD
		// this.updateExchangeRatio();
		// setInterval(this.updateExchangeRatio, 1000);
	}

	componentDidMount(){
		this.updateExchangeRatio();
		this.interval = setInterval(this.updateExchangeRatio, 30000);		
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}

	render(){
		const { pair } = this.props;
	 return (
		<div className="ticker">
			<p>{pair.toUpperCase().replace('_', ' to ')}</p> 
			<p>{this.state.value}</p>
		</div>
		)	
	}
	
}