import dynamic from 'next/dynamic';
// import config from '../../theme.config';

const MDXFile = dynamic(() => import(`../../fds.mdx`), { ssr: false });

const deck = () => <MDXFile />;

export default deck;
