import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Card} from "@site/src/components/Card";

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            wrapperClassName="flex"
            title={`Hello from ${siteConfig.title}`}
            description="Meine super coole Dokumentation">
            <div className="flex-1 flex justify-center items-center gap-4">
                <Card className="flex justify-center items-center">
                    <h2 className="!mb-0">Docker</h2>
                </Card>
            </div>
        </Layout>
    );
}
