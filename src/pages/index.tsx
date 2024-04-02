import { useEffect, useState } from 'react';
import AlarmSetter from '@/components/AlarmSetter';

const Home = () => {
  const [alarmTime, setAlarmTime] = useState('');

  useEffect(() => {
    const handleMessage = (event: any) => {
      console.log('Received message: ', event.data);
    };

    window.addEventListener('message', handleMessage, false);

    return () => {
      window.removeEventListener('message', handleMessage, false);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 space-y-8 s">
      <AlarmSetter onSetAlarm={setAlarmTime} />
      <br />
      <br />
      {alarmTime && <div className="text-center">알람 시간: {alarmTime}</div>}
    </div>
  );
};

export default Home;
