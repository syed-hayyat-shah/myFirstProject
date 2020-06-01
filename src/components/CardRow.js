
import React, {Component} from 'react';
import Card from './Card'
import { Container, Row, Col } from 'reactstrap';


class CardRow extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    render()
    {
        var cardsData = [
            {
                key: 0,
                name: "hayyat",
                position: 'Hacker',
                image: 'https://joeschmoe.io/api/v1/',
                descp: 'He is the very good hacker. He hacked the facebook server and then the Mark Zurkbarg think that we paid the million doller and we hired the Hayyat and hacked American intellangance and make money. '
            },
            {
                key: 1,
                name: "Eijaz",
                position: 'Web Developer',
                image: 'https://joeschmoe.io/api/v1/',
                descp: 'He is the good web developer and make good websites'
            },
            {
                key: 2,
                name: "Azhar",
                position: 'Account Officer',
                image: 'https://joeschmoe.io/api/v1/',
                descp: 'He is the account officer'
            },
            {
                key: 3,
                name: "Anas",
                position: 'PUBG Player',
                image: 'https://joeschmoe.io/api/v1/',
                descp: 'He is the PUBG player. He thinks that i am the best player in the world but this is not true. He in very noob player and he theaf other kill and ask i kill this man.'
            }
        ]
        return(
            <Container>
            <Row>
              {cardsData.map((card,index) => (
              <Col xs="12" sm="6" md="4" lg="3" key={index}><Card name={card.name} position={card.position} descp={card.descp} image={card.image}/></Col>
              ))} 
            </Row>
            </Container>
           
        )
    }
};
export default CardRow;