export function env(key: string): string {
  const value = process.env[key];

  if (value === undefined || value === "") {
    throw new Error(`Environment variable "${key}" is not defined`);
  }
  
  return String(value);
}
