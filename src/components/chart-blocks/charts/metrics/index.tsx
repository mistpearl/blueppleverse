import Container from "@/components/container";
import {fetchMetrics} from "@/data/metrics";
import MetricCard from "./components/metric-card";

export default async function Metrics() {
    const metrics = await fetchMetrics();
    console.log(metrics);
    return (
        <Container
            className="grid grid-cols-1 gap-y-6 border-b border-border py-4 phone:grid-cols-2 laptop:grid-cols-4">
            {metrics.map((metric) => (
                <MetricCard key={metric.title} {...metric} />
            ))}
        </Container>
    );
}
