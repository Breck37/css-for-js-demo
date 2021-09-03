export function getParam({ query, key }) {
  if (Array.isArray(query?.[key])) return query[key][0] || null;

  return query?.[key] || null;
}
