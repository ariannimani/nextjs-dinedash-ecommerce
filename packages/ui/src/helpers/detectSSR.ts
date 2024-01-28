export const detectSSR = (): { isServer: boolean } => {
  const canUseDOM = !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );

  return {
    isServer: !canUseDOM,
  };
};
