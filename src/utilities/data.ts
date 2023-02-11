import { groupedData, simpleData } from "./types";

export const frustratedSelf: groupedData[] = [
  {
    label: "Cause of the effect",
    data: [
      { client: 85.71, clinician: 60, label: "Assessment" },
      { client: 0, clinician: 32, label: "Other" },
    ],
  },
  {
    label: "Extent it affected",
    data: [
      { client: 0, clinician: 0, label: "Not at all" },
      { client: 42.86, clinician: 28, label: "Slightly" },
      { client: 42.86, clinician: 52, label: "Moderately" },
      { client: 0, clinician: 16, label: "Very" },
      { client: 14.29, clinician: 0, label: "Extremely" },
    ],
  },
  {
    label: "When effect was experienced",
    data: [
      { client: 0, clinician: 24, label: "Before First" },
      { client: 0, clinician: 28, label: "Initial Interview" },
      { client: 85.71, clinician: 100, label: "Testing" },
      { client: 14.29, clinician: 32, label: "Awaiting Feedback" },
      { client: 0, clinician: 12, label: "After Feedback" },
    ],
  },
];

export const criticalOfSelf: groupedData[] = [
  {
    label: "Cause of the effect",
    data: [
      { client: 80, clinician: 44, label: "Assessment" },
      { client: 0, clinician: 44, label: "Other" },
    ],
  },
  {
    label: "Extent it affected",
    data: [
      { client: 0, clinician: 0, label: "Not at all" },
      { client: 20, clinician: 28, label: "Slightly" },
      { client: 60, clinician: 48, label: "Moderately" },
      { client: 20, clinician: 20, label: "Very" },
      { client: 0, clinician: 0, label: "Extremely" },
    ],
  },
  {
    label: "When effect was experienced",
    data: [
      { client: 0, clinician: 28, label: "Before First" },
      { client: 20, clinician: 52, label: "Initial Interview" },
      { client: 80, clinician: 96, label: "Testing" },
      { client: 0, clinician: 40, label: "Awaiting Feedback" },
      { client: 0, clinician: 12, label: "After Feedback" },
    ],
  },
];

export const worriedOutcome: groupedData[] = [
  {
    label: "Cause of the effect",
    data: [
      { client: 30, clinician: 60, label: "Assessment" },
      { client: 0, clinician: 24, label: "Other" },
    ],
  },
  {
    label: "Extent it affected",
    data: [
      { client: 0, clinician: 0, label: "Not at all" },
      { client: 10, clinician: 16, label: "Slightly" },
      { client: 30, clinician: 36, label: "Moderately" },
      { client: 10, clinician: 40, label: "Very" },
      { client: 10, clinician: 0, label: "Extremely" },
    ],
  },
  {
    label: "When effect was experienced",
    data: [
      { client: 20, clinician: 88, label: "Before First" },
      { client: 20, clinician: 80, label: "Initial Interview" },
      { client: 30, clinician: 96, label: "Testing" },
      { client: 30, clinician: 96, label: "Awaiting Feedback" },
      { client: 0, clinician: 28, label: "After Feedback" },
    ],
  },
];

export const warned: groupedData[] = [
  {
    label: "Cause of the effect",
    data: [
      { client: 75, clinician: 50, label: "Assessment" },
      { client: 0, clinician: 37.5, label: "Other" },
    ],
  },
  {
    label: "Extent it affected",
    data: [
      { client: 0, clinician: 0, label: "Not at all" },
      { client: 25, clinician: 20.83, label: "Slightly" },
      { client: 50, clinician: 50, label: "Moderately" },
      { client: 12.5, clinician: 25, label: "Very" },
      { client: 0, clinician: 0, label: "Extremely" },
    ],
  },
  {
    label: "When effect was experienced",
    data: [
      { client: 50, clinician: 83.33, label: "Before First" },
      { client: 0, clinician: 83.33, label: "Initial Interview" },
      { client: 50, clinician: 79.17, label: "Testing" },
      { client: 37.5, clinician: 87.5, label: "Awaiting Feedback" },
      { client: 0, clinician: 41.67, label: "After Feedback" },
    ],
  },
];

