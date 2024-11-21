export function capitalizeWords(string) {
  return string.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function capitalizeAllAttributes(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) =>
      [key, typeof value === 'string' ? capitalizeWords(value) : value]
    )
  );
}
