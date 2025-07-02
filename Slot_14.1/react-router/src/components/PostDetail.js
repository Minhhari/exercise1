import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Alert, Button, Badge } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/posts/${id}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError('Error loading post. Please try again.');
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading post...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          <Alert.Heading>Oops! Something went wrong.</Alert.Heading>
          <p>{error}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="outline-danger" onClick={() => navigate('/posts')}>
              Back to Posts
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container className="mt-4">
        <Alert variant="warning">
          <Alert.Heading>Post Not Found</Alert.Heading>
          <p>The post you're looking for doesn't exist.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="outline-warning" onClick={() => navigate('/posts')}>
              Back to Posts
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <div className="mb-3">
            <Button 
              variant="outline-secondary" 
              size="sm"
              onClick={() => navigate('/posts')}
            >
              ← Back to Posts
            </Button>
          </div>
          
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div>
                <Badge bg="info" className="me-2">Post #{id}</Badge>
                {post.category && (
                  <Badge bg="secondary">{post.category}</Badge>
                )}
              </div>
              {post.publishedDate && (
                <small className="text-muted">
                  {new Date(post.publishedDate).toLocaleDateString()}
                </small>
              )}
            </Card.Header>
            
            <Card.Body>
              <Card.Title as="h2" className="mb-3">
                {post.title}
              </Card.Title>
              
              {post.author && (
                <div className="mb-3">
                  <small className="text-muted">By {post.author}</small>
                </div>
              )}
              
              <Card.Text style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                {post.content}
              </Card.Text>
              
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4">
                  <h6>Tags:</h6>
                  {post.tags.map((tag, index) => (
                    <Badge key={index} bg="light" text="dark" className="me-1">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}
            </Card.Body>
            
            <Card.Footer className="text-muted text-center">
              <small>Thank you for reading!</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;