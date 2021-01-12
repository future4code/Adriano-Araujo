import React, {Component} from 'react'
import './SecaoCompartilhar.css'
import marcadorBranco from '../../img/bookmark_white.svg'

export class SecaoCompartilhar extends Component {
	state = {
      compartilhar:' ',
	}

	onChangeCompartilhar =(event) => {
        this.setState ({compartilhar: event.target.value})


        

	}

	

	render() {

        console.log(this.state.compartilhar)

		return <div className={'comment-container'}>
			<img
                src={marcadorBranco}
				value={this.onChangeCompartilhar}
                onChange={this.onChangeCompartilhar}
                alt="instagram"
			/>
            <img
                src={marcadorBranco}
				value={this.onClickCompartilhar}
                onChange={this.onChangeCompartilhar}
                alt="facebook"

			/>
            <img
                src={marcadorBranco}
				value={this.onClickCompartilhar}
                onChange={this.onChangeCompartilhar}
                alt="twitter"

			/>

			

		</div>

	}

}

