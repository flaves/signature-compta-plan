import { FluidObject } from 'gatsby-image';

export interface ImageType {
  childImageSharp: {
    id: string;
    fluid: FluidObject;
  };
}
