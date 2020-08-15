import React from 'react';

class Accordion extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentSectionIndex: 0,
        }
        this.renderButton = this.renderButton.bind(this);
        this.renderContent = this.renderContent.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this); 
    }
    static defaultProps = {
            sections: [
                {title: 'title one', content: 'content of section one'},
                {title: 'title two', content: 'content of section two'},
                {title: 'title three', content: 'content of section three'},
        ]
    }

    handleButtonClick = (index) => {
        console.log('button clicked!', { index });
        this.setState({
            currentSectionIndex : index,
        })
      }

    renderButton = () => {
         return this.props.sections.map((section, index) => (
            <li key={index}>
                <button className={index} onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
            </li>
         ))
    }

    renderContent = () => {
        const currentSection = this.props.sections[this.state.currentSectionIndex];
        return(
            <p>{currentSection.content}</p>
        )
    }

    render(){

        return(
            <div>
                <ul>{this.renderButton()}</ul>
                    <div className = 'content'>
                      {this.props.sections.length && this.renderContent()}
                    </div>
            </div>
        );
    }
}

export default Accordion