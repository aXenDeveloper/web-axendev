import { CSSProperties } from 'react';
import Image, { StaticImageData } from 'next/image';
import cx from 'clsx';

import styleModule from './Img.module.scss';

interface InitialProps {
  alt: string;
  src: string | StaticImageData;
  className?: string;
  priority?: boolean;
  quality?: number;
  style?: CSSProperties;
}

interface PropsWithWidthAndHeight extends InitialProps {
  height: number;
  width: number;
  fill?: never;
  heightLoading?: number;
  sizes?: string;
}

interface PropsWithFill extends InitialProps {
  fill: true;
  sizes: string;
  height?: never;
  heightLoading?: number;
  width?: never;
}

export type ImgProps = PropsWithWidthAndHeight | PropsWithFill;

export const Img = ({
  alt,
  className,
  fill,
  height,
  heightLoading,
  priority,
  quality,
  sizes,
  src,
  style,
  width
}: ImgProps) => {
  return (
    <div
      className={cx(className, styleModule.wrapper)}
      style={{
        height: !height ? (heightLoading ? `${heightLoading}px` : '100%') : undefined
      }}
    >
      <Image
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        src={src}
        alt={alt}
        priority={priority}
        fill={fill}
        style={style}
      />
    </div>
  );
};
