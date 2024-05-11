import { useLocation } from "react-router-dom";

/**
 * A custom hook that checks if the current URL matches a target URL.
 * @param {string} url - The target URL to match against
 * @returns {boolean} - True if the current URL matches the target URL, false otherwise
 */
function useRouteIsActive(url: string): boolean {
  const { pathname } = useLocation();
  console.log(pathname, url, pathname.includes(url));

  return pathname.includes(url);
}

export default useRouteIsActive;
