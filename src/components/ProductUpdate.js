import React from 'react';
import styled from 'styled-components';

const ProductUpdateContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 1rem;
`;

const UpdateList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const UpdateItem = styled.li`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const UpdateTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 0.5rem 0;
`;

const UpdateDescription = styled.p`
  margin: 0 0 0.5rem 0;
`;

const UpdateLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProductUpdate = () => {
  // In a real application, you would fetch this data from an API
  const updates = [
    {
      id: 1,
      title: 'New Product: Super Gadget',
      description: 'Introducing our latest innovation, the Super Gadget. High commission rates available!',
      link: '/products/super-gadget',
    },
    {
      id: 2,
      title: 'Commission Increase: Amazing Widget',
      description: 'We have increased the commission rate for the Amazing Widget from 5% to 7%.',
      link: '/products/amazing-widget',
    },
    {
      id: 3,
      title: 'Limited Time Offer: Fantastic Tool',
      description: 'Promote our Fantastic Tool and earn double commissions for the next 30 days!',
      link: '/products/fantastic-tool',
    },
  ];

  return (
    <ProductUpdateContainer>
      <UpdateList>
        {updates.map((update) => (
          <UpdateItem key={update.id}>
            <UpdateTitle>{update.title}</UpdateTitle>
            <UpdateDescription>{update.description}</UpdateDescription>
            <UpdateLink href={update.link}>Learn More</UpdateLink>
          </UpdateItem>
        ))}
      </UpdateList>
    </ProductUpdateContainer>
  );
};

export default ProductUpdate;