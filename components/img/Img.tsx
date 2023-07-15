import { CSSProperties, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import cs from 'classnames';

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
  widthLoading?: number;
}

interface PropsWithFill extends InitialProps {
  fill: true;
  sizes: string;
  height?: never;
  heightLoading?: number;
  width?: never;
  widthLoading?: never;
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
  width,
  widthLoading
}: ImgProps) => {
  const [isLoading, setIsLoading] = useState(!priority);

  // Refresh loading state when changing src
  useEffect(() => {
    if (!priority) {
      setIsLoading(true);
    }
  }, [src]);

  return (
    <div
      className={cs(className, styleModule.wrapper)}
      style={{
        height: !height
          ? heightLoading && isLoading
            ? `${heightLoading}px`
            : '100%'
          : undefined
      }}
    >
      {isLoading && (
        <div
          className="skeleton skeleton_absolute"
          style={{
            height:
              height !== undefined
                ? `${heightLoading ? heightLoading : height}px`
                : '100%',
            width: width ? `${widthLoading ? widthLoading : width}px` : '100%'
          }}
        />
      )}
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
        /* istanbul ignore next */ onLoadingComplete={
          /* istanbul ignore next */ () => setIsLoading(false)
        }
      />
    </div>
  );
};
