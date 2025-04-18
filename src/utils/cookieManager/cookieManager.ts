export const CookieManager = {
  setCookie: (
    key: string,
    value: string,
    options: {
      httpOnly?: boolean;
      secure?: boolean;
      path?: string;
      maxAge?: number;
    } = {}
  ) => {
    if (typeof window !== "undefined") {
      const cookieOptions = [];
      if (options.httpOnly) cookieOptions.push("HttpOnly");
      if (options.secure) cookieOptions.push("Secure");
      if (options.path) cookieOptions.push(`Path=${options.path}`);
      if (options.maxAge) cookieOptions.push(`Max-Age=${options.maxAge}`);

      document.cookie = `${key}=${value}; ${cookieOptions.join("; ")}`;
    }
  },

  getCookie: (key: string): string | null => {
    if (typeof window !== "undefined") {
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>);
      return cookies[key] || null;
    }
    return null;
  },

  removeCookie: (key: string) => {
    if (typeof window !== "undefined") {
      document.cookie = `${key}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  },
};
