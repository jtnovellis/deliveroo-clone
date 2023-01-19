import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '0qw5mo8z',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-01-19',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
