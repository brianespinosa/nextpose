const Pagination = {
  position: 'absolute',
  zIndex: 10,
  bottom: '4rem',
  right: 0,
  transform: 'translateX(-50%)',
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
    li: {
      margin: '0 .125rem',
      display: 'inline-block',
    },
  },
  a: {
    color: 'transparent',
    overflow: 'hidden',
    width: '.375rem',
    height: '.375rem',
    display: 'block',
    fontSize: '0.01',
    borderRadius: '1rem',
    backgroundColor: 'muted',
    transition: 'background 500ms ease-in-out',
  },
  'a[data-active]': {
    backgroundColor: 'primary',
  },
};

export default Pagination;
