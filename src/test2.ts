function asNumber(val: number | string): number {
  //   return val as number;
  return typeof val === "string" ? Number(val) : val;
}

const test1 = asNumber("5");
// const test = asNumber({ number: 5 });
console.log(test1);
