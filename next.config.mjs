/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default withNextIntl(nextConfig);

