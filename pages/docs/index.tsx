import { NextPageWithLayout } from '@pages/_app';

import DocumentationLayout from '@features/docs/components/layout/main';

const Documentation: NextPageWithLayout = () => {
  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
      <section className="heading">
        <h1>Docs Home</h1>
      </section>
      <section className="buttons">
        <button className="btn btn-primary">Primary Button</button>
      </section>
    </div>
  );
};

export default Documentation;

Documentation.getLayout = function getLayout(page: React.ReactElement) {
  return <DocumentationLayout>{page}</DocumentationLayout>;
};
