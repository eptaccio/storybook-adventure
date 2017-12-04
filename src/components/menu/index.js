import React, {Component} from 'react'

class Menu extends Component {
  
  constructor (props) {
    super(props)

    this.style = {
      backgroundColor: props.customBg
    }
    
    this.state = {
      isOpen: false
    }
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <nav className={`navbar navbar-expand-md 
      ${this.props.fixed ? 'fixed-top' : ''}
      ${this.props.whiteFont ? 'navbar-dark' : ''}
      ${this.props.bg}`} style={this.style}>

        <a className='navbar-brand' href='#'>{this.props.name}</a>

        <button 
        className='navbar-toggler'
        type='button'
        onClick={this.toggle}
        aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`
        collapse navbar-collapse 
        ${this.state.isOpen ? 'show' : ''} 
        ${this.props.justifyContentEnd ? 'justify-content-end' : ''} 
        ${this.props.justifyContentCenter ? 'justify-content-center' : ''} 
        `}>
          <ul className='navbar-nav'>
            {this.props.children}
          </ul>
        </div>
        {this.props.extra}
      </nav>
    )
  }
}

export default Menu
