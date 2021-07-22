import React, { useRef } from 'react';
import { } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';


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
            <Card className=" header">
                <Card.Body className=" d-flex">
                    <section className="nav-logo-section col-4">
                        <Link to="/" ><h3>My Movie Collection</h3></Link>
                    </section>
                    <section className="nav-search-section col-8">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="search" className="d-flex justify-content-end">
                                <Form.Control className="searchField" type="seacrh" ref={searchRef} placeholder="Search by movie title..."/>
                                <Button className="" type="submit" variant="outline-success">Search</Button>
                            </Form.Group>
                        </Form>
                    </section>
                </Card.Body>
            </Card>
            <style jsx>{`

                .header{
                    background-color: #eee;
                }

                .nav-logo-section a{
                    color: #000;
                    text-decoration: none;
                }

                .searchField {
                    margin-right: 10px;
                    width: 40%;
                }

            `}</style>
        </React.Fragment >
    )
}
