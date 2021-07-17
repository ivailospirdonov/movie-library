import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { getSearchedMovies } from '../services/movieServices';


export default function Header() {
    const searchRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('');
            setLoading(true);
            await getSearchedMovies(searchRef.current.value);
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
