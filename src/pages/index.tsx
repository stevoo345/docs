import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            wrapperClassName="flex"
            title={`Hello from ${siteConfig.title}`}
            description="Meine super coole Dokumentation">
            <div className="flex-1 flex justify-center items-center text-red-500">
                Testerino
            </div>
        </Layout>
    );
}
