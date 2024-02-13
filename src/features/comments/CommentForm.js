import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import { validateCommentForm } from '../../utils/validateCommentForm'; // Import the validation function

const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId, 10),
            rating: values.rating,
            author: values.author,
            text: values.commentText,
        };
        console.log(comment);
        setModalOpen(false);
    };

    return (
        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
            <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Submit Comment</ModalHeader>
            <ModalBody>
                <Formik
                    initialValues={{ rating: undefined, author: '', commentText: '' }}
                    onSubmit={handleSubmit}
                    validate={validateCommentForm} // Use the validate prop with validateCommentForm
                >
                    <Form>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Field name="rating" as="select" className="form-control">
                                <option>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Field>
                            <ErrorMessage name="rating" component="div" className="text-danger" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="author">Your Name</Label>
                            <Field name="author" placeholder="Your Name" className="form-control" />
                            <ErrorMessage name="author" component="div" className="text-danger" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="commentText">Comment</Label>
                            <Field name="commentText" as="textarea" rows="12" className="form-control" />
                        </FormGroup>
                        <Button type="submit" color="primary">Submit</Button>
                    </Form>
                </Formik>
            </ModalBody>
        </Modal>
    );
};

export default CommentForm;
