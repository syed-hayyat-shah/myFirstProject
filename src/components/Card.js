import React, {Component} from 'react';
import {
    Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader
  } from 'reactstrap';



class Infocard extends Component {
    constructor(props){
        super(props)
        this.state ={
            isOpen: false,
        }
    }

    toggle(){
        this.setState({isOpen: !this.state.isOpen})
    }
    render()
    {
        return( <div>
            <Card>
              <CardImg top width="100%" src={this.props.image + this.props.name} alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardSubtitle>{this.props.position}</CardSubtitle>
                <CardText style={{minHeight: "200px"}}>{this.props.descp}</CardText>
                <Collapse isOpen={this.state.isOpen}>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
            </Collapse>
            <Button onClick={() => this.toggle()}>{ this.state.isOpen ? "See Less": "See More"}</Button>

              </CardBody>
            </Card>
            
          </div>
          

        )
    }
};
export default Infocard;