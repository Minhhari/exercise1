import React from 'react';
import { Card, Row, Col, Container, Badge, Button } from 'react-bootstrap';

const newLists = [
  {
    id: 1,
    title: 'Woman bakes expletive-laden pies to \'get a rise\' out of her grandmother in annual tradition',
    description: '"What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition," wrote Jess Lydon.',
    images: '/images/event-1.jpg',
  },
  {
    id: 2,
    title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans',
    description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.',
    images: '/images/event-2.jpg',
  },
  {
    id: 3,
    title: 'Burger King is testing a new breakfast sandwich',
    description: 'This is a win for the flatbread fans.',
    images: '/images/event-3.jpg',
  },
  {
    id: 4,
    title: 'Popeyes permanently adds chicken wings to its menu',
    description: 'And you can get \'em in five different flavors.',
    images: '/images/event-4.jpg',
  },
  {
    id: 5,
    title: 'Top salmon with a sizzling mix of aromatics and spices',
    description: 'Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.',
    images: '/images/event-5.jpg',
  },
  {
    id: 6,
    title: '80 Christmas dinner ideas for the ultimate holiday feast',
    description: 'Build the perfect Christmas menu with these delicious recipes.',
    images: '/images/event-6.jpg',
  },
  {
    id: 7,
    title: 'How to make the easiest prime rib roast for the holidays',
    description: 'Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.',
    images: '/images/event-7.jpg',
  },
  {
    id: 8,
    title: 'Turn leftover turkey into a flavorful Waldorf salad',
    description: 'This light, bright turkey salad is the best post-Thanksgiving lunch.',
    images: '/images/event-8.jpg',
  }
];

const getCategoryVariant = (category) => {
  switch (category) {
    case 'Food': return 'primary';
    case 'Recipe': return 'success';
    case 'Lifestyle': return 'warning';
    default: return 'secondary';
  }
};

const News = () => {
  return (
    <Container className="mt-4">
      <div className="text-center mb-5">
        <h2 className="text-danger mb-3">News Category</h2>
      </div>
      
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {newLists.map(news => (
          <Col key={news.id}>
            <Card className="h-100 shadow-sm border-0 hover-card">
              <div className="position-relative">
                <Card.Img 
                  variant="top" 
                  src={news.images} 
                  alt={news.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Badge 
                  bg={getCategoryVariant(news.category)}
                  className="position-absolute top-0 start-0 m-2"
                >
                  {news.category}
                </Badge>
              </div>
              
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h6 line-clamp-2">
                  {news.title}
                </Card.Title>
                
                <Card.Text className="text-muted small flex-grow-1 line-clamp-3">
                  {news.description}
                </Card.Text>
                
                <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
                  <small className="text-muted">
                    {news.readTime}
                  </small>
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={() => console.log(`Reading article ${news.id}`)}
                  >
                    Read More
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      <style jsx>{`
        .hover-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </Container>
  );
};

export default News;