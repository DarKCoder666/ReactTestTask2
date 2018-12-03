import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody, CardSubtitle,
    Row, Col
} from 'reactstrap'

export default class PostPreview extends Component {
    render() {
        const el = this.props.el;

        // If the task not in edit state, he will see this template
        const viewMod = (
            <CardBody>
                <CardSubtitle>Title: {el.title}</CardSubtitle>
                <br />
                <CardSubtitle>Author Email: {el.email}</CardSubtitle>
                <br />

                <CardText>Text: {el.text.slice}</CardText>
            </CardBody>
        );

        return (
            <Card style={{ margin: "40px auto" }}>
                <Row>
                    <Col xs="12" sm="4">
                        <CardImg top width="100%" src={el.file} alt="Card image cap" />
                    </Col>
                    <Col xs="12" sm="8">
                        {viewMod}
                    </Col>
                </Row>
            </Card>
        )
    }
}
