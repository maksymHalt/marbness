import React, { FC, HTMLAttributes } from 'react';

const IMAGE_TYPES = {
  webp: 'image/webp',
  jpg: 'image/jpeg',
  png: 'image/png'
};

export interface ImageType extends HTMLAttributes<HTMLImageElement> {
  /** Set of image sources, last is using as fallback */
  src: string;
  alt?: string;
}

const splitNameAndExt = (filePath: string) => {
  const [, name, ext] = filePath.match(/^(.*)\.([^.]*?)$/);
  return [name, ext];
};

const Image: FC<ImageType> = ({ src, alt, className, id }) => {
  const sourceList = [];
  const [name, ext] = splitNameAndExt(src);
  if (Object.keys(IMAGE_TYPES).includes(ext)) {
    sourceList.push(
      { srcSet: `${name}.webp`, type: IMAGE_TYPES.webp },
      { srcSet: src, type: IMAGE_TYPES[ext] }
    );
  } else {
    // eslint-disable-next-line no-console
    console.warn("This image format isn't supported");
  }
  return (
    <picture className={className} id={id}>
      {sourceList.map((props) => (
        <source key={props.srcSet} {...props} />
      ))}
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Image;

Image.defaultProps = {
  alt: ''
};
