import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    window.addEventListener("online", () => {
      setIsOnline(true);
    });
  }, []);

  //   useEffect(() => {
  //     const onlineFunc = () => setIsOnline(true);
  //     const offlineFunc = () => setIsOnline(false);

  //     window.addEventListener("online", onlineFunc);
  //     window.addEventListener("offline", offlineFunc);

  //     return () => {
  //       window.removeEventListener("online", onlineFunc);
  //       window.removeEventListener("offline", offlineFunc);
  //     };
  //   }, []);

  return isOnline;
};
export default useOnline;
