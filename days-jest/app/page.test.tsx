import { TimeShift, timeSort, unixFormat } from "./page"

describe("timeSort, fn", () => {
  const timeArr: TimeShift[] = [{
    "startTime": 1649214000,
    "endTime": 1649235600
  },
  {
    "startTime": 1649257200,
    "endTime": 1649289600
  },
  {
    "startTime": 1649394000,
    "endTime": 1649404800
  }]

  const verifyLogs = (sortedShifts: TimeShift[], sortTime: "duration" | "asc" | "desc") => {
    console.log = jest.fn();
    timeSort(sortedShifts, sortTime);

    const logs = (console.log as jest.Mock).mock.calls.map((call) => call[0]);

    expect(logs).toContain(`Sorted by ${sortTime}:`);
    sortedShifts.forEach((shift, index) => {
      expect(logs).toContain(`Shift ${index + 1}:`);
      expect(logs).toContain(`Start time: ${unixFormat(shift.startTime)}`);
      expect(logs).toContain(`End time: ${unixFormat(shift.endTime)}`);
      expect(logs).toContain(`Duration: ${shift.endTime - shift.startTime} seconds`);
      expect(logs).toContain('---');
    });
  };

  test("sort by the duration from longest to shortest", () => {
    const sortedDuration = timeSort(timeArr, "duration");

    expect(sortedDuration[0].endTime - sortedDuration[0].startTime).toBeGreaterThanOrEqual(
      sortedDuration[1].endTime - sortedDuration[1].startTime
    );

    expect(sortedDuration[1].endTime - sortedDuration[1].startTime).toBeGreaterThanOrEqual(
      sortedDuration[2].endTime - sortedDuration[2].startTime
    )

    verifyLogs(timeArr, "duration")
  })

  test("sort by startTime in ascending order (asc)", () => {
    const sortedAsc = timeSort(timeArr, "asc");

    expect(sortedAsc[0].startTime).toBeLessThan(sortedAsc[1].startTime);
    expect(sortedAsc[1].startTime).toBeLessThan(sortedAsc[2].startTime);

    verifyLogs(timeArr, "asc")
  })

  test('sorts by startTime in descending order (desc)', () => {
    const sortedDesc = timeSort(timeArr, 'desc');

    expect(sortedDesc[0].startTime).toBeGreaterThanOrEqual(sortedDesc[1].startTime);
    expect(sortedDesc[1].startTime).toBeGreaterThanOrEqual(sortedDesc[2].startTime);

    verifyLogs(timeArr, 'desc');
  });
})