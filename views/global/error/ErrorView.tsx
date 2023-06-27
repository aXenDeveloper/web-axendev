interface Props {
  code: 404 | 500;
}

export const ErrorView = ({ code }: Props) => {
  return <div>Error {code}!</div>;
};
