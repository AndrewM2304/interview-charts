export type mockType = {
  test: string;
};

export type simpleData = {
  client: number;
  clinician: number;
  label: string;
};

export type groupedData = {
  label: string;
  data: simpleData[];
};
