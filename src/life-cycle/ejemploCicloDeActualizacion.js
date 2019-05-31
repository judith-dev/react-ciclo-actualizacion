import React,{Component} from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat:'https://i.pinimg.com/originals/3d/b9/dc/3db9dc41b0ac2214249d9c7998403e19.jpg',
    dolphin:'https://www.futurity.org/wp/wp-content/uploads/2017/11/dolphin-playing-ball_1600.jpg',
    panda:'https://talenthouse-res.cloudinary.com/image/upload/c_limit,h_1280,q_90,w_480/v1/invites/l8q3fcvjzllbgk5oovjs.jpg'
}
const ANIMALS =  Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component {
    state={ src:ANIMAL_IMAGES[this.props.animal]}

    componentWillReceiveProps(nextprops){
        console.clear()
        console.log('1.componentWillReceiveProps')
        console.log(nextprops)
        this.setState({src:ANIMAL_IMAGES[nextprops.animal]})  

    }
    shouldComponentUpdate(nextprops){
        console.log('2.shouldComponentUpdate')
        return this.props.animal !== nextprops.animal
    }
    componentWillUpdate(nextprops, nextstate){
        console.log('3. componenteWillUpdate',nextprops,nextstate)
        const img =  document.querySelector('img');
        console.log('from img element', {alt:img.alt})
        img.animate([
        {
            filter:'blur(0px)'
        },
        {
            filter:'blur(2px)'
        }], {
            duration:500,
            easing:'ease'
        })
    }
    render(){
        console.log('3.render')
        return(
            <div>
                <p> Selected {this.props.animal}</p>
                <img
                alt={this.props.animal}
                src = {this.state.src}
                width='250'
                />
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal:PropTypes.oneOf(ANIMALS)
}

class EjemploDeCicloActualizacion extends Component{
   
    state = {animal:'panda'}

    _renderAnimalButton = (animal) => {
        return (
        <button 
        //   disabled = {animal === this.state.animal}
          key={animal} 
          onClick={()=> this.setState({animal})}>
          {animal}
        </button>
        )
    }
    render(){
        return (
            <div>
                <h4>Ciclo de Actualizacion, Ejemplo de: shouldComponentUpdate</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal} />
            </div>
        )
    }
}

export default EjemploDeCicloActualizacion;