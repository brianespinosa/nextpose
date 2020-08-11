/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import config from '../../../theme.config';
import defaultTheme from './Pagination.theme';

const Pagination = ({ activeSlideIndex, pages }) => {
  return (
    <nav sx={config?.theme?.styles?.Pagination || defaultTheme}>
      <ul>
        {pages.map((page, i) => (
          <li key={i}>
            <Link href={{ query: { slide: i + 1 } }}>
              <a data-active={i === activeSlideIndex ? true : undefined}>{i}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

// <Link href={{ pathname: '/', query: { slide: i + 1 } }} />
