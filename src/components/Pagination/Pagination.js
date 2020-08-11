/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import { theme } from '../../../theme.config';

const Pagination = ({ activeSlideIndex, pages }) => {
  return (
    <nav sx={theme?.styles?.Pagination}>
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
