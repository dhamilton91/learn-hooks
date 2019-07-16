const ConditionalHook = ({
  hook,
  params
}: {
  hook: Function;
  params: any[];
}) => {
  hook(...params);

  return null;
};

export default ConditionalHook;
