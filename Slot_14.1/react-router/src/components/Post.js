import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, Spinner, Alert, Badge } from 'react-bootstrap';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
        console.error('Failed to load:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading posts...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h3 className="mb-0">List of Posts</h3>
              <Badge bg="secondary">{posts.length} posts</Badge>
            </Card.Header>
            <Card.Body className="p-0">
              {posts.length === 0 ? (
                <div className="text-center p-4">
                  <p className="text-muted">No posts available</p>
                </div>
              ) : (
                <ListGroup variant="flush">
                  {posts.map(post => (
                    <ListGroup.Item 
                      key={post.id}
                      className="d-flex justify-content-between align-items-center"
                      action
                      as={Link}
                      to={`/post/${post.id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div>
                        <h6 className="mb-1">{post.title}</h6>
                        {post.excerpt && (
                          <small className="text-muted">{post.excerpt}</small>
                        )}
                      </div>
                      <Badge bg="primary" pill>View</Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Post;