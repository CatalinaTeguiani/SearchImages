import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {spans: 0}
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  
  setSpans= () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 20)
    this.setState({ spans })
  }

  render() {

    const { description, urls } = this.props.image
    return (
      <div>
        
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <br />
        
          <img 
            ref={this.imageRef}
            alt={description}
            src={urls.regular}
          />
          <br />
          <a href={urls.regular} target="_blank" rel="noopener noreferrer">Info: {description}</a>
        
        </div>
      </div>
    )
  }
}

export default ImageCard;