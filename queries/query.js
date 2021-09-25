import { gql } from "@apollo/client";

export const Get_Categories = gql`
  query Category {
    categories {
      name
      id
    }
  }
`;

export const Get_Images = gql`
  query Images {
    galleries(limit: 8) {
      name
      images {
        name
        url
        formats
      }
      categories
    }
  }
`;
export const Get_GalleyImages = gql`
  query Images {
    galleries {
      name
      images {
        name
        url
        formats
      }
      categories
    }
  }
`;
