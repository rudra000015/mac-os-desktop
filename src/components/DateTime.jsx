import { useEffect, useState } from 'react';

function DateTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formatted = new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(now);

  return (
    <time className="menu-date-time" dateTime={now.toISOString()}>
      {formatted}
    </time>
  );
}

export default DateTime;
