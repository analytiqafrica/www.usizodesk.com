type DeviceInfo = {
  isMobile: boolean;
  isDesktop: boolean;
  screenSize: {
    width: number;
    height: number;
  };
};

export const getDeviceInfo = (): DeviceInfo => {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const isMobile = width <= 768;
    const isDesktop = width > 1024;

    return {
      isMobile,
      isDesktop,
      screenSize: { width, height },
    };
  }

  // If window is not defined (SSR)
  return {
    isMobile: false,
    isDesktop: true, // assume desktop by default for SSR
    screenSize: { width: 0, height: 0 },
  };
};
