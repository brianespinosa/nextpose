/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import config from '../../../theme.config';
import defaultTheme from './Pagination.theme';

const getPaginationProperties = () => ({
  sx: config?.theme?.styles?.Pagination || defaultTheme,
});

const Pagination = ({ activeSlide, pages }) => {
  return (
    <nav {...getPaginationProperties()}>
      <ul>
        {pages.map((page, i) => (
          <li key={i}>
            <Link href={{ query: { activeSlide: i } }}>
              <a data-active={i === Number(activeSlide) ? true : undefined}>
                {i}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

// <Link href={{ pathname: '/', query: { slide: i + 1 } }} />
