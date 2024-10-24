import { useEffect } from 'react';
import PageContent from './PageContent';
import { formatTitle } from '../utils/helpers'; 
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = formatTitle(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h2>{formatTitle(currentPage)}</h2>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}

export default Page;
