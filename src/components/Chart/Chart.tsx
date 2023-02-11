import React from "react";
import { groupedData, simpleData } from "src/utilities/types";
import { ChartLine } from "../ChartLine";
import styles from "./Chart.module.css";

const gridLines = (length: number) => {
  const arr: number[] = [];
  for (let i = 0; i < length + 1; i++) {
    arr.push(i * 10);
  }
  return arr;
};

export type ChartProps = {
  data: groupedData[];
  axisLabel: string;
  figure: [number, number];
  title?: string;
};

export type chartProps =
  | {
      axisLabel: string;
      figure: [number, number];
      type: "grouped";
      title: string;
      data: groupedData[];
    }
  | {
      axisLabel: string;
      figure?: [number, number];
      type: "single";
      title: string;
      data: simpleData[];
    };

const Chart = ({ data, axisLabel, figure, title, type }: chartProps) => {
  return (
    <div data-testid="Chart-wrapper" className={styles.Chart}>
      <div className={styles.title}>{title}</div>

      {type === "grouped" && (
        <>
          <div className={styles.gridWrapper}>
            <div className={styles.label}>{axisLabel}</div>

            <div className={styles.gridLines} data-testid="gridLines">
              {gridLines(10).map((line, idx) => {
                return (
                  <div className={styles.marker} key={idx}>
                    {line}
                  </div>
                );
              })}
            </div>
            <div className={styles.chartData} data-chart-type={type}>
              <div className={styles.bottom}></div>

              <>
                {" "}
                {data.map((d, idx) => {
                  return (
                    <div className={styles.chartGroup} key={idx}>
                      <div className={styles.lineGroup}>
                        {d.data.map((chartLine, idx) => {
                          return (
                            <ChartLine
                              key={idx}
                              values={{
                                client: chartLine.client,
                                clinician: chartLine.clinician,
                              }}
                              label={chartLine.label}
                            />
                          );
                        })}
                      </div>
                      <div className={styles.groupLabel}>{d.label}</div>
                    </div>
                  );
                })}{" "}
              </>
            </div>
          </div>
        </>
      )}

      {type === "single" && (
        <>
          <div className={styles.gridWrapper}>
            <div className={styles.label}>{axisLabel}</div>

            <div className={styles.gridLines} data-testid="gridLines">
              {gridLines(10).map((line, idx) => {
                return (
                  <div className={styles.marker} key={idx}>
                    {line}
                  </div>
                );
              })}
            </div>
            <div className={styles.chartData} data-chart-type={type}>
              <div className={styles.bottom}></div>

              <>
                <div className={styles.doubleRow}>
                  {data.slice(0, data.length / 2).map((chartLine, idx) => {
                    return (
                      <ChartLine
                        key={idx}
                        values={{
                          client: chartLine.client,
                          clinician: chartLine.clinician,
                        }}
                        label={chartLine.label + (idx + 1)}
                      />
                    );
                  })}
                </div>
              </>
            </div>
          </div>
          <div className={styles.gridWrapper}>
            <div className={styles.label}>{axisLabel}</div>

            <div className={styles.gridLines} data-testid="gridLines">
              {gridLines(10).map((line, idx) => {
                return (
                  <div className={styles.marker} key={idx}>
                    {line}
                  </div>
                );
              })}
            </div>
            <div className={styles.chartData} data-chart-type={type}>
              <div className={styles.bottom}></div>

              <>
                <div className={styles.doubleRow}>
                  {data
                    .slice(data.length / 2, data.length)
                    .map((chartLine, idx) => {
                      return (
                        <ChartLine
                          key={idx}
                          values={{
                            client: chartLine.client,
                            clinician: chartLine.clinician,
                          }}
                          label={chartLine.label + (idx + 1 + data.length / 2)}
                        />
                      );
                    })}
                </div>
              </>
            </div>
          </div>
        </>
      )}
      <section>
        <div>
          <div className={styles.client}></div>
          Client {figure && <>(N = {figure[0]})</>}
        </div>
        <div>
          <div className={styles.patient}></div> Clinician
          {figure && <> (N = {figure[1]})</>}
        </div>
      </section>
    </div>
  );
};
export default Chart;
