import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { addPost, togglePreviewVisibility, onPreviewInputChange } from '../actions/postsAction'
import { connect } from 'react-redux'


import PostPreview from './PostPreview'

class AddPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            preview: {
                canShow: false,
            }
        }

        this.submitForm = this.submitForm.bind(this);
    }
    
    /** 
     * Async function
     * Resizes image usgin config params
     * And then calls action 'addPost'
     */
    async submitForm(e) {
        e.preventDefault();

        this.props.addPost(Object.assign({}, this.props.posts.preview.inputs));
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.submitForm}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title" 
                                   value={this.props.posts.preview.inputs.title} 
                                   placeholder="Title" required onChange={this.props.onPreviewInputChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email"
                                   value={this.props.posts.preview.inputs.email} 
                                   placeholder="Your Email" required onChange={this.props.onPreviewInputChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="image">Image</Label>
                            <Input type="file" name="file" id="image" accept=".png, .jpg, .jpeg .gif" 
                                onChange={this.props.onPreviewInputChange} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="text">Text</Label>
                            <Input type="textarea" name="text" id="text" required
                                   value={this.props.posts.preview.inputs.text}
                                   onChange={this.props.onPreviewInputChange} />
                        </FormGroup>

                        <FormGroup>
                            <Button style={{ width: '100%' }}>Submit</Button>
                        </FormGroup>
                    </Form>

                    <FormGroup>
                        <Button style={{ width: '100%' }} onClick={this.props.togglePreviewVisibility}>Preview</Button>
                    </FormGroup>

                    {this.props.posts.preview.canShow && (
                        <div className="preview">
                            <PostPreview el={this.props.posts.preview.inputs} />
                        </div>
                    )}
                </Container>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        posts: { ...state.posts.posts }
    }
}

export default connect(mapStateToProps, { addPost, togglePreviewVisibility, onPreviewInputChange })(AddPost);