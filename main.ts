type Zbelard = {
  [key: string]: Zbelard;
};

export function zbelard(): Zbelard {
  return { hello_zbelard: {} };
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log('Zbelard', zbelard());
}
