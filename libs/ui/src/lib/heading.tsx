import { css } from '@panda-nx/styled-system/css';

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={css({ color: 'blue' })}>{children}</h1>;
};