export const dissappointedPeformance: groupedData[] = [
  {
    label: "Cause of the effect",
    data: [
      { client: 75, clinician: 84, label: "Assessment" },
      { client: 0, clinician: 8, label: "Other" },
    ],
  },
  {
    label: "Extent it affected",
    data: [
      { client: 0, clinician: 0, label: "Not at all" },
      { client: 25, clinician: 32, label: "Slightly" },
      { client: 37.5, clinician: 56, label: "Moderately" },
      { client: 25, clinician: 8, label: "Very" },
      { client: 0, clinician: 4, label: "Extremely" },
    ],
  },
  {
    label: "When effect was experienced",
    data: [
      { client: 0, clinician: 0, label: "Before First" },
      { client: 1, clinician: 0, label: "Initial Interview" },
      { client: 87.5, clinician: 100, label: "Testing" },
      { client: 0, clinician: 12, label: "Awaiting Feedback" },
      { client: 0, clinician: 6, label: "After Feedback" },
    ],
  },
];

export const stressed: groupedData[] = [
  {
    label: "Cause of the effect",
    data: [
      { client: 100, clinician: 62.5, label: "Assessment" },
      { client: 0, clinician: 33.33, label: "Other" },
    ],
  },
  {
    label: "Extent it affected",
    data: [
      { client: 14.25, clinician: 0, label: "Not at all" },
      { client: 28.57, clinician: 20.83, label: "Slightly" },
      { client: 57.14, clinician: 62.5, label: "Moderately" },
      { client: 14.28, clinician: 8.33, label: "Very" },
      { client: 0, clinician: 8.33, label: "Extremely" },
    ],
  },
  {
    label: "When effect was experienced",
    data: [
      { client: 28.57, clinician: 75, label: "Before First" },
      { client: 57.14, clinician: 75, label: "Initial Interview" },
      { client: 14.29, clinician: 87.5, label: "Testing" },
      { client: 28.57, clinician: 70.83, label: "Awaiting Feedback" },
      { client: 0, clinician: 33.33, label: "After Feedback" },
    ],
  },
];

export const singleData: simpleData[] = [
  {
    client: 58.3,
    clinician: 96,
    label: "Q",
  },
  {
    client: 66.7,
    clinician: 96,
    label: "Q",
  },
  {
    client: 8.3,
    clinician: 56,
    label: "Q",
  },
  {
    client: 25,
    clinician: 68,
    label: "Q",
  },
  {
    client: 66.7,
    clinician: 100,
    label: "Q",
  },
  {
    client: 58.3,
    clinician: 100,
    label: "Q",
  },
  {
    client: 41.7,
    clinician: 100,
    label: "Q",
  },
  {
    client: 0,
    clinician: 52,
    label: "Q",
  },
  {
    client: 16.7,
    clinician: 76,
    label: "Q",
  },
  {
    client: 8.3,
    clinician: 60,
    label: "Q",
  },
  {
    client: 33.3,
    clinician: 84,
    label: "Q",
  },
  {
    client: 16.7,
    clinician: 48,
    label: "Q",
  },
  {
    client: 33.3,
    clinician: 84,
    label: "Q",
  },
  {
    client: 33.3,
    clinician: 92,
    label: "Q",
  },
  {
    client: 83.3,
    clinician: 100,
    label: "Q",
  },
  {
    client: 8.3,
    clinician: 92,
    label: "Q",
  },
  {
    client: 25,
    clinician: 92,
    label: "Q",
  },
  {
    client: 25,
    clinician: 48,
    label: "Q",
  },
  {
    client: 25,
    clinician: 76,
    label: "Q",
  },
  {
    client: 8.3,
    clinician: 80,
    label: "Q",
  },
  {
    client: 8.3,
    clinician: 36,
    label: "Q",
  },
  {
    client: 16.7,
    clinician: 68,
    label: "Q",
  },
  {
    client: 0,
    clinician: 76,
    label: "Q",
  },
  {
    client: 8.3,
    clinician: 80,
    label: "Q",
  },
  {
    client: 8.3,
    clinician: 48,
    label: "Q",
  },
  {
    client: 16.7,
    clinician: 4,
    label: "Q",
  },
  {
    client: 16.7,
    clinician: 12,
    label: "Q",
  },
  {
    client: 8.3,
    clinician: 28,
    label: "Q",
  },
];
