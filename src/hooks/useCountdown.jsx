// import { useEffect, useState } from "react";
// const useCountdown = (targetDate, onExpire) => {
//   const [timeLeft, setTimeleft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
// };
// const [expired, setExpired] = useState(false);

// useEffect(() => {
//   const calculate = () => {
//     const difference = +new Date(targetDate) - +new Date();
//     if (difference > 0) {
//       setTimeleft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       });
//     } else {
//       setTimeleft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       setExpired((prev) => {
//         if (!prev) onExpire?.();
//         return true;
//       });
//     }
//   };
//   calculate();
//   const interval = setInterval(calculate, 1000);
//   return () => clearInterval(interval);
// }); [targetDate, onExpire];




// return { ...timeLeft, expired };

// export default useCountdown;
import { useEffect, useState } from "react";

const useCountdown = (targetDate, onExpire) => {
  const [timeLeft, setTimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeleft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeleft({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        setExpired((prev) => {
          if (!prev) onExpire?.();
          return true;
        });
      }
    };

    calculate();
    const interval = setInterval(calculate, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onExpire]);

  return { ...timeLeft, expired };
};

export default useCountdown;