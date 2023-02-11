import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Chart } from "./components/Chart";
import {
  criticalOfSelf,
  dissappointedPeformance,
  frustratedSelf,
  singleData,
  stressed,
  warned,
  worriedOutcome,
} from "./utilities/data";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Chart
          type="grouped"
          data={frustratedSelf}
          axisLabel={"% responses"}
          title="Figure 4. Summary of clinician and client percentage responses for question item 'Frustrated with self'"
          figure={[7, 25]}
        />
        <Chart
          type="grouped"
          data={criticalOfSelf}
          axisLabel={"% responses"}
          title="Figure 5. Summary of clinician and client percentage responses for question item 'Critical of self'"
          figure={[5, 25]}
        />
        <Chart
          type="grouped"
          data={worriedOutcome}
          axisLabel={"% responses"}
          title="Figure 6. Summary of clinician and client percentage responses for question item 'Worried about the outcome of assessment'"
          figure={[10, 25]}
        />

        <Chart
          type="grouped"
          data={warned}
          axisLabel={"% responses"}
          title="Figure 8. Summary of clinician and client percentage responses for question item 'Worried'"
          figure={[8, 24]}
        />

        <Chart
          type="grouped"
          data={dissappointedPeformance}
          axisLabel={"% responses"}
          title="Figure 3. Summary of clinician and client percentage responses for question item 'Disappointment with performance on the tasks'"
          figure={[8, 25]}
        />

        <Chart
          type="grouped"
          data={stressed}
          axisLabel={"% responses"}
          title="Figure 7. Summary of clinician and client percentage responses for question item 'Stressed'"
          figure={[8, 24]}
        />
        <Chart
          type="single"
          data={singleData}
          axisLabel={"% endorsement"}
          title="Figure 2. Percentage of clients and clinicians endorsing negative effects for question items 1 to 28"
        />

        <ReactQueryDevtools />
      </QueryClientProvider>{" "}
    </div>
  );
}

export default App;
