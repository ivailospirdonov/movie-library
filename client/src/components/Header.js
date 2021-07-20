import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';


export default function Header() {
    const searchRef = useRef();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            history.push('/search', searchRef.current.value);
        } catch (e) {
            console.log('Search failed!');
        }

    }

    return (
        <React.Fragment>
            <Card className="forgotPassCard">
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="search">
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="seacrh" ref={searchRef} />
                            <Button disabled={loading} className="" type="submit" >Search</Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <style jsx>{`

            `}</style>
        </React.Fragment>
    )
}
