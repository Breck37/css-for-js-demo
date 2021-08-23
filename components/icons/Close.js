export function Close({ width = 48, height = 48, fill = "black" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 7.20857L16.7914 6L12 10.7914L7.20857 6L6 7.20857L10.7914 12L6 16.7914L7.20857 18L12 13.2086L16.7914 18L18 16.7914L13.2086 12L18 7.20857Z"
        fill={fill}
      />
    </svg>
  );
}