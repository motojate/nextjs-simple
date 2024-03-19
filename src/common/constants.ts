export const HOUR_DATA = Array.from({ length: 12 }, (_, i) =>
  (i + 1).toString().padStart(2, '0'),
);
export const MINUTE_DATA = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, '0'),
);
