import React from "react";
import styles from "./ChartLine.module.css";

export type ChartLineProps = {
  values: { client: number; clinician: number };
  label: string;
};
const ChartLine = ({ values, label }: ChartLineProps) => {
  const { client, clinician } = values;

  const between = (x: number, min: number, max: number) => {
    return x >= min && x <= max;
  };
  return (
    <div data-testid="ChartLine-wrapper" className={styles.wrapper}>
      <div className={styles.ChartLine}>
        <div
          data-number={client}
          className={styles.firstValue}
          style={{
            height: client * 3,
            width: 40,
            // width: between(client, clinician - 5, clinician + 5) ? 25 : 50,
            zIndex: client < clinician ? 1 : 0,
          }}
        ></div>
        <div
          data-number={clinician}
          className={styles.secondValue}
          style={{
            left: 40,
            height: clinician * 3,
            width: 40,
          }}
        ></div>
      </div>
      <div className={styles.label} data-label>
        {label}
      </div>
    </div>
  );
};
export default ChartLine;
