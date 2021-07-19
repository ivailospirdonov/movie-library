import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';


export default function Header() {
    const searchRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('');
            setLoading(true);
            history.push('/search', searchRef.current.value);
        } catch (e) {
            setError('Failed to reset the password!');
        }
        setLoading(false);

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
