import { css } from '@panda-nx/styled-system/css';
import { Heading } from '@panda-nx/ui';

export function App() {
  return (
    <div>
      <h1 className={css({ color: 'red' })}>
        Color styled in red apps/web : style correctly extracted
      </h1>
      <Heading>Color styled in blue in libs/ui : style not extracted</Heading>
    </div>
  );
}

export default App;
